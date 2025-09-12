// 简单的API配置 - 智能检测当前访问地址
function getApiBaseUrl() {
  // 直接使用当前页面的主机名和端口8081
  const protocol = window.location.protocol
  const hostname = window.location.hostname
  return `${protocol}//${hostname}:8081/api`
}

const apiBaseUrl = getApiBaseUrl()
console.log('API地址:', apiBaseUrl)

// 认证相关接口
export const authApi = {
  login: async (credentials: { username: string; password: string }) => {
    try {
      console.log('登录请求到:', `${apiBaseUrl}/auth/login`)

      const response = await fetch(`${apiBaseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(credentials),
      })

      console.log('登录响应:', response.status)
      return response
    } catch (error) {
      console.error('登录请求失败:', error)
      throw error
    }
  },

  logout: async () => {
    return await fetch(`${apiBaseUrl}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      mode: 'cors',
    })
  },

  createUser: (userData: any) =>
    fetch(`${apiBaseUrl}/auth/register/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(userData),
      mode: 'cors',
    }),

  getUsers: () =>
    fetch(`${apiBaseUrl}/auth/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      mode: 'cors',
    }),

  deleteUser: (userId: number) =>
    fetch(`${apiBaseUrl}/auth/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      mode: 'cors',
    }),

  updateUser: (userId: number, userData: any) =>
    fetch(`${apiBaseUrl}/auth/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(userData),
      mode: 'cors',
    }),
}

// 登录记录相关接口
export const loginRecordApi = {
  // 获取本周登录统计数据
  getWeeklyStats: async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/login-records/weekly-stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        mode: 'cors',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('获取周统计数据失败:', error)
      throw error
    }
  },

  // 获取当前在线用户
  getCurrentOnlineUsers: async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/login-records/online-users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        mode: 'cors',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('获取在线用户失败:', error)
      throw error
    }
  },

  // 记录用户登出
  recordLogout: async (userId: number) => {
    try {
      const response = await fetch(`${apiBaseUrl}/login-records/record-logout?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        mode: 'cors',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('记录登出失败:', error)
      throw error
    }
  },

  // 更新用户活动时间
  updateActivity: async (userId: number) => {
    try {
      const response = await fetch(`${apiBaseUrl}/login-records/update-activity?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        mode: 'cors',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('更新活动时间失败:', error)
      throw error
    }
  },
}

// API 工具函数（向后兼容）
export default {
  allUsers: () => `${apiBaseUrl}/users`,
  user: (id: string) => `${apiBaseUrl}/users/${id}`,
  users: ({ page, pageSize }: { page: number; pageSize: number }) =>
    `${apiBaseUrl}/users/?page=${page}&pageSize=${pageSize}`,
  allProjects: () => `${apiBaseUrl}/projects`,
  project: (id: string) => `${apiBaseUrl}/projects/${id}`,
  projects: ({ page, pageSize }: { page: number; pageSize: number }) =>
    `${apiBaseUrl}/projects/?page=${page}&pageSize=${pageSize}`,
  avatars: () => `${apiBaseUrl}/avatars`,
}
