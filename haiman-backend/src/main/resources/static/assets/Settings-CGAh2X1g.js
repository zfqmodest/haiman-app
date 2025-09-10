import {
  d as p,
  l as m,
  p as s,
  c as f,
  o as h,
  k as b,
  g as o,
  t as r,
  i as d,
  h as _,
  B as k,
  e as S,
} from './index-0P5HgXYM.js'
const y = { class: 'flex items-center justify-between' },
  B = { class: 'w-40' },
  j = p({
    __name: 'LanguageSwitcher',
    setup(v) {
      const { locale: t, t: n } = m(),
        l = s(() => ({ english: n('language.english'), simplified_chinese: n('language.simplified_chinese') })),
        a = s(() => ({ gb: l.value.english, cn: l.value.simplified_chinese })),
        g = s(() => Object.fromEntries(Object.entries(a.value).map(([c, e]) => [e, c]))),
        i = s(() => Object.values(a.value)),
        u = s({
          get() {
            return a.value[t.value]
          },
          set(c) {
            const e = g.value[c]
            e && (t.value = e)
          },
        })
      return (c, e) => {
        const V = f('VaSelect')
        return (
          h(),
          b('div', y, [
            o('p', null, r(d(n)('settings.language')), 1),
            o('div', B, [
              _(
                V,
                { modelValue: u.value, 'onUpdate:modelValue': e[0] || (e[0] = (x) => (u.value = x)), options: i.value },
                null,
                8,
                ['modelValue', 'options'],
              ),
            ]),
          ])
        )
      }
    },
  }),
  w = p({
    __name: 'ThemeSwitcher',
    setup(v) {
      const { applyPreset: t, currentPresetName: n } = k(),
        l = s({
          get() {
            return n.value
          },
          set(i) {
            t(i)
          },
        }),
        { t: a } = m(),
        g = s(() => [
          { label: a('buttonSelect.dark'), value: 'dark' },
          { label: a('buttonSelect.light'), value: 'light' },
        ])
      return (i, u) => {
        const c = f('VaButtonToggle')
        return (
          h(),
          S(
            c,
            {
              modelValue: l.value,
              'onUpdate:modelValue': u[0] || (u[0] = (e) => (l.value = e)),
              color: 'background-element',
              'border-color': 'background-element',
              options: g.value,
            },
            null,
            8,
            ['modelValue', 'options'],
          )
        )
      }
    },
  }),
  C = { class: 'flex flex-col space-y-6 md:space-y-4' },
  N = { class: 'page-title' },
  $ = { class: 'flex flex-col p-4 space-y-4 bg-backgroundSecondary rounded-lg' },
  O = { class: 'h3' },
  P = { class: 'flex flex-col p-4 space-y-4 bg-backgroundSecondary rounded-lg' },
  T = { class: 'h3' },
  U = p({
    __name: 'Settings',
    setup(v) {
      const { t } = m()
      return (n, l) => (
        h(),
        b('div', C, [
          o('h1', N, r(d(t)('menu.settings')), 1),
          o('div', $, [o('h3', O, r(d(t)('settings.theme')), 1), _(w)]),
          o('div', P, [o('h3', T, r(d(t)('settings.generalPreferences')), 1), _(j)]),
        ])
      )
    },
  })
export { U as default }
//# sourceMappingURL=Settings-CGAh2X1g.js.map
