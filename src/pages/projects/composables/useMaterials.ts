import { ref, unref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useMaterialsStore } from '../../../stores/materials'
import type { Pagination, Sorting, Filters } from '../../../data/pages/materials'
import { Material, EmptyMaterial } from '../types'

// 物料专用的排序类型
export type MaterialSorting = {
  sortBy: 'material_code' | 'material_name' | 'created_at' | 'product_count'
  sortingOrder: 'asc' | 'desc' | null
}

const makePaginationRef = () => ref<Pagination>({ page: 1, perPage: 10, total: 0 })
const makeSortingRef = () => ref<Sorting>({ sortBy: 'material_code', sortingOrder: 'asc' })
const makeFiltersRef = () => ref<Partial<Filters>>({ search: '' })

export const useMaterials = (options?: {
  sorting?: Ref<Sorting>
  pagination?: Ref<Pagination>
  filters?: Ref<Partial<Filters>>
}) => {
  const isLoading = ref(false)
  const materialsStore = useMaterialsStore()

  const { sorting = makeSortingRef(), pagination = makePaginationRef(), filters = makeFiltersRef() } = options ?? {}

  const fetch = async () => {
    isLoading.value = true
    console.log('🔄 Starting fetch, setting isLoading = true')
    try {
      console.log('📞 Calling materialsStore.getAll...')
      await materialsStore.getAll({
        pagination: unref(pagination),
        sorting: unref(sorting),
        filters: unref(filters),
      })
      pagination.value = materialsStore.pagination
      console.log('✅ Data loaded successfully, items count:', materialsStore.items.length)
    } catch (error) {
      console.error('❌ Error fetching materials:', error)
    } finally {
      console.log('🏁 Setting isLoading = false')
      isLoading.value = false
      console.log('📊 Final state - isLoading:', isLoading.value, 'materials count:', materialsStore.items.length)
    }
  }

  const materials = computed(() => materialsStore.items)

  // 只在组件挂载时加载一次数据
  onMounted(() => {
    console.log('� Component mounted, calling fetch...')
    fetch()
  })

  const add = async (material: EmptyMaterial) => {
    isLoading.value = true
    try {
      await materialsStore.add(material)
      await fetch() // 添加后手动刷新
    } finally {
      isLoading.value = false
    }
  }

  const update = async (material: Material) => {
    isLoading.value = true
    try {
      await materialsStore.update(material)
      await fetch() // 更新后手动刷新
    } finally {
      isLoading.value = false
    }
  }

  const remove = async (material: Material) => {
    isLoading.value = true
    try {
      await materialsStore.remove(material)
      await fetch() // 删除后手动刷新
    } finally {
      isLoading.value = false
    }
  }

  return {
    materials,
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
