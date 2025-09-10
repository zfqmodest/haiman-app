export const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Validation */
export const validators = {
  email: (v: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(v) || 'Please enter a valid email address'
  },
  required: (v: any) => !!v || 'This field is required',
  name: (v: string) => {
    const pattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/
    return pattern.test(v) || 'Please enter a valid name'
  },
}
