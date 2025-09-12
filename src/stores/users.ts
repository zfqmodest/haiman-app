import { defineStore } from 'pinia'
import { type Filters, getUsers, Pagination, Sorting, uploadAvatar } from '../data/pages/users'
import { User } from '../pages/users/types'
import { authApi } from '../services/api'

// 错误处理工具函数

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
          fullName: user.fullName,
          email: user.email || '',
          phone: user.phone || '',
          role: user.role,
        })

        if (!response.ok) {
          const errorData = await response.json()
          // 根据错误状态码和消息提供更友好的错误信息
          if (response.status === 409) {
            if (errorData.message?.includes('username')) {
              throw new Error('用户名已存在，请选择其他用户名')
            } else if (errorData.message?.includes('email')) {
              throw new Error('邮箱已被使用，请使用其他邮箱')
            }
          } else if (response.status === 400) {
            throw new Error('输入信息有误，请检查后重试')
          } else if (response.status === 403) {
            throw new Error('没有权限创建用户')
          } else if (response.status === 500) {
            throw new Error('服务器错误，请稍后重试')
          }

          throw new Error(errorData.message || '创建用户失败，请稍后重试')
        }

        const newUser = await response.json()
        return newUser
      } catch (error: any) {
        console.error('Error creating user:', error)
        // 如果是网络错误
        if (error.name === 'TypeError' || error.message.includes('fetch')) {
          throw new Error('网络连接错误，请检查网络后重试')
        }
        throw error
      }
    },
    async update(user: User) {
      try {
        // 调用后端API更新用户
        const response = await authApi.updateUser(Number(user.id), user)

        if (!response.ok) {
          // 根据状态码提供更友好的错误信息
          if (response.status === 403) {
            throw new Error('没有权限修改用户信息')
          } else if (response.status === 404) {
            throw new Error('用户不存在或已被删除')
          } else if (response.status === 409) {
            throw new Error('用户名或邮箱已被使用')
          } else if (response.status === 400) {
            throw new Error('输入信息有误，请检查后重试')
          } else if (response.status === 500) {
            throw new Error('服务器错误，更新用户失败')
          }

          try {
            const errorData = await response.json()
            throw new Error(errorData.message || `更新用户失败 (状态码: ${response.status})`)
          } catch (jsonError) {
            throw new Error(`更新用户失败 (状态码: ${response.status})`)
          }
        }

        const result = await response.json()
        if (!result.success) {
          throw new Error(result.message || '更新用户失败')
        }

        return result.data
      } catch (error: any) {
        console.error('Error updating user:', error)
        // 如果是网络错误
        if (error.name === 'TypeError' || error.message.includes('fetch')) {
          throw new Error('网络连接错误，请检查网络后重试')
        }
        throw error
      }
    },
    async remove(user: User) {
      try {
        // 调用后端API删除用户
        const response = await authApi.deleteUser(Number(user.id))

        if (!response.ok) {
          // 根据状态码提供更友好的错误信息
          if (response.status === 403) {
            throw new Error('没有权限删除用户')
          } else if (response.status === 404) {
            throw new Error('用户不存在或已被删除')
          } else if (response.status === 400) {
            throw new Error('无法删除该用户，可能是系统必需用户')
          } else if (response.status === 500) {
            throw new Error('服务器错误，删除用户失败')
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
          throw new Error(result.message || '删除用户失败')
        }

        return true
      } catch (error: any) {
        console.error('Error deleting user:', error)
        // 如果是网络错误
        if (error.name === 'TypeError' || error.message.includes('fetch')) {
          throw new Error('网络连接错误，请检查网络后重试')
        }
        throw error
      }
    },

    async uploadAvatar(formData: FormData) {
      return uploadAvatar(formData)
    },
  },
})
