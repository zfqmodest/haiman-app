<template>
  <VaForm ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">重置密码</h1>
    <p class="text-base mb-4 leading-5">请输入您的邮箱地址，我们将向您发送重置密码的链接。</p>
    <VaInput
      v-model="formData.email"
      :rules="[validators.required, validators.email]"
      class="mb-4"
      label="邮箱地址"
      type="email"
      :disabled="isLoading"
    />

    <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <RouterLink :to="{ name: 'login' }" class="mt-2 sm:mt-0 font-semibold text-primary"> 返回登录 </RouterLink>
    </div>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" :loading="isLoading" @click="submit"> 发送重置链接 </VaButton>
    </div>
  </VaForm>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useToast } from 'vuestic-ui'
import { validators } from '../../services/utils'

const { validate } = useForm('form')
const { push: routerPush } = useRouter()
const { init } = useToast()

const isLoading = ref(false)

const formData = reactive({
  email: '',
})

const submit = async () => {
  if (!validate()) return

  isLoading.value = true

  try {
    // 模拟发送重置邮件
    await new Promise((resolve) => setTimeout(resolve, 1000))

    init({
      message: '重置密码链接已发送到您的邮箱！',
      color: 'success',
    })

    // 可以跳转到检查邮件页面或返回登录页面
    await routerPush({ name: 'login' })
  } catch (error: any) {
    console.error('发送重置邮件错误:', error)
    init({
      message: '发送失败，请稍后重试',
      color: 'danger',
    })
  } finally {
    isLoading.value = false
  }
}
</script>
