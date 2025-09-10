<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { type Material, type Product } from '../types'
import { useI18n } from 'vue-i18n'
import { useProducts } from '../../../composables/useProducts'

const { t } = useI18n()
const { loadByMaterialId, getProductStatusText, getProductsByMaterial } = useProducts()

defineProps({
  materials: {
    type: Array as PropType<Material[]>,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})

defineEmits<{
  (event: 'edit', material: Material): void
  (event: 'delete', material: Material): void
  (event: 'addProduct', material: Material): void
  (event: 'editProduct', product: Product): void
  (event: 'deleteProduct', product: Product): void
}>()

// 展开/收起状态
const expandedMaterials = ref<Set<string>>(new Set())
// 产品加载状态
const productLoadingStates = ref<Map<string, boolean>>(new Map())

// 切换展开/收起状态
const toggleExpanded = async (materialId: string) => {
  if (expandedMaterials.value.has(materialId)) {
    expandedMaterials.value.delete(materialId)
  } else {
    expandedMaterials.value.add(materialId)

    // 如果还没加载过产品，则加载
    if (!productLoadingStates.value.has(materialId)) {
      await loadProductsForMaterial(materialId)
    }
  }
}

// 加载指定物料的产品
const loadProductsForMaterial = async (materialId: string) => {
  productLoadingStates.value.set(materialId, true)
  try {
    await loadByMaterialId(materialId)
    productLoadingStates.value.set(materialId, false)
  } catch (error) {
    productLoadingStates.value.set(materialId, false)
    console.error('加载产品失败:', error)
  }
}

// 判断物料是否展开
const isMaterialExpanded = (materialId: string) => {
  return expandedMaterials.value.has(materialId)
}

// 获取物料的产品列表
const getMaterialProducts = (materialId: string): Product[] => {
  return getProductsByMaterial(materialId)
}

// 判断产品是否正在加载
const isProductLoading = (materialId: string): boolean => {
  return productLoadingStates.value.get(materialId) || false
}
</script>

<template>
  <div class="min-h-[4rem]">
    <!-- Loading state -->
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <VaCard v-for="i in 6" :key="i" outlined>
        <VaCardContent class="flex flex-col h-full p-4">
          <VaSkeleton height="20px" class="mb-2" />
          <VaSkeleton height="32px" class="mb-4" />
          <VaSkeleton height="20px" class="mb-4" />
          <VaSkeleton height="40px" class="mb-4" />
          <div class="flex justify-between mt-auto">
            <VaSkeleton height="32px" width="32px" />
            <VaSkeleton height="32px" width="32px" />
          </div>
        </VaCardContent>
      </VaCard>
    </div>

    <!-- Materials data -->
    <div v-else-if="materials.length > 0" class="space-y-4">
      <VaCard
        v-for="material in materials"
        :key="material.id"
        :style="{ '--va-card-outlined-border': '1px solid var(--va-background-element)' }"
        outlined
      >
        <VaCardContent class="flex flex-col">
          <!-- 物料信息 -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4 flex-1">
              <!-- 展开/收起按钮 -->
              <VaButton
                preset="secondary"
                :icon="isMaterialExpanded(material.id) ? 'mso-keyboard_arrow_down' : 'mso-keyboard_arrow_right'"
                size="small"
                @click="toggleExpanded(material.id)"
              />

              <!-- 物料基本信息 -->
              <div class="flex-1">
                <div class="flex items-center gap-4">
                  <div class="text-primary font-semibold text-lg">{{ material.material_code }}</div>
                  <h4 class="va-h5">{{ material.material_name }}</h4>
                </div>
                <div class="text-[var(--va-secondary)] text-sm mt-1">
                  {{ new Date(material.created_at).toLocaleDateString() }}
                </div>
              </div>

              <!-- 产品数量 -->
              <div class="flex items-center gap-2">
                <span class="text-[var(--va-secondary)]">{{ t('materials.table.productCount') }}:</span>
                <VaBadge :text="material.product_count.toString()" color="info" />
              </div>
            </div>
          </div>

          <!-- 测试项 -->
          <div class="flex flex-col gap-2 mb-4">
            <span class="text-[var(--va-secondary)] text-sm">{{ t('materials.table.testItems') }}:</span>
            <div class="flex flex-wrap gap-1">
              <VaBadge v-for="item in material.test_items" :key="item" :text="item" color="success" size="small" />
            </div>
          </div>

          <!-- 物料操作按钮 -->
          <div class="flex justify-between items-center mb-4">
            <!-- 添加产品按钮 -->
            <VaButton preset="primary" icon="mso-add" @click="$emit('addProduct', material)">
              {{ t('products.form.addTitle') }}
            </VaButton>

            <!-- 物料管理按钮 -->
            <div class="flex gap-2">
              <VaButton
                preset="secondary"
                icon="mso-edit"
                color="primary"
                :aria-label="t('materials.table.editMaterial')"
                @click="$emit('edit', material)"
              >
                {{ t('materials.table.editMaterial') }}
              </VaButton>
              <VaButton
                preset="secondary"
                icon="mso-delete"
                color="danger"
                :aria-label="t('materials.table.deleteMaterial')"
                @click="$emit('delete', material)"
              >
                {{ t('materials.table.deleteMaterial') }}
              </VaButton>
            </div>
          </div>

          <!-- 产品列表（展开时显示） -->
          <div v-if="isMaterialExpanded(material.id)" class="mt-4 border-t pt-4">
            <!-- 产品加载状态 -->
            <div v-if="isProductLoading(material.id)" class="space-y-2">
              <VaSkeleton v-for="i in 3" :key="i" height="60px" />
            </div>

            <!-- 产品列表 -->
            <div v-else-if="getMaterialProducts(material.id).length > 0" class="space-y-3">
              <VaCard
                v-for="product in getMaterialProducts(material.id)"
                :key="product.id"
                class="bg-[var(--va-background-secondary)]"
                outlined
              >
                <VaCardContent class="p-4">
                  <div class="flex items-center justify-between">
                    <div class="flex-1">
                      <div class="flex items-center gap-4 mb-2">
                        <span class="font-medium">{{ product.product_serial }}</span>
                        <span class="text-[var(--va-secondary)]">{{ product.product_name }}</span>
                      </div>
                      <div class="flex items-center gap-4 text-sm text-[var(--va-secondary)]">
                        <span>{{ new Date(product.created_at).toLocaleDateString() }}</span>
                        <VaBadge
                          :text="getProductStatusText(product.status)"
                          :color="
                            product.status === 'completed'
                              ? 'success'
                              : product.status === 'in_progress'
                                ? 'warning'
                                : 'info'
                          "
                          size="small"
                        />
                      </div>
                      <!-- 产品测试项 -->
                      <div v-if="product.test_items && product.test_items.length > 0" class="mt-2">
                        <div class="text-xs text-[var(--va-secondary)] mb-1">{{ t('materials.table.testItems') }}:</div>
                        <div class="flex flex-wrap gap-1">
                          <VaBadge
                            v-for="item in product.test_items"
                            :key="item"
                            :text="item"
                            color="success"
                            size="small"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- 产品操作按钮 -->
                    <div class="flex gap-1">
                      <VaButton
                        preset="secondary"
                        icon="mso-edit"
                        color="primary"
                        size="small"
                        @click="$emit('editProduct', product)"
                      />
                      <VaButton
                        preset="secondary"
                        icon="mso-delete"
                        color="danger"
                        size="small"
                        @click="$emit('deleteProduct', product)"
                      />
                    </div>
                  </div>
                </VaCardContent>
              </VaCard>
            </div>

            <!-- 无产品状态 -->
            <div v-else class="p-4 text-center text-[var(--va-secondary)]">该物料下暂无产品</div>
          </div>
        </VaCardContent>
      </VaCard>
    </div>

    <!-- No data state -->
    <div v-else class="p-4 flex justify-center items-center text-[var(--va-secondary)]">
      {{ t('materials.noData') }}
    </div>
  </div>
</template>
