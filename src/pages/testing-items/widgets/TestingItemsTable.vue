<script setup lang="ts">
import { PropType, computed } from 'vue'
import { defineVaDataTableColumns } from 'vuestic-ui'
import { useI18n } from 'vue-i18n'
import { TestingItem, TestingItemType } from '../types'
import { TestingItemPagination, TestingItemSorting } from '../../../data/pages/testing-items'
import { useVModel } from '@vueuse/core'

const { t } = useI18n()

const columns = computed(() =>
  defineVaDataTableColumns([
    { label: t('testingItems.table.code'), key: 'code', sortable: false },
    { label: t('testingItems.table.testItems'), key: 'item_name', sortable: false },
    { label: t('testingItems.table.type'), key: 'type', sortable: false },
    { label: t('testingItems.table.description'), key: 'description', sortable: false },
    { label: t('testingItems.table.actions'), key: 'actions', sortable: false },
  ]),
)

const props = defineProps({
  testingItems: {
    type: Array as PropType<TestingItem[]>,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  sortBy: {
    type: String as PropType<TestingItemSorting['sortBy']>,
    default: undefined,
  },
  sortingOrder: {
    type: String as PropType<TestingItemSorting['sortingOrder']>,
    default: undefined,
  },
  pagination: {
    type: Object as PropType<TestingItemPagination>,
    required: true,
  },
  searchQuery: {
    type: String,
    default: '',
  },
})

const emits = defineEmits<{
  edit: [testingItem: TestingItem]
  delete: [testingItem: TestingItem]
  'update:sortBy': [key: TestingItemSorting['sortBy']]
  'update:sortingOrder': [order: TestingItemSorting['sortingOrder']]
}>()

const sortByVModel = useVModel(props, 'sortBy', emits)
const sortingOrderVModel = useVModel(props, 'sortingOrder', emits)

// 类型信息映射
const getTypeInfo = (itemType: TestingItemType) => {
  const typeMap = {
    data_analysis: {
      label: t('testingItems.types.data_analysis'),
      color: 'primary',
    },
    average_analysis: {
      label: t('testingItems.types.average_analysis'),
      color: 'success',
    },
    subjective_analysis: {
      label: t('testingItems.types.subjective_analysis'),
      color: 'warning',
    },
  }
  return typeMap[itemType] || { label: itemType, color: 'secondary' }
} // 过滤后的测试项数据
const filteredTestingItems = computed(() => {
  if (!props.searchQuery) {
    return props.testingItems
  }

  const query = props.searchQuery.toLowerCase()
  return props.testingItems.filter(
    (item) =>
      item.item_code.toLowerCase().includes(query) ||
      item.item_name.toLowerCase().includes(query) ||
      (item.description && item.description.toLowerCase().includes(query)),
  )
})
</script>

<template>
  <VaDataTable
    v-model:sort-by="sortByVModel"
    v-model:sorting-order="sortingOrderVModel"
    :columns="columns"
    :items="filteredTestingItems"
    :loading="loading"
    sticky-header
    @row="() => {}"
  >
    <template #cell(code)="{ rowData }">
      <div class="flex items-center gap-2">
        <VaIcon name="science" size="small" />
        <span class="font-medium">{{ rowData.item_code }}</span>
      </div>
    </template>

    <template #cell(item_name)="{ rowData }">
      <span>{{ rowData.item_name }}</span>
    </template>

    <template #cell(type)="{ rowData }">
      <VaBadge :text="getTypeInfo(rowData.item_type).label" :color="getTypeInfo(rowData.item_type).color" />
    </template>

    <template #cell(description)="{ rowData }">
      <span>{{ rowData.description || '-' }}</span>
    </template>

    <template #cell(actions)="{ rowData }">
      <div class="flex gap-2">
        <VaButton
          preset="secondary"
          size="small"
          icon="edit"
          aria-label="Edit testing item"
          @click="emits('edit', rowData)"
        />
        <VaButton
          preset="secondary"
          size="small"
          icon="delete"
          color="danger"
          aria-label="Delete testing item"
          @click="emits('delete', rowData)"
        />
      </div>
    </template>
  </VaDataTable>
</template>
