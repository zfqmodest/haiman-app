import { User } from '../users/types'

export type UUID = `${string}-${string}-${string}-${string}-${string}`

// 原有的项目类型（保留兼容性）
export type Project = {
  id: UUID
  project_name: string
  project_owner: User['id']
  team: User['id'][]
  status: 'important' | 'completed' | 'archived' | 'in progress'
  created_at: string
}

// 新的物料类型定义
export type Material = {
  id: UUID
  material_code: string // 物料代码（物料ID）
  material_name: string // 物料名
  created_at: string // 创建时间
  product_count: number // 当前物料下产品个数
  test_items: string[] // 测试项列表
}

// 产品类型定义
export type Product = {
  id: UUID
  product_serial: string // 产品序列号
  product_name: string // 产品名称
  material_id: UUID // 所属物料ID
  created_at: string // 创建时间
  status: 'not_started' | 'in_progress' | 'completed' | 'failed' // 状态
  test_items: string[] // 测试项列表（继承自物料）
}

export type EmptyProject = Omit<Project, 'id' | 'project_owner' | 'created_at' | 'status'> & {
  project_owner: Project['project_owner'] | undefined
  status: Project['status'] | undefined
}

export type EmptyMaterial = Omit<Material, 'id' | 'created_at'> & {
  material_code: string
  material_name: string
  product_count: number
  test_items: string[]
}

export type EmptyProduct = Omit<Product, 'id' | 'created_at'> & {
  product_serial: string
  product_name: string
  material_id: UUID
  status: Product['status']
  test_items: string[]
}
