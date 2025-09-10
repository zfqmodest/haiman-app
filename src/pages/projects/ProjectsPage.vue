<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useMaterials } from './composables/useMaterials'
import { useProducts } from '../../composables/useProducts'
import MaterialsTable from './widgets/MaterialsTable.vue'
import MaterialsCards from './widgets/MaterialsCards.vue'
import EditMaterialForm from './widgets/EditMaterialForm.vue'
import EditProductForm from '../../components/forms/EditProductForm/EditProductForm.vue'
import { Material, EmptyMaterial, Product, EmptyProduct } from './types'
import { useModal, useToast } from 'vuestic-ui'

const doShowAsCards = useLocalStorage('materials-view', true) // 默认显示卡片视图
const searchQuery = ref('') // 搜索查询状态

const { t } = useI18n()

const materialsComposable = useMaterials()
const { materials, update, add, isLoading, remove, pagination, sorting, fetch } = materialsComposable

const productsComposable = useProducts()
const { add: addProduct, update: updateProduct, remove: removeProduct, load: loadProducts } = productsComposable

// 初始化数据
onMounted(async () => {
  // 同时加载物料和产品数据
  await Promise.all([
    fetch(), // 加载物料数据
    loadProducts(), // 加载所有产品数据
  ])
})

const materialToEdit = ref<Material | null>(null)
const doShowMaterialFormModal = ref(false)

// 产品相关状态
const productToEdit = ref<Product | null>(null)
const doShowProductFormModal = ref(false)
const currentMaterial = ref<Material | null>(null) // 当前操作的物料

const editMaterial = (material: Material) => {
  materialToEdit.value = material
  doShowMaterialFormModal.value = true
}

const createNewMaterial = () => {
  materialToEdit.value = null
  doShowMaterialFormModal.value = true
}

// 产品相关操作
const addProductToMaterial = (material: Material) => {
  currentMaterial.value = material
  productToEdit.value = null
  doShowProductFormModal.value = true
}

const editProduct = (product: Product) => {
  productToEdit.value = product
  currentMaterial.value = materials.value.find((m) => m.id === product.material_id) || null
  doShowProductFormModal.value = true
}

const { init: notify } = useToast()

const onMaterialSaved = async (material: Material | EmptyMaterial) => {
  try {
    if ('id' in material) {
      // 编辑模式：material包含id
      await update(material as Material)
      notify({
        message: t('materials.messages.updated'),
        color: 'success',
      })
    } else {
      // 添加模式：material不包含id
      await add(material as EmptyMaterial)
      notify({
        message: t('materials.messages.created'),
        color: 'success',
      })
    }
    doShowMaterialFormModal.value = false
  } catch (error) {
    console.error('❌ Error saving material:', error)
    notify({
      message: 'Error saving material: ' + (error as Error).message,
      color: 'danger',
    })
  }
}

const { confirm } = useModal()

const onMaterialDeleted = async (material: Material) => {
  const response = await confirm({
    title: t('materials.confirm.deleteTitle'),
    message: t('materials.confirm.deleteMessage', { name: material.material_name }),
    okText: t('materials.confirm.delete'),
    size: 'small',
    maxWidth: '380px',
  })

  if (!response) {
    return
  }

  await remove(material)
  notify({
    message: t('materials.messages.deleted'),
    color: 'success',
  })
}

// 产品相关处理函数
const onProductSaved = async (product: Omit<EmptyProduct, 'test_items'>) => {
  try {
    if (!currentMaterial.value) {
      throw new Error('No material selected')
    }

    if (productToEdit.value) {
      // 编辑模式
      const updatedProduct: Product = {
        ...productToEdit.value,
        ...product,
        // test_items会在updateProduct中自动设置为与物料一致
      }
      await updateProduct(updatedProduct)
      notify({
        message: '产品更新成功',
        color: 'success',
      })
    } else {
      // 添加模式，test_items会在addProduct中自动从物料继承
      const productToAdd: EmptyProduct = {
        ...product,
        test_items: [], // 临时设置，会在addProduct中被物料的test_items覆盖
      }
      await addProduct(productToAdd, currentMaterial.value.id)
      notify({
        message: '产品添加成功',
        color: 'success',
      })
    }

    // 重新获取物料数据以更新产品数量
    await fetch()

    doShowProductFormModal.value = false
  } catch (error) {
    console.error('❌ Error saving product:', error)
    notify({
      message: 'Error saving product: ' + (error as Error).message,
      color: 'danger',
    })
  }
}

const onProductDeleted = async (product: Product) => {
  const response = await confirm({
    title: t('products.confirm.deleteTitle'),
    message: t('products.confirm.deleteMessage', { name: product.product_name }),
    okText: t('products.confirm.delete'),
    size: 'small',
    maxWidth: '380px',
  })

  if (!response) {
    return
  }

  try {
    await removeProduct(product)

    // 重新获取物料数据以更新产品数量
    await fetch()

    notify({
      message: t('products.messages.deleted'),
      color: 'success',
    })
  } catch (error) {
    console.error('❌ Error deleting product:', error)
    notify({
      message: 'Error deleting product: ' + (error as Error).message,
      color: 'danger',
    })
  }
}

const editFormRef = ref()

const beforeEditFormModalClose = async (hide: () => unknown) => {
  if (editFormRef.value.isFormHasUnsavedChanges) {
    const agreed = await confirm({
      maxWidth: '380px',
      message: t('materials.confirm.unsavedChanges'),
      size: 'small',
    })
    if (agreed) {
      hide()
    }
  } else {
    hide()
  }
}
</script>

<template>
  <h1 class="page-title">{{ t('menu.projects') }}</h1>

  <VaCard>
    <VaCardContent>
      <div class="flex flex-col md:flex-row gap-2 mb-2 justify-between items-start md:items-center">
        <div class="flex flex-col sm:flex-row gap-2 justify-start items-start sm:items-center">
          <VaButtonToggle
            v-model="doShowAsCards"
            color="background-element"
            border-color="background-element"
            class="view-mode-toggle"
            :options="[
              { label: t('materials.viewMode.cards'), value: true },
              { label: t('materials.viewMode.table'), value: false },
            ]"
          />
          <VaInput
            v-model="searchQuery"
            :placeholder="t('materials.search.placeholder')"
            clearable
            class="search-input"
          >
            <template #prependInner>
              <VaIcon name="search" color="secondary" size="small" />
            </template>
          </VaInput>
        </div>
        <VaButton icon="add" @click="createNewMaterial">{{ t('materials.form.addTitle') }}</VaButton>
      </div>

      <MaterialsCards
        v-if="doShowAsCards"
        :materials="materials"
        :loading="isLoading"
        @edit="editMaterial"
        @delete="onMaterialDeleted"
        @addProduct="addProductToMaterial"
        @editProduct="editProduct"
        @deleteProduct="onProductDeleted"
      />
      <MaterialsTable
        v-else
        v-model:sort-by="sorting.sortBy"
        v-model:sorting-order="sorting.sortingOrder"
        v-model:pagination="pagination"
        :materials="materials"
        :loading="isLoading"
        :search-query="searchQuery"
        @edit="editMaterial"
        @delete="onMaterialDeleted"
        @addProduct="addProductToMaterial"
        @editProduct="editProduct"
        @deleteProduct="onProductDeleted"
      />
    </VaCardContent>

    <VaModal
      v-slot="{ cancel, ok }"
      v-model="doShowMaterialFormModal"
      size="small"
      mobile-fullscreen
      close-button
      stateful
      hide-default-actions
      :before-cancel="beforeEditFormModalClose"
    >
      <h1 v-if="materialToEdit === null" class="va-h5 mb-4">{{ t('materials.form.addTitle') }}</h1>
      <h1 v-else class="va-h5 mb-4">{{ t('materials.form.editTitle') }}</h1>
      <EditMaterialForm
        ref="editFormRef"
        :material="materialToEdit"
        :save-button-label="materialToEdit === null ? t('materials.form.addTitle') : t('users.save')"
        @close="cancel"
        @save="
          (material) => {
            onMaterialSaved(material)
            ok()
          }
        "
      />
    </VaModal>

    <!-- 产品表单模态框 -->
    <VaModal
      v-slot="{ cancel, ok }"
      v-model="doShowProductFormModal"
      size="small"
      mobile-fullscreen
      close-button
      stateful
      hide-default-actions
    >
      <h1 v-if="productToEdit === null" class="va-h5 mb-4">
        {{ t('products.form.addToMaterial', { materialName: currentMaterial?.material_name }) }}
      </h1>
      <h1 v-else class="va-h5 mb-4">{{ t('products.form.editTitle') }}</h1>
      <EditProductForm
        :editing-product="productToEdit"
        @close="cancel"
        @save="
          (product) => {
            onProductSaved(product)
            ok()
          }
        "
      />
    </VaModal>
  </VaCard>
</template>

<style scoped>
.view-mode-toggle {
  min-width: 240px; /* 增加最小宽度以适应英文 */
  flex-shrink: 0; /* 防止在小屏幕上被压缩 */
}

.view-mode-toggle :deep(.va-button-toggle__option) {
  min-width: 120px; /* 增加单个按钮的最小宽度 */
  white-space: nowrap;
  padding: 0 16px; /* 增加内边距 */
  font-size: 0.875rem; /* 稍微调整字体大小 */
}

.search-input {
  min-width: 250px; /* 确保搜索框有足够宽度 */
  max-width: 300px;
}

/* 响应式设计 */
@media (min-width: 768px) {
  .view-mode-toggle {
    min-width: 280px; /* 在较大屏幕上提供更多宽度 */
  }

  .view-mode-toggle :deep(.va-button-toggle__option) {
    min-width: 140px;
    padding: 0 20px;
  }

  .search-input {
    min-width: 300px;
    max-width: 350px;
  }
}

/* 移动端优化 */
@media (max-width: 767px) {
  .view-mode-toggle {
    width: 100%;
    max-width: 100%;
  }

  .search-input {
    width: 100%;
    min-width: auto;
    max-width: none;
  }
}
</style>
