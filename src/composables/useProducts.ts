import { ref, Ref } from 'vue'
import { Product, EmptyProduct } from '../pages/projects/types'
import {
  getProductsByMaterialId,
  getAllProducts,
  addProduct,
  updateProduct,
  removeProduct,
  getProductStatusText,
} from '../data/pages/materials'

const isLoading = ref(false)
const products: Ref<Product[]> = ref([])

export function useProducts() {
  const add = async (product: EmptyProduct, materialId: string) => {
    isLoading.value = true
    try {
      const addedProducts = await addProduct(product, materialId)
      if (addedProducts.length > 0) {
        products.value.unshift(addedProducts[0])
      }
      return addedProducts
    } finally {
      isLoading.value = false
    }
  }

  const update = async (product: Product) => {
    isLoading.value = true
    try {
      const updatedProducts = await updateProduct(product)
      if (updatedProducts.length > 0) {
        const index = products.value.findIndex((p) => p.id === product.id)
        if (index !== -1) {
          products.value[index] = updatedProducts[0]
        }
      }
      return updatedProducts
    } finally {
      isLoading.value = false
    }
  }

  const remove = async (product: Product) => {
    isLoading.value = true
    try {
      const result = await removeProduct(product)
      if (result) {
        const index = products.value.findIndex((p) => p.id === product.id)
        if (index !== -1) {
          products.value.splice(index, 1)
        }
      }
      return result
    } finally {
      isLoading.value = false
    }
  }

  const load = async () => {
    isLoading.value = true
    try {
      products.value = await getAllProducts()
    } finally {
      isLoading.value = false
    }
  }

  const loadByMaterialId = async (materialId: string) => {
    isLoading.value = true
    try {
      const materialProducts = await getProductsByMaterialId(materialId)
      // 更新全局products数组中对应的产品
      const filteredProducts = products.value.filter((p) => p.material_id !== materialId)
      products.value = [...filteredProducts, ...materialProducts]
      return materialProducts
    } finally {
      isLoading.value = false
    }
  }

  // 根据物料ID获取产品
  const getProductsByMaterial = (materialId: string): Product[] => {
    return products.value.filter((p) => p.material_id === materialId)
  }

  return {
    products,
    isLoading,
    add,
    update,
    remove,
    load,
    loadByMaterialId,
    getProductsByMaterial,
    getProductStatusText,
  }
}
