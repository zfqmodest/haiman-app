import { User } from '../../pages/users/types'
import { authApi } from '../../services/api'

export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: keyof User | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export type Filters = {
  search: string
}

export const getUsers = async (filters: Partial<Filters & Pagination & Sorting>) => {
  try {
    // 从后端API获取用户数据
    const response = await authApi.getUsers()

    if (!response.ok) {
      throw new Error('获取用户数据失败')
    }

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message || '获取用户数据失败')
    }

    const users = data.data // 用户数组直接在 data.data 中
    // 应用前端过滤（在真实应用中，这些应该在后端完成）
    let filteredUsers = users

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filteredUsers = filteredUsers.filter(
        (user: User) =>
          user.fullname.toLowerCase().includes(searchLower) ||
          user.username.toLowerCase().includes(searchLower) ||
          (user.phone && user.phone.includes(searchLower)),
      )
    }

    // 应用排序
    if (filters.sortBy && filters.sortingOrder) {
      filteredUsers.sort((a: User, b: User) => {
        const aValue = a[filters.sortBy as keyof User]
        const bValue = b[filters.sortBy as keyof User]

        if (aValue && bValue && aValue < bValue) return filters.sortingOrder === 'asc' ? -1 : 1
        if (aValue && bValue && aValue > bValue) return filters.sortingOrder === 'asc' ? 1 : -1
        return 0
      })
    }

    // 应用分页
    const startIndex = ((filters.page || 1) - 1) * (filters.perPage || 10)
    const endIndex = startIndex + (filters.perPage || 10)
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

    return {
      data: paginatedUsers,
      pagination: {
        page: filters.page || 1,
        perPage: filters.perPage || 10,
        total: filteredUsers.length,
      },
    }
  } catch (error) {
    console.error('获取用户数据时出错:', error)
    return {
      data: [],
      pagination: {
        page: 1,
        perPage: 10,
        total: 0,
      },
    }
  }
}

export const addUser = async (): Promise<never> => {
  // 此方法已被替换为 authApi.createUser，这里保留以避免破坏现有调用
  throw new Error('请使用 authApi.createUser 方法')
}

export const updateUser = async (user: User) => {
  try {
    const response = await authApi.updateUser(Number(user.id), {
      fullName: user.fullname,
      email: user.email,
      phone: user.phone,
      password: user.password,
      role: user.role,
      active: user.active,
    })

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('没有权限更新用户')
      }

      const errorData = await response.json()
      throw new Error(errorData.message || `更新用户失败 (状态码: ${response.status})`)
    }

    const result = await response.json()
    if (!result.success) {
      throw new Error(result.message || 'Failed to update user')
    }

    return result.data
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}

export const uploadAvatar = async (): Promise<never> => {
  // TODO: 实现头像上传功能
  throw new Error('头像上传功能待实现')
}
