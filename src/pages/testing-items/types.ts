export type UUID = `${string}-${string}-${string}-${string}-${string}`

// 测试项类型枚举
export type TestingItemType = 'data_analysis' | 'average_analysis' | 'subjective_analysis'

// 测试项类型定义
export type TestingItem = {
  id: UUID
  item_code: string // 测试项代码
  item_name: string // 测试项名称
  item_type: TestingItemType // 测试项类型
  description?: string // 描述信息
  created_at: string // 创建时间
}

export type EmptyTestingItem = Omit<TestingItem, 'id' | 'created_at'> & {
  item_code: string
  item_name: string
  item_type: TestingItemType
  description?: string
}
