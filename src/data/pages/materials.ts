import { Material, Product, EmptyProduct } from '../../pages/projects/types'
import { v4 as uuid } from 'uuid'

// 产品状态映射
export const getProductStatusText = (status: Product['status']): string => {
  const statusMap = {
    not_started: '未开始',
    in_progress: '进行中',
    completed: '已完成',
    failed: '失败',
  }
  return statusMap[status] || status
}

// 临时内存存储，模拟数据库
const inMemoryMaterials: Material[] = [
  {
    id: 'material-001-2023-001' as any,
    material_code: 'MAT-001',
    material_name: '钢材-Q235',
    created_at: '2023-12-01T08:00:00Z',
    product_count: 15,
    test_items: ['抗拉强度测试', '硬度测试', '化学成分分析'],
  },
  {
    id: 'material-002-2023-002' as any,
    material_code: 'MAT-002',
    material_name: '铝合金-6061',
    created_at: '2023-12-03T10:30:00Z',
    product_count: 8,
    test_items: ['抗拉强度测试', '耐腐蚀性测试', '表面粗糙度测试'],
  },
  {
    id: 'material-003-2023-003' as any,
    material_code: 'MAT-003',
    material_name: '碳纤维复合材料',
    created_at: '2023-12-05T14:15:00Z',
    product_count: 3,
    test_items: ['拉伸模量测试', '弯曲强度测试', '层间剪切强度测试', '疲劳测试'],
  },
  {
    id: 'material-004-2023-004' as any,
    material_code: 'MAT-004',
    material_name: '不锈钢-304',
    created_at: '2023-12-07T09:45:00Z',
    product_count: 22,
    test_items: ['抗拉强度测试', '耐腐蚀性测试', '硬度测试'],
  },
  {
    id: 'material-005-2023-005' as any,
    material_code: 'MAT-005',
    material_name: '聚合物材料-PVC',
    created_at: '2023-12-10T11:20:00Z',
    product_count: 12,
    test_items: ['拉伸强度测试', '冲击强度测试', '热变形温度测试'],
  },
  {
    id: 'material-006-2023-006' as any,
    material_code: 'MAT-006',
    material_name: '钛合金-Ti6Al4V',
    created_at: '2023-12-12T16:30:00Z',
    product_count: 5,
    test_items: ['抗拉强度测试', '疲劳测试', '生物相容性测试', '密度测试'],
  },
]

export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: 'material_code' | 'material_name' | 'created_at' | 'product_count' | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export type Filters = {
  search: string
}

export const getMaterials = async (filters: Partial<Filters & Pagination & Sorting>) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  const { search, sortBy, sortingOrder } = filters
  let filteredMaterials: Material[] = [...inMemoryMaterials]

  // 动态计算每个物料的产品数量
  filteredMaterials = filteredMaterials.map((material) => ({
    ...material,
    product_count: inMemoryProducts.filter((product) => product.material_id === material.id).length,
  }))

  // 根据搜索词筛选
  if (search) {
    filteredMaterials = filteredMaterials.filter(
      (material) =>
        material.material_code.toLowerCase().includes(search.toLowerCase()) ||
        material.material_name.toLowerCase().includes(search.toLowerCase()) ||
        material.test_items.some((item) => item.toLowerCase().includes(search.toLowerCase())),
    )
  }

  // 排序
  if (sortBy && sortingOrder) {
    filteredMaterials.sort((a, b) => {
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
    data: filteredMaterials.slice(start, end),
    pagination: {
      page,
      perPage,
      total: filteredMaterials.length,
    },
  }
}

export const addMaterial = async (material: Omit<Material, 'id' | 'created_at'>) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  // 生成新的物料
  const newMaterial: Material = {
    ...material,
    id: uuid() as any,
    created_at: new Date().toISOString(),
  }

  // 添加到内存存储
  inMemoryMaterials.unshift(newMaterial)

  return [newMaterial]
}

export const updateMaterial = async (material: Material) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  const index = inMemoryMaterials.findIndex((m) => m.id === material.id)
  if (index !== -1) {
    inMemoryMaterials[index] = material
  }

  return [material]
}

export const removeMaterial = async (material: Material) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  const index = inMemoryMaterials.findIndex((m) => m.id === material.id)
  if (index !== -1) {
    inMemoryMaterials.splice(index, 1)
    // 同时删除该物料下的所有产品
    const productIndexes = inMemoryProducts
      .map((p, idx) => (p.material_id === material.id ? idx : -1))
      .filter((idx) => idx !== -1)
      .reverse() // 从后往前删除，避免索引错位

    productIndexes.forEach((idx) => {
      inMemoryProducts.splice(idx, 1)
    })
  }

  return true
}

// 产品内存存储
const inMemoryProducts: Product[] = [
  {
    id: 'product-001-001' as any,
    product_serial: 'PROD-001-001',
    product_name: 'Q235钢板-1号',
    material_id: 'material-001-2023-001' as any,
    created_at: '2023-12-01T09:00:00Z',
    status: 'not_started',
    test_items: ['拉伸试验', '冲击试验', '硬度测试'], // 继承自物料
  },
  {
    id: 'product-001-002' as any,
    product_serial: 'PROD-001-002',
    product_name: 'Q235钢管-1号',
    material_id: 'material-001-2023-001' as any,
    created_at: '2023-12-01T10:00:00Z',
    status: 'in_progress',
    test_items: ['拉伸试验', '冲击试验', '硬度测试'], // 继承自物料
  },
  {
    id: 'product-002-001' as any,
    product_serial: 'PROD-002-001',
    product_name: '6061铝板-1号',
    material_id: 'material-002-2023-002' as any,
    created_at: '2023-12-03T11:00:00Z',
    status: 'completed',
    test_items: ['拉伸试验', '弯曲试验', '腐蚀测试'], // 继承自物料
  },
]

// 获取指定物料下的所有产品
export const getProductsByMaterialId = async (materialId: string): Promise<Product[]> => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 100))

  return inMemoryProducts.filter((product) => product.material_id === materialId)
}

// 获取所有产品
export const getAllProducts = async (): Promise<Product[]> => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [...inMemoryProducts]
}

// 添加产品
export const addProduct = async (product: EmptyProduct, materialId: string): Promise<Product[]> => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  // 找到对应的物料，获取其测试项
  const material = inMemoryMaterials.find((m) => m.id === materialId)
  if (!material) {
    throw new Error('Material not found')
  }

  // 生成新的产品，测试项继承自物料
  const newProduct: Product = {
    ...product,
    id: uuid() as any,
    material_id: materialId as any,
    created_at: new Date().toISOString(),
    status: product.status || 'not_started',
    test_items: [...material.test_items], // 继承物料的测试项
  }

  // 添加到内存存储
  inMemoryProducts.unshift(newProduct)

  return [newProduct]
}

// 更新产品
export const updateProduct = async (product: Product): Promise<Product[]> => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  // 找到对应的物料，确保测试项一致
  const material = inMemoryMaterials.find((m) => m.id === product.material_id)
  if (!material) {
    throw new Error('Material not found')
  }

  // 更新产品，但测试项始终与物料保持一致
  const updatedProduct: Product = {
    ...product,
    test_items: [...material.test_items], // 始终使用物料的测试项
  }

  const index = inMemoryProducts.findIndex((p) => p.id === product.id)
  if (index !== -1) {
    inMemoryProducts[index] = updatedProduct
  }

  return [updatedProduct]
}

// 删除产品
export const removeProduct = async (product: Product): Promise<boolean> => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300))

  const index = inMemoryProducts.findIndex((p) => p.id === product.id)
  if (index !== -1) {
    inMemoryProducts.splice(index, 1)
  }

  return true
}
