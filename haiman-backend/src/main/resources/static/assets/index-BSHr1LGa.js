import {
  R as J,
  S as j,
  i as $,
  m as I,
  n as W,
  r as D,
  T as R,
  I as M,
  U as G,
  W as H,
  X as U,
  p as K,
} from './index-0P5HgXYM.js'
const me = () => {
  var e
  const t = (e = J()) == null ? void 0 : e.appContext
  if (!t)
    throw new Error(
      'useModal can be used only in setup function. You can use app.config.globalProperties.$vaModal outside setup function',
    )
  return {
    init: (r) => j(r, t),
    confirm: (r) =>
      typeof r == 'string'
        ? new Promise((a, m) => {
            j(
              {
                message: r,
                onOk() {
                  a(!0)
                },
                onCancel() {
                  a(!1)
                },
              },
              t,
            )
          })
        : new Promise((a, m) => {
            j(
              {
                ...r,
                onOk() {
                  var s
                  ;(s = r == null ? void 0 : r.onOk) == null || s.call(r), a(!0)
                },
                onCancel() {
                  var s
                  ;(s = r == null ? void 0 : r.onCancel) == null || s.call(r), a(!1)
                },
              },
              t,
            )
          }),
  }
}
function X(e) {
  return G() ? (H(e), !0) : !1
}
function T(e) {
  return typeof e == 'function' ? e() : $(e)
}
const Y = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const q = (e) => typeof e < 'u',
  B = Object.prototype.toString,
  Q = (e) => B.call(e) === '[object Object]',
  Z = () => {}
function k(e, t) {
  function n(...o) {
    return new Promise((r, a) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o }))
        .then(r)
        .catch(a)
    })
  }
  return n
}
const z = (e) => e()
function ee(e = z) {
  const t = D(!0)
  function n() {
    t.value = !1
  }
  function o() {
    t.value = !0
  }
  const r = (...a) => {
    t.value && e(...a)
  }
  return { isActive: R(t), pause: n, resume: o, eventFilter: r }
}
function te(e) {
  return J()
}
function ne(e, t, n = {}) {
  const { eventFilter: o = z, ...r } = n
  return M(e, k(o, t), r)
}
function re(e, t, n = {}) {
  const { eventFilter: o, ...r } = n,
    { eventFilter: a, pause: m, resume: s, isActive: S } = ee(o)
  return { stop: ne(e, t, { ...r, eventFilter: a }), pause: m, resume: s, isActive: S }
}
function ie(e, t = !0, n) {
  te() ? I(e, n) : t ? e() : W(e)
}
function oe(e) {
  var t
  const n = T(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const V = Y ? window : void 0
function x(...e) {
  let t, n, o, r
  if ((typeof e[0] == 'string' || Array.isArray(e[0]) ? (([n, o, r] = e), (t = V)) : ([t, n, o, r] = e), !t)) return Z
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o])
  const a = [],
    m = () => {
      a.forEach((d) => d()), (a.length = 0)
    },
    s = (d, u, y, l) => (d.addEventListener(u, y, l), () => d.removeEventListener(u, y, l)),
    S = M(
      () => [oe(t), T(r)],
      ([d, u]) => {
        if ((m(), !d)) return
        const y = Q(u) ? { ...u } : u
        a.push(...n.flatMap((l) => o.map((b) => s(d, l, b, y))))
      },
      { immediate: !0, flush: 'post' },
    ),
    w = () => {
      S(), m()
    }
  return X(w), w
}
function ae(e) {
  return JSON.parse(JSON.stringify(e))
}
const E =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  F = '__vueuse_ssr_handlers__',
  le = se()
function se() {
  return F in E || (E[F] = E[F] || {}), E[F]
}
function ue(e, t) {
  return le[e] || t
}
function ce(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const fe = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) },
    set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  P = 'vueuse-storage'
function de(e, t, n, o = {}) {
  var r
  const {
      flush: a = 'pre',
      deep: m = !0,
      listenToStorageChanges: s = !0,
      writeDefaults: S = !0,
      mergeDefaults: w = !1,
      shallow: d,
      window: u = V,
      eventFilter: y,
      onError: l = (i) => {
        console.error(i)
      },
      initOnMounted: b,
    } = o,
    p = (d ? U : D)(t)
  if (!n)
    try {
      n = ue('getDefaultStorage', () => {
        var i
        return (i = V) == null ? void 0 : i.localStorage
      })()
    } catch (i) {
      l(i)
    }
  if (!n) return p
  const g = T(t),
    N = ce(g),
    v = (r = o.serializer) != null ? r : fe[N],
    { pause: c, resume: O } = re(p, () => _(p.value), { flush: a, deep: m, eventFilter: y })
  return (
    u &&
      s &&
      ie(() => {
        x(u, 'storage', C), x(u, P, L), b && C()
      }),
    b || C(),
    p
  )
  function _(i) {
    try {
      if (i == null) n.removeItem(e)
      else {
        const f = v.write(i),
          h = n.getItem(e)
        h !== f &&
          (n.setItem(e, f),
          u && u.dispatchEvent(new CustomEvent(P, { detail: { key: e, oldValue: h, newValue: f, storageArea: n } })))
      }
    } catch (f) {
      l(f)
    }
  }
  function A(i) {
    const f = i ? i.newValue : n.getItem(e)
    if (f == null) return S && g != null && n.setItem(e, v.write(g)), g
    if (!i && w) {
      const h = v.read(f)
      return typeof w == 'function' ? w(h, g) : N === 'object' && !Array.isArray(h) ? { ...g, ...h } : h
    } else return typeof f != 'string' ? f : v.read(f)
  }
  function L(i) {
    C(i.detail)
  }
  function C(i) {
    if (!(i && i.storageArea !== n)) {
      if (i && i.key == null) {
        p.value = g
        return
      }
      if (!(i && i.key !== e)) {
        c()
        try {
          ;(i == null ? void 0 : i.newValue) !== v.write(p.value) && (p.value = A(i))
        } catch (f) {
          l(f)
        } finally {
          i ? W(O) : O()
        }
      }
    }
  }
}
function ge(e, t, n = {}) {
  const { window: o = V } = n
  return de(e, t, o == null ? void 0 : o.localStorage, n)
}
function we(e, t, n, o = {}) {
  var r, a, m
  const { clone: s = !1, passive: S = !1, eventName: w, deep: d = !1, defaultValue: u, shouldEmit: y } = o,
    l = J(),
    b =
      n ||
      (l == null ? void 0 : l.emit) ||
      ((r = l == null ? void 0 : l.$emit) == null ? void 0 : r.bind(l)) ||
      ((m = (a = l == null ? void 0 : l.proxy) == null ? void 0 : a.$emit) == null
        ? void 0
        : m.bind(l == null ? void 0 : l.proxy))
  let p = w
  t || (t = 'modelValue'), (p = p || `update:${t.toString()}`)
  const g = (c) => (s ? (typeof s == 'function' ? s(c) : ae(c)) : c),
    N = () => (q(e[t]) ? g(e[t]) : u),
    v = (c) => {
      y ? y(c) && b(p, c) : b(p, c)
    }
  if (S) {
    const c = N(),
      O = D(c)
    let _ = !1
    return (
      M(
        () => e[t],
        (A) => {
          _ || ((_ = !0), (O.value = g(A)), W(() => (_ = !1)))
        },
      ),
      M(
        O,
        (A) => {
          !_ && (A !== e[t] || d) && v(A)
        },
        { deep: d },
      ),
      O
    )
  } else
    return K({
      get() {
        return N()
      },
      set(c) {
        v(c)
      },
    })
}
export { me as a, ge as b, we as u }
//# sourceMappingURL=index-BSHr1LGa.js.map
