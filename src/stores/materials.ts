import { defineStore } from 'pinia'
import {
  addMaterial,
  type Filters,
  getMaterials,
  type Pagination,
  removeMaterial,
  type Sorting,
  updateMaterial,
} from '../data/pages/materials'
import { Material } from '../pages/projects/types'

export const useMaterialsStore = defineStore('materials', {
  state: () => {
    return {
      items: [] as Material[],
      pagination: { page: 1, perPage: 10, total: 0 },
    }
  },

  actions: {
    async getAll(options: { pagination?: Pagination; sorting?: Sorting; filters?: Partial<Filters> }) {
      const { data, pagination } = await getMaterials({
        ...options.filters,
        ...options.sorting,
        ...options.pagination,
      })
      this.items = data
      this.pagination = pagination
    },

    async add(material: Omit<Material, 'id' | 'created_at'>) {
      const [newMaterial] = await addMaterial(material)
      return newMaterial
    },

    async update(material: Material) {
      const [updatedMaterial] = await updateMaterial(material)
      return updatedMaterial
    },

    async remove(material: Material) {
      return await removeMaterial(material)
    },
  },
})
