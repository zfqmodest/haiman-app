import { Project } from '../../pages/projects/types'

// 临时内存存储项目数据，模拟数据库
const inMemoryProjects: Project[] = [
  {
    id: 'project-1' as any,
    project_name: '海曼项目管理系统',
    project_owner: '1' as any,
    team: ['1' as any, '2' as any],
    status: 'in progress',
    created_at: '2024-01-15T10:30:00Z',
  },
  {
    id: 'project-2' as any,
    project_name: 'Web前端重构',
    project_owner: '2' as any,
    team: ['2' as any, '3' as any],
    status: 'important',
    created_at: '2024-02-01T09:15:00Z',
  },
  {
    id: 'project-3' as any,
    project_name: '移动端应用开发',
    project_owner: '3' as any,
    team: ['1' as any, '3' as any],
    status: 'completed',
    created_at: '2023-12-10T14:20:00Z',
  },
]

export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: 'project_name' | 'project_owner' | 'team' | 'status' | 'created_at'
  sortingOrder: 'asc' | 'desc' | null
}

export const getProjects = async (options: Partial<Sorting> & Pagination) => {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 200))

  const projects: Project[] = [...inMemoryProjects]

  return {
    data: projects,
    pagination: {
      page: options.page,
      perPage: options.perPage,
      total: projects.length,
    },
  }
}

export const addProject = async (project: Omit<Project, 'id' | 'created_at'>) => {
  // 模拟添加项目逻辑
  await new Promise((resolve) => setTimeout(resolve, 300))
  console.log('Adding project:', project.project_name)
  return { success: true }
}

export const updateProject = async (project: Omit<Project, 'created_at'>) => {
  // 模拟更新项目逻辑
  await new Promise((resolve) => setTimeout(resolve, 300))
  console.log('Updating project:', project.id)
  return { success: true }
}

export const removeProject = async (project: Project) => {
  // 模拟删除项目逻辑
  await new Promise((resolve) => setTimeout(resolve, 300))
  console.log('Removing project:', project.id)
  return { success: true }
}
