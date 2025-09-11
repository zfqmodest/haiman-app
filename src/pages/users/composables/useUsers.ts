import { Ref, ref, unref, watch, computed } from 'vue'
import { v4 as uuid } from 'uuid'
import type { Filters, Pagination, Sorting } from '../../../data/pages/users'
import { User } from '../types'
import { useUsersStore } from '../../../stores/users'

const makePaginationRef = () => ref<Pagination>({ page: 1, perPage: 10, total: 0 })
const makeSortingRef = () => ref<Sorting>({ sortBy: 'fullname', sortingOrder: null })
const makeFiltersRef = () => ref<Partial<Filters>>({ search: '' })

export const useUsers = (options?: {
  pagination?: Ref<Pagination>
  sorting?: Ref<Sorting>
  filters?: Ref<Partial<Filters>>
}) => {
  const isLoading = ref(false)
  const error = ref()
  const usersStore = useUsersStore()

  const { filters = makeFiltersRef(), sorting = makeSortingRef(), pagination = makePaginationRef() } = options || {}

  const fetch = async () => {
    isLoading.value = true
    try {
      await usersStore.getAll({
        filters: unref(filters),
        sorting: unref(sorting),
        pagination: unref(pagination),
      })
      pagination.value = usersStore.pagination
    } finally {
      isLoading.value = false
    }
  }

  watch(
    filters,
    () => {
      // Reset pagination to first page when filters changed
      pagination.value.page = 1
      fetch()
    },
    { deep: true },
  )

  fetch()
  const users = computed(() => {
    const getSortItem = (obj: any, sortBy: string) => {
      return obj[sortBy]
    }

    // 获取原始数据并进行角色优先排序
    const sortedItems = [...usersStore.items]

    // 多级排序：首先按角色排序，然后按用户指定的字段排序
    sortedItems.sort((a, b) => {
      // 第一优先级：角色排序 - 管理员(1) > 测试人员(2) > 普通人员(3)
      if (a.role !== b.role) {
        return a.role - b.role // 数字越小，优先级越高
      }

      // 第二优先级：如果角色相同，按用户选择的字段排序
      if (sorting.value.sortBy && sorting.value.sortingOrder) {
        const first = getSortItem(a, sorting.value.sortBy)
        const second = getSortItem(b, sorting.value.sortBy)
        if (first > second) {
          return sorting.value.sortingOrder === 'asc' ? 1 : -1
        }
        if (first < second) {
          return sorting.value.sortingOrder === 'asc' ? -1 : 1
        }
      }

      return 0
    })

    // 然后进行分页处理
    const paginated = sortedItems.slice(
      (pagination.value.page - 1) * pagination.value.perPage,
      pagination.value.page * pagination.value.perPage,
    )

    return paginated
  })

  return {
    error,
    isLoading,
    filters,
    sorting,
    pagination,

    users,

    fetch,
    async add(user: User) {
      isLoading.value = true
      error.value = null // 清除之前的错误
      try {
        const result = await usersStore.add(user)
        // 添加成功后重新获取数据
        await fetch()
        return result
      } catch (e) {
        error.value = e
        throw e // 重新抛出错误，让调用方知道操作失败
      } finally {
        isLoading.value = false
      }
    },
    async update(user: User) {
      isLoading.value = true
      error.value = null // 清除之前的错误
      try {
        const result = await usersStore.update(user)
        // 更新成功后重新获取数据
        await fetch()
        return result
      } catch (e) {
        error.value = e
        throw e // 重新抛出错误，让调用方知道操作失败
      } finally {
        isLoading.value = false
      }
    },
    async remove(user: User) {
      isLoading.value = true
      try {
        const result = await usersStore.remove(user)
        // 删除成功后重新获取数据
        await fetch()
        return result
      } catch (e) {
        error.value = e
      } finally {
        isLoading.value = false
      }
    },

    async uploadAvatar(avatar: Blob) {
      const formData = new FormData()
      formData.append('avatar', avatar)
      formData.append('id', uuid())

      return usersStore.uploadAvatar(formData)
    },
  }
}
