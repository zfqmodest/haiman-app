import { useI18n } from 'vue-i18n'

export const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Validation */
export const validators = {
  email: (v: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(v) || 'users.errors.invalidEmail'
  },
  required: (v: any) => !!v || 'users.errors.required',
  name: (v: string) => {
    const pattern = /^[a-zA-Zа-яА-ЯёЁ\u4e00-\u9fa5\s-]+$/
    return pattern.test(v) || 'users.errors.invalidName'
  },
}

/** 创建支持 i18n 的验证器 */
export const createValidators = () => {
  const { t } = useI18n()

  return {
    email: (v: string) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return pattern.test(v) || t('users.errors.invalidEmail')
    },
    required: (v: any) => !!v || t('users.errors.required'),
    name: (v: string) => {
      const pattern = /^[a-zA-Zа-яА-ЯёЁ\u4e00-\u9fa5\s-]+$/
      return pattern.test(v) || t('users.errors.invalidName')
    },
  }
}
