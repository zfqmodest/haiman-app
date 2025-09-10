import { d as n, c as a, k as r, g as t, j as o, h as l, w as i, o as m } from './index-0P5HgXYM.js'
const d = { class: 'text-base mb-4 leading-5' },
  f = n({
    __name: 'Signup',
    setup(p) {
      return (u, e) => {
        const s = a('RouterLink')
        return (
          m(),
          r('div', null, [
            e[2] || (e[2] = t('h1', { class: 'font-semibold text-4xl mb-4' }, '注册', -1)),
            t('p', d, [
              e[1] || (e[1] = o(' 已有账户？ ')),
              l(
                s,
                { to: { name: 'login' }, class: 'font-semibold text-primary' },
                { default: i(() => e[0] || (e[0] = [o('立即登录')])), _: 1 },
              ),
            ]),
          ])
        )
      }
    },
  })
export { f as default }
//# sourceMappingURL=Signup-pw8UUdNc.js.map
