import {
  d as C,
  u as B,
  a as L,
  r as N,
  b as j,
  c as a,
  e as F,
  w as r,
  f as p,
  o as R,
  g as m,
  h as n,
  i as f,
  j as _,
} from './index-0P5HgXYM.js'
import { u as S, v } from './utils-CXsEiNOM.js'
import { u as U } from './useToast-BC5rw6nA.js'
const q = { class: 'auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify' },
  A = { class: 'flex justify-center mt-4' },
  M = C({
    __name: 'Login',
    setup(T) {
      const { validate: V } = S('form'),
        { push: x } = B(),
        { init: l } = U(),
        y = L(),
        u = N(!1),
        s = j({ username: '', password: '' }),
        i = async () => {
          if (V()) {
            u.value = !0
            try {
              const o = await y.login({ username: s.username, password: s.password })
              o.success
                ? (l({ message: `欢迎回来，${o.data.fullName}！`, color: 'success' }), await x('/admin/users'))
                : l({ message: o.message || '登录失败，请检查用户名和密码', color: 'danger' })
            } catch (o) {
              console.error('登录错误:', o), l({ message: '登录失败，请稍后重试', color: 'danger' })
            } finally {
              u.value = !1
            }
          }
        }
      return (o, e) => {
        const d = a('VaInput'),
          b = a('VaIcon'),
          w = a('VaValue'),
          g = a('RouterLink'),
          k = a('VaButton'),
          I = a('VaForm')
        return (
          R(),
          F(
            I,
            { ref: 'form', onSubmit: p(i, ['prevent']) },
            {
              default: r(() => [
                e[4] || (e[4] = m('h1', { class: 'font-semibold text-4xl mb-4' }, '登 录', -1)),
                n(
                  d,
                  {
                    modelValue: s.username,
                    'onUpdate:modelValue': e[0] || (e[0] = (t) => (s.username = t)),
                    rules: [f(v).required],
                    class: 'mb-4',
                    label: '用户名',
                    type: 'text',
                    disabled: u.value,
                  },
                  null,
                  8,
                  ['modelValue', 'rules', 'disabled'],
                ),
                n(
                  w,
                  { 'default-value': !1 },
                  {
                    default: r((t) => [
                      n(
                        d,
                        {
                          modelValue: s.password,
                          'onUpdate:modelValue': e[1] || (e[1] = (c) => (s.password = c)),
                          rules: [f(v).required],
                          type: t.value ? 'text' : 'password',
                          class: 'mb-4',
                          label: '密码',
                          onClickAppendInner: p((c) => (t.value = !t.value), ['stop']),
                        },
                        {
                          appendInner: r(() => [
                            n(
                              b,
                              {
                                name: t.value ? 'mso-visibility_off' : 'mso-visibility',
                                class: 'cursor-pointer',
                                color: 'secondary',
                              },
                              null,
                              8,
                              ['name'],
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ['modelValue', 'rules', 'type', 'onClickAppendInner'],
                      ),
                    ]),
                    _: 1,
                  },
                ),
                m('div', q, [
                  n(
                    g,
                    { to: { name: 'recover-password' }, class: 'mt-2 sm:mt-0 sm:ml-1 font-semibold text-primary' },
                    { default: r(() => e[2] || (e[2] = [_(' 忘记密码? ')])), _: 1 },
                  ),
                ]),
                m('div', A, [
                  n(k, { class: 'w-full', onClick: i }, { default: r(() => e[3] || (e[3] = [_(' 登 录')])), _: 1 }),
                ]),
              ]),
              _: 1,
            },
            512,
          )
        )
      }
    },
  })
export { M as default }
//# sourceMappingURL=Login-Bdo3PIOR.js.map
