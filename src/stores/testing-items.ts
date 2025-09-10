import { defineStore } from 'pinia'
import { TestingItem, UUID } from '../pages/testing-items/types'
import type { TestingItemPagination, TestingItemSorting, TestingItemFilters } from '../data/pages/testing-items'

// 持久化数据的键
const STORAGE_KEY = 'testing-items-data'

// 获取初始模拟数据
const getInitialMockData = (): TestingItem[] => [
  {
    id: '550e8400-e29b-41d4-a716-446655440001' as UUID,
    item_code: 'TI001',
    item_name: '功能测试项',
    item_type: 'data_analysis',
    description: '验证系统功能是否正常运行',
    created_at: '2024-01-15T10:30:00Z',
  },
  {
    id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6' as UUID,
    item_code: 'TI002',
    item_name: '性能评估项',
    item_type: 'average_analysis',
    description: '评估系统性能指标',
    created_at: '2024-01-02T10:30:00Z',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003' as UUID,
    item_code: 'TI003',
    item_name: '用户体验评分',
    item_type: 'subjective_analysis',
    description: '主观评价用户体验感受',
    created_at: '2024-02-01T09:45:00Z',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004' as UUID,
    item_code: 'TI004',
    item_name: '数据准确性验证',
    item_type: 'data_analysis',
    description: '验证数据处理的准确性',
    created_at: '2024-02-10T16:20:00Z',
  },
]

// 从localStorage获取数据，如果不存在则使用初始模拟数据
const getStoredData = (): TestingItem[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const data = JSON.parse(stored)
      console.log('📦 Loading data from localStorage:', data.length, 'items')
      return data
    }
  } catch (error) {
    console.warn('Failed to load data from localStorage:', error)
  }
  const initialData = getInitialMockData()
  console.log('🏁 Using initial mock data:', initialData.length, 'items')
  return initialData
}

// 保存数据到localStorage
const saveData = (data: TestingItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    console.log('💾 Saved data to localStorage:', data.length, 'items')
  } catch (error) {
    console.warn('Failed to save data to localStorage:', error)
  }
}

export const useTestingItemsStore = defineStore('testingItems', {
  state: () => ({
    items: [] as TestingItem[],
    pagination: {
      page: 1,
      perPage: 10,
      total: 0,
    } as TestingItemPagination,
  }),

  actions: {
    async getAll(options: {
      pagination: TestingItemPagination
      sorting: TestingItemSorting
      filters: Partial<TestingItemFilters>
    }) {
      console.log('🔄 TestingItemsStore: getAll called with options:', options)

      // 从localStorage获取数据
      const allData = getStoredData()

      // 模拟API延迟
      await new Promise((resolve) => setTimeout(resolve, 500))

      // 应用过滤
      let filteredData = allData
      if (options.filters.search) {
        const searchTerm = options.filters.search.toLowerCase()
        filteredData = allData.filter(
          (item) =>
            item.item_code.toLowerCase().includes(searchTerm) ||
            item.item_name.toLowerCase().includes(searchTerm) ||
            (item.description && item.description.toLowerCase().includes(searchTerm)),
        )
      }

      // 应用排序
      if (options.sorting.sortBy && options.sorting.sortingOrder) {
        filteredData.sort((a, b) => {
          const aVal = a[options.sorting.sortBy as keyof TestingItem]
          const bVal = b[options.sorting.sortBy as keyof TestingItem]

          if (typeof aVal === 'string' && typeof bVal === 'string') {
            const result = aVal.localeCompare(bVal)
            return options.sorting.sortingOrder === 'desc' ? -result : result
          }

          if (typeof aVal === 'number' && typeof bVal === 'number') {
            return options.sorting.sortingOrder === 'desc' ? bVal - aVal : aVal - bVal
          }

          return 0
        })
      }

      // 应用分页
      const startIndex = (options.pagination.page - 1) * options.pagination.perPage
      const endIndex = startIndex + options.pagination.perPage
      const paginatedData = filteredData.slice(startIndex, endIndex)

      this.items = paginatedData
      this.pagination = {
        ...options.pagination,
        total: filteredData.length,
      }

      console.log('✅ TestingItemsStore: Data loaded successfully, items:', this.items.length)
    },

    async add(testingItem: Omit<TestingItem, 'id' | 'created_at'>) {
      console.log('🆕 TestingItemsStore: Adding testing item:', testingItem)

      const newItem: TestingItem = {
        ...testingItem,
        id: `550e8400-e29b-41d4-a716-${Date.now()}` as any,
        created_at: new Date().toISOString(),
      }

      console.log('🔨 Created new item with ID:', newItem.id)

      await new Promise((resolve) => setTimeout(resolve, 300))

      // 获取当前所有数据
      const allData = getStoredData()
      console.log('📥 Current data before add:', allData.length, 'items')
      // 添加新项目
      allData.unshift(newItem)
      console.log('📤 Data after add:', allData.length, 'items')
      // 保存到localStorage
      saveData(allData)

      console.log('✅ TestingItemsStore: Testing item added successfully')
    },

    async update(testingItem: TestingItem) {
      console.log('📝 TestingItemsStore: Updating testing item:', testingItem.id)

      await new Promise((resolve) => setTimeout(resolve, 300))

      // 获取当前所有数据
      const allData = getStoredData()
      // 更新数据
      const dataIndex = allData.findIndex((item) => item.id === testingItem.id)
      if (dataIndex !== -1) {
        allData[dataIndex] = { ...testingItem }
        // 保存到localStorage
        saveData(allData)
        console.log('✅ TestingItemsStore: Testing item updated successfully')
      }
    },

    async remove(testingItem: TestingItem) {
      console.log('🗑️ TestingItemsStore: Removing testing item:', testingItem.id)

      await new Promise((resolve) => setTimeout(resolve, 300))

      // 获取当前所有数据
      const allData = getStoredData()
      // 删除数据
      const dataIndex = allData.findIndex((item) => item.id === testingItem.id)
      if (dataIndex !== -1) {
        allData.splice(dataIndex, 1)
        // 保存到localStorage
        saveData(allData)
        console.log('✅ TestingItemsStore: Testing item removed successfully')
      }
    },
  },
})
