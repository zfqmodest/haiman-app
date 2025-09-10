<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import UsersTable from './widgets/UsersTable.vue'
import EditUserForm from './widgets/EditUserForm.vue'
import { User } from './types'
import { useUsers } from './composables/useUsers'
import { useModal, useToast } from 'vuestic-ui'

const doShowEditUserModal = ref(false)
const saving = ref(false)

const { t } = useI18n()

const { users, isLoading, filters, sorting, pagination, error, ...usersApi } = useUsers()

const userToEdit = ref<User | null>(null)

const showEditUserModal = (user: User) => {
  userToEdit.value = user
  doShowEditUserModal.value = true
}

const showAddUserModal = () => {
  userToEdit.value = null
  doShowEditUserModal.value = true
}

const { init: notify } = useToast()

watchEffect(() => {
  if (error.value) {
    notify({
      message: error.value.message,
      color: 'danger',
    })
  }
})

const onUserSaved = async (user: User) => {
  saving.value = true
  try {
    // 设置头像为空字符串，不使用头像功能
    user.avatar = ''

    if (userToEdit.value) {
      await usersApi.update(user)
      if (!error.value) {
        notify({
          message: t('users.userUpdated', { name: user.fullname }),
          color: 'success',
        })
      }
    } else {
      await usersApi.add(user)
      if (!error.value) {
        notify({
          message: t('users.userCreated', { name: user.fullname }),
          color: 'success',
        })
      }
    }
    // 如果有错误，抛出异常阻止模态框关闭
    if (error.value) {
      throw error.value
    }
  } finally {
    saving.value = false
  }
}

const onUserDelete = async (user: User) => {
  await usersApi.remove(user)
  notify({
    message: t('users.userDeleted', { name: user.fullname }),
    color: 'success',
  })
}

const editFormRef = ref()

const { confirm } = useModal()

const beforeEditFormModalClose = async (hide: () => unknown) => {
  if (editFormRef.value.isFormHasUnsavedChanges) {
    const agreed = await confirm({
      maxWidth: '380px',
      message: t('users.formUnsavedChanges'),
      size: 'small',
    })
    if (agreed) {
      hide()
    }
  } else {
    hide()
  }
}
</script>

<template>
  <h1 class="page-title">{{ t('users.title') }}</h1>

  <VaCard>
    <VaCardContent>
      <div class="flex flex-col md:flex-row gap-2 mb-2 justify-between">
        <div class="flex flex-col md:flex-row gap-2 justify-start">
          <VaInput v-model="filters.search" :placeholder="t('users.search')">
            <template #prependInner>
              <VaIcon name="search" color="secondary" size="small" />
            </template>
          </VaInput>
        </div>
        <VaButton @click="showAddUserModal">{{ t('users.addUser') }}</VaButton>
      </div>
      <UsersTable
        v-model:sort-by="sorting.sortBy"
        v-model:sorting-order="sorting.sortingOrder"
        :users="users"
        :loading="isLoading"
        :pagination="pagination"
        @editUser="showEditUserModal"
        @deleteUser="onUserDelete"
      />
    </VaCardContent>
  </VaCard>
  <VaModal
    v-slot="{ cancel, ok }"
    v-model="doShowEditUserModal"
    size="small"
    mobile-fullscreen
    close-button
    hide-default-actions
    :before-cancel="beforeEditFormModalClose"
  >
    <h1 class="va-h5">{{ userToEdit ? t('users.editUser') : t('users.addUser') }}</h1>
    <EditUserForm
      ref="editFormRef"
      :user="userToEdit"
      :loading="saving"
      :save-button-label="userToEdit ? t('users.save') : t('users.addUser')"
      @close="cancel"
      @save="
        async (user) => {
          try {
            await onUserSaved(user)
            ok()
          } catch (e) {
            // 如果保存失败，不关闭模态框
            console.error('Save failed:', e)
          }
        }
      "
  /></VaModal>
</template>
