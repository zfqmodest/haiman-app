import { TestingItem } from '../../pages/testing-items/types'
import { v4 as uuid } from 'uuid'

// 定义分页、排序和过滤类型
export type TestingItemPagination = {
  page: number
  perPage: number
  total: number
}

export type TestingItemSorting = {
  sortBy: 'item_code' | 'item_name' | 'created_at' | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export type TestingItemFilters = {
  search: string
}

// 临时内存存储，模拟数据库
const inMemoryTestingItems: TestingItem[] = [
  {
    id: 'testing-item-001-2023-001' as any,
    item_code: 'TI001',
    item_name: '功能测试项',
    item_type: 'data_analysis',
    description: '验证系统功能是否正常运行',
    created_at: '2023-12-01T08:00:00Z',
  },
  {
    id: 'testing-item-002-2023-002' as any,
    item_code: 'TI002',
    item_name: '性能评估项',
    item_type: 'average_analysis',
    description: '评估系统性能指标',
    created_at: '2023-12-03T10:30:00Z',
  },
  {
    id: 'testing-item-003-2023-003' as any,
    item_code: 'TI003',
    item_name: '用户体验评分',
    item_type: 'subjective_analysis',
    description: '主观评价用户体验感受',
    created_at: '2023-12-05T14:15:00Z',
  },
  {
    id: 'testing-item-004-2023-004' as any,
    item_code: 'TI004',
    item_name: '数据准确性验证',
    item_type: 'data_analysis',
    description: '验证数据处理的准确性',
    created_at: '2023-12-07T09:45:00Z',
  },
]

export const getTestingItems = async (
  filters: Partial<TestingItemFilters & TestingItemPagination & TestingItemSorting>,
) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  const { search, sortBy, sortingOrder } = filters
  let filteredTestingItems: TestingItem[] = [...inMemoryTestingItems]

  // 根据搜索词筛选
  if (search) {
    filteredTestingItems = filteredTestingItems.filter(
      (testingItem) =>
        testingItem.item_code.toLowerCase().includes(search.toLowerCase()) ||
        testingItem.item_name.toLowerCase().includes(search.toLowerCase()) ||
        (testingItem.description && testingItem.description.toLowerCase().includes(search.toLowerCase())),
    )
  }

  // 排序
  if (sortBy && sortingOrder) {
    filteredTestingItems.sort((a, b) => {
      const aValue = a[sortBy]
      const bValue = b[sortBy]

      if (sortingOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })
  }

  const { page = 1, perPage = 10 } = filters || {}
  const start = (page - 1) * perPage
  const end = start + perPage

  return {
    data: filteredTestingItems.slice(start, end),
    pagination: {
      page,
      perPage,
      total: filteredTestingItems.length,
    },
  }
}

export const addTestingItem = async (testingItem: Omit<TestingItem, 'id' | 'created_at'>) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  // 生成新的测试项
  const newTestingItem: TestingItem = {
    ...testingItem,
    id: uuid() as any,
    created_at: new Date().toISOString(),
  }

  // 添加到内存存储
  inMemoryTestingItems.unshift(newTestingItem)

  return [newTestingItem]
}

export const updateTestingItem = async (testingItem: TestingItem) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  const index = inMemoryTestingItems.findIndex((t) => t.id === testingItem.id)
  if (index !== -1) {
    inMemoryTestingItems[index] = testingItem
  }

  return [testingItem]
}

export const removeTestingItem = async (testingItem: TestingItem) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  const index = inMemoryTestingItems.findIndex((t) => t.id === testingItem.id)
  if (index !== -1) {
    inMemoryTestingItems.splice(index, 1)
  }

  return true
}
