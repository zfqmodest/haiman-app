<script setup lang="ts">
import { defineVaDataTableColumns, useModal } from 'vuestic-ui'
import { useI18n } from 'vue-i18n'
import { User, UserRole } from '../types'
import UserAvatar from './UserAvatar.vue'
import { PropType, computed, toRef } from 'vue'
import { Pagination, Sorting } from '../../../data/pages/users'
import { useVModel } from '@vueuse/core'

const { t } = useI18n()

const columns = computed(() =>
  defineVaDataTableColumns([
    { label: t('users.role'), key: 'role', sortable: true },
    { label: t('users.fullName'), key: 'fullname', sortable: true },
    { label: t('users.username'), key: 'username', sortable: true },
    { label: t('users.phone'), key: 'phone', sortable: true },
    { label: t('users.email'), key: 'email', sortable: true },
    { label: t('users.actions'), key: 'actions', align: 'left' },
  ]),
)

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
    required: true,
  },
  loading: { type: Boolean, default: false },
  pagination: { type: Object as PropType<Pagination>, required: true },
  sortBy: { type: String as PropType<Sorting['sortBy']>, required: true },
  sortingOrder: { type: String as PropType<Sorting['sortingOrder']>, default: null },
})

const emit = defineEmits<{
  (event: 'edit-user', user: User): void
  (event: 'delete-user', user: User): void
  (event: 'update:sortBy', sortBy: Sorting['sortBy']): void
  (event: 'update:sortingOrder', sortingOrder: Sorting['sortingOrder']): void
}>()

const users = toRef(props, 'users')
const sortByVModel = useVModel(props, 'sortBy', emit)
const sortingOrderVModel = useVModel(props, 'sortingOrder', emit)

const roleColors: Record<UserRole, string> = {
  1: 'primary', // 管理员
  2: 'info', // 测试人员
  3: 'background-element', // 普通人员
}

// 角色名称映射
const getRoleName = (role: UserRole): string => {
  switch (role) {
    case 1:
      return '管理员'
    case 2:
      return '测试人员'
    case 3:
      return '普通人员'
    default:
      return '未知角色'
  }
}

const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.perPage))

const { confirm } = useModal()

const onUserDelete = async (user: User) => {
  const agreed = await confirm({
    title: t('users.deleteUserTitle'),
    message: t('users.deleteUserMessage', { name: user.fullname }),
    okText: t('users.delete'),
    cancelText: t('users.cancel'),
    size: 'small',
    maxWidth: '380px',
  })

  if (agreed) {
    emit('delete-user', user)
  }
}
</script>

<template>
  <VaDataTable
    v-model:sort-by="sortByVModel"
    v-model:sorting-order="sortingOrderVModel"
    :columns="columns"
    :items="users"
    :loading="$props.loading"
  >
    <template #cell(fullname)="{ rowData }">
      <div class="flex items-center gap-2 max-w-[230px] ellipsis">
        <UserAvatar :user="rowData as User" size="small" />
        {{ rowData.fullname }}
      </div>
    </template>

    <template #cell(username)="{ rowData }">
      <div class="max-w-[120px] ellipsis">
        {{ rowData.username }}
      </div>
    </template>

    <template #cell(email)="{ rowData }">
      <div class="ellipsis max-w-[200px]">
        {{ rowData.email }}
      </div>
    </template>

    <template #cell(phone)="{ rowData }">
      <div class="ellipsis max-w-[230px]">
        {{ rowData.phone }}
      </div>
    </template>
    <template #cell(role)="{ rowData }">
      <VaBadge :text="getRoleName(rowData.role as UserRole)" :color="roleColors[rowData.role as UserRole]" />
    </template>
    <template #cell(actions)="{ rowData }">
      <div class="flex gap-3 justify-start items-center">
        <VaButton
          preset="primary"
          size="small"
          icon="mso-edit"
          :aria-label="t('users.editUserAria')"
          @click="$emit('edit-user', rowData as User)"
        />
        <VaButton
          preset="primary"
          size="small"
          icon="mso-delete"
          color="danger"
          :aria-label="t('users.deleteUserAria')"
          :disabled="(rowData as User).role === 1"
          :title="(rowData as User).role === 1 ? t('users.cannotDeleteAdmin') : ''"
          @click="onUserDelete(rowData as User)"
        />
      </div>
    </template>
  </VaDataTable>
  <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
    <div>
      <b>{{ $props.pagination.total }} {{ t('users.results') }}.</b>
      {{ t('users.resultsPerPage') }}
      <VaSelect v-model="$props.pagination.perPage" class="!w-20" :options="[10, 50, 100]" />
    </div>

    <div v-if="totalPages > 1" class="flex">
      <VaButton
        preset="secondary"
        icon="va-arrow-left"
        :aria-label="t('users.previousPage')"
        :disabled="$props.pagination.page === 1"
        @click="$props.pagination.page--"
      />
      <VaButton
        class="mr-2"
        preset="secondary"
        icon="va-arrow-right"
        :aria-label="t('users.nextPage')"
        :disabled="$props.pagination.page === totalPages"
        @click="$props.pagination.page++"
      />
      <VaPagination
        v-model="$props.pagination.page"
        buttons-preset="secondary"
        :pages="totalPages"
        :visible-pages="5"
        :boundary-links="false"
        :direction-links="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.va-data-table {
  ::v-deep(.va-data-table__table-tr) {
    border-bottom: 1px solid var(--va-background-border);
  }
}
</style>
