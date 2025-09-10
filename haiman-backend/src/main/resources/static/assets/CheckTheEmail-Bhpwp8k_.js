import { d as s, c as n, k as a, g as t, h as l, w as r, o as m, j as i } from './index-0P5HgXYM.js'
const x = s({
  __name: 'CheckTheEmail',
  setup(d) {
    return (p, e) => {
      const o = n('RouterLink')
      return (
        m(),
        a('div', null, [
          e[1] || (e[1] = t('h1', { class: 'font-semibold text-4xl mb-4' }, '检查邮箱', -1)),
          e[2] ||
            (e[2] = t(
              'p',
              { class: 'text-base mb-4 leading-5' },
              '我们已经向您的邮箱发送了重置密码的链接，请检查您的邮箱。',
              -1,
            )),
          l(
            o,
            { to: { name: 'login' }, class: 'font-semibold text-primary' },
            { default: r(() => e[0] || (e[0] = [i('返回登录')])), _: 1 },
          ),
        ])
      )
    }
  },
})
export { x as default }
//# sourceMappingURL=CheckTheEmail-Bhpwp8k_.js.map
