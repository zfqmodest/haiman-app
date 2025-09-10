import { Q as s, p as r, r as u } from './index-0P5HgXYM.js'
const t = (l) => {
    const a = typeof l == 'string' ? s(l) : typeof l > 'u' ? u() : l
    return {
      formRef: a,
      isValid: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.isValid) || !1
      }),
      immediate: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.immediate) || !1
      }),
      isLoading: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.isLoading) || !1
      }),
      isDirty: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.isDirty) || !1
      }),
      isTouched: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.isTouched) || !1
      }),
      fields: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.fields) ?? []
      }),
      fieldsNamed: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.fieldsNamed) ?? []
      }),
      fieldNames: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.fieldNames) ?? []
      }),
      formData: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.formData) ?? {}
      }),
      errorMessages: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.errorMessages) || []
      }),
      errorMessagesNamed: r(() => {
        var e
        return ((e = a.value) == null ? void 0 : e.errorMessagesNamed) || {}
      }),
      validate: () => {
        var e
        return (e = a.value) == null ? void 0 : e.validate()
      },
      validateAsync: () => {
        var e
        return (e = a.value) == null ? void 0 : e.validateAsync()
      },
      reset: () => {
        var e
        return (e = a.value) == null ? void 0 : e.reset()
      },
      resetValidation: () => {
        var e
        return (e = a.value) == null ? void 0 : e.resetValidation()
      },
      focus: () => {
        var e
        return (e = a.value) == null ? void 0 : e.focus()
      },
      focusInvalidField: () => {
        var e
        return (e = a.value) == null ? void 0 : e.focusInvalidField()
      },
    }
  },
  n = {
    email: (l) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l) || 'Please enter a valid email address',
    required: (l) => !!l || 'This field is required',
    name: (l) => /^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(l) || 'Please enter a valid name',
  }
export { t as u, n as v }
//# sourceMappingURL=utils-CXsEiNOM.js.map
