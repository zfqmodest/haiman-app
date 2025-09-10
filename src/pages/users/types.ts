export type UserRole = 1 | 2 | 3 // 1: 管理员, 2: 测试人员, 3: 普通人员

export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type User = {
  id: UUID
  fullname: string
  phone: string
  username: string
  email?: string
  password?: string
  role: UserRole
  avatar: string
  notes: string
  active: boolean
}
