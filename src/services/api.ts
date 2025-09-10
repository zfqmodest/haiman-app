// 根据当前环境自动构建API路径
function getBaseUrl() {
  // 优先使用环境变量配置的API地址
  const envUrl = import.meta.env.VITE_API_BASE_URL
  if (envUrl) {
    console.log('使用环境变量API地址:', envUrl)
    return envUrl
  }

  // 自动检测当前访问URL，替换为API地址
  const protocol = window.location.protocol
  const hostname = window.location.hostname
  const port = '8081' // 后端默认端口

  const autoUrl = `${protocol}//${hostname}:${port}/api`
  console.log('自动生成API地址:', autoUrl)
  return autoUrl
}

const apiBaseUrl = getBaseUrl()

// 认证相关接口 - 包含删除用户功能
export const authApi = {
  login: async (credentials: { username: string; password: string }) => {
    try {
      console.log('API请求地址:', `${apiBaseUrl}/auth/login`)
      return await fetch(`${apiBaseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
        mode: 'cors',
        credentials: 'include',
      })
    } catch (error) {
      console.error('登录请求异常:', error)
      throw error
    }
  },
  logout: async () => {
    try {
      return await fetch(`${apiBaseUrl}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        mode: 'cors',
        credentials: 'include',
      })
    } catch (error) {
      console.error('登出请求异常:', error)
      throw error
    }
  },
  createUser: (userData: {
    username: string
    password: string
    fullName: string
    email: string
    phone: string
    role: number
  }) =>
    fetch(`${apiBaseUrl}/auth/register/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(userData),
    }),
  getUsers: () =>
    fetch(`${apiBaseUrl}/auth/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }),
  deleteUser: (userId: number) =>
    fetch(`${apiBaseUrl}/auth/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }),
  updateUser: (
    userId: number,
    userData: { fullName?: string; email?: string; phone?: string; password?: string; role?: number; active?: boolean },
  ) =>
    fetch(`${apiBaseUrl}/auth/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(userData),
    }),
}

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
