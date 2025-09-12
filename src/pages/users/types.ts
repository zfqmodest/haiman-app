export type UserRole = 1 | 2 | 3 // 1: 管理员, 2: 测试人员, 3: 普通人员

export type User = {
  id: number // 改为number类型，与后端Long类型对应
  fullName: string // 后端使用的是fullName而不是fullname
  phone: string
  username: string
  email?: string
  password?: string
  role: UserRole
  avatar?: string // 可选，因为后端可能没有这个字段
  notes?: string // 可选
  active: boolean
  isOnline?: boolean // 在线状态
  lastLoginTime?: string // 最后登录时间
}
