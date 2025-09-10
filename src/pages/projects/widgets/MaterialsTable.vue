<script setup lang="ts">
import { PropType, computed, ref } from 'vue'
import { defineVaDataTableColumns } from 'vuestic-ui'
import { useI18n } from 'vue-i18n'
import { Material, Product } from '../types'
import { Pagination, Sorting } from '../../../data/pages/materials'
import { useVModel } from '@vueuse/core'
import { useProducts } from '../../../composables/useProducts'

const { t } = useI18n()
const { getProductsByMaterial } = useProducts()

// 定义表格行数据类型
interface TableRow {
  id: string
  type: 'material' | 'product'
  level: number
  material?: Material
  product?: Product
  parentId?: string
}

const columns = computed(() =>
  defineVaDataTableColumns([
    { label: t('materials.table.name'), key: 'name', sortable: false },
    { label: t('materials.table.description'), key: 'description', sortable: false },
    { label: t('materials.table.type'), key: 'type', sortable: false },
    { label: t('materials.table.status'), key: 'status', sortable: false },
    { label: t('materials.table.testItems'), key: 'test_items', sortable: false },
    { label: t('materials.table.actions'), key: 'actions', sortable: false },
  ]),
)

const props = defineProps({
  materials: {
    type: Array as PropType<Material[]>,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  sortBy: {
    type: String as PropType<Sorting['sortBy']>,
    default: undefined,
  },
  sortingOrder: {
    type: String as PropType<Sorting['sortingOrder']>,
    default: undefined,
  },
  pagination: {
    type: Object as PropType<Pagination>,
    required: true,
  },
  searchQuery: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  (event: 'edit', material: Material): void
  (event: 'delete', material: Material): void
  (event: 'addProduct', material: Material): void
  (event: 'editProduct', product: Product, material: Material): void
  (event: 'deleteProduct', product: Product, material: Material): void
}>()

const sortByVModel = useVModel(props, 'sortBy', emit)
const sortingOrderVModel = useVModel(props, 'sortingOrder', emit)

// 管理展开状态
const expandedMaterials = ref<Set<string>>(new Set())

// 过滤数据
const filteredMaterials = computed(() => {
  if (!props.searchQuery.trim()) {
    return props.materials
  }

  const query = props.searchQuery.toLowerCase().trim()
  return props.materials.filter((material) => {
    // 搜索物料
    const materialMatch =
      material.material_code.toLowerCase().includes(query) ||
      material.material_name.toLowerCase().includes(query) ||
      material.test_items.some((item) => item.toLowerCase().includes(query))

    // 搜索该物料下的产品
    const materialProducts = getProductsByMaterial(material.id)
    const productMatch = materialProducts.some(
      (product) =>
        product.product_serial.toLowerCase().includes(query) ||
        product.product_name.toLowerCase().includes(query) ||
        product.test_items.some((item) => item.toLowerCase().includes(query)),
    )

    return materialMatch || productMatch
  })
})

// 构建表格数据，展开物料显示产品
const tableData = computed(() => {
  const rows: TableRow[] = []

  filteredMaterials.value.forEach((material) => {
    // 添加物料行
    rows.push({
      id: material.id,
      type: 'material',
      level: 0,
      material,
    })

    const materialProducts = getProductsByMaterial(material.id)
    const hasSearchQuery = props.searchQuery.trim()

    // 如果有搜索查询，过滤产品
    const productsToShow = hasSearchQuery
      ? materialProducts.filter((product) => {
          const query = props.searchQuery.toLowerCase()
          return (
            product.product_serial.toLowerCase().includes(query) ||
            product.product_name.toLowerCase().includes(query) ||
            product.test_items.some((item) => item.toLowerCase().includes(query))
          )
        })
      : materialProducts

    // 如果物料已展开，或者有搜索查询且有匹配的产品，显示产品
    const shouldShowProducts = expandedMaterials.value.has(material.id) || (hasSearchQuery && productsToShow.length > 0)

    if (shouldShowProducts) {
      // 如果有搜索查询且有匹配产品，自动展开物料
      if (hasSearchQuery && productsToShow.length > 0) {
        expandedMaterials.value.add(material.id)
      }

      productsToShow.forEach((product) => {
        rows.push({
          id: `product-${product.id}`,
          type: 'product',
          level: 1,
          product,
          parentId: material.id,
        })
      })
    }
  })

  return rows
})

// 切换物料展开状态
const toggleMaterial = (materialId: string) => {
  if (expandedMaterials.value.has(materialId)) {
    expandedMaterials.value.delete(materialId)
  } else {
    expandedMaterials.value.add(materialId)
  }
}

// 查找产品所属的物料
const findProductMaterial = (productId: string): Material | undefined => {
  for (const material of props.materials) {
    const materialProducts = getProductsByMaterial(material.id)
    if (materialProducts.some((p) => p.id === productId)) {
      return material
    }
  }
  return undefined
}

// 获取产品状态文本和颜色
const getProductStatusInfo = (status: Product['status']) => {
  const statusMap = {
    not_started: { text: '未开始', color: 'secondary' },
    in_progress: { text: '进行中', color: 'warning' },
    completed: { text: '已完成', color: 'success' },
    failed: { text: '失败', color: 'danger' },
  }
  return statusMap[status] || { text: status, color: 'secondary' }
}

const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.perPage))
</script>

<template>
  <div>
    <VaDataTable
      v-model:sort-by="sortByVModel"
      v-model:sorting-order="sortingOrderVModel"
      :items="tableData"
      :columns="columns"
      :loading="loading"
      class="materials-tree-table"
    >
      <!-- 名称/编号列 -->
      <template #cell(name)="{ rowData }">
        <div :class="['flex items-center', rowData.level > 0 ? 'pl-8' : '']">
          <!-- 物料行 -->
          <template v-if="rowData.type === 'material' && rowData.material">
            <VaButton
              :icon="expandedMaterials.has(rowData.material.id) ? 'expand_more' : 'chevron_right'"
              preset="plain"
              size="small"
              class="mr-2"
              @click="toggleMaterial(rowData.material.id)"
            />
            <VaIcon name="inventory" class="mr-2 text-primary" />
            <span class="font-semibold text-primary">{{ rowData.material.material_code }}</span>
          </template>

          <!-- 产品行 -->
          <template v-else-if="rowData.type === 'product' && rowData.product">
            <VaIcon name="widgets" class="mr-2 text-secondary" />
            <span class="text-secondary">{{ rowData.product.product_serial }}</span>
          </template>
        </div>
      </template>

      <!-- 描述列 -->
      <template #cell(description)="{ rowData }">
        <div :class="['ellipsis max-w-[200px]', rowData.level > 0 ? 'text-gray-600' : '']">
          <template v-if="rowData.type === 'material' && rowData.material">
            {{ rowData.material.material_name }}
          </template>
          <template v-else-if="rowData.type === 'product' && rowData.product">
            {{ rowData.product.product_name }}
          </template>
        </div>
      </template>

      <!-- 类型列 -->
      <template #cell(type)="{ rowData }">
        <VaBadge v-if="rowData.type === 'material'" :text="t('materials.type.material')" color="primary" size="small" />
        <VaBadge v-else :text="t('materials.type.product')" color="secondary" size="small" />
      </template>

      <!-- 数量/状态列 -->
      <template #cell(status)="{ rowData }">
        <template v-if="rowData.type === 'material' && rowData.material">
          <VaBadge
            :text="t('materials.status.productCount', { count: rowData.material.product_count })"
            color="info"
            size="small"
          />
        </template>
        <template v-else-if="rowData.type === 'product' && rowData.product">
          <VaBadge
            :text="getProductStatusInfo(rowData.product.status).text"
            :color="getProductStatusInfo(rowData.product.status).color"
            size="small"
          />
        </template>
      </template>

      <!-- 测试项列 -->
      <template #cell(test_items)="{ rowData }">
        <template v-if="rowData.type === 'material' && rowData.material">
          <div class="flex flex-wrap gap-1">
            <VaBadge
              v-for="item in rowData.material.test_items"
              :key="item"
              :text="item"
              color="success"
              size="small"
            />
          </div>
        </template>
        <template v-else-if="rowData.type === 'product' && rowData.product">
          <div class="flex flex-wrap gap-1">
            <VaBadge v-for="item in rowData.product.test_items" :key="item" :text="item" color="success" size="small" />
          </div>
        </template>
      </template>

      <!-- 操作列 -->
      <template #cell(actions)="{ rowData }">
        <!-- 物料操作 -->
        <template v-if="rowData.type === 'material' && rowData.material">
          <div class="flex gap-2 items-center">
            <VaButton
              preset="primary"
              size="small"
              color="success"
              icon="add"
              :aria-label="'添加产品'"
              @click="$emit('addProduct', rowData.material)"
            >
              添加产品
            </VaButton>
            <VaButton
              preset="primary"
              size="small"
              color="primary"
              icon="edit"
              :aria-label="'编辑物料'"
              @click="$emit('edit', rowData.material)"
            >
              编辑
            </VaButton>
            <VaButton
              preset="primary"
              size="small"
              icon="delete"
              color="danger"
              :aria-label="'删除物料'"
              @click="$emit('delete', rowData.material)"
            >
              删除
            </VaButton>
          </div>
        </template>

        <!-- 产品操作 -->
        <template v-else-if="rowData.type === 'product' && rowData.product">
          <div class="flex gap-2 items-center">
            <VaButton
              preset="primary"
              size="small"
              color="primary"
              icon="edit"
              :aria-label="'编辑产品'"
              @click="
                () => {
                  const material = findProductMaterial(rowData.product!.id)
                  if (material) $emit('editProduct', rowData.product!, material)
                }
              "
            >
              编辑
            </VaButton>
            <VaButton
              preset="primary"
              size="small"
              icon="delete"
              color="danger"
              :aria-label="'删除产品'"
              @click="
                () => {
                  const material = findProductMaterial(rowData.product!.id)
                  if (material) $emit('deleteProduct', rowData.product!, material)
                }
              "
            >
              删除
            </VaButton>
          </div>
        </template>
      </template>
    </VaDataTable>

    <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
      <div>
        <b>{{ $props.pagination.total }} {{ t('materials.table.results') || '条结果' }}.</b>
        {{ t('materials.table.resultsPerPage') || '每页显示' }}
        <VaSelect v-model="$props.pagination.perPage" class="!w-20" :options="[10, 50, 100]" />
      </div>

      <div v-if="totalPages > 1" class="flex">
        <VaButton
          preset="secondary"
          icon="va-arrow-left"
          :aria-label="t('materials.table.previousPage') || '上一页'"
          :disabled="$props.pagination.page === 1"
          @click="$props.pagination.page--"
        />
        <VaButton
          class="mr-2"
          preset="secondary"
          icon="va-arrow-right"
          :aria-label="t('materials.table.nextPage') || '下一页'"
          :disabled="$props.pagination.page === totalPages"
          @click="$props.pagination.page++"
        />
        <VaPagination
          v-model="$props.pagination.page"
          buttons-preset="secondary"
          :pages="totalPages"
          :visible-pages="5"
          :boundary-links="false"
          :direction-links="false"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.materials-tree-table {
  :deep(.va-data-table__table-tr) {
    border-bottom: 1px solid var(--va-background-border);

    &:hover {
      background-color: var(--va-background-element);
    }
  }

  :deep(.va-data-table__table-td) {
    vertical-align: middle;
  }
}
</style>
