import { ref, unref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useTestingItemsStore } from '../../../stores/testing-items'
import type { TestingItemPagination, TestingItemSorting, TestingItemFilters } from '../../../data/pages/testing-items'
import { TestingItem, EmptyTestingItem } from '../types'

const makePaginationRef = () => ref<TestingItemPagination>({ page: 1, perPage: 10, total: 0 })
const makeSortingRef = () => ref<TestingItemSorting>({ sortBy: 'item_code', sortingOrder: 'asc' })
const makeFiltersRef = () => ref<Partial<TestingItemFilters>>({ search: '' })

export const useTestingItems = (options?: {
  sorting?: Ref<TestingItemSorting>
  pagination?: Ref<TestingItemPagination>
  filters?: Ref<Partial<TestingItemFilters>>
}) => {
  const isLoading = ref(false)
  const testingItemsStore = useTestingItemsStore()

  const { sorting = makeSortingRef(), pagination = makePaginationRef(), filters = makeFiltersRef() } = options ?? {}

  const fetch = async () => {
    isLoading.value = true
    console.log('🔄 Starting fetch, setting isLoading = true')
    try {
      console.log('📞 Calling testingItemsStore.getAll...')
      await testingItemsStore.getAll({
        pagination: unref(pagination),
        sorting: unref(sorting),
        filters: unref(filters),
      })
      pagination.value = testingItemsStore.pagination
      console.log('✅ Data loaded successfully, items count:', testingItemsStore.items.length)
    } catch (error) {
      console.error('❌ Error fetching testing items:', error)
    } finally {
      console.log('🏁 Setting isLoading = false')
      isLoading.value = false
      console.log(
        '📊 Final state - isLoading:',
        isLoading.value,
        'testing items count:',
        testingItemsStore.items.length,
      )
    }
  }

  const testingItems = computed(() => testingItemsStore.items)

  // 只在组件挂载时加载一次数据
  onMounted(() => {
    console.log('🚀 Component mounted, calling fetch...')
    fetch()
  })

  const add = async (testingItem: EmptyTestingItem) => {
    isLoading.value = true
    try {
      await testingItemsStore.add(testingItem)
      // 添加新项目后，跳转到第一页来显示新项目
      pagination.value.page = 1
      await fetch()
    } finally {
      isLoading.value = false
    }
  }

  const update = async (testingItem: TestingItem) => {
    isLoading.value = true
    try {
      await testingItemsStore.update(testingItem)
      await fetch() // 更新后手动刷新
    } finally {
      isLoading.value = false
    }
  }

  const remove = async (testingItem: TestingItem) => {
    isLoading.value = true
    try {
      await testingItemsStore.remove(testingItem)
      await fetch() // 删除后手动刷新
    } finally {
      isLoading.value = false
    }
  }

  return {
    testingItems,
    isLoading,
    pagination,
    sorting,
    filters,
    add,
    update,
    remove,
    fetch,
  }
}
