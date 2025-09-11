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
