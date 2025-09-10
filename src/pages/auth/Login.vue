<template>
  <VaForm ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">登 录</h1>
    <VaInput
      v-model="formData.username"
      :rules="[validators.required]"
      class="mb-4"
      label="用户名"
      type="text"
      :disabled="isLoading"
    />
    <VaValue v-slot="isPasswordVisible" :default-value="false">
      <VaInput
        v-model="formData.password"
        :rules="[validators.required]"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        class="mb-4"
        label="密码"
        @clickAppendInner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <VaIcon
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            class="cursor-pointer"
            color="secondary"
          />
        </template>
      </VaInput>
    </VaValue>

    <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify">
      <RouterLink :to="{ name: 'recover-password' }" class="mt-2 sm:mt-0 sm:ml-1 font-semibold text-primary">
        忘记密码?
      </RouterLink>
    </div>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" @click="submit"> 登 录</VaButton>
    </div>
  </VaForm>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useToast } from 'vuestic-ui'
import { useUserStore } from '../../stores/user-store'
import { validators } from '../../services/utils'

const { validate } = useForm('form')
const { push: routerPush } = useRouter()
const { init } = useToast()
const userStore = useUserStore()

const isLoading = ref(false)

const formData = reactive({
  username: '',
  password: '',
})

const submit = async () => {
  if (!validate()) return

  isLoading.value = true

  try {
    const result = await userStore.login({
      username: formData.username,
      password: formData.password,
    })

    if (result.success) {
      init({
        message: `欢迎回来，${result.data.fullName}！`,
        color: 'success',
      })
      await routerPush('/admin/users')
    } else {
      init({
        message: result.message || '登录失败，请检查用户名和密码',
        color: 'danger',
      })
    }
  } catch (error: any) {
    console.error('登录错误:', error)
    init({
      message: '登录失败，请稍后重试',
      color: 'danger',
    })
  } finally {
    isLoading.value = false
  }
}
</script>
