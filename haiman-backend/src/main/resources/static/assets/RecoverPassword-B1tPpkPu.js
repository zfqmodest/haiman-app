import {
  d as g,
  u as w,
  r as y,
  b as k,
  c as o,
  e as B,
  w as n,
  f as C,
  o as R,
  g as a,
  h as l,
  i as u,
  j as d,
} from './index-0P5HgXYM.js'
import { u as j, v as f } from './utils-CXsEiNOM.js'
import { u as F } from './useToast-BC5rw6nA.js'
const L = { class: 'auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between' },
  N = { class: 'flex justify-center mt-4' },
  q = g({
    __name: 'RecoverPassword',
    setup(P) {
      const { validate: c } = j('form'),
        { push: p } = w(),
        { init: r } = F(),
        t = y(!1),
        i = k({ email: '' }),
        m = async () => {
          if (c()) {
            t.value = !0
            try {
              await new Promise((s) => setTimeout(s, 1e3)),
                r({ message: '重置密码链接已发送到您的邮箱！', color: 'success' }),
                await p({ name: 'login' })
            } catch (s) {
              console.error('发送重置邮件错误:', s), r({ message: '发送失败，请稍后重试', color: 'danger' })
            } finally {
              t.value = !1
            }
          }
        }
      return (s, e) => {
        const _ = o('VaInput'),
          b = o('RouterLink'),
          v = o('VaButton'),
          x = o('VaForm')
        return (
          R(),
          B(
            x,
            { ref: 'form', onSubmit: C(m, ['prevent']) },
            {
              default: n(() => [
                e[3] || (e[3] = a('h1', { class: 'font-semibold text-4xl mb-4' }, '重置密码', -1)),
                e[4] ||
                  (e[4] = a(
                    'p',
                    { class: 'text-base mb-4 leading-5' },
                    '请输入您的邮箱地址，我们将向您发送重置密码的链接。',
                    -1,
                  )),
                l(
                  _,
                  {
                    modelValue: i.email,
                    'onUpdate:modelValue': e[0] || (e[0] = (V) => (i.email = V)),
                    rules: [u(f).required, u(f).email],
                    class: 'mb-4',
                    label: '邮箱地址',
                    type: 'email',
                    disabled: t.value,
                  },
                  null,
                  8,
                  ['modelValue', 'rules', 'disabled'],
                ),
                a('div', L, [
                  l(
                    b,
                    { to: { name: 'login' }, class: 'mt-2 sm:mt-0 font-semibold text-primary' },
                    { default: n(() => e[1] || (e[1] = [d(' 返回登录 ')])), _: 1 },
                  ),
                ]),
                a('div', N, [
                  l(
                    v,
                    { class: 'w-full', loading: t.value, onClick: m },
                    { default: n(() => e[2] || (e[2] = [d(' 发送重置链接 ')])), _: 1 },
                    8,
                    ['loading'],
                  ),
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
export { q as default }
//# sourceMappingURL=RecoverPassword-B1tPpkPu.js.map
