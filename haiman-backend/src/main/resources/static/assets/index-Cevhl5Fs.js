import { C, e as q, D as A, f as K, g as R, h as T } from './Dashboard-DVRfWaeA.js'
import {
  d as O,
  X as L,
  a1 as P,
  a2 as U,
  r as k,
  m as X,
  a3 as $,
  I as z,
  a4 as D,
  n as E,
  a5 as w,
} from './index-0P5HgXYM.js'
const B = {
    data: { type: Object, required: !0 },
    options: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] },
    datasetIdKey: { type: String, default: 'label' },
    updateMode: { type: String, default: void 0 },
  },
  F = { ariaLabel: { type: String }, ariaDescribedby: { type: String } },
  G = { type: { type: String, required: !0 }, ...B, ...F },
  H = U[0] === '2' ? (t, e) => Object.assign(t, { attrs: e }) : (t, e) => Object.assign(t, e)
function u(t) {
  return w(t) ? D(t) : t
}
function J(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t
  return w(e) ? new Proxy(t, {}) : t
}
function N(t, e) {
  const s = t.options
  s && e && Object.assign(s, e)
}
function S(t, e) {
  t.labels = e
}
function I(t, e, s) {
  const o = []
  t.datasets = e.map((n) => {
    const a = t.datasets.find((c) => c[s] === n[s])
    return !a || !n.data || o.includes(a) ? { ...n } : (o.push(a), Object.assign(a, n), a)
  })
}
function Q(t, e) {
  const s = { labels: [], datasets: [] }
  return S(s, t.labels), I(s, t.datasets, e), s
}
const V = O({
  props: G,
  setup(t, e) {
    let { expose: s, slots: o } = e
    const n = k(null),
      a = L(null)
    s({ chart: a })
    const c = () => {
        if (!n.value) return
        const { type: r, data: b, options: y, plugins: p, datasetIdKey: v } = t,
          g = Q(b, v),
          i = J(g, b)
        a.value = new C(n.value, { type: r, data: i, options: { ...y }, plugins: p })
      },
      d = () => {
        const r = D(a.value)
        r && (r.destroy(), (a.value = null))
      },
      M = (r) => {
        r.update(t.updateMode)
      }
    return (
      X(c),
      $(d),
      z(
        [() => t.options, () => t.data],
        (r, b) => {
          let [y, p] = r,
            [v, g] = b
          const i = D(a.value)
          if (!i) return
          let h = !1
          if (y) {
            const l = u(y),
              m = u(v)
            l && l !== m && (N(i, l), (h = !0))
          }
          if (p) {
            const l = u(p.labels),
              m = u(g.labels),
              x = u(p.datasets),
              j = u(g.datasets)
            l !== m && (S(i.config.data, l), (h = !0)), x && x !== j && (I(i.config.data, x, t.datasetIdKey), (h = !0))
          }
          h &&
            E(() => {
              M(i)
            })
        },
        { deep: !0 },
      ),
      () =>
        P('canvas', { role: 'img', ariaLabel: t.ariaLabel, ariaDescribedby: t.ariaDescribedby, ref: n }, [
          P('p', {}, [o.default ? o.default() : '']),
        ])
    )
  },
})
function f(t, e) {
  return (
    C.register(e),
    O({
      props: B,
      setup(s, o) {
        let { expose: n } = o
        const a = L(null),
          c = (d) => {
            a.value = d == null ? void 0 : d.chart
          }
        return n({ chart: a }), () => P(V, H({ ref: c }, { type: t, ...s }))
      },
    })
  )
}
const Z = f('bar', q),
  _ = f('doughnut', A),
  tt = f('line', K),
  et = f('pie', R),
  at = f('bubble', T)
export { at as B, _ as D, tt as L, et as P, Z as a }
//# sourceMappingURL=index-Cevhl5Fs.js.map
