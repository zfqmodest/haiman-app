<script setup lang="ts">
import { PropType, computed, ref, watch } from 'vue'
import { useForm } from 'vuestic-ui'
import { useI18n } from 'vue-i18n'
import { User, UserRole } from '../types'
import UserAvatar from './UserAvatar.vue'
import { createValidators } from '../../../services/utils'

const { t } = useI18n()
const validators = createValidators()
const showPassword = ref(false)

const props = defineProps({
  user: {
    type: Object as PropType<User | null>,
    default: null,
  },
  saveButtonLabel: {
    type: String,
    default: 'Save',
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const defaultNewUser: Omit<User, 'id'> = {
  fullName: '',
  role: 3, // 默认为普通人员
  username: '',
  email: '',
  password: '',
  notes: '', // 虽然不在界面显示，但仍然保留
  phone: '',
  active: true, // 虽然不在界面显示，但仍然保留默认为活跃状态
}

const newUser = ref<User>({ ...defaultNewUser } as User)

const isFormHasUnsavedChanges = computed(() => {
  return Object.keys(newUser.value).some((key) => {
    if (key === 'avatar') {
      return false
    }

    return (
      newUser.value[key as keyof Omit<User, 'id'>] !== (props.user ?? defaultNewUser)?.[key as keyof Omit<User, 'id'>]
    )
  })
})

defineExpose({
  isFormHasUnsavedChanges,
})

watch(
  () => props.user,
  () => {
    if (!props.user) {
      return
    }

    newUser.value = {
      ...props.user,
      avatar: '', // 始终使用空字符串作为头像
    }
  },
  { immediate: true },
)

const form = useForm('add-user-form')

const emit = defineEmits(['close', 'save'])

const onSave = () => {
  if (form.validate()) {
    emit('save', newUser.value)
  }
}

const roleSelectOptions = computed(() => {
  // 如果是编辑现有用户且该用户是管理员，允许保持管理员角色
  // 如果是添加新用户，不提供管理员角色选项
  if (props.user && props.user.role === 1) {
    return [
      { text: '管理员', value: 1 as UserRole },
      { text: '测试人员', value: 2 as UserRole },
      { text: '普通人员', value: 3 as UserRole },
    ]
  } else {
    return [
      { text: '测试人员', value: 2 as UserRole },
      { text: '普通人员', value: 3 as UserRole },
    ]
  }
})
</script>

<template>
  <VaForm v-slot="{ isValid }" ref="add-user-form" class="flex-col justify-start items-start gap-4 inline-flex w-full">
    <div class="self-stretch justify-start items-center gap-4 inline-flex">
      <UserAvatar :user="newUser" size="large" />
    </div>
    <div class="self-stretch flex-col justify-start items-start gap-4 flex">
      <div class="flex gap-4 flex-col sm:flex-row w-full">
        <VaInput
          v-model="newUser.fullName"
          :label="t('users.fullName')"
          class="w-full sm:w-1/2"
          :rules="[validators.required]"
          name="fullName"
        />
        <VaInput
          v-model="newUser.username"
          :label="t('users.username')"
          class="w-full sm:w-1/2"
          :rules="[validators.required]"
          name="username"
        />
      </div>
      <div class="flex gap-4 flex-col sm:flex-row w-full">
        <VaInput
          v-model="newUser.email"
          :label="t('users.email')"
          class="w-full sm:w-1/2"
          :rules="[validators.required]"
          name="email"
          type="email"
        />
        <div class="w-full sm:w-1/2">
          <VaInput
            v-model="newUser.password"
            :label="t('users.password')"
            class="w-full"
            :rules="props.user ? [] : [validators.required]"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            :placeholder="props.user ? t('users.passwordInputHint') : ''"
          >
            <template #append>
              <VaButton
                :icon="showPassword ? 'visibility' : 'visibility_off'"
                size="small"
                preset="secondary"
                :aria-label="showPassword ? t('users.hidePassword') : t('users.showPassword')"
                @click="showPassword = !showPassword"
              />
            </template>
          </VaInput>
          <small v-if="props.user" class="text-gray-500">{{ t('users.passwordChangeHint') }}</small>
        </div>
      </div>
      <div class="flex gap-4 flex-col sm:flex-row w-full">
        <VaInput
          v-model="newUser.phone"
          :label="t('users.phone')"
          class="w-full sm:w-1/2"
          :rules="[validators.required]"
          name="phone"
        />
        <VaSelect
          v-model="newUser.role"
          :label="t('users.role')"
          class="w-full sm:w-1/2"
          :options="roleSelectOptions"
          :rules="[validators.required]"
          name="role"
          value-by="value"
        />
      </div>

      <div class="flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center">
        <VaButton preset="secondary" color="secondary" :disabled="loading" @click="$emit('close')">{{
          t('users.cancel')
        }}</VaButton>
        <VaButton :disabled="!isValid || loading" :loading="loading" @click="onSave">{{ saveButtonLabel }}</VaButton>
      </div>
    </div>
  </VaForm>
</template>
