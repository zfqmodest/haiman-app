import { defineStore } from 'pinia'
import { type Filters, getUsers, Pagination, Sorting, updateUser, uploadAvatar } from '../data/pages/users'
import { User } from '../pages/users/types'
import { authApi } from '../services/api'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      items: [] as User[],
      pagination: { page: 1, perPage: 10, total: 0 },
    }
  },

  actions: {
    async getAll(options: { pagination?: Pagination; sorting?: Sorting; filters?: Partial<Filters> }) {
      const { data, pagination } = await getUsers({
        ...options.filters,
        ...options.sorting,
        ...options.pagination,
      })
      this.items = data
      this.pagination = pagination
    },

    async add(user: User) {
      try {
        // 使用新的管理员创建用户API
        const response = await authApi.createUser({
          username: user.username,
          password: user.password || '',
          fullName: user.fullname,
          email: user.email || '',
          phone: user.phone || '',
          role: user.role,
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Failed to create user')
        }

        const newUser = await response.json()
        return newUser
      } catch (error) {
        console.error('Error creating user:', error)
        throw error
      }
    },
    async update(user: User) {
      const updatedUser = await updateUser(user)
      return updatedUser
    },
    async remove(user: User) {
      try {
        // 调用后端API删除用户
        const response = await authApi.deleteUser(Number(user.id))

        if (!response.ok) {
          // 对于非JSON响应（如403），创建错误消息
          if (response.status === 403) {
            throw new Error('没有权限删除用户')
          }
          try {
            const errorData = await response.json()
            throw new Error(errorData.message || `删除用户失败 (状态码: ${response.status})`)
          } catch (jsonError) {
            throw new Error(`删除用户失败 (状态码: ${response.status})`)
          }
        }

        const result = await response.json()
        if (!result.success) {
          throw new Error(result.message || 'Failed to delete user')
        }

        return true
      } catch (error) {
        console.error('Error deleting user:', error)
        throw error
      }
    },

    async uploadAvatar(formData: FormData) {
      return uploadAvatar(formData)
    },
  },
})
