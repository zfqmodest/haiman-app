import { p as a, Y as l, R as r, Z as u, $ as c, a0 as i } from './index-0P5HgXYM.js'
const p = () => {
    const e = r()
    return a(() => {
      var o
      return ((o = l()) == null ? void 0 : o._context) || (e == null ? void 0 : e.appContext)
    })
  },
  v = () => {
    const e = p(),
      o = [],
      s = (t) => {
        const n = u(t, e.value)
        return n && o.push(n), n
      }
    return {
      init: (t) => s(t),
      notify: s,
      close: (t) => c(t),
      closeAll: (t = !1) => i(t ? void 0 : e.value),
      closeAllCreatedInThisHook: () => {
        o.forEach((t) => c(t))
      },
    }
  }
export { v as u }
//# sourceMappingURL=useToast-BC5rw6nA.js.map
