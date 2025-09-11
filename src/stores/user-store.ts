import { defineStore } from 'pinia'
import { authApi } from '../services/api'

interface User {
  username: string
  email: string
  fullName: string
  role: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', {
  state: (): AuthState => {
    // 尝试从localStorage恢复用户信息
    const token = localStorage.getItem('token')
    const userStr = localStorage.getItem('user')
    let user = null

    if (token && userStr) {
      try {
        user = JSON.parse(userStr)
      } catch (error) {
        // 如果解析失败，清除无效数据
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    }

    return {
      user,
      token,
      isAuthenticated: !!token,
    }
  },

  actions: {
    async login(credentials: { username: string; password: string }) {
      try {
        console.log('开始登录...')
        const response = await authApi.login(credentials)

        if (!response.ok) {
          const errorData = await response.json()
          return { success: false, message: errorData.message || '登录失败' }
        }

        const data = await response.json()

        if (!data.success) {
          return { success: false, message: data.message || '登录失败' }
        }

        // 保存用户信息
        this.user = {
          username: data.data.username,
          email: data.data.email || '',
          fullName: data.data.fullName || data.data.fullname, // 处理两种可能的字段名
          role: data.data.role,
        }
        this.token = data.data.token
        this.isAuthenticated = true

        localStorage.setItem('token', data.data.token)
        localStorage.setItem('user', JSON.stringify(this.user))

        return { success: true, data: data.data }
      } catch (error: any) {
        console.error('登录异常:', error)
        return { success: false, message: '连接服务器失败' }
      }
    },

    async logout() {
      try {
        if (this.token) {
          await authApi.logout()
        }
      } catch (error) {
        console.error('登出请求失败:', error)
      } finally {
        // 清除本地状态
        this.user = null
        this.token = null
        this.isAuthenticated = false

        // 清除localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        // 重定向到登录页并重新加载，确保状态完全重置
        window.location.href = '/auth/login'
      }
    },

    // 从localStorage恢复登录状态
    restoreAuth() {
      const token = localStorage.getItem('token')
      const userStr = localStorage.getItem('user')

      if (token && userStr) {
        try {
          this.token = token
          this.user = JSON.parse(userStr)
          this.isAuthenticated = true
        } catch (error) {
          // 如果解析失败，清除无效数据
          this.logout()
        }
      }
    },

    // 更新用户信息（比如修改全名后）
    updateUser(userData: Partial<User>) {
      if (this.user) {
        this.user = { ...this.user, ...userData }
        localStorage.setItem('user', JSON.stringify(this.user))
      }
    },
  },
})
