import { L as f } from './index-Cevhl5Fs.js'
import { C, p as g, a as h, b as _, d as L, L as k, P as v, c as S, i as x } from './Dashboard-DVRfWaeA.js'
import { d as b, r as y, p, B, o as E, e as G, i as P } from './index-0P5HgXYM.js'
import './fabrics-ICBww9Ht.js'
import './useUsers-CVVRekrF.js'
import './v4-Ch9TGLTe.js'
const j = b({
  __name: 'LineChart',
  props: { data: {}, options: {} },
  setup(d) {
    C.register(g, h, _, L, k, v, S, x)
    const e = y(),
      o = d,
      n = p(() => {
        var t
        return e.value ? ((t = e.value.chart) == null ? void 0 : t.ctx) ?? null : null
      }),
      { setHSLAColor: s, getColor: u } = B(),
      i = ['primary', 'success', 'danger', 'warning'],
      m = p(() => {
        if (!n.value) return o.data
        const t = (r) => {
            const a = n.value.createLinearGradient(0, 0, 0, 90)
            return a.addColorStop(0, s(r, { a: 0.4 })), a.addColorStop(1, s(r, { a: 0 })), a
          },
          l = o.data.datasets.map((r, a) => {
            const c = u(i[a % i.length])
            return { ...r, fill: !0, backgroundColor: t(c), borderColor: c, pointRadius: 0, borderWidth: 2 }
          })
        return { ...o.data, datasets: l }
      })
    return (t, l) => (
      E(), G(P(f), { ref_key: 'chart', ref: e, data: m.value, options: t.options }, null, 8, ['data', 'options'])
    )
  },
})
export { j as default }
//# sourceMappingURL=LineChart-BSmS5uCL.js.map
