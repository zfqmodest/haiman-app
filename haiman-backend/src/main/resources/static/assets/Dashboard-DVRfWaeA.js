const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/PieChart-C8TMdsuP.js',
      'assets/index-Cevhl5Fs.js',
      'assets/index-0P5HgXYM.js',
      'assets/index-BH1k16dX.css',
      'assets/fabrics-ICBww9Ht.js',
      'assets/useUsers-CVVRekrF.js',
      'assets/v4-Ch9TGLTe.js',
      'assets/DoughnutChart-CNLzaOXz.js',
      'assets/BubbleChart-Bbfh61Su.js',
      'assets/LineChart-BSmS5uCL.js',
      'assets/BarChart-CfB27JJF.js',
      'assets/HorizontalBarChart-DPK0I4sv.js',
    ]),
) => i.map((i) => d[i])
var mf = Object.defineProperty
var xf = (n, t, e) => (t in n ? mf(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e))
var D = (n, t, e) => xf(n, typeof t != 'symbol' ? t + '' : t, e)
import {
  d as St,
  l as Lt,
  r as jt,
  m as lc,
  n as _f,
  o as it,
  k as Jt,
  g as A,
  _ as bs,
  p as vt,
  c as U,
  e as wt,
  w as z,
  h as R,
  t as $,
  i as E,
  j as q,
  q as Yn,
  V as ii,
  s as yf,
  v as fc,
  x as vf,
  y as Ae,
  z as Hs,
  A as wf,
  F as Yi,
  B as dc,
  C as Mf,
  D as Xe,
  E as Ge,
  G as Sf,
  H as kf,
  I as Cf,
  J as Pf,
  K as Df,
  L as Af,
} from './index-0P5HgXYM.js'
import { d as Of } from './fabrics-ICBww9Ht.js'
import { u as Tf, _ as Ef } from './useUsers-CVVRekrF.js'
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function si(n) {
  return (n + 0.5) | 0
}
const he = (n, t, e) => Math.max(Math.min(n, e), t)
function Mn(n) {
  return he(si(n * 2.55), 0, 255)
}
function be(n) {
  return he(si(n * 255), 0, 255)
}
function se(n) {
  return he(si(n / 2.55) / 100, 0, 1)
}
function ta(n) {
  return he(si(n * 100), 0, 100)
}
const Bt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Ys = [...'0123456789ABCDEF'],
  Rf = (n) => Ys[n & 15],
  Lf = (n) => Ys[(n & 240) >> 4] + Ys[n & 15],
  li = (n) => (n & 240) >> 4 === (n & 15),
  If = (n) => li(n.r) && li(n.g) && li(n.b) && li(n.a)
function zf(n) {
  var t = n.length,
    e
  return (
    n[0] === '#' &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (Bt[n[1]] * 17),
            g: 255 & (Bt[n[2]] * 17),
            b: 255 & (Bt[n[3]] * 17),
            a: t === 5 ? Bt[n[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (Bt[n[1]] << 4) | Bt[n[2]],
            g: (Bt[n[3]] << 4) | Bt[n[4]],
            b: (Bt[n[5]] << 4) | Bt[n[6]],
            a: t === 9 ? (Bt[n[7]] << 4) | Bt[n[8]] : 255,
          })),
    e
  )
}
const Ff = (n, t) => (n < 255 ? t(n) : '')
function Bf(n) {
  var t = If(n) ? Rf : Lf
  return n ? '#' + t(n.r) + t(n.g) + t(n.b) + Ff(n.a, t) : void 0
}
const Nf =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
function hc(n, t, e) {
  const i = t * Math.min(e, 1 - e),
    s = (o, a = (o + n / 30) % 12) => e - i * Math.max(Math.min(a - 3, 9 - a, 1), -1)
  return [s(0), s(8), s(4)]
}
function Vf(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0)
  return [i(5), i(3), i(1)]
}
function $f(n, t, e) {
  const i = hc(n, 1, 0.5)
  let s
  for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++) (i[s] *= 1 - t - e), (i[s] += t)
  return i
}
function jf(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4
}
function So(n) {
  const e = n.r / 255,
    i = n.g / 255,
    s = n.b / 255,
    o = Math.max(e, i, s),
    a = Math.min(e, i, s),
    r = (o + a) / 2
  let c, l, f
  return (
    o !== a &&
      ((f = o - a), (l = r > 0.5 ? f / (2 - o - a) : f / (o + a)), (c = jf(e, i, s, f, o)), (c = c * 60 + 0.5)),
    [c | 0, l || 0, r]
  )
}
function ko(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(be)
}
function Co(n, t, e) {
  return ko(hc, n, t, e)
}
function Wf(n, t, e) {
  return ko($f, n, t, e)
}
function Hf(n, t, e) {
  return ko(Vf, n, t, e)
}
function uc(n) {
  return ((n % 360) + 360) % 360
}
function Yf(n) {
  const t = Nf.exec(n)
  let e = 255,
    i
  if (!t) return
  t[5] !== i && (e = t[6] ? Mn(+t[5]) : be(+t[5]))
  const s = uc(+t[2]),
    o = +t[3] / 100,
    a = +t[4] / 100
  return (
    t[1] === 'hwb' ? (i = Wf(s, o, a)) : t[1] === 'hsv' ? (i = Hf(s, o, a)) : (i = Co(s, o, a)),
    { r: i[0], g: i[1], b: i[2], a: e }
  )
}
function Uf(n, t) {
  var e = So(n)
  ;(e[0] = uc(e[0] + t)), (e = Co(e)), (n.r = e[0]), (n.g = e[1]), (n.b = e[2])
}
function Xf(n) {
  if (!n) return
  const t = So(n),
    e = t[0],
    i = ta(t[1]),
    s = ta(t[2])
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${se(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`
}
const ea = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  na = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  }
function Gf() {
  const n = {},
    t = Object.keys(na),
    e = Object.keys(ea)
  let i, s, o, a, r
  for (i = 0; i < t.length; i++) {
    for (a = r = t[i], s = 0; s < e.length; s++) (o = e[s]), (r = r.replace(o, ea[o]))
    ;(o = parseInt(na[a], 16)), (n[r] = [(o >> 16) & 255, (o >> 8) & 255, o & 255])
  }
  return n
}
let fi
function qf(n) {
  fi || ((fi = Gf()), (fi.transparent = [0, 0, 0, 0]))
  const t = fi[n.toLowerCase()]
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
}
const Kf = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
function Zf(n) {
  const t = Kf.exec(n)
  let e = 255,
    i,
    s,
    o
  if (t) {
    if (t[7] !== i) {
      const a = +t[7]
      e = t[8] ? Mn(a) : he(a * 255, 0, 255)
    }
    return (
      (i = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (i = 255 & (t[2] ? Mn(i) : he(i, 0, 255))),
      (s = 255 & (t[4] ? Mn(s) : he(s, 0, 255))),
      (o = 255 & (t[6] ? Mn(o) : he(o, 0, 255))),
      { r: i, g: s, b: o, a: e }
    )
  }
}
function Jf(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${se(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`)
}
const ks = (n) => (n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055),
  qe = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
function Qf(n, t, e) {
  const i = qe(se(n.r)),
    s = qe(se(n.g)),
    o = qe(se(n.b))
  return {
    r: be(ks(i + e * (qe(se(t.r)) - i))),
    g: be(ks(s + e * (qe(se(t.g)) - s))),
    b: be(ks(o + e * (qe(se(t.b)) - o))),
    a: n.a + e * (t.a - n.a),
  }
}
function di(n, t, e) {
  if (n) {
    let i = So(n)
    ;(i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1))),
      (i = Co(i)),
      (n.r = i[0]),
      (n.g = i[1]),
      (n.b = i[2])
  }
}
function pc(n, t) {
  return n && Object.assign(t || {}, n)
}
function ia(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 }
  return (
    Array.isArray(n)
      ? n.length >= 3 && ((t = { r: n[0], g: n[1], b: n[2], a: 255 }), n.length > 3 && (t.a = be(n[3])))
      : ((t = pc(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = be(t.a))),
    t
  )
}
function td(n) {
  return n.charAt(0) === 'r' ? Zf(n) : Yf(n)
}
let gc = class Us {
  constructor(t) {
    if (t instanceof Us) return t
    const e = typeof t
    let i
    e === 'object' ? (i = ia(t)) : e === 'string' && (i = zf(t) || qf(t) || td(t)), (this._rgb = i), (this._valid = !!i)
  }
  get valid() {
    return this._valid
  }
  get rgb() {
    var t = pc(this._rgb)
    return t && (t.a = se(t.a)), t
  }
  set rgb(t) {
    this._rgb = ia(t)
  }
  rgbString() {
    return this._valid ? Jf(this._rgb) : void 0
  }
  hexString() {
    return this._valid ? Bf(this._rgb) : void 0
  }
  hslString() {
    return this._valid ? Xf(this._rgb) : void 0
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb,
        s = t.rgb
      let o
      const a = e === o ? 0.5 : e,
        r = 2 * a - 1,
        c = i.a - s.a,
        l = ((r * c === -1 ? r : (r + c) / (1 + r * c)) + 1) / 2
      ;(o = 1 - l),
        (i.r = 255 & (l * i.r + o * s.r + 0.5)),
        (i.g = 255 & (l * i.g + o * s.g + 0.5)),
        (i.b = 255 & (l * i.b + o * s.b + 0.5)),
        (i.a = a * i.a + (1 - a) * s.a),
        (this.rgb = i)
    }
    return this
  }
  interpolate(t, e) {
    return t && (this._rgb = Qf(this._rgb, t._rgb, e)), this
  }
  clone() {
    return new Us(this.rgb)
  }
  alpha(t) {
    return (this._rgb.a = be(t)), this
  }
  clearer(t) {
    const e = this._rgb
    return (e.a *= 1 - t), this
  }
  greyscale() {
    const t = this._rgb,
      e = si(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
    return (t.r = t.g = t.b = e), this
  }
  opaquer(t) {
    const e = this._rgb
    return (e.a *= 1 + t), this
  }
  negate() {
    const t = this._rgb
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
  }
  lighten(t) {
    return di(this._rgb, 2, t), this
  }
  darken(t) {
    return di(this._rgb, 2, -t), this
  }
  saturate(t) {
    return di(this._rgb, 1, t), this
  }
  desaturate(t) {
    return di(this._rgb, 1, -t), this
  }
  rotate(t) {
    return Uf(this._rgb, t), this
  }
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function ee() {}
const ed = (() => {
  let n = 0
  return () => n++
})()
function X(n) {
  return n === null || typeof n > 'u'
}
function at(n) {
  if (Array.isArray && Array.isArray(n)) return !0
  const t = Object.prototype.toString.call(n)
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]'
}
function Y(n) {
  return n !== null && Object.prototype.toString.call(n) === '[object Object]'
}
function ct(n) {
  return (typeof n == 'number' || n instanceof Number) && isFinite(+n)
}
function Ot(n, t) {
  return ct(n) ? n : t
}
function F(n, t) {
  return typeof n > 'u' ? t : n
}
const nd = (n, t) => (typeof n == 'string' && n.endsWith('%') ? parseFloat(n) / 100 : +n / t),
  bc = (n, t) => (typeof n == 'string' && n.endsWith('%') ? (parseFloat(n) / 100) * t : +n)
function nt(n, t, e) {
  if (n && typeof n.call == 'function') return n.apply(e, t)
}
function J(n, t, e, i) {
  let s, o, a
  if (at(n)) for (o = n.length, s = 0; s < o; s++) t.call(e, n[s], s)
  else if (Y(n)) for (a = Object.keys(n), o = a.length, s = 0; s < o; s++) t.call(e, n[a[s]], a[s])
}
function Ui(n, t) {
  let e, i, s, o
  if (!n || !t || n.length !== t.length) return !1
  for (e = 0, i = n.length; e < i; ++e)
    if (((s = n[e]), (o = t[e]), s.datasetIndex !== o.datasetIndex || s.index !== o.index)) return !1
  return !0
}
function Xi(n) {
  if (at(n)) return n.map(Xi)
  if (Y(n)) {
    const t = Object.create(null),
      e = Object.keys(n),
      i = e.length
    let s = 0
    for (; s < i; ++s) t[e[s]] = Xi(n[e[s]])
    return t
  }
  return n
}
function mc(n) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(n) === -1
}
function id(n, t, e, i) {
  if (!mc(n)) return
  const s = t[n],
    o = e[n]
  Y(s) && Y(o) ? Et(s, o, i) : (t[n] = Xi(o))
}
function Et(n, t, e) {
  const i = at(t) ? t : [t],
    s = i.length
  if (!Y(n)) return n
  e = e || {}
  const o = e.merger || id
  let a
  for (let r = 0; r < s; ++r) {
    if (((a = i[r]), !Y(a))) continue
    const c = Object.keys(a)
    for (let l = 0, f = c.length; l < f; ++l) o(c[l], n, a, e)
  }
  return n
}
function Rn(n, t) {
  return Et(n, t, { merger: sd })
}
function sd(n, t, e) {
  if (!mc(n)) return
  const i = t[n],
    s = e[n]
  Y(i) && Y(s) ? Rn(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Xi(s))
}
const sa = { '': (n) => n, x: (n) => n.x, y: (n) => n.y }
function od(n) {
  const t = n.split('.'),
    e = []
  let i = ''
  for (const s of t) (i += s), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (e.push(i), (i = ''))
  return e
}
function ad(n) {
  const t = od(n)
  return (e) => {
    for (const i of t) {
      if (i === '') break
      e = e && e[i]
    }
    return e
  }
}
function me(n, t) {
  return (sa[t] || (sa[t] = ad(t)))(n)
}
function Po(n) {
  return n.charAt(0).toUpperCase() + n.slice(1)
}
const Un = (n) => typeof n < 'u',
  xe = (n) => typeof n == 'function',
  oa = (n, t) => {
    if (n.size !== t.size) return !1
    for (const e of n) if (!t.has(e)) return !1
    return !0
  }
function rd(n) {
  return n.type === 'mouseup' || n.type === 'click' || n.type === 'contextmenu'
}
const ot = Math.PI,
  st = 2 * ot,
  cd = st + ot,
  Gi = Number.POSITIVE_INFINITY,
  ld = ot / 180,
  ft = ot / 2,
  Se = ot / 4,
  aa = (ot * 2) / 3,
  ue = Math.log10,
  Kt = Math.sign
function Ln(n, t, e) {
  return Math.abs(n - t) < e
}
function ra(n) {
  const t = Math.round(n)
  n = Ln(n, t, n / 1e3) ? t : n
  const e = Math.pow(10, Math.floor(ue(n))),
    i = n / e
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e
}
function fd(n) {
  const t = [],
    e = Math.sqrt(n)
  let i
  for (i = 1; i < e; i++) n % i === 0 && (t.push(i), t.push(n / i))
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t
}
function an(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function dd(n, t) {
  const e = Math.round(n)
  return e - t <= n && e + t >= n
}
function xc(n, t, e) {
  let i, s, o
  for (i = 0, s = n.length; i < s; i++)
    (o = n[i][e]), isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)))
}
function Ut(n) {
  return n * (ot / 180)
}
function Do(n) {
  return n * (180 / ot)
}
function ca(n) {
  if (!ct(n)) return
  let t = 1,
    e = 0
  for (; Math.round(n * t) / t !== n; ) (t *= 10), e++
  return e
}
function _c(n, t) {
  const e = t.x - n.x,
    i = t.y - n.y,
    s = Math.sqrt(e * e + i * i)
  let o = Math.atan2(i, e)
  return o < -0.5 * ot && (o += st), { angle: o, distance: s }
}
function Xs(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2))
}
function hd(n, t) {
  return ((n - t + cd) % st) - ot
}
function Tt(n) {
  return ((n % st) + st) % st
}
function Xn(n, t, e, i) {
  const s = Tt(n),
    o = Tt(t),
    a = Tt(e),
    r = Tt(o - s),
    c = Tt(a - s),
    l = Tt(s - o),
    f = Tt(s - a)
  return s === o || s === a || (i && o === a) || (r > c && l < f)
}
function ut(n, t, e) {
  return Math.max(t, Math.min(e, n))
}
function ud(n) {
  return ut(n, -32768, 32767)
}
function re(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i
}
function Ao(n, t, e) {
  e = e || ((a) => n[a] < t)
  let i = n.length - 1,
    s = 0,
    o
  for (; i - s > 1; ) (o = (s + i) >> 1), e(o) ? (s = o) : (i = o)
  return { lo: s, hi: i }
}
const ce = (n, t, e, i) =>
    Ao(
      n,
      e,
      i
        ? (s) => {
            const o = n[s][t]
            return o < e || (o === e && n[s + 1][t] === e)
          }
        : (s) => n[s][t] < e,
    ),
  pd = (n, t, e) => Ao(n, e, (i) => n[i][t] >= e)
function gd(n, t, e) {
  let i = 0,
    s = n.length
  for (; i < s && n[i] < t; ) i++
  for (; s > i && n[s - 1] > e; ) s--
  return i > 0 || s < n.length ? n.slice(i, s) : n
}
const yc = ['push', 'pop', 'shift', 'splice', 'unshift']
function bd(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t)
    return
  }
  Object.defineProperty(n, '_chartjs', { configurable: !0, enumerable: !1, value: { listeners: [t] } }),
    yc.forEach((e) => {
      const i = '_onData' + Po(e),
        s = n[e]
      Object.defineProperty(n, e, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const a = s.apply(this, o)
          return (
            n._chartjs.listeners.forEach((r) => {
              typeof r[i] == 'function' && r[i](...o)
            }),
            a
          )
        },
      })
    })
}
function la(n, t) {
  const e = n._chartjs
  if (!e) return
  const i = e.listeners,
    s = i.indexOf(t)
  s !== -1 && i.splice(s, 1),
    !(i.length > 0) &&
      (yc.forEach((o) => {
        delete n[o]
      }),
      delete n._chartjs)
}
function vc(n) {
  const t = new Set(n)
  return t.size === n.length ? n : Array.from(t)
}
const wc = (function () {
  return typeof window > 'u'
    ? function (n) {
        return n()
      }
    : window.requestAnimationFrame
})()
function Mc(n, t) {
  let e = [],
    i = !1
  return function (...s) {
    ;(e = s),
      i ||
        ((i = !0),
        wc.call(window, () => {
          ;(i = !1), n.apply(t, e)
        }))
  }
}
function md(n, t) {
  let e
  return function (...i) {
    return t ? (clearTimeout(e), (e = setTimeout(n, t, i))) : n.apply(this, i), t
  }
}
const Oo = (n) => (n === 'start' ? 'left' : n === 'end' ? 'right' : 'center'),
  pt = (n, t, e) => (n === 'start' ? t : n === 'end' ? e : (t + e) / 2),
  xd = (n, t, e, i) => (n === (i ? 'left' : 'right') ? e : n === 'center' ? (t + e) / 2 : t)
function Sc(n, t, e) {
  const i = t.length
  let s = 0,
    o = i
  if (n._sorted) {
    const { iScale: a, _parsed: r } = n,
      c = a.axis,
      { min: l, max: f, minDefined: d, maxDefined: h } = a.getUserBounds()
    d && (s = ut(Math.min(ce(r, c, l).lo, e ? i : ce(t, c, a.getPixelForValue(l)).lo), 0, i - 1)),
      h
        ? (o = ut(Math.max(ce(r, a.axis, f, !0).hi + 1, e ? 0 : ce(t, c, a.getPixelForValue(f), !0).hi + 1), s, i) - s)
        : (o = i - s)
  }
  return { start: s, count: o }
}
function kc(n) {
  const { xScale: t, yScale: e, _scaleRanges: i } = n,
    s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max }
  if (!i) return (n._scaleRanges = s), !0
  const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max
  return Object.assign(i, s), o
}
const hi = (n) => n === 0 || n === 1,
  fa = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * st) / e)),
  da = (n, t, e) => Math.pow(2, -10 * n) * Math.sin(((n - t) * st) / e) + 1,
  In = {
    linear: (n) => n,
    easeInQuad: (n) => n * n,
    easeOutQuad: (n) => -n * (n - 2),
    easeInOutQuad: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1)),
    easeInCubic: (n) => n * n * n,
    easeOutCubic: (n) => (n -= 1) * n * n + 1,
    easeInOutCubic: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2)),
    easeInQuart: (n) => n * n * n * n,
    easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
    easeInOutQuart: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2)),
    easeInQuint: (n) => n * n * n * n * n,
    easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
    easeInOutQuint: (n) => ((n /= 0.5) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2)),
    easeInSine: (n) => -Math.cos(n * ft) + 1,
    easeOutSine: (n) => Math.sin(n * ft),
    easeInOutSine: (n) => -0.5 * (Math.cos(ot * n) - 1),
    easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
    easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
    easeInOutExpo: (n) =>
      hi(n) ? n : n < 0.5 ? 0.5 * Math.pow(2, 10 * (n * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
    easeInCirc: (n) => (n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1)),
    easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
    easeInOutCirc: (n) =>
      (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
    easeInElastic: (n) => (hi(n) ? n : fa(n, 0.075, 0.3)),
    easeOutElastic: (n) => (hi(n) ? n : da(n, 0.075, 0.3)),
    easeInOutElastic(n) {
      return hi(n) ? n : n < 0.5 ? 0.5 * fa(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * da(n * 2 - 1, 0.1125, 0.45)
    },
    easeInBack(n) {
      return n * n * ((1.70158 + 1) * n - 1.70158)
    },
    easeOutBack(n) {
      return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1
    },
    easeInOutBack(n) {
      let t = 1.70158
      return (n /= 0.5) < 1
        ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t))
        : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2)
    },
    easeInBounce: (n) => 1 - In.easeOutBounce(1 - n),
    easeOutBounce(n) {
      return n < 1 / 2.75
        ? 7.5625 * n * n
        : n < 2 / 2.75
          ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
          : n < 2.5 / 2.75
            ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
            : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375
    },
    easeInOutBounce: (n) => (n < 0.5 ? In.easeInBounce(n * 2) * 0.5 : In.easeOutBounce(n * 2 - 1) * 0.5 + 0.5),
  }
function To(n) {
  if (n && typeof n == 'object') {
    const t = n.toString()
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]'
  }
  return !1
}
function ha(n) {
  return To(n) ? n : new gc(n)
}
function Cs(n) {
  return To(n) ? n : new gc(n).saturate(0.5).darken(0.1).hexString()
}
const _d = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  yd = ['color', 'borderColor', 'backgroundColor']
function vd(n) {
  n.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    n.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
    }),
    n.set('animations', { colors: { type: 'color', properties: yd }, numbers: { type: 'number', properties: _d } }),
    n.describe('animations', { _fallback: 'animation' }),
    n.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: { animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } } },
      hide: {
        animations: { colors: { to: 'transparent' }, visible: { type: 'boolean', easing: 'linear', fn: (t) => t | 0 } },
      },
    })
}
function wd(n) {
  n.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } })
}
const ua = new Map()
function Md(n, t) {
  t = t || {}
  const e = n + JSON.stringify(t)
  let i = ua.get(e)
  return i || ((i = new Intl.NumberFormat(n, t)), ua.set(e, i)), i
}
function oi(n, t, e) {
  return Md(t, e).format(n)
}
const Cc = {
  values(n) {
    return at(n) ? n : '' + n
  },
  numeric(n, t, e) {
    if (n === 0) return '0'
    const i = this.chart.options.locale
    let s,
      o = n
    if (e.length > 1) {
      const l = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value))
      ;(l < 1e-4 || l > 1e15) && (s = 'scientific'), (o = Sd(n, e))
    }
    const a = ue(Math.abs(o)),
      r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      c = { notation: s, minimumFractionDigits: r, maximumFractionDigits: r }
    return Object.assign(c, this.options.ticks.format), oi(n, i, c)
  },
  logarithmic(n, t, e) {
    if (n === 0) return '0'
    const i = e[t].significand || n / Math.pow(10, Math.floor(ue(n)))
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * e.length ? Cc.numeric.call(this, n, t, e) : ''
  },
}
function Sd(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e
}
var ms = { formatters: Cc }
function kd(n) {
  n.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: ms.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    n.route('scale.ticks', 'color', '', 'color'),
    n.route('scale.grid', 'color', '', 'borderColor'),
    n.route('scale.border', 'color', '', 'borderColor'),
    n.route('scale.title', 'color', '', 'color'),
    n.describe('scale', {
      _fallback: !1,
      _scriptable: (t) => !t.startsWith('before') && !t.startsWith('after') && t !== 'callback' && t !== 'parser',
      _indexable: (t) => t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
    }),
    n.describe('scales', { _fallback: 'scale' }),
    n.describe('scale.ticks', {
      _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
      _indexable: (t) => t !== 'backdropPadding',
    })
}
const $e = Object.create(null),
  Gs = Object.create(null)
function zn(n, t) {
  if (!t) return n
  const e = t.split('.')
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i]
    n = n[o] || (n[o] = Object.create(null))
  }
  return n
}
function Ps(n, t, e) {
  return typeof t == 'string' ? Et(zn(n, t), e) : Et(zn(n, ''), t)
}
class Cd {
  constructor(t, e) {
    ;(this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, s) => Cs(s.backgroundColor)),
      (this.hoverBorderColor = (i, s) => Cs(s.borderColor)),
      (this.hoverColor = (i, s) => Cs(s.color)),
      (this.indexAxis = 'x'),
      (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e)
  }
  set(t, e) {
    return Ps(this, t, e)
  }
  get(t) {
    return zn(this, t)
  }
  describe(t, e) {
    return Ps(Gs, t, e)
  }
  override(t, e) {
    return Ps($e, t, e)
  }
  route(t, e, i, s) {
    const o = zn(this, t),
      a = zn(this, i),
      r = '_' + e
    Object.defineProperties(o, {
      [r]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const c = this[r],
            l = a[s]
          return Y(c) ? Object.assign({}, l, c) : F(c, l)
        },
        set(c) {
          this[r] = c
        },
      },
    })
  }
  apply(t) {
    t.forEach((e) => e(this))
  }
}
var lt = new Cd(
  {
    _scriptable: (n) => !n.startsWith('on'),
    _indexable: (n) => n !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [vd, wd, kd],
)
function Pd(n) {
  return !n || X(n.size) || X(n.family)
    ? null
    : (n.style ? n.style + ' ' : '') + (n.weight ? n.weight + ' ' : '') + n.size + 'px ' + n.family
}
function qi(n, t, e, i, s) {
  let o = t[s]
  return o || ((o = t[s] = n.measureText(s).width), e.push(s)), o > i && (i = o), i
}
function Dd(n, t, e, i) {
  i = i || {}
  let s = (i.data = i.data || {}),
    o = (i.garbageCollect = i.garbageCollect || [])
  i.font !== t && ((s = i.data = {}), (o = i.garbageCollect = []), (i.font = t)), n.save(), (n.font = t)
  let a = 0
  const r = e.length
  let c, l, f, d, h
  for (c = 0; c < r; c++)
    if (((d = e[c]), d != null && !at(d))) a = qi(n, s, o, a, d)
    else if (at(d)) for (l = 0, f = d.length; l < f; l++) (h = d[l]), h != null && !at(h) && (a = qi(n, s, o, a, h))
  n.restore()
  const u = o.length / 2
  if (u > e.length) {
    for (c = 0; c < u; c++) delete s[o[c]]
    o.splice(0, u)
  }
  return a
}
function ke(n, t, e) {
  const i = n.currentDevicePixelRatio,
    s = e !== 0 ? Math.max(e / 2, 0.5) : 0
  return Math.round((t - s) * i) / i + s
}
function pa(n, t) {
  ;(t = t || n.getContext('2d')), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore()
}
function Ki(n, t, e, i) {
  Pc(n, t, e, i, null)
}
function Pc(n, t, e, i, s) {
  let o, a, r, c, l, f, d, h
  const u = t.pointStyle,
    p = t.rotation,
    g = t.radius
  let b = (p || 0) * ld
  if (
    u &&
    typeof u == 'object' &&
    ((o = u.toString()), o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
  ) {
    n.save(),
      n.translate(e, i),
      n.rotate(b),
      n.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height),
      n.restore()
    return
  }
  if (!(isNaN(g) || g <= 0)) {
    switch ((n.beginPath(), u)) {
      default:
        s ? n.ellipse(e, i, s / 2, g, 0, 0, st) : n.arc(e, i, g, 0, st), n.closePath()
        break
      case 'triangle':
        ;(f = s ? s / 2 : g),
          n.moveTo(e + Math.sin(b) * f, i - Math.cos(b) * g),
          (b += aa),
          n.lineTo(e + Math.sin(b) * f, i - Math.cos(b) * g),
          (b += aa),
          n.lineTo(e + Math.sin(b) * f, i - Math.cos(b) * g),
          n.closePath()
        break
      case 'rectRounded':
        ;(l = g * 0.516),
          (c = g - l),
          (a = Math.cos(b + Se) * c),
          (d = Math.cos(b + Se) * (s ? s / 2 - l : c)),
          (r = Math.sin(b + Se) * c),
          (h = Math.sin(b + Se) * (s ? s / 2 - l : c)),
          n.arc(e - d, i - r, l, b - ot, b - ft),
          n.arc(e + h, i - a, l, b - ft, b),
          n.arc(e + d, i + r, l, b, b + ft),
          n.arc(e - h, i + a, l, b + ft, b + ot),
          n.closePath()
        break
      case 'rect':
        if (!p) {
          ;(c = Math.SQRT1_2 * g), (f = s ? s / 2 : c), n.rect(e - f, i - c, 2 * f, 2 * c)
          break
        }
        b += Se
      case 'rectRot':
        ;(d = Math.cos(b) * (s ? s / 2 : g)),
          (a = Math.cos(b) * g),
          (r = Math.sin(b) * g),
          (h = Math.sin(b) * (s ? s / 2 : g)),
          n.moveTo(e - d, i - r),
          n.lineTo(e + h, i - a),
          n.lineTo(e + d, i + r),
          n.lineTo(e - h, i + a),
          n.closePath()
        break
      case 'crossRot':
        b += Se
      case 'cross':
        ;(d = Math.cos(b) * (s ? s / 2 : g)),
          (a = Math.cos(b) * g),
          (r = Math.sin(b) * g),
          (h = Math.sin(b) * (s ? s / 2 : g)),
          n.moveTo(e - d, i - r),
          n.lineTo(e + d, i + r),
          n.moveTo(e + h, i - a),
          n.lineTo(e - h, i + a)
        break
      case 'star':
        ;(d = Math.cos(b) * (s ? s / 2 : g)),
          (a = Math.cos(b) * g),
          (r = Math.sin(b) * g),
          (h = Math.sin(b) * (s ? s / 2 : g)),
          n.moveTo(e - d, i - r),
          n.lineTo(e + d, i + r),
          n.moveTo(e + h, i - a),
          n.lineTo(e - h, i + a),
          (b += Se),
          (d = Math.cos(b) * (s ? s / 2 : g)),
          (a = Math.cos(b) * g),
          (r = Math.sin(b) * g),
          (h = Math.sin(b) * (s ? s / 2 : g)),
          n.moveTo(e - d, i - r),
          n.lineTo(e + d, i + r),
          n.moveTo(e + h, i - a),
          n.lineTo(e - h, i + a)
        break
      case 'line':
        ;(a = s ? s / 2 : Math.cos(b) * g), (r = Math.sin(b) * g), n.moveTo(e - a, i - r), n.lineTo(e + a, i + r)
        break
      case 'dash':
        n.moveTo(e, i), n.lineTo(e + Math.cos(b) * (s ? s / 2 : g), i + Math.sin(b) * g)
        break
      case !1:
        n.closePath()
        break
    }
    n.fill(), t.borderWidth > 0 && n.stroke()
  }
}
function le(n, t, e) {
  return (e = e || 0.5), !t || (n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e)
}
function Ie(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip()
}
function ze(n) {
  n.restore()
}
function Ad(n, t, e, i, s) {
  if (!t) return n.lineTo(e.x, e.y)
  if (s === 'middle') {
    const o = (t.x + e.x) / 2
    n.lineTo(o, t.y), n.lineTo(o, e.y)
  } else (s === 'after') != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y)
  n.lineTo(e.x, e.y)
}
function Od(n, t, e, i) {
  if (!t) return n.lineTo(e.x, e.y)
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y)
}
function Td(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]),
    X(t.rotation) || n.rotate(t.rotation),
    t.color && (n.fillStyle = t.color),
    t.textAlign && (n.textAlign = t.textAlign),
    t.textBaseline && (n.textBaseline = t.textBaseline)
}
function Ed(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i),
      a = t - o.actualBoundingBoxLeft,
      r = t + o.actualBoundingBoxRight,
      c = e - o.actualBoundingBoxAscent,
      l = e + o.actualBoundingBoxDescent,
      f = s.strikethrough ? (c + l) / 2 : l
    ;(n.strokeStyle = n.fillStyle),
      n.beginPath(),
      (n.lineWidth = s.decorationWidth || 2),
      n.moveTo(a, f),
      n.lineTo(r, f),
      n.stroke()
  }
}
function Rd(n, t) {
  const e = n.fillStyle
  ;(n.fillStyle = t.color), n.fillRect(t.left, t.top, t.width, t.height), (n.fillStyle = e)
}
function je(n, t, e, i, s, o = {}) {
  const a = at(t) ? t : [t],
    r = o.strokeWidth > 0 && o.strokeColor !== ''
  let c, l
  for (n.save(), n.font = s.string, Td(n, o), c = 0; c < a.length; ++c)
    (l = a[c]),
      o.backdrop && Rd(n, o.backdrop),
      r &&
        (o.strokeColor && (n.strokeStyle = o.strokeColor),
        X(o.strokeWidth) || (n.lineWidth = o.strokeWidth),
        n.strokeText(l, e, i, o.maxWidth)),
      n.fillText(l, e, i, o.maxWidth),
      Ed(n, e, i, l, o),
      (i += Number(s.lineHeight))
  n.restore()
}
function Gn(n, t) {
  const { x: e, y: i, w: s, h: o, radius: a } = t
  n.arc(e + a.topLeft, i + a.topLeft, a.topLeft, 1.5 * ot, ot, !0),
    n.lineTo(e, i + o - a.bottomLeft),
    n.arc(e + a.bottomLeft, i + o - a.bottomLeft, a.bottomLeft, ot, ft, !0),
    n.lineTo(e + s - a.bottomRight, i + o),
    n.arc(e + s - a.bottomRight, i + o - a.bottomRight, a.bottomRight, ft, 0, !0),
    n.lineTo(e + s, i + a.topRight),
    n.arc(e + s - a.topRight, i + a.topRight, a.topRight, 0, -ft, !0),
    n.lineTo(e + a.topLeft, i)
}
const Ld = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Id = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
function zd(n, t) {
  const e = ('' + n).match(Ld)
  if (!e || e[1] === 'normal') return t * 1.2
  switch (((n = +e[2]), e[3])) {
    case 'px':
      return n
    case '%':
      n /= 100
      break
  }
  return t * n
}
const Fd = (n) => +n || 0
function Eo(n, t) {
  const e = {},
    i = Y(t),
    s = i ? Object.keys(t) : t,
    o = Y(n) ? (i ? (a) => F(n[a], n[t[a]]) : (a) => n[a]) : () => n
  for (const a of s) e[a] = Fd(o(a))
  return e
}
function Dc(n) {
  return Eo(n, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
}
function Fe(n) {
  return Eo(n, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
function mt(n) {
  const t = Dc(n)
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t
}
function dt(n, t) {
  ;(n = n || {}), (t = t || lt.font)
  let e = F(n.size, t.size)
  typeof e == 'string' && (e = parseInt(e, 10))
  let i = F(n.style, t.style)
  i && !('' + i).match(Id) && (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0))
  const s = {
    family: F(n.family, t.family),
    lineHeight: zd(F(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: F(n.weight, t.weight),
    string: '',
  }
  return (s.string = Pd(s)), s
}
function Sn(n, t, e, i) {
  let s, o, a
  for (s = 0, o = n.length; s < o; ++s) if (((a = n[s]), a !== void 0 && a !== void 0)) return a
}
function Bd(n, t, e) {
  const { min: i, max: s } = n,
    o = bc(t, (s - i) / 2),
    a = (r, c) => (e && r === 0 ? 0 : r + c)
  return { min: a(i, -Math.abs(o)), max: a(s, o) }
}
function ve(n, t) {
  return Object.assign(Object.create(n), t)
}
function Ro(n, t = [''], e, i, s = () => n[0]) {
  const o = e || n
  typeof i > 'u' && (i = Ec('_fallback', n))
  const a = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: n,
    _rootScopes: o,
    _fallback: i,
    _getTarget: s,
    override: (r) => Ro([r, ...n], t, o, i),
  }
  return new Proxy(a, {
    deleteProperty(r, c) {
      return delete r[c], delete r._keys, delete n[0][c], !0
    },
    get(r, c) {
      return Oc(r, c, () => Ud(c, t, n, r))
    },
    getOwnPropertyDescriptor(r, c) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], c)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0])
    },
    has(r, c) {
      return ba(r).includes(c)
    },
    ownKeys(r) {
      return ba(r)
    },
    set(r, c, l) {
      const f = r._storage || (r._storage = s())
      return (r[c] = f[c] = l), delete r._keys, !0
    },
  })
}
function rn(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: Ac(n, i),
    setContext: (o) => rn(n, o, e, i),
    override: (o) => rn(n.override(o), t, e, i),
  }
  return new Proxy(s, {
    deleteProperty(o, a) {
      return delete o[a], delete n[a], !0
    },
    get(o, a, r) {
      return Oc(o, a, () => Vd(o, a, r))
    },
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys
        ? Reflect.has(n, a)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(n, a)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n)
    },
    has(o, a) {
      return Reflect.has(n, a)
    },
    ownKeys() {
      return Reflect.ownKeys(n)
    },
    set(o, a, r) {
      return (n[a] = r), delete o[a], !0
    },
  })
}
function Ac(n, t = { scriptable: !0, indexable: !0 }) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: xe(e) ? e : () => e,
    isIndexable: xe(i) ? i : () => i,
  }
}
const Nd = (n, t) => (n ? n + Po(t) : t),
  Lo = (n, t) => Y(t) && n !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object)
function Oc(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t)) return n[t]
  const i = e()
  return (n[t] = i), i
}
function Vd(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: a } = n
  let r = i[t]
  return (
    xe(r) && a.isScriptable(t) && (r = $d(t, r, n, e)),
    at(r) && r.length && (r = jd(t, r, n, a.isIndexable)),
    Lo(t, r) && (r = rn(r, s, o && o[t], a)),
    r
  )
}
function $d(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: a, _stack: r } = e
  if (r.has(n)) throw new Error('Recursion detected: ' + Array.from(r).join('->') + '->' + n)
  r.add(n)
  let c = t(o, a || i)
  return r.delete(n), Lo(n, c) && (c = Io(s._scopes, s, n, c)), c
}
function jd(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: a, _descriptors: r } = e
  if (typeof o.index < 'u' && i(n)) return t[o.index % t.length]
  if (Y(t[0])) {
    const c = t,
      l = s._scopes.filter((f) => f !== c)
    t = []
    for (const f of c) {
      const d = Io(l, s, n, f)
      t.push(rn(d, o, a && a[n], r))
    }
  }
  return t
}
function Tc(n, t, e) {
  return xe(n) ? n(t, e) : n
}
const Wd = (n, t) => (n === !0 ? t : typeof n == 'string' ? me(t, n) : void 0)
function Hd(n, t, e, i, s) {
  for (const o of t) {
    const a = Wd(e, o)
    if (a) {
      n.add(a)
      const r = Tc(a._fallback, e, s)
      if (typeof r < 'u' && r !== e && r !== i) return r
    } else if (a === !1 && typeof i < 'u' && e !== i) return null
  }
  return !1
}
function Io(n, t, e, i) {
  const s = t._rootScopes,
    o = Tc(t._fallback, e, i),
    a = [...n, ...s],
    r = new Set()
  r.add(i)
  let c = ga(r, a, e, o || e, i)
  return c === null || (typeof o < 'u' && o !== e && ((c = ga(r, a, o, c, i)), c === null))
    ? !1
    : Ro(Array.from(r), [''], s, o, () => Yd(t, e, i))
}
function ga(n, t, e, i, s) {
  for (; e; ) e = Hd(n, t, e, i, s)
  return e
}
function Yd(n, t, e) {
  const i = n._getTarget()
  t in i || (i[t] = {})
  const s = i[t]
  return at(s) && Y(e) ? e : s || {}
}
function Ud(n, t, e, i) {
  let s
  for (const o of t) if (((s = Ec(Nd(o, n), e)), typeof s < 'u')) return Lo(n, s) ? Io(e, i, n, s) : s
}
function Ec(n, t) {
  for (const e of t) {
    if (!e) continue
    const i = e[n]
    if (typeof i < 'u') return i
  }
}
function ba(n) {
  let t = n._keys
  return t || (t = n._keys = Xd(n._scopes)), t
}
function Xd(n) {
  const t = new Set()
  for (const e of n) for (const i of Object.keys(e).filter((s) => !s.startsWith('_'))) t.add(i)
  return Array.from(t)
}
function Rc(n, t, e, i) {
  const { iScale: s } = n,
    { key: o = 'r' } = this._parsing,
    a = new Array(i)
  let r, c, l, f
  for (r = 0, c = i; r < c; ++r) (l = r + e), (f = t[l]), (a[r] = { r: s.parse(me(f, o), l) })
  return a
}
const Gd = Number.EPSILON || 1e-14,
  cn = (n, t) => t < n.length && !n[t].skip && n[t],
  Lc = (n) => (n === 'x' ? 'y' : 'x')
function qd(n, t, e, i) {
  const s = n.skip ? t : n,
    o = t,
    a = e.skip ? t : e,
    r = Xs(o, s),
    c = Xs(a, o)
  let l = r / (r + c),
    f = c / (r + c)
  ;(l = isNaN(l) ? 0 : l), (f = isNaN(f) ? 0 : f)
  const d = i * l,
    h = i * f
  return {
    previous: { x: o.x - d * (a.x - s.x), y: o.y - d * (a.y - s.y) },
    next: { x: o.x + h * (a.x - s.x), y: o.y + h * (a.y - s.y) },
  }
}
function Kd(n, t, e) {
  const i = n.length
  let s,
    o,
    a,
    r,
    c,
    l = cn(n, 0)
  for (let f = 0; f < i - 1; ++f)
    if (((c = l), (l = cn(n, f + 1)), !(!c || !l))) {
      if (Ln(t[f], 0, Gd)) {
        e[f] = e[f + 1] = 0
        continue
      }
      ;(s = e[f] / t[f]),
        (o = e[f + 1] / t[f]),
        (r = Math.pow(s, 2) + Math.pow(o, 2)),
        !(r <= 9) && ((a = 3 / Math.sqrt(r)), (e[f] = s * a * t[f]), (e[f + 1] = o * a * t[f]))
    }
}
function Zd(n, t, e = 'x') {
  const i = Lc(e),
    s = n.length
  let o,
    a,
    r,
    c = cn(n, 0)
  for (let l = 0; l < s; ++l) {
    if (((a = r), (r = c), (c = cn(n, l + 1)), !r)) continue
    const f = r[e],
      d = r[i]
    a && ((o = (f - a[e]) / 3), (r[`cp1${e}`] = f - o), (r[`cp1${i}`] = d - o * t[l])),
      c && ((o = (c[e] - f) / 3), (r[`cp2${e}`] = f + o), (r[`cp2${i}`] = d + o * t[l]))
  }
}
function Jd(n, t = 'x') {
  const e = Lc(t),
    i = n.length,
    s = Array(i).fill(0),
    o = Array(i)
  let a,
    r,
    c,
    l = cn(n, 0)
  for (a = 0; a < i; ++a)
    if (((r = c), (c = l), (l = cn(n, a + 1)), !!c)) {
      if (l) {
        const f = l[t] - c[t]
        s[a] = f !== 0 ? (l[e] - c[e]) / f : 0
      }
      o[a] = r ? (l ? (Kt(s[a - 1]) !== Kt(s[a]) ? 0 : (s[a - 1] + s[a]) / 2) : s[a - 1]) : s[a]
    }
  Kd(n, s, o), Zd(n, o, t)
}
function ui(n, t, e) {
  return Math.max(Math.min(n, e), t)
}
function Qd(n, t) {
  let e,
    i,
    s,
    o,
    a,
    r = le(n[0], t)
  for (e = 0, i = n.length; e < i; ++e)
    (a = o),
      (o = r),
      (r = e < i - 1 && le(n[e + 1], t)),
      o &&
        ((s = n[e]),
        a && ((s.cp1x = ui(s.cp1x, t.left, t.right)), (s.cp1y = ui(s.cp1y, t.top, t.bottom))),
        r && ((s.cp2x = ui(s.cp2x, t.left, t.right)), (s.cp2y = ui(s.cp2y, t.top, t.bottom))))
}
function th(n, t, e, i, s) {
  let o, a, r, c
  if ((t.spanGaps && (n = n.filter((l) => !l.skip)), t.cubicInterpolationMode === 'monotone')) Jd(n, s)
  else {
    let l = i ? n[n.length - 1] : n[0]
    for (o = 0, a = n.length; o < a; ++o)
      (r = n[o]),
        (c = qd(l, r, n[Math.min(o + 1, a - (i ? 0 : 1)) % a], t.tension)),
        (r.cp1x = c.previous.x),
        (r.cp1y = c.previous.y),
        (r.cp2x = c.next.x),
        (r.cp2y = c.next.y),
        (l = r)
  }
  t.capBezierPoints && Qd(n, e)
}
function zo() {
  return typeof window < 'u' && typeof document < 'u'
}
function Fo(n) {
  let t = n.parentNode
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t
}
function Zi(n, t, e) {
  let i
  return (
    typeof n == 'string'
      ? ((i = parseInt(n, 10)), n.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[e]))
      : (i = n),
    i
  )
}
const xs = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null)
function eh(n, t) {
  return xs(n).getPropertyValue(t)
}
const nh = ['top', 'right', 'bottom', 'left']
function Be(n, t, e) {
  const i = {}
  e = e ? '-' + e : ''
  for (let s = 0; s < 4; s++) {
    const o = nh[s]
    i[o] = parseFloat(n[t + '-' + o + e]) || 0
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i
}
const ih = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot)
function sh(n, t) {
  const e = n.touches,
    i = e && e.length ? e[0] : n,
    { offsetX: s, offsetY: o } = i
  let a = !1,
    r,
    c
  if (ih(s, o, n.target)) (r = s), (c = o)
  else {
    const l = t.getBoundingClientRect()
    ;(r = i.clientX - l.left), (c = i.clientY - l.top), (a = !0)
  }
  return { x: r, y: c, box: a }
}
function Oe(n, t) {
  if ('native' in n) return n
  const { canvas: e, currentDevicePixelRatio: i } = t,
    s = xs(e),
    o = s.boxSizing === 'border-box',
    a = Be(s, 'padding'),
    r = Be(s, 'border', 'width'),
    { x: c, y: l, box: f } = sh(n, e),
    d = a.left + (f && r.left),
    h = a.top + (f && r.top)
  let { width: u, height: p } = t
  return (
    o && ((u -= a.width + r.width), (p -= a.height + r.height)),
    { x: Math.round((((c - d) / u) * e.width) / i), y: Math.round((((l - h) / p) * e.height) / i) }
  )
}
function oh(n, t, e) {
  let i, s
  if (t === void 0 || e === void 0) {
    const o = Fo(n)
    if (!o) (t = n.clientWidth), (e = n.clientHeight)
    else {
      const a = o.getBoundingClientRect(),
        r = xs(o),
        c = Be(r, 'border', 'width'),
        l = Be(r, 'padding')
      ;(t = a.width - l.width - c.width),
        (e = a.height - l.height - c.height),
        (i = Zi(r.maxWidth, o, 'clientWidth')),
        (s = Zi(r.maxHeight, o, 'clientHeight'))
    }
  }
  return { width: t, height: e, maxWidth: i || Gi, maxHeight: s || Gi }
}
const pi = (n) => Math.round(n * 10) / 10
function ah(n, t, e, i) {
  const s = xs(n),
    o = Be(s, 'margin'),
    a = Zi(s.maxWidth, n, 'clientWidth') || Gi,
    r = Zi(s.maxHeight, n, 'clientHeight') || Gi,
    c = oh(n, t, e)
  let { width: l, height: f } = c
  if (s.boxSizing === 'content-box') {
    const h = Be(s, 'border', 'width'),
      u = Be(s, 'padding')
    ;(l -= u.width + h.width), (f -= u.height + h.height)
  }
  return (
    (l = Math.max(0, l - o.width)),
    (f = Math.max(0, i ? l / i : f - o.height)),
    (l = pi(Math.min(l, a, c.maxWidth))),
    (f = pi(Math.min(f, r, c.maxHeight))),
    l && !f && (f = pi(l / 2)),
    (t !== void 0 || e !== void 0) && i && c.height && f > c.height && ((f = c.height), (l = pi(Math.floor(f * i)))),
    { width: l, height: f }
  )
}
function ma(n, t, e) {
  const i = t || 1,
    s = Math.floor(n.height * i),
    o = Math.floor(n.width * i)
  ;(n.height = Math.floor(n.height)), (n.width = Math.floor(n.width))
  const a = n.canvas
  return (
    a.style &&
      (e || (!a.style.height && !a.style.width)) &&
      ((a.style.height = `${n.height}px`), (a.style.width = `${n.width}px`)),
    n.currentDevicePixelRatio !== i || a.height !== s || a.width !== o
      ? ((n.currentDevicePixelRatio = i), (a.height = s), (a.width = o), n.ctx.setTransform(i, 0, 0, i, 0, 0), !0)
      : !1
  )
}
const rh = (function () {
  let n = !1
  try {
    const t = {
      get passive() {
        return (n = !0), !1
      },
    }
    zo() && (window.addEventListener('test', null, t), window.removeEventListener('test', null, t))
  } catch {}
  return n
})()
function xa(n, t) {
  const e = eh(n, t),
    i = e && e.match(/^(\d+)(\.\d+)?px$/)
  return i ? +i[1] : void 0
}
function Te(n, t, e, i) {
  return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) }
}
function ch(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === 'middle' ? (e < 0.5 ? n.y : t.y) : i === 'after' ? (e < 1 ? n.y : t.y) : e > 0 ? t.y : n.y,
  }
}
function lh(n, t, e, i) {
  const s = { x: n.cp2x, y: n.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    a = Te(n, s, e),
    r = Te(s, o, e),
    c = Te(o, t, e),
    l = Te(a, r, e),
    f = Te(r, c, e)
  return Te(l, f, e)
}
const fh = function (n, t) {
    return {
      x(e) {
        return n + n + t - e
      },
      setWidth(e) {
        t = e
      },
      textAlign(e) {
        return e === 'center' ? e : e === 'right' ? 'left' : 'right'
      },
      xPlus(e, i) {
        return e - i
      },
      leftForLtr(e, i) {
        return e - i
      },
    }
  },
  dh = function () {
    return {
      x(n) {
        return n
      },
      setWidth(n) {},
      textAlign(n) {
        return n
      },
      xPlus(n, t) {
        return n + t
      },
      leftForLtr(n, t) {
        return n
      },
    }
  }
function en(n, t, e) {
  return n ? fh(t, e) : dh()
}
function Ic(n, t) {
  let e, i
  ;(t === 'ltr' || t === 'rtl') &&
    ((e = n.canvas.style),
    (i = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
    e.setProperty('direction', t, 'important'),
    (n.prevTextDirection = i))
}
function zc(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty('direction', t[0], t[1]))
}
function Fc(n) {
  return n === 'angle'
    ? { between: Xn, compare: hd, normalize: Tt }
    : { between: re, compare: (t, e) => t - e, normalize: (t) => t }
}
function _a({ start: n, end: t, count: e, loop: i, style: s }) {
  return { start: n % e, end: t % e, loop: i && (t - n + 1) % e === 0, style: s }
}
function hh(n, t, e) {
  const { property: i, start: s, end: o } = e,
    { between: a, normalize: r } = Fc(i),
    c = t.length
  let { start: l, end: f, loop: d } = n,
    h,
    u
  if (d) {
    for (l += c, f += c, h = 0, u = c; h < u && a(r(t[l % c][i]), s, o); ++h) l--, f--
    ;(l %= c), (f %= c)
  }
  return f < l && (f += c), { start: l, end: f, loop: d, style: n.style }
}
function Bc(n, t, e) {
  if (!e) return [n]
  const { property: i, start: s, end: o } = e,
    a = t.length,
    { compare: r, between: c, normalize: l } = Fc(i),
    { start: f, end: d, loop: h, style: u } = hh(n, t, e),
    p = []
  let g = !1,
    b = null,
    m,
    x,
    _
  const v = () => c(s, _, m) && r(s, _) !== 0,
    y = () => r(o, m) === 0 || c(o, _, m),
    M = () => g || v(),
    k = () => !g || y()
  for (let S = f, C = f; S <= d; ++S)
    (x = t[S % a]),
      !x.skip &&
        ((m = l(x[i])),
        m !== _ &&
          ((g = c(m, s, o)),
          b === null && M() && (b = r(m, s) === 0 ? S : C),
          b !== null && k() && (p.push(_a({ start: b, end: S, loop: h, count: a, style: u })), (b = null)),
          (C = S),
          (_ = m)))
  return b !== null && p.push(_a({ start: b, end: d, loop: h, count: a, style: u })), p
}
function Nc(n, t) {
  const e = [],
    i = n.segments
  for (let s = 0; s < i.length; s++) {
    const o = Bc(i[s], n.points, t)
    o.length && e.push(...o)
  }
  return e
}
function uh(n, t, e, i) {
  let s = 0,
    o = t - 1
  if (e && !i) for (; s < t && !n[s].skip; ) s++
  for (; s < t && n[s].skip; ) s++
  for (s %= t, e && (o += s); o > s && n[o % t].skip; ) o--
  return (o %= t), { start: s, end: o }
}
function ph(n, t, e, i) {
  const s = n.length,
    o = []
  let a = t,
    r = n[t],
    c
  for (c = t + 1; c <= e; ++c) {
    const l = n[c % s]
    l.skip || l.stop
      ? r.skip || ((i = !1), o.push({ start: t % s, end: (c - 1) % s, loop: i }), (t = a = l.stop ? c : null))
      : ((a = c), r.skip && (t = c)),
      (r = l)
  }
  return a !== null && o.push({ start: t % s, end: a % s, loop: i }), o
}
function gh(n, t) {
  const e = n.points,
    i = n.options.spanGaps,
    s = e.length
  if (!s) return []
  const o = !!n._loop,
    { start: a, end: r } = uh(e, s, o, i)
  if (i === !0) return ya(n, [{ start: a, end: r, loop: o }], e, t)
  const c = r < a ? r + s : r,
    l = !!n._fullLoop && a === 0 && r === s - 1
  return ya(n, ph(e, a, c, l), e, t)
}
function ya(n, t, e, i) {
  return !i || !i.setContext || !e ? t : bh(n, t, e, i)
}
function bh(n, t, e, i) {
  const s = n._chart.getContext(),
    o = va(n.options),
    {
      _datasetIndex: a,
      options: { spanGaps: r },
    } = n,
    c = e.length,
    l = []
  let f = o,
    d = t[0].start,
    h = d
  function u(p, g, b, m) {
    const x = r ? -1 : 1
    if (p !== g) {
      for (p += c; e[p % c].skip; ) p -= x
      for (; e[g % c].skip; ) g += x
      p % c !== g % c && (l.push({ start: p % c, end: g % c, loop: b, style: m }), (f = m), (d = g % c))
    }
  }
  for (const p of t) {
    d = r ? d : p.start
    let g = e[d % c],
      b
    for (h = d + 1; h <= p.end; h++) {
      const m = e[h % c]
      ;(b = va(
        i.setContext(
          ve(s, { type: 'segment', p0: g, p1: m, p0DataIndex: (h - 1) % c, p1DataIndex: h % c, datasetIndex: a }),
        ),
      )),
        mh(b, f) && u(d, h - 1, p.loop, f),
        (g = m),
        (f = b)
    }
    d < h - 1 && u(d, h - 1, p.loop, f)
  }
  return l
}
function va(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor,
  }
}
function mh(n, t) {
  if (!t) return !1
  const e = [],
    i = function (s, o) {
      return To(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o
    }
  return JSON.stringify(n, i) !== JSON.stringify(t, i)
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class xh {
  constructor() {
    ;(this._request = null), (this._charts = new Map()), (this._running = !1), (this._lastDate = void 0)
  }
  _notify(t, e, i, s) {
    const o = e.listeners[s],
      a = e.duration
    o.forEach((r) => r({ chart: t, initial: e.initial, numSteps: a, currentStep: Math.min(i - e.start, a) }))
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = wc.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh()
      })))
  }
  _update(t = Date.now()) {
    let e = 0
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length) return
      const o = i.items
      let a = o.length - 1,
        r = !1,
        c
      for (; a >= 0; --a)
        (c = o[a]),
          c._active
            ? (c._total > i.duration && (i.duration = c._total), c.tick(t), (r = !0))
            : ((o[a] = o[o.length - 1]), o.pop())
      r && (s.draw(), this._notify(s, i, t, 'progress')),
        o.length || ((i.running = !1), this._notify(s, i, t, 'complete'), (i.initial = !1)),
        (e += o.length)
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1)
  }
  _getAnims(t) {
    const e = this._charts
    let i = e.get(t)
    return (
      i || ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }), e.set(t, i)), i
    )
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i)
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e)
  }
  has(t) {
    return this._getAnims(t).items.length > 0
  }
  start(t) {
    const e = this._charts.get(t)
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((i, s) => Math.max(i, s._duration), 0)),
      this._refresh())
  }
  running(t) {
    if (!this._running) return !1
    const e = this._charts.get(t)
    return !(!e || !e.running || !e.items.length)
  }
  stop(t) {
    const e = this._charts.get(t)
    if (!e || !e.items.length) return
    const i = e.items
    let s = i.length - 1
    for (; s >= 0; --s) i[s].cancel()
    ;(e.items = []), this._notify(t, e, Date.now(), 'complete')
  }
  remove(t) {
    return this._charts.delete(t)
  }
}
var ne = new xh()
const wa = 'transparent',
  _h = {
    boolean(n, t, e) {
      return e > 0.5 ? t : n
    },
    color(n, t, e) {
      const i = ha(n || wa),
        s = i.valid && ha(t || wa)
      return s && s.valid ? s.mix(i, e).hexString() : t
    },
    number(n, t, e) {
      return n + (t - n) * e
    },
  }
class yh {
  constructor(t, e, i, s) {
    const o = e[i]
    s = Sn([t.to, s, o, t.from])
    const a = Sn([t.from, o, s])
    ;(this._active = !0),
      (this._fn = t.fn || _h[t.type || typeof a]),
      (this._easing = In[t.easing] || In.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = i),
      (this._from = a),
      (this._to = s),
      (this._promises = void 0)
  }
  active() {
    return this._active
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1)
      const s = this._target[this._prop],
        o = i - this._start,
        a = this._duration - o
      ;(this._start = i),
        (this._duration = Math.floor(Math.max(a, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = Sn([t.to, e, s, t.from])),
        (this._from = Sn([t.from, s, e]))
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1))
  }
  tick(t) {
    const e = t - this._start,
      i = this._duration,
      s = this._prop,
      o = this._from,
      a = this._loop,
      r = this._to
    let c
    if (((this._active = o !== r && (a || e < i)), !this._active)) {
      ;(this._target[s] = r), this._notify(!0)
      return
    }
    if (e < 0) {
      this._target[s] = o
      return
    }
    ;(c = (e / i) % 2),
      (c = a && c > 1 ? 2 - c : c),
      (c = this._easing(Math.min(1, Math.max(0, c)))),
      (this._target[s] = this._fn(o, r, c))
  }
  wait() {
    const t = this._promises || (this._promises = [])
    return new Promise((e, i) => {
      t.push({ res: e, rej: i })
    })
  }
  _notify(t) {
    const e = t ? 'res' : 'rej',
      i = this._promises || []
    for (let s = 0; s < i.length; s++) i[s][e]()
  }
}
class Vc {
  constructor(t, e) {
    ;(this._chart = t), (this._properties = new Map()), this.configure(e)
  }
  configure(t) {
    if (!Y(t)) return
    const e = Object.keys(lt.animation),
      i = this._properties
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s]
      if (!Y(o)) return
      const a = {}
      for (const r of e) a[r] = o[r]
      ;((at(o.properties) && o.properties) || [s]).forEach((r) => {
        ;(r === s || !i.has(r)) && i.set(r, a)
      })
    })
  }
  _animateOptions(t, e) {
    const i = e.options,
      s = wh(t, i)
    if (!s) return []
    const o = this._createAnimations(s, i)
    return (
      i.$shared &&
        vh(t.options.$animations, i).then(
          () => {
            t.options = i
          },
          () => {},
        ),
      o
    )
  }
  _createAnimations(t, e) {
    const i = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      a = Object.keys(e),
      r = Date.now()
    let c
    for (c = a.length - 1; c >= 0; --c) {
      const l = a[c]
      if (l.charAt(0) === '$') continue
      if (l === 'options') {
        s.push(...this._animateOptions(t, e))
        continue
      }
      const f = e[l]
      let d = o[l]
      const h = i.get(l)
      if (d)
        if (h && d.active()) {
          d.update(h, f, r)
          continue
        } else d.cancel()
      if (!h || !h.duration) {
        t[l] = f
        continue
      }
      ;(o[l] = d = new yh(h, t, l, f)), s.push(d)
    }
    return s
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e)
      return
    }
    const i = this._createAnimations(t, e)
    if (i.length) return ne.add(this._chart, i), !0
  }
}
function vh(n, t) {
  const e = [],
    i = Object.keys(t)
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]]
    o && o.active() && e.push(o.wait())
  }
  return Promise.all(e)
}
function wh(n, t) {
  if (!t) return
  let e = n.options
  if (!e) {
    n.options = t
    return
  }
  return e.$shared && (n.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })), e
}
function Ma(n, t) {
  const e = (n && n.options) || {},
    i = e.reverse,
    s = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0
  return { start: i ? o : s, end: i ? s : o }
}
function Mh(n, t, e) {
  if (e === !1) return !1
  const i = Ma(n, e),
    s = Ma(t, e)
  return { top: s.end, right: i.end, bottom: s.start, left: i.start }
}
function Sh(n) {
  let t, e, i, s
  return (
    Y(n) ? ((t = n.top), (e = n.right), (i = n.bottom), (s = n.left)) : (t = e = i = s = n),
    { top: t, right: e, bottom: i, left: s, disabled: n === !1 }
  )
}
function $c(n, t) {
  const e = [],
    i = n._getSortedDatasetMetas(t)
  let s, o
  for (s = 0, o = i.length; s < o; ++s) e.push(i[s].index)
  return e
}
function Sa(n, t, e, i = {}) {
  const s = n.keys,
    o = i.mode === 'single'
  let a, r, c, l
  if (t !== null) {
    for (a = 0, r = s.length; a < r; ++a) {
      if (((c = +s[a]), c === e)) {
        if (i.all) continue
        break
      }
      ;(l = n.values[c]), ct(l) && (o || t === 0 || Kt(t) === Kt(l)) && (t += l)
    }
    return t
  }
}
function kh(n) {
  const t = Object.keys(n),
    e = new Array(t.length)
  let i, s, o
  for (i = 0, s = t.length; i < s; ++i) (o = t[i]), (e[i] = { x: o, y: n[o] })
  return e
}
function ka(n, t) {
  const e = n && n.options.stacked
  return e || (e === void 0 && t.stack !== void 0)
}
function Ch(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`
}
function Ph(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds()
  return { min: i ? t : Number.NEGATIVE_INFINITY, max: s ? e : Number.POSITIVE_INFINITY }
}
function Dh(n, t, e) {
  const i = n[t] || (n[t] = {})
  return i[e] || (i[e] = {})
}
function Ca(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index]
    if ((e && o > 0) || (!e && o < 0)) return s.index
  }
  return null
}
function Pa(n, t) {
  const { chart: e, _cachedMeta: i } = n,
    s = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: a, index: r } = i,
    c = o.axis,
    l = a.axis,
    f = Ch(o, a, i),
    d = t.length
  let h
  for (let u = 0; u < d; ++u) {
    const p = t[u],
      { [c]: g, [l]: b } = p,
      m = p._stacks || (p._stacks = {})
    ;(h = m[l] = Dh(s, f, g)), (h[r] = b), (h._top = Ca(h, a, !0, i.type)), (h._bottom = Ca(h, a, !1, i.type))
    const x = h._visualValues || (h._visualValues = {})
    x[r] = b
  }
}
function Ds(n, t) {
  const e = n.scales
  return Object.keys(e)
    .filter((i) => e[i].axis === t)
    .shift()
}
function Ah(n, t) {
  return ve(n, { active: !1, dataset: void 0, datasetIndex: t, index: t, mode: 'default', type: 'dataset' })
}
function Oh(n, t, e) {
  return ve(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: 'default',
    type: 'data',
  })
}
function xn(n, t) {
  const e = n.controller.index,
    i = n.vScale && n.vScale.axis
  if (i) {
    t = t || n._parsed
    for (const s of t) {
      const o = s._stacks
      if (!o || o[i] === void 0 || o[i][e] === void 0) return
      delete o[i][e], o[i]._visualValues !== void 0 && o[i]._visualValues[e] !== void 0 && delete o[i]._visualValues[e]
    }
  }
}
const As = (n) => n === 'reset' || n === 'none',
  Da = (n, t) => (t ? n : Object.assign({}, n)),
  Th = (n, t, e) => n && !t.hidden && t._stacked && { keys: $c(e, !0), values: null }
class $t {
  constructor(t, e) {
    ;(this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize()
  }
  initialize() {
    const t = this._cachedMeta
    this.configure(),
      this.linkScales(),
      (t._stacked = ka(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        )
  }
  updateIndex(t) {
    this.index !== t && xn(this._cachedMeta), (this.index = t)
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      i = this.getDataset(),
      s = (d, h, u, p) => (d === 'x' ? h : d === 'r' ? p : u),
      o = (e.xAxisID = F(i.xAxisID, Ds(t, 'x'))),
      a = (e.yAxisID = F(i.yAxisID, Ds(t, 'y'))),
      r = (e.rAxisID = F(i.rAxisID, Ds(t, 'r'))),
      c = e.indexAxis,
      l = (e.iAxisID = s(c, o, a, r)),
      f = (e.vAxisID = s(c, a, o, r))
    ;(e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(a)),
      (e.rScale = this.getScaleForId(r)),
      (e.iScale = this.getScaleForId(l)),
      (e.vScale = this.getScaleForId(f))
  }
  getDataset() {
    return this.chart.data.datasets[this.index]
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index)
  }
  getScaleForId(t) {
    return this.chart.scales[t]
  }
  _getOtherScale(t) {
    const e = this._cachedMeta
    return t === e.iScale ? e.vScale : e.iScale
  }
  reset() {
    this._update('reset')
  }
  _destroy() {
    const t = this._cachedMeta
    this._data && la(this._data, this), t._stacked && xn(t)
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      i = this._data
    if (Y(e)) this._data = kh(e)
    else if (i !== e) {
      if (i) {
        la(i, this)
        const s = this._cachedMeta
        xn(s), (s._parsed = [])
      }
      e && Object.isExtensible(e) && bd(e, this), (this._syncList = []), (this._data = e)
    }
  }
  addElements() {
    const t = this._cachedMeta
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType())
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      i = this.getDataset()
    let s = !1
    this._dataCheck()
    const o = e._stacked
    ;(e._stacked = ka(e.vScale, e)),
      e.stack !== i.stack && ((s = !0), xn(e), (e.stack = i.stack)),
      this._resyncElements(t),
      (s || o !== e._stacked) && Pa(this, e._parsed)
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), e, !0)
    ;(this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {})
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this,
      { iScale: o, _stacked: a } = i,
      r = o.axis
    let c = t === 0 && e === s.length ? !0 : i._sorted,
      l = t > 0 && i._parsed[t - 1],
      f,
      d,
      h
    if (this._parsing === !1) (i._parsed = s), (i._sorted = !0), (h = s)
    else {
      at(s[t])
        ? (h = this.parseArrayData(i, s, t, e))
        : Y(s[t])
          ? (h = this.parseObjectData(i, s, t, e))
          : (h = this.parsePrimitiveData(i, s, t, e))
      const u = () => d[r] === null || (l && d[r] < l[r])
      for (f = 0; f < e; ++f) (i._parsed[f + t] = d = h[f]), c && (u() && (c = !1), (l = d))
      i._sorted = c
    }
    a && Pa(this, h)
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: a } = t,
      r = o.axis,
      c = a.axis,
      l = o.getLabels(),
      f = o === a,
      d = new Array(s)
    let h, u, p
    for (h = 0, u = s; h < u; ++h) (p = h + i), (d[h] = { [r]: f || o.parse(l[p], p), [c]: a.parse(e[p], p) })
    return d
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: a } = t,
      r = new Array(s)
    let c, l, f, d
    for (c = 0, l = s; c < l; ++c) (f = c + i), (d = e[f]), (r[c] = { x: o.parse(d[0], f), y: a.parse(d[1], f) })
    return r
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: a } = t,
      { xAxisKey: r = 'x', yAxisKey: c = 'y' } = this._parsing,
      l = new Array(s)
    let f, d, h, u
    for (f = 0, d = s; f < d; ++f)
      (h = f + i), (u = e[h]), (l[f] = { x: o.parse(me(u, r), h), y: a.parse(me(u, c), h) })
    return l
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t]
  }
  getDataElement(t) {
    return this._cachedMeta.data[t]
  }
  applyStack(t, e, i) {
    const s = this.chart,
      o = this._cachedMeta,
      a = e[t.axis],
      r = { keys: $c(s, !0), values: e._stacks[t.axis]._visualValues }
    return Sa(r, a, o.index, { mode: i })
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis]
    let a = o === null ? NaN : o
    const r = s && i._stacks[e.axis]
    s && r && ((s.values = r), (a = Sa(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, a)),
      (t.max = Math.max(t.max, a))
  }
  getMinMax(t, e) {
    const i = this._cachedMeta,
      s = i._parsed,
      o = i._sorted && t === i.iScale,
      a = s.length,
      r = this._getOtherScale(t),
      c = Th(e, i, this.chart),
      l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: f, max: d } = Ph(r)
    let h, u
    function p() {
      u = s[h]
      const g = u[r.axis]
      return !ct(u[t.axis]) || f > g || d < g
    }
    for (h = 0; h < a && !(!p() && (this.updateRangeFromParsed(l, t, u, c), o)); ++h);
    if (o) {
      for (h = a - 1; h >= 0; --h)
        if (!p()) {
          this.updateRangeFromParsed(l, t, u, c)
          break
        }
    }
    return l
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      i = []
    let s, o, a
    for (s = 0, o = e.length; s < o; ++s) (a = e[s][t.axis]), ct(a) && i.push(a)
    return i
  }
  getMaxOverflow() {
    return !1
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = e.iScale,
      s = e.vScale,
      o = this.getParsed(t)
    return { label: i ? '' + i.getLabelForValue(o[i.axis]) : '', value: s ? '' + s.getLabelForValue(o[s.axis]) : '' }
  }
  _update(t) {
    const e = this._cachedMeta
    this.update(t || 'default'), (e._clip = Sh(F(this.options.clip, Mh(e.xScale, e.yScale, this.getMaxOverflow()))))
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      i = this._cachedMeta,
      s = i.data || [],
      o = e.chartArea,
      a = [],
      r = this._drawStart || 0,
      c = this._drawCount || s.length - r,
      l = this.options.drawActiveElementsOnTop
    let f
    for (i.dataset && i.dataset.draw(t, o, r, c), f = r; f < r + c; ++f) {
      const d = s[f]
      d.hidden || (d.active && l ? a.push(d) : d.draw(t, o))
    }
    for (f = 0; f < a.length; ++f) a[f].draw(t, o)
  }
  getStyle(t, e) {
    const i = e ? 'active' : 'default'
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i)
  }
  getContext(t, e, i) {
    const s = this.getDataset()
    let o
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t]
      ;(o = a.$context || (a.$context = Oh(this.getContext(), t, a))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t)
    } else
      (o = this.$context || (this.$context = Ah(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index)
    return (o.active = !!e), (o.mode = i), o
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t)
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t)
  }
  _resolveElementOptions(t, e = 'default', i) {
    const s = e === 'active',
      o = this._cachedDataOpts,
      a = t + '-' + e,
      r = o[a],
      c = this.enableOptionSharing && Un(i)
    if (r) return Da(r, c)
    const l = this.chart.config,
      f = l.datasetElementScopeKeys(this._type, t),
      d = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      h = l.getOptionScopes(this.getDataset(), f),
      u = Object.keys(lt.elements[t]),
      p = () => this.getContext(i, s, e),
      g = l.resolveNamedOptions(h, u, p, d)
    return g.$shared && ((g.$shared = c), (o[a] = Object.freeze(Da(g, c)))), g
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart,
      o = this._cachedDataOpts,
      a = `animation-${e}`,
      r = o[a]
    if (r) return r
    let c
    if (s.options.animation !== !1) {
      const f = this.chart.config,
        d = f.datasetAnimationScopeKeys(this._type, e),
        h = f.getOptionScopes(this.getDataset(), d)
      c = f.createResolver(h, this.getContext(t, i, e))
    }
    const l = new Vc(s, c && c.animations)
    return c && c._cacheable && (o[a] = Object.freeze(l)), l
  }
  getSharedOptions(t) {
    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
  }
  includeOptions(t, e) {
    return !e || As(t) || this.chart._animationsDisabled
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      o = this.getSharedOptions(i),
      a = this.includeOptions(e, o) || o !== s
    return this.updateSharedOptions(o, e, i), { sharedOptions: o, includeOptions: a }
  }
  updateElement(t, e, i, s) {
    As(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i)
  }
  updateSharedOptions(t, e, i) {
    t && !As(e) && this._resolveAnimations(void 0, e).update(t, i)
  }
  _setStyle(t, e, i, s) {
    t.active = s
    const o = this.getStyle(e, s)
    this._resolveAnimations(e, i, s).update(t, { options: (!s && this.getSharedOptions(o)) || o })
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !1)
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !0)
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !1)
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !0)
  }
  _resyncElements(t) {
    const e = this._data,
      i = this._cachedMeta.data
    for (const [r, c, l] of this._syncList) this[r](c, l)
    this._syncList = []
    const s = i.length,
      o = e.length,
      a = Math.min(o, s)
    a && this.parse(0, a), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o)
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta,
      o = s.data,
      a = t + e
    let r
    const c = (l) => {
      for (l.length += e, r = l.length - 1; r >= a; r--) l[r] = l[r - e]
    }
    for (c(o), r = t; r < a; ++r) o[r] = new this.dataElementType()
    this._parsing && c(s._parsed), this.parse(t, e), i && this.updateElements(o, t, e, 'reset')
  }
  updateElements(t, e, i, s) {}
  _removeElements(t, e) {
    const i = this._cachedMeta
    if (this._parsing) {
      const s = i._parsed.splice(t, e)
      i._stacked && xn(i, s)
    }
    i.data.splice(t, e)
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t)
    else {
      const [e, i, s] = t
      this[e](i, s)
    }
    this.chart._dataChanges.push([this.index, ...t])
  }
  _onDataPush() {
    const t = arguments.length
    this._sync(['_insertElements', this.getDataset().data.length - t, t])
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1])
  }
  _onDataSplice(t, e) {
    e && this._sync(['_removeElements', t, e])
    const i = arguments.length - 2
    i && this._sync(['_insertElements', t, i])
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length])
  }
}
D($t, 'defaults', {}), D($t, 'datasetElementType', null), D($t, 'dataElementType', null)
function Eh(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t)
    let i = []
    for (let s = 0, o = e.length; s < o; s++) i = i.concat(e[s].controller.getAllParsedValues(n))
    n._cache.$bar = vc(i.sort((s, o) => s - o))
  }
  return n._cache.$bar
}
function Rh(n) {
  const t = n.iScale,
    e = Eh(t, n.type)
  let i = t._length,
    s,
    o,
    a,
    r
  const c = () => {
    a === 32767 || a === -32768 || (Un(r) && (i = Math.min(i, Math.abs(a - r) || i)), (r = a))
  }
  for (s = 0, o = e.length; s < o; ++s) (a = t.getPixelForValue(e[s])), c()
  for (r = void 0, s = 0, o = t.ticks.length; s < o; ++s) (a = t.getPixelForTick(s)), c()
  return i
}
function Lh(n, t, e, i) {
  const s = e.barThickness
  let o, a
  return (
    X(s) ? ((o = t.min * e.categoryPercentage), (a = e.barPercentage)) : ((o = s * i), (a = 1)),
    { chunk: o / i, ratio: a, start: t.pixels[n] - o / 2 }
  )
}
function Ih(n, t, e, i) {
  const s = t.pixels,
    o = s[n]
  let a = n > 0 ? s[n - 1] : null,
    r = n < s.length - 1 ? s[n + 1] : null
  const c = e.categoryPercentage
  a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a)
  const l = o - ((o - Math.min(a, r)) / 2) * c
  return { chunk: ((Math.abs(r - a) / 2) * c) / i, ratio: e.barPercentage, start: l }
}
function zh(n, t, e, i) {
  const s = e.parse(n[0], i),
    o = e.parse(n[1], i),
    a = Math.min(s, o),
    r = Math.max(s, o)
  let c = a,
    l = r
  Math.abs(a) > Math.abs(r) && ((c = r), (l = a)),
    (t[e.axis] = l),
    (t._custom = { barStart: c, barEnd: l, start: s, end: o, min: a, max: r })
}
function jc(n, t, e, i) {
  return at(n) ? zh(n, t, e, i) : (t[e.axis] = e.parse(n, i)), t
}
function Aa(n, t, e, i) {
  const s = n.iScale,
    o = n.vScale,
    a = s.getLabels(),
    r = s === o,
    c = []
  let l, f, d, h
  for (l = e, f = e + i; l < f; ++l) (h = t[l]), (d = {}), (d[s.axis] = r || s.parse(a[l], l)), c.push(jc(h, d, o, l))
  return c
}
function Os(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0
}
function Fh(n, t, e) {
  return n !== 0 ? Kt(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1)
}
function Bh(n) {
  let t, e, i, s, o
  return (
    n.horizontal
      ? ((t = n.base > n.x), (e = 'left'), (i = 'right'))
      : ((t = n.base < n.y), (e = 'bottom'), (i = 'top')),
    t ? ((s = 'end'), (o = 'start')) : ((s = 'start'), (o = 'end')),
    { start: e, end: i, reverse: t, top: s, bottom: o }
  )
}
function Nh(n, t, e, i) {
  let s = t.borderSkipped
  const o = {}
  if (!s) {
    n.borderSkipped = o
    return
  }
  if (s === !0) {
    n.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 }
    return
  }
  const { start: a, end: r, reverse: c, top: l, bottom: f } = Bh(n)
  s === 'middle' &&
    e &&
    ((n.enableBorderRadius = !0),
    (e._top || 0) === i ? (s = l) : (e._bottom || 0) === i ? (s = f) : ((o[Oa(f, a, r, c)] = !0), (s = l))),
    (o[Oa(s, a, r, c)] = !0),
    (n.borderSkipped = o)
}
function Oa(n, t, e, i) {
  return i ? ((n = Vh(n, t, e)), (n = Ta(n, e, t))) : (n = Ta(n, t, e)), n
}
function Vh(n, t, e) {
  return n === t ? e : n === e ? t : n
}
function Ta(n, t, e) {
  return n === 'start' ? t : n === 'end' ? e : n
}
function $h(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t
}
class Ii extends $t {
  parsePrimitiveData(t, e, i, s) {
    return Aa(t, e, i, s)
  }
  parseArrayData(t, e, i, s) {
    return Aa(t, e, i, s)
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: a } = t,
      { xAxisKey: r = 'x', yAxisKey: c = 'y' } = this._parsing,
      l = o.axis === 'x' ? r : c,
      f = a.axis === 'x' ? r : c,
      d = []
    let h, u, p, g
    for (h = i, u = i + s; h < u; ++h)
      (g = e[h]), (p = {}), (p[o.axis] = o.parse(me(g, l), h)), d.push(jc(me(g, f), p, a, h))
    return d
  }
  updateRangeFromParsed(t, e, i, s) {
    super.updateRangeFromParsed(t, e, i, s)
    const o = i._custom
    o && e === this._cachedMeta.vScale && ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)))
  }
  getMaxOverflow() {
    return 0
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: i, vScale: s } = e,
      o = this.getParsed(t),
      a = o._custom,
      r = Os(a) ? '[' + a.start + ', ' + a.end + ']' : '' + s.getLabelForValue(o[s.axis])
    return { label: '' + i.getLabelForValue(o[i.axis]), value: r }
  }
  initialize() {
    ;(this.enableOptionSharing = !0), super.initialize()
    const t = this._cachedMeta
    t.stack = this.getDataset().stack
  }
  update(t) {
    const e = this._cachedMeta
    this.updateElements(e.data, 0, e.data.length, t)
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      {
        index: a,
        _cachedMeta: { vScale: r },
      } = this,
      c = r.getBasePixel(),
      l = r.isHorizontal(),
      f = this._getRuler(),
      { sharedOptions: d, includeOptions: h } = this._getSharedOptions(e, s)
    for (let u = e; u < e + i; u++) {
      const p = this.getParsed(u),
        g = o || X(p[r.axis]) ? { base: c, head: c } : this._calculateBarValuePixels(u),
        b = this._calculateBarIndexPixels(u, f),
        m = (p._stacks || {})[r.axis],
        x = {
          horizontal: l,
          base: g.base,
          enableBorderRadius: !m || Os(p._custom) || a === m._top || a === m._bottom,
          x: l ? g.head : b.center,
          y: l ? b.center : g.head,
          height: l ? b.size : Math.abs(g.size),
          width: l ? Math.abs(g.size) : b.size,
        }
      h && (x.options = d || this.resolveDataElementOptions(u, t[u].active ? 'active' : s))
      const _ = x.options || t[u].options
      Nh(x, _, m, a), $h(x, _, f.ratio), this.updateElement(t[u], u, x, s)
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta,
      s = i.getMatchingVisibleMetas(this._type).filter((c) => c.controller.options.grouped),
      o = i.options.stacked,
      a = [],
      r = (c) => {
        const l = c.controller.getParsed(e),
          f = l && l[c.vScale.axis]
        if (X(f) || isNaN(f)) return !0
      }
    for (const c of s)
      if (
        !(e !== void 0 && r(c)) &&
        ((o === !1 || a.indexOf(c.stack) === -1 || (o === void 0 && c.stack === void 0)) && a.push(c.stack),
        c.index === t)
      )
        break
    return a.length || a.push(void 0), a
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length
  }
  _getStackIndex(t, e, i) {
    const s = this._getStacks(t, i),
      o = e !== void 0 ? s.indexOf(e) : -1
    return o === -1 ? s.length - 1 : o
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      i = e.iScale,
      s = []
    let o, a
    for (o = 0, a = e.data.length; o < a; ++o) s.push(i.getPixelForValue(this.getParsed(o)[i.axis], o))
    const r = t.barThickness
    return {
      min: r || Rh(e),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
    }
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: i, index: s },
        options: { base: o, minBarLength: a },
      } = this,
      r = o || 0,
      c = this.getParsed(t),
      l = c._custom,
      f = Os(l)
    let d = c[e.axis],
      h = 0,
      u = i ? this.applyStack(e, c, i) : d,
      p,
      g
    u !== d && ((h = u - d), (u = d)),
      f && ((d = l.barStart), (u = l.barEnd - l.barStart), d !== 0 && Kt(d) !== Kt(l.barEnd) && (h = 0), (h += d))
    const b = !X(o) && !f ? o : h
    let m = e.getPixelForValue(b)
    if ((this.chart.getDataVisibility(t) ? (p = e.getPixelForValue(h + u)) : (p = m), (g = p - m), Math.abs(g) < a)) {
      ;(g = Fh(g, e, r) * a), d === r && (m -= g / 2)
      const x = e.getPixelForDecimal(0),
        _ = e.getPixelForDecimal(1),
        v = Math.min(x, _),
        y = Math.max(x, _)
      ;(m = Math.max(Math.min(m, y), v)),
        (p = m + g),
        i && !f && (c._stacks[e.axis]._visualValues[s] = e.getValueForPixel(p) - e.getValueForPixel(m))
    }
    if (m === e.getPixelForValue(r)) {
      const x = (Kt(g) * e.getLineWidthForValue(r)) / 2
      ;(m += x), (g -= x)
    }
    return { size: g, base: m, head: p, center: p + g / 2 }
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale,
      s = this.options,
      o = s.skipNull,
      a = F(s.maxBarThickness, 1 / 0)
    let r, c
    if (e.grouped) {
      const l = o ? this._getStackCount(t) : e.stackCount,
        f = s.barThickness === 'flex' ? Ih(t, e, s, l) : Lh(t, e, s, l),
        d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0)
      ;(r = f.start + f.chunk * d + f.chunk / 2), (c = Math.min(a, f.chunk * f.ratio))
    } else (r = i.getPixelForValue(this.getParsed(t)[i.axis], t)), (c = Math.min(a, e.min * e.ratio))
    return { base: r - c / 2, head: r + c / 2, center: r, size: c }
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      i = t.data,
      s = i.length
    let o = 0
    for (; o < s; ++o) this.getParsed(o)[e.axis] !== null && i[o].draw(this._ctx)
  }
}
D(Ii, 'id', 'bar'),
  D(Ii, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] } },
  }),
  D(Ii, 'overrides', {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  })
class zi extends $t {
  initialize() {
    ;(this.enableOptionSharing = !0), super.initialize()
  }
  parsePrimitiveData(t, e, i, s) {
    const o = super.parsePrimitiveData(t, e, i, s)
    for (let a = 0; a < o.length; a++) o[a]._custom = this.resolveDataElementOptions(a + i).radius
    return o
  }
  parseArrayData(t, e, i, s) {
    const o = super.parseArrayData(t, e, i, s)
    for (let a = 0; a < o.length; a++) {
      const r = e[i + a]
      o[a]._custom = F(r[2], this.resolveDataElementOptions(a + i).radius)
    }
    return o
  }
  parseObjectData(t, e, i, s) {
    const o = super.parseObjectData(t, e, i, s)
    for (let a = 0; a < o.length; a++) {
      const r = e[i + a]
      o[a]._custom = F(r && r.r && +r.r, this.resolveDataElementOptions(a + i).radius)
    }
    return o
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data
    let e = 0
    for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2)
    return e > 0 && e
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      a = this.getParsed(t),
      r = s.getLabelForValue(a.x),
      c = o.getLabelForValue(a.y),
      l = a._custom
    return { label: i[t] || '', value: '(' + r + ', ' + c + (l ? ', ' + l : '') + ')' }
  }
  update(t) {
    const e = this._cachedMeta.data
    this.updateElements(e, 0, e.length, t)
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      { iScale: a, vScale: r } = this._cachedMeta,
      { sharedOptions: c, includeOptions: l } = this._getSharedOptions(e, s),
      f = a.axis,
      d = r.axis
    for (let h = e; h < e + i; h++) {
      const u = t[h],
        p = !o && this.getParsed(h),
        g = {},
        b = (g[f] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(p[f])),
        m = (g[d] = o ? r.getBasePixel() : r.getPixelForValue(p[d]))
      ;(g.skip = isNaN(b) || isNaN(m)),
        l &&
          ((g.options = c || this.resolveDataElementOptions(h, u.active ? 'active' : s)), o && (g.options.radius = 0)),
        this.updateElement(u, h, g, s)
    }
  }
  resolveDataElementOptions(t, e) {
    const i = this.getParsed(t)
    let s = super.resolveDataElementOptions(t, e)
    s.$shared && (s = Object.assign({}, s, { $shared: !1 }))
    const o = s.radius
    return e !== 'active' && (s.radius = 0), (s.radius += F(i && i._custom, o)), s
  }
}
D(zi, 'id', 'bubble'),
  D(zi, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] } },
  }),
  D(zi, 'overrides', { scales: { x: { type: 'linear' }, y: { type: 'linear' } } })
function jh(n, t, e) {
  let i = 1,
    s = 1,
    o = 0,
    a = 0
  if (t < st) {
    const r = n,
      c = r + t,
      l = Math.cos(r),
      f = Math.sin(r),
      d = Math.cos(c),
      h = Math.sin(c),
      u = (_, v, y) => (Xn(_, r, c, !0) ? 1 : Math.max(v, v * e, y, y * e)),
      p = (_, v, y) => (Xn(_, r, c, !0) ? -1 : Math.min(v, v * e, y, y * e)),
      g = u(0, l, d),
      b = u(ft, f, h),
      m = p(ot, l, d),
      x = p(ot + ft, f, h)
    ;(i = (g - m) / 2), (s = (b - x) / 2), (o = -(g + m) / 2), (a = -(b + x) / 2)
  }
  return { ratioX: i, ratioY: s, offsetX: o, offsetY: a }
}
class Re extends $t {
  constructor(t, e) {
    super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0)
  }
  linkScales() {}
  parse(t, e) {
    const i = this.getDataset().data,
      s = this._cachedMeta
    if (this._parsing === !1) s._parsed = i
    else {
      let o = (c) => +i[c]
      if (Y(i[t])) {
        const { key: c = 'value' } = this._parsing
        o = (l) => +me(i[l], c)
      }
      let a, r
      for (a = t, r = t + e; a < r; ++a) s._parsed[a] = o(a)
    }
  }
  _getRotation() {
    return Ut(this.options.rotation - 90)
  }
  _getCircumference() {
    return Ut(this.options.circumference)
  }
  _getRotationExtents() {
    let t = st,
      e = -st
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller,
          o = s._getRotation(),
          a = s._getCircumference()
        ;(t = Math.min(t, o)), (e = Math.max(e, o + a))
      }
    return { rotation: t, circumference: e - t }
  }
  update(t) {
    const e = this.chart,
      { chartArea: i } = e,
      s = this._cachedMeta,
      o = s.data,
      a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      r = Math.max((Math.min(i.width, i.height) - a) / 2, 0),
      c = Math.min(nd(this.options.cutout, r), 1),
      l = this._getRingWeight(this.index),
      { circumference: f, rotation: d } = this._getRotationExtents(),
      { ratioX: h, ratioY: u, offsetX: p, offsetY: g } = jh(d, f, c),
      b = (i.width - a) / h,
      m = (i.height - a) / u,
      x = Math.max(Math.min(b, m) / 2, 0),
      _ = bc(this.options.radius, x),
      v = Math.max(_ * c, 0),
      y = (_ - v) / this._getVisibleDatasetWeightTotal()
    ;(this.offsetX = p * _),
      (this.offsetY = g * _),
      (s.total = this.calculateTotal()),
      (this.outerRadius = _ - y * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - y * l, 0)),
      this.updateElements(o, 0, o.length, t)
  }
  _circumference(t, e) {
    const i = this.options,
      s = this._cachedMeta,
      o = this._getCircumference()
    return (e && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      s._parsed[t] === null ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * o) / st)
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      a = this.chart,
      r = a.chartArea,
      l = a.options.animation,
      f = (r.left + r.right) / 2,
      d = (r.top + r.bottom) / 2,
      h = o && l.animateScale,
      u = h ? 0 : this.innerRadius,
      p = h ? 0 : this.outerRadius,
      { sharedOptions: g, includeOptions: b } = this._getSharedOptions(e, s)
    let m = this._getRotation(),
      x
    for (x = 0; x < e; ++x) m += this._circumference(x, o)
    for (x = e; x < e + i; ++x) {
      const _ = this._circumference(x, o),
        v = t[x],
        y = {
          x: f + this.offsetX,
          y: d + this.offsetY,
          startAngle: m,
          endAngle: m + _,
          circumference: _,
          outerRadius: p,
          innerRadius: u,
        }
      b && (y.options = g || this.resolveDataElementOptions(x, v.active ? 'active' : s)),
        (m += _),
        this.updateElement(v, x, y, s)
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data
    let i = 0,
      s
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s]
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !e[s].hidden && (i += Math.abs(o))
    }
    return i
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total
    return e > 0 && !isNaN(t) ? st * (Math.abs(t) / e) : 0
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      o = oi(e._parsed[t], i.options.locale)
    return { label: s[t] || '', value: o }
  }
  getMaxBorderWidth(t) {
    let e = 0
    const i = this.chart
    let s, o, a, r, c
    if (!t) {
      for (s = 0, o = i.data.datasets.length; s < o; ++s)
        if (i.isDatasetVisible(s)) {
          ;(a = i.getDatasetMeta(s)), (t = a.data), (r = a.controller)
          break
        }
    }
    if (!t) return 0
    for (s = 0, o = t.length; s < o; ++s)
      (c = r.resolveDataElementOptions(s)),
        c.borderAlign !== 'inner' && (e = Math.max(e, c.borderWidth || 0, c.hoverBorderWidth || 0))
    return e
  }
  getMaxOffset(t) {
    let e = 0
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i)
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0)
    }
    return e
  }
  _getRingWeightOffset(t) {
    let e = 0
    for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i))
    return e
  }
  _getRingWeight(t) {
    return Math.max(F(this.chart.data.datasets[t].weight, 1), 0)
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
  }
}
D(Re, 'id', 'doughnut'),
  D(Re, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'circumference',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'startAngle',
          'x',
          'y',
          'offset',
          'borderWidth',
          'spacing',
        ],
      },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
  }),
  D(Re, 'descriptors', {
    _scriptable: (t) => t !== 'spacing',
    _indexable: (t) => t !== 'spacing' && !t.startsWith('borderDash') && !t.startsWith('hoverBorderDash'),
  }),
  D(Re, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = t.legend.options
              return e.labels.map((o, a) => {
                const c = t.getDatasetMeta(0).controller.getStyle(a)
                return {
                  text: o,
                  fillStyle: c.backgroundColor,
                  strokeStyle: c.borderColor,
                  fontColor: s,
                  lineWidth: c.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(a),
                  index: a,
                }
              })
            }
            return []
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update()
        },
      },
    },
  })
class Fi extends $t {
  initialize() {
    ;(this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize()
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: i, data: s = [], _dataset: o } = e,
      a = this.chart._animationsDisabled
    let { start: r, count: c } = Sc(e, s, a)
    ;(this._drawStart = r),
      (this._drawCount = c),
      kc(e) && ((r = 0), (c = s.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!o._decimated),
      (i.points = s)
    const l = this.resolveDatasetElementOptions(t)
    this.options.showLine || (l.borderWidth = 0),
      (l.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !a, options: l }, t),
      this.updateElements(s, r, c, t)
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      { iScale: a, vScale: r, _stacked: c, _dataset: l } = this._cachedMeta,
      { sharedOptions: f, includeOptions: d } = this._getSharedOptions(e, s),
      h = a.axis,
      u = r.axis,
      { spanGaps: p, segment: g } = this.options,
      b = an(p) ? p : Number.POSITIVE_INFINITY,
      m = this.chart._animationsDisabled || o || s === 'none',
      x = e + i,
      _ = t.length
    let v = e > 0 && this.getParsed(e - 1)
    for (let y = 0; y < _; ++y) {
      const M = t[y],
        k = m ? M : {}
      if (y < e || y >= x) {
        k.skip = !0
        continue
      }
      const S = this.getParsed(y),
        C = X(S[u]),
        O = (k[h] = a.getPixelForValue(S[h], y)),
        P = (k[u] = o || C ? r.getBasePixel() : r.getPixelForValue(c ? this.applyStack(r, S, c) : S[u], y))
      ;(k.skip = isNaN(O) || isNaN(P) || C),
        (k.stop = y > 0 && Math.abs(S[h] - v[h]) > b),
        g && ((k.parsed = S), (k.raw = l.data[y])),
        d && (k.options = f || this.resolveDataElementOptions(y, M.active ? 'active' : s)),
        m || this.updateElement(M, y, k, s),
        (v = S)
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      i = (e.options && e.options.borderWidth) || 0,
      s = t.data || []
    if (!s.length) return i
    const o = s[0].size(this.resolveDataElementOptions(0)),
      a = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1))
    return Math.max(i, o, a) / 2
  }
  draw() {
    const t = this._cachedMeta
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
  }
}
D(Fi, 'id', 'line'),
  D(Fi, 'defaults', { datasetElementType: 'line', dataElementType: 'point', showLine: !0, spanGaps: !1 }),
  D(Fi, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } })
class Fn extends $t {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0)
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      o = oi(e._parsed[t].r, i.options.locale)
    return { label: s[t] || '', value: o }
  }
  parseObjectData(t, e, i, s) {
    return Rc.bind(this)(t, e, i, s)
  }
  update(t) {
    const e = this._cachedMeta.data
    this._updateRadius(), this.updateElements(e, 0, e.length, t)
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }
    return (
      t.data.forEach((i, s) => {
        const o = this.getParsed(s).r
        !isNaN(o) && this.chart.getDataVisibility(s) && (o < e.min && (e.min = o), o > e.max && (e.max = o))
      }),
      e
    )
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      i = t.options,
      s = Math.min(e.right - e.left, e.bottom - e.top),
      o = Math.max(s / 2, 0),
      a = Math.max(i.cutoutPercentage ? (o / 100) * i.cutoutPercentage : 1, 0),
      r = (o - a) / t.getVisibleDatasetCount()
    ;(this.outerRadius = o - r * this.index), (this.innerRadius = this.outerRadius - r)
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      a = this.chart,
      c = a.options.animation,
      l = this._cachedMeta.rScale,
      f = l.xCenter,
      d = l.yCenter,
      h = l.getIndexAngle(0) - 0.5 * ot
    let u = h,
      p
    const g = 360 / this.countVisibleElements()
    for (p = 0; p < e; ++p) u += this._computeAngle(p, s, g)
    for (p = e; p < e + i; p++) {
      const b = t[p]
      let m = u,
        x = u + this._computeAngle(p, s, g),
        _ = a.getDataVisibility(p) ? l.getDistanceFromCenterForValue(this.getParsed(p).r) : 0
      ;(u = x), o && (c.animateScale && (_ = 0), c.animateRotate && (m = x = h))
      const v = {
        x: f,
        y: d,
        innerRadius: 0,
        outerRadius: _,
        startAngle: m,
        endAngle: x,
        options: this.resolveDataElementOptions(p, b.active ? 'active' : s),
      }
      this.updateElement(b, p, v, s)
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta
    let e = 0
    return (
      t.data.forEach((i, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++
      }),
      e
    )
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t) ? Ut(this.resolveDataElementOptions(t, e).angle || i) : 0
  }
}
D(Fn, 'id', 'polarArea'),
  D(Fn, 'defaults', {
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: { type: 'number', properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'] },
    },
    indexAxis: 'r',
    startAngle: 0,
  }),
  D(Fn, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = t.legend.options
              return e.labels.map((o, a) => {
                const c = t.getDatasetMeta(0).controller.getStyle(a)
                return {
                  text: o,
                  fillStyle: c.backgroundColor,
                  strokeStyle: c.borderColor,
                  fontColor: s,
                  lineWidth: c.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(a),
                  index: a,
                }
              })
            }
            return []
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update()
        },
      },
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  })
class qs extends Re {}
D(qs, 'id', 'pie'), D(qs, 'defaults', { cutout: 0, rotation: 0, circumference: 360, radius: '100%' })
class Bi extends $t {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      i = this.getParsed(t)
    return { label: e.getLabels()[t], value: '' + e.getLabelForValue(i[e.axis]) }
  }
  parseObjectData(t, e, i, s) {
    return Rc.bind(this)(t, e, i, s)
  }
  update(t) {
    const e = this._cachedMeta,
      i = e.dataset,
      s = e.data || [],
      o = e.iScale.getLabels()
    if (((i.points = s), t !== 'resize')) {
      const a = this.resolveDatasetElementOptions(t)
      this.options.showLine || (a.borderWidth = 0)
      const r = { _loop: !0, _fullLoop: o.length === s.length, options: a }
      this.updateElement(i, void 0, r, t)
    }
    this.updateElements(s, 0, s.length, t)
  }
  updateElements(t, e, i, s) {
    const o = this._cachedMeta.rScale,
      a = s === 'reset'
    for (let r = e; r < e + i; r++) {
      const c = t[r],
        l = this.resolveDataElementOptions(r, c.active ? 'active' : s),
        f = o.getPointPositionForValue(r, this.getParsed(r).r),
        d = a ? o.xCenter : f.x,
        h = a ? o.yCenter : f.y,
        u = { x: d, y: h, angle: f.angle, skip: isNaN(d) || isNaN(h), options: l }
      this.updateElement(c, r, u, s)
    }
  }
}
D(Bi, 'id', 'radar'),
  D(Bi, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
  }),
  D(Bi, 'overrides', { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } })
class Ni extends $t {
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      a = this.getParsed(t),
      r = s.getLabelForValue(a.x),
      c = o.getLabelForValue(a.y)
    return { label: i[t] || '', value: '(' + r + ', ' + c + ')' }
  }
  update(t) {
    const e = this._cachedMeta,
      { data: i = [] } = e,
      s = this.chart._animationsDisabled
    let { start: o, count: a } = Sc(e, i, s)
    if (((this._drawStart = o), (this._drawCount = a), kc(e) && ((o = 0), (a = i.length)), this.options.showLine)) {
      this.datasetElementType || this.addElements()
      const { dataset: r, _dataset: c } = e
      ;(r._chart = this.chart), (r._datasetIndex = this.index), (r._decimated = !!c._decimated), (r.points = i)
      const l = this.resolveDatasetElementOptions(t)
      ;(l.segment = this.options.segment), this.updateElement(r, void 0, { animated: !s, options: l }, t)
    } else this.datasetElementType && (delete e.dataset, (this.datasetElementType = !1))
    this.updateElements(i, o, a, t)
  }
  addElements() {
    const { showLine: t } = this.options
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement('line')),
      super.addElements()
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      { iScale: a, vScale: r, _stacked: c, _dataset: l } = this._cachedMeta,
      f = this.resolveDataElementOptions(e, s),
      d = this.getSharedOptions(f),
      h = this.includeOptions(s, d),
      u = a.axis,
      p = r.axis,
      { spanGaps: g, segment: b } = this.options,
      m = an(g) ? g : Number.POSITIVE_INFINITY,
      x = this.chart._animationsDisabled || o || s === 'none'
    let _ = e > 0 && this.getParsed(e - 1)
    for (let v = e; v < e + i; ++v) {
      const y = t[v],
        M = this.getParsed(v),
        k = x ? y : {},
        S = X(M[p]),
        C = (k[u] = a.getPixelForValue(M[u], v)),
        O = (k[p] = o || S ? r.getBasePixel() : r.getPixelForValue(c ? this.applyStack(r, M, c) : M[p], v))
      ;(k.skip = isNaN(C) || isNaN(O) || S),
        (k.stop = v > 0 && Math.abs(M[u] - _[u]) > m),
        b && ((k.parsed = M), (k.raw = l.data[v])),
        h && (k.options = d || this.resolveDataElementOptions(v, y.active ? 'active' : s)),
        x || this.updateElement(y, v, k, s),
        (_ = M)
    }
    this.updateSharedOptions(d, s, f)
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.data || []
    if (!this.options.showLine) {
      let r = 0
      for (let c = e.length - 1; c >= 0; --c) r = Math.max(r, e[c].size(this.resolveDataElementOptions(c)) / 2)
      return r > 0 && r
    }
    const i = t.dataset,
      s = (i.options && i.options.borderWidth) || 0
    if (!e.length) return s
    const o = e[0].size(this.resolveDataElementOptions(0)),
      a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1))
    return Math.max(s, o, a) / 2
  }
}
D(Ni, 'id', 'scatter'),
  D(Ni, 'defaults', { datasetElementType: !1, dataElementType: 'point', showLine: !1, fill: !1 }),
  D(Ni, 'overrides', { interaction: { mode: 'point' }, scales: { x: { type: 'linear' }, y: { type: 'linear' } } })
var Wh = Object.freeze({
  __proto__: null,
  BarController: Ii,
  BubbleController: zi,
  DoughnutController: Re,
  LineController: Fi,
  PieController: qs,
  PolarAreaController: Fn,
  RadarController: Bi,
  ScatterController: Ni,
})
function Ce() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.')
}
class Bo {
  constructor(t) {
    D(this, 'options')
    this.options = t || {}
  }
  static override(t) {
    Object.assign(Bo.prototype, t)
  }
  init() {}
  formats() {
    return Ce()
  }
  parse() {
    return Ce()
  }
  format() {
    return Ce()
  }
  add() {
    return Ce()
  }
  diff() {
    return Ce()
  }
  startOf() {
    return Ce()
  }
  endOf() {
    return Ce()
  }
}
var Hh = { _date: Bo }
function Yh(n, t, e, i) {
  const { controller: s, data: o, _sorted: a } = n,
    r = s._cachedMeta.iScale
  if (r && t === r.axis && t !== 'r' && a && o.length) {
    const c = r._reversePixels ? pd : ce
    if (i) {
      if (s._sharedOptions) {
        const l = o[0],
          f = typeof l.getRange == 'function' && l.getRange(t)
        if (f) {
          const d = c(o, t, e - f),
            h = c(o, t, e + f)
          return { lo: d.lo, hi: h.hi }
        }
      }
    } else return c(o, t, e)
  }
  return { lo: 0, hi: o.length - 1 }
}
function ai(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(),
    a = e[t]
  for (let r = 0, c = o.length; r < c; ++r) {
    const { index: l, data: f } = o[r],
      { lo: d, hi: h } = Yh(o[r], t, a, s)
    for (let u = d; u <= h; ++u) {
      const p = f[u]
      p.skip || i(p, l, u)
    }
  }
}
function Uh(n) {
  const t = n.indexOf('x') !== -1,
    e = n.indexOf('y') !== -1
  return function (i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0,
      a = e ? Math.abs(i.y - s.y) : 0
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
  }
}
function Ts(n, t, e, i, s) {
  const o = []
  return (
    (!s && !n.isPointInArea(t)) ||
      ai(
        n,
        e,
        t,
        function (r, c, l) {
          ;(!s && !le(r, n.chartArea, 0)) ||
            (r.inRange(t.x, t.y, i) && o.push({ element: r, datasetIndex: c, index: l }))
        },
        !0,
      ),
    o
  )
}
function Xh(n, t, e, i) {
  let s = []
  function o(a, r, c) {
    const { startAngle: l, endAngle: f } = a.getProps(['startAngle', 'endAngle'], i),
      { angle: d } = _c(a, { x: t.x, y: t.y })
    Xn(d, l, f) && s.push({ element: a, datasetIndex: r, index: c })
  }
  return ai(n, e, t, o), s
}
function Gh(n, t, e, i, s, o) {
  let a = []
  const r = Uh(e)
  let c = Number.POSITIVE_INFINITY
  function l(f, d, h) {
    const u = f.inRange(t.x, t.y, s)
    if (i && !u) return
    const p = f.getCenterPoint(s)
    if (!(!!o || n.isPointInArea(p)) && !u) return
    const b = r(t, p)
    b < c
      ? ((a = [{ element: f, datasetIndex: d, index: h }]), (c = b))
      : b === c && a.push({ element: f, datasetIndex: d, index: h })
  }
  return ai(n, e, t, l), a
}
function Es(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === 'r' && !i ? Xh(n, t, e, s) : Gh(n, t, e, i, s, o)
}
function Ea(n, t, e, i, s) {
  const o = [],
    a = e === 'x' ? 'inXRange' : 'inYRange'
  let r = !1
  return (
    ai(n, e, t, (c, l, f) => {
      c[a](t[e], s) && (o.push({ element: c, datasetIndex: l, index: f }), (r = r || c.inRange(t.x, t.y, s)))
    }),
    i && !r ? [] : o
  )
}
var qh = {
  evaluateInteractionItems: ai,
  modes: {
    index(n, t, e, i) {
      const s = Oe(t, n),
        o = e.axis || 'x',
        a = e.includeInvisible || !1,
        r = e.intersect ? Ts(n, s, o, i, a) : Es(n, s, o, !1, i, a),
        c = []
      return r.length
        ? (n.getSortedVisibleDatasetMetas().forEach((l) => {
            const f = r[0].index,
              d = l.data[f]
            d && !d.skip && c.push({ element: d, datasetIndex: l.index, index: f })
          }),
          c)
        : []
    },
    dataset(n, t, e, i) {
      const s = Oe(t, n),
        o = e.axis || 'xy',
        a = e.includeInvisible || !1
      let r = e.intersect ? Ts(n, s, o, i, a) : Es(n, s, o, !1, i, a)
      if (r.length > 0) {
        const c = r[0].datasetIndex,
          l = n.getDatasetMeta(c).data
        r = []
        for (let f = 0; f < l.length; ++f) r.push({ element: l[f], datasetIndex: c, index: f })
      }
      return r
    },
    point(n, t, e, i) {
      const s = Oe(t, n),
        o = e.axis || 'xy',
        a = e.includeInvisible || !1
      return Ts(n, s, o, i, a)
    },
    nearest(n, t, e, i) {
      const s = Oe(t, n),
        o = e.axis || 'xy',
        a = e.includeInvisible || !1
      return Es(n, s, o, e.intersect, i, a)
    },
    x(n, t, e, i) {
      const s = Oe(t, n)
      return Ea(n, s, 'x', e.intersect, i)
    },
    y(n, t, e, i) {
      const s = Oe(t, n)
      return Ea(n, s, 'y', e.intersect, i)
    },
  },
}
const Wc = ['left', 'top', 'right', 'bottom']
function _n(n, t) {
  return n.filter((e) => e.pos === t)
}
function Ra(n, t) {
  return n.filter((e) => Wc.indexOf(e.pos) === -1 && e.box.axis === t)
}
function yn(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e,
      o = t ? e : i
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight
  })
}
function Kh(n) {
  const t = []
  let e, i, s, o, a, r
  for (e = 0, i = (n || []).length; e < i; ++e)
    (s = n[e]),
      ({
        position: o,
        options: { stack: a, stackWeight: r = 1 },
      } = s),
      t.push({
        index: e,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: a && o + a,
        stackWeight: r,
      })
  return t
}
function Zh(n) {
  const t = {}
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e
    if (!i || !Wc.includes(s)) continue
    const a = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 })
    a.count++, (a.weight += o)
  }
  return t
}
function Jh(n, t) {
  const e = Zh(n),
    { vBoxMaxWidth: i, hBoxMaxHeight: s } = t
  let o, a, r
  for (o = 0, a = n.length; o < a; ++o) {
    r = n[o]
    const { fullSize: c } = r.box,
      l = e[r.stack],
      f = l && r.stackWeight / l.weight
    r.horizontal
      ? ((r.width = f ? f * i : c && t.availableWidth), (r.height = s))
      : ((r.width = i), (r.height = f ? f * s : c && t.availableHeight))
  }
  return e
}
function Qh(n) {
  const t = Kh(n),
    e = yn(
      t.filter((l) => l.box.fullSize),
      !0,
    ),
    i = yn(_n(t, 'left'), !0),
    s = yn(_n(t, 'right')),
    o = yn(_n(t, 'top'), !0),
    a = yn(_n(t, 'bottom')),
    r = Ra(t, 'x'),
    c = Ra(t, 'y')
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(c).concat(a).concat(r),
    chartArea: _n(t, 'chartArea'),
    vertical: i.concat(s).concat(c),
    horizontal: o.concat(a).concat(r),
  }
}
function La(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i])
}
function Hc(n, t) {
  ;(n.top = Math.max(n.top, t.top)),
    (n.left = Math.max(n.left, t.left)),
    (n.bottom = Math.max(n.bottom, t.bottom)),
    (n.right = Math.max(n.right, t.right))
}
function tu(n, t, e, i) {
  const { pos: s, box: o } = e,
    a = n.maxPadding
  if (!Y(s)) {
    e.size && (n[s] -= e.size)
    const d = i[e.stack] || { size: 0, count: 1 }
    ;(d.size = Math.max(d.size, e.horizontal ? o.height : o.width)), (e.size = d.size / d.count), (n[s] += e.size)
  }
  o.getPadding && Hc(a, o.getPadding())
  const r = Math.max(0, t.outerWidth - La(a, n, 'left', 'right')),
    c = Math.max(0, t.outerHeight - La(a, n, 'top', 'bottom')),
    l = r !== n.w,
    f = c !== n.h
  return (n.w = r), (n.h = c), e.horizontal ? { same: l, other: f } : { same: f, other: l }
}
function eu(n) {
  const t = n.maxPadding
  function e(i) {
    const s = Math.max(t[i] - n[i], 0)
    return (n[i] += s), s
  }
  ;(n.y += e('top')), (n.x += e('left')), e('right'), e('bottom')
}
function nu(n, t) {
  const e = t.maxPadding
  function i(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 }
    return (
      s.forEach((a) => {
        o[a] = Math.max(t[a], e[a])
      }),
      o
    )
  }
  return i(n ? ['left', 'right'] : ['top', 'bottom'])
}
function kn(n, t, e, i) {
  const s = []
  let o, a, r, c, l, f
  for (o = 0, a = n.length, l = 0; o < a; ++o) {
    ;(r = n[o]), (c = r.box), c.update(r.width || t.w, r.height || t.h, nu(r.horizontal, t))
    const { same: d, other: h } = tu(t, e, r, i)
    ;(l |= d && s.length), (f = f || h), c.fullSize || s.push(r)
  }
  return (l && kn(s, t, e, i)) || f
}
function gi(n, t, e, i, s) {
  ;(n.top = e), (n.left = t), (n.right = t + i), (n.bottom = e + s), (n.width = i), (n.height = s)
}
function Ia(n, t, e, i) {
  const s = e.padding
  let { x: o, y: a } = t
  for (const r of n) {
    const c = r.box,
      l = i[r.stack] || { count: 1, placed: 0, weight: 1 },
      f = r.stackWeight / l.weight || 1
    if (r.horizontal) {
      const d = t.w * f,
        h = l.size || c.height
      Un(l.start) && (a = l.start),
        c.fullSize ? gi(c, s.left, a, e.outerWidth - s.right - s.left, h) : gi(c, t.left + l.placed, a, d, h),
        (l.start = a),
        (l.placed += d),
        (a = c.bottom)
    } else {
      const d = t.h * f,
        h = l.size || c.width
      Un(l.start) && (o = l.start),
        c.fullSize ? gi(c, o, s.top, h, e.outerHeight - s.bottom - s.top) : gi(c, o, t.top + l.placed, h, d),
        (l.start = o),
        (l.placed += d),
        (o = c.right)
    }
  }
  ;(t.x = o), (t.y = a)
}
var gt = {
  addBox(n, t) {
    n.boxes || (n.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e)
              },
            },
          ]
        }),
      n.boxes.push(t)
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1
    e !== -1 && n.boxes.splice(e, 1)
  },
  configure(n, t, e) {
    ;(t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight)
  },
  update(n, t, e, i) {
    if (!n) return
    const s = mt(n.options.layout.padding),
      o = Math.max(t - s.width, 0),
      a = Math.max(e - s.height, 0),
      r = Qh(n.boxes),
      c = r.vertical,
      l = r.horizontal
    J(n.boxes, (g) => {
      typeof g.beforeLayout == 'function' && g.beforeLayout()
    })
    const f = c.reduce((g, b) => (b.box.options && b.box.options.display === !1 ? g : g + 1), 0) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: s,
        availableWidth: o,
        availableHeight: a,
        vBoxMaxWidth: o / 2 / f,
        hBoxMaxHeight: a / 2,
      }),
      h = Object.assign({}, s)
    Hc(h, mt(i))
    const u = Object.assign({ maxPadding: h, w: o, h: a, x: s.left, y: s.top }, s),
      p = Jh(c.concat(l), d)
    kn(r.fullSize, u, d, p),
      kn(c, u, d, p),
      kn(l, u, d, p) && kn(c, u, d, p),
      eu(u),
      Ia(r.leftAndTop, u, d, p),
      (u.x += u.w),
      (u.y += u.h),
      Ia(r.rightAndBottom, u, d, p),
      (n.chartArea = { left: u.left, top: u.top, right: u.left + u.w, bottom: u.top + u.h, height: u.h, width: u.w }),
      J(r.chartArea, (g) => {
        const b = g.box
        Object.assign(b, n.chartArea), b.update(u.w, u.h, { left: 0, top: 0, right: 0, bottom: 0 })
      })
  },
}
class Yc {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1
  }
  addEventListener(t, e, i) {}
  removeEventListener(t, e, i) {}
  getDevicePixelRatio() {
    return 1
  }
  getMaximumSize(t, e, i, s) {
    return (
      (e = Math.max(0, e || t.width)), (i = i || t.height), { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
    )
  }
  isAttached(t) {
    return !0
  }
  updateConfig(t) {}
}
class iu extends Yc {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null
  }
  updateConfig(t) {
    t.options.animation = !1
  }
}
const Vi = '$chartjs',
  su = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  za = (n) => n === null || n === ''
function ou(n, t) {
  const e = n.style,
    i = n.getAttribute('height'),
    s = n.getAttribute('width')
  if (
    ((n[Vi] = { initial: { height: i, width: s, style: { display: e.display, height: e.height, width: e.width } } }),
    (e.display = e.display || 'block'),
    (e.boxSizing = e.boxSizing || 'border-box'),
    za(s))
  ) {
    const o = xa(n, 'width')
    o !== void 0 && (n.width = o)
  }
  if (za(i))
    if (n.style.height === '') n.height = n.width / (t || 2)
    else {
      const o = xa(n, 'height')
      o !== void 0 && (n.height = o)
    }
  return n
}
const Uc = rh ? { passive: !0 } : !1
function au(n, t, e) {
  n.addEventListener(t, e, Uc)
}
function ru(n, t, e) {
  n.canvas.removeEventListener(t, e, Uc)
}
function cu(n, t) {
  const e = su[n.type] || n.type,
    { x: i, y: s } = Oe(n, t)
  return { type: e, chart: t, native: n, x: i !== void 0 ? i : null, y: s !== void 0 ? s : null }
}
function Ji(n, t) {
  for (const e of n) if (e === t || e.contains(t)) return !0
}
function lu(n, t, e) {
  const i = n.canvas,
    s = new MutationObserver((o) => {
      let a = !1
      for (const r of o) (a = a || Ji(r.addedNodes, i)), (a = a && !Ji(r.removedNodes, i))
      a && e()
    })
  return s.observe(document, { childList: !0, subtree: !0 }), s
}
function fu(n, t, e) {
  const i = n.canvas,
    s = new MutationObserver((o) => {
      let a = !1
      for (const r of o) (a = a || Ji(r.removedNodes, i)), (a = a && !Ji(r.addedNodes, i))
      a && e()
    })
  return s.observe(document, { childList: !0, subtree: !0 }), s
}
const qn = new Map()
let Fa = 0
function Xc() {
  const n = window.devicePixelRatio
  n !== Fa &&
    ((Fa = n),
    qn.forEach((t, e) => {
      e.currentDevicePixelRatio !== n && t()
    }))
}
function du(n, t) {
  qn.size || window.addEventListener('resize', Xc), qn.set(n, t)
}
function hu(n) {
  qn.delete(n), qn.size || window.removeEventListener('resize', Xc)
}
function uu(n, t, e) {
  const i = n.canvas,
    s = i && Fo(i)
  if (!s) return
  const o = Mc((r, c) => {
      const l = s.clientWidth
      e(r, c), l < s.clientWidth && e()
    }, window),
    a = new ResizeObserver((r) => {
      const c = r[0],
        l = c.contentRect.width,
        f = c.contentRect.height
      ;(l === 0 && f === 0) || o(l, f)
    })
  return a.observe(s), du(n, o), a
}
function Rs(n, t, e) {
  e && e.disconnect(), t === 'resize' && hu(n)
}
function pu(n, t, e) {
  const i = n.canvas,
    s = Mc((o) => {
      n.ctx !== null && e(cu(o, n))
    }, n)
  return au(i, t, s), s
}
class gu extends Yc {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext('2d')
    return i && i.canvas === t ? (ou(t, e), i) : null
  }
  releaseContext(t) {
    const e = t.canvas
    if (!e[Vi]) return !1
    const i = e[Vi].initial
    ;['height', 'width'].forEach((o) => {
      const a = i[o]
      X(a) ? e.removeAttribute(o) : e.setAttribute(o, a)
    })
    const s = i.style || {}
    return (
      Object.keys(s).forEach((o) => {
        e.style[o] = s[o]
      }),
      (e.width = e.width),
      delete e[Vi],
      !0
    )
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e)
    const s = t.$proxies || (t.$proxies = {}),
      a = { attach: lu, detach: fu, resize: uu }[e] || pu
    s[e] = a(t, e, i)
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}),
      s = i[e]
    if (!s) return
    ;(({ attach: Rs, detach: Rs, resize: Rs })[e] || ru)(t, e, s), (i[e] = void 0)
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio
  }
  getMaximumSize(t, e, i, s) {
    return ah(t, e, i, s)
  }
  isAttached(t) {
    const e = Fo(t)
    return !!(e && e.isConnected)
  }
}
function bu(n) {
  return !zo() || (typeof OffscreenCanvas < 'u' && n instanceof OffscreenCanvas) ? iu : gu
}
class Wt {
  constructor() {
    D(this, 'x')
    D(this, 'y')
    D(this, 'active', !1)
    D(this, 'options')
    D(this, '$animations')
  }
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps(['x', 'y'], t)
    return { x: e, y: i }
  }
  hasValue() {
    return an(this.x) && an(this.y)
  }
  getProps(t, e) {
    const i = this.$animations
    if (!e || !i) return this
    const s = {}
    return (
      t.forEach((o) => {
        s[o] = i[o] && i[o].active() ? i[o]._to : this[o]
      }),
      s
    )
  }
}
D(Wt, 'defaults', {}), D(Wt, 'defaultRoutes')
function mu(n, t) {
  const e = n.options.ticks,
    i = xu(n),
    s = Math.min(e.maxTicksLimit || i, i),
    o = e.major.enabled ? yu(t) : [],
    a = o.length,
    r = o[0],
    c = o[a - 1],
    l = []
  if (a > s) return vu(t, l, o, a / s), l
  const f = _u(o, t, s)
  if (a > 0) {
    let d, h
    const u = a > 1 ? Math.round((c - r) / (a - 1)) : null
    for (bi(t, l, f, X(u) ? 0 : r - u, r), d = 0, h = a - 1; d < h; d++) bi(t, l, f, o[d], o[d + 1])
    return bi(t, l, f, c, X(u) ? t.length : c + u), l
  }
  return bi(t, l, f), l
}
function xu(n) {
  const t = n.options.offset,
    e = n._tickSize(),
    i = n._length / e + (t ? 0 : 1),
    s = n._maxLength / e
  return Math.floor(Math.min(i, s))
}
function _u(n, t, e) {
  const i = wu(n),
    s = t.length / e
  if (!i) return Math.max(s, 1)
  const o = fd(i)
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const c = o[a]
    if (c > s) return c
  }
  return Math.max(s, 1)
}
function yu(n) {
  const t = []
  let e, i
  for (e = 0, i = n.length; e < i; e++) n[e].major && t.push(e)
  return t
}
function vu(n, t, e, i) {
  let s = 0,
    o = e[0],
    a
  for (i = Math.ceil(i), a = 0; a < n.length; a++) a === o && (t.push(n[a]), s++, (o = e[s * i]))
}
function bi(n, t, e, i, s) {
  const o = F(i, 0),
    a = Math.min(F(s, n.length), n.length)
  let r = 0,
    c,
    l,
    f
  for (e = Math.ceil(e), s && ((c = s - i), (e = c / Math.floor(c / e))), f = o; f < 0; )
    r++, (f = Math.round(o + r * e))
  for (l = Math.max(o, 0); l < a; l++) l === f && (t.push(n[l]), r++, (f = Math.round(o + r * e)))
}
function wu(n) {
  const t = n.length
  let e, i
  if (t < 2) return !1
  for (i = n[0], e = 1; e < t; ++e) if (n[e] - n[e - 1] !== i) return !1
  return i
}
const Mu = (n) => (n === 'left' ? 'right' : n === 'right' ? 'left' : n),
  Ba = (n, t, e) => (t === 'top' || t === 'left' ? n[t] + e : n[t] - e),
  Na = (n, t) => Math.min(t || n, n)
function Va(n, t) {
  const e = [],
    i = n.length / t,
    s = n.length
  let o = 0
  for (; o < s; o += i) e.push(n[Math.floor(o)])
  return e
}
function Su(n, t, e) {
  const i = n.ticks.length,
    s = Math.min(t, i - 1),
    o = n._startPixel,
    a = n._endPixel,
    r = 1e-6
  let c = n.getPixelForTick(s),
    l
  if (
    !(
      e &&
      (i === 1
        ? (l = Math.max(c - o, a - c))
        : t === 0
          ? (l = (n.getPixelForTick(1) - c) / 2)
          : (l = (c - n.getPixelForTick(s - 1)) / 2),
      (c += s < t ? l : -l),
      c < o - r || c > a + r)
    )
  )
    return c
}
function ku(n, t) {
  J(n, (e) => {
    const i = e.gc,
      s = i.length / 2
    let o
    if (s > t) {
      for (o = 0; o < s; ++o) delete e.data[i[o]]
      i.splice(0, s)
    }
  })
}
function vn(n) {
  return n.drawTicks ? n.tickLength : 0
}
function $a(n, t) {
  if (!n.display) return 0
  const e = dt(n.font, t),
    i = mt(n.padding)
  return (at(n.text) ? n.text.length : 1) * e.lineHeight + i.height
}
function Cu(n, t) {
  return ve(n, { scale: t, type: 'scale' })
}
function Pu(n, t, e) {
  return ve(n, { tick: e, index: t, type: 'tick' })
}
function Du(n, t, e) {
  let i = Oo(n)
  return ((e && t !== 'right') || (!e && t === 'right')) && (i = Mu(i)), i
}
function Au(n, t, e, i) {
  const { top: s, left: o, bottom: a, right: r, chart: c } = n,
    { chartArea: l, scales: f } = c
  let d = 0,
    h,
    u,
    p
  const g = a - s,
    b = r - o
  if (n.isHorizontal()) {
    if (((u = pt(i, o, r)), Y(e))) {
      const m = Object.keys(e)[0],
        x = e[m]
      p = f[m].getPixelForValue(x) + g - t
    } else e === 'center' ? (p = (l.bottom + l.top) / 2 + g - t) : (p = Ba(n, e, t))
    h = r - o
  } else {
    if (Y(e)) {
      const m = Object.keys(e)[0],
        x = e[m]
      u = f[m].getPixelForValue(x) - b + t
    } else e === 'center' ? (u = (l.left + l.right) / 2 - b + t) : (u = Ba(n, e, t))
    ;(p = pt(i, a, s)), (d = e === 'left' ? -ft : ft)
  }
  return { titleX: u, titleY: p, maxWidth: h, rotation: d }
}
class we extends Wt {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0)
  }
  init(t) {
    ;(this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax))
  }
  parse(t, e) {
    return t
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this
    return (
      (t = Ot(t, Number.POSITIVE_INFINITY)),
      (e = Ot(e, Number.NEGATIVE_INFINITY)),
      (i = Ot(i, Number.POSITIVE_INFINITY)),
      (s = Ot(s, Number.NEGATIVE_INFINITY)),
      { min: Ot(t, i), max: Ot(e, s), minDefined: ct(t), maxDefined: ct(e) }
    )
  }
  getMinMax(t) {
    let { min: e, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(),
      a
    if (s && o) return { min: e, max: i }
    const r = this.getMatchingVisibleMetas()
    for (let c = 0, l = r.length; c < l; ++c)
      (a = r[c].controller.getMinMax(this, t)), s || (e = Math.min(e, a.min)), o || (i = Math.max(i, a.max))
    return (e = o && e > i ? i : e), (i = s && e > i ? e : i), { min: Ot(e, Ot(i, e)), max: Ot(i, Ot(e, i)) }
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    }
  }
  getTicks() {
    return this.ticks
  }
  getLabels() {
    const t = this.chart.data
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t))
  }
  beforeLayout() {
    ;(this._cache = {}), (this._dataLimitsCached = !1)
  }
  beforeUpdate() {
    nt(this.options.beforeUpdate, [this])
  }
  update(t, e, i) {
    const { beginAtZero: s, grace: o, ticks: a } = this.options,
      r = a.sampleSize
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Bd(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks()
    const c = r < this.ticks.length
    this._convertTicksToLabels(c ? Va(this.ticks, r) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      a.display &&
        (a.autoSkip || a.source === 'auto') &&
        ((this.ticks = mu(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      c && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate()
  }
  configure() {
    let t = this.options.reverse,
      e,
      i
    this.isHorizontal() ? ((e = this.left), (i = this.right)) : ((e = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - e),
      (this._alignToPixels = this.options.alignToPixels)
  }
  afterUpdate() {
    nt(this.options.afterUpdate, [this])
  }
  beforeSetDimensions() {
    nt(this.options.beforeSetDimensions, [this])
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0)
  }
  afterSetDimensions() {
    nt(this.options.afterSetDimensions, [this])
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), nt(this.options[t], [this])
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits')
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits')
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks')
  }
  buildTicks() {
    return []
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks')
  }
  beforeTickToLabelConversion() {
    nt(this.options.beforeTickToLabelConversion, [this])
  }
  generateTickLabels(t) {
    const e = this.options.ticks
    let i, s, o
    for (i = 0, s = t.length; i < s; i++) (o = t[i]), (o.label = nt(e.callback, [o.value, i, t], this))
  }
  afterTickToLabelConversion() {
    nt(this.options.afterTickToLabelConversion, [this])
  }
  beforeCalculateLabelRotation() {
    nt(this.options.beforeCalculateLabelRotation, [this])
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      i = Na(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      o = e.maxRotation
    let a = s,
      r,
      c,
      l
    if (!this._isVisible() || !e.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s
      return
    }
    const f = this._getLabelSizes(),
      d = f.widest.width,
      h = f.highest.height,
      u = ut(this.chart.width - d, 0, this.maxWidth)
    ;(r = t.offset ? this.maxWidth / i : u / (i - 1)),
      d + 6 > r &&
        ((r = u / (i - (t.offset ? 0.5 : 1))),
        (c = this.maxHeight - vn(t.grid) - e.padding - $a(t.title, this.chart.options.font)),
        (l = Math.sqrt(d * d + h * h)),
        (a = Do(
          Math.min(
            Math.asin(ut((f.highest.height + 6) / r, -1, 1)),
            Math.asin(ut(c / l, -1, 1)) - Math.asin(ut(h / l, -1, 1)),
          ),
        )),
        (a = Math.max(s, Math.min(o, a)))),
      (this.labelRotation = a)
  }
  afterCalculateLabelRotation() {
    nt(this.options.afterCalculateLabelRotation, [this])
  }
  afterAutoSkip() {}
  beforeFit() {
    nt(this.options.beforeFit, [this])
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: i, title: s, grid: o },
      } = this,
      a = this._isVisible(),
      r = this.isHorizontal()
    if (a) {
      const c = $a(s, e.options.font)
      if (
        (r ? ((t.width = this.maxWidth), (t.height = vn(o) + c)) : ((t.height = this.maxHeight), (t.width = vn(o) + c)),
        i.display && this.ticks.length)
      ) {
        const { first: l, last: f, widest: d, highest: h } = this._getLabelSizes(),
          u = i.padding * 2,
          p = Ut(this.labelRotation),
          g = Math.cos(p),
          b = Math.sin(p)
        if (r) {
          const m = i.mirror ? 0 : b * d.width + g * h.height
          t.height = Math.min(this.maxHeight, t.height + m + u)
        } else {
          const m = i.mirror ? 0 : g * d.width + b * h.height
          t.width = Math.min(this.maxWidth, t.width + m + u)
        }
        this._calculatePadding(l, f, b, g)
      }
    }
    this._handleMargins(),
      r
        ? ((this.width = this._length = e.width - this._margins.left - this._margins.right), (this.height = t.height))
        : ((this.width = t.width), (this.height = this._length = e.height - this._margins.top - this._margins.bottom))
  }
  _calculatePadding(t, e, i, s) {
    const {
        ticks: { align: o, padding: a },
        position: r,
      } = this.options,
      c = this.labelRotation !== 0,
      l = r !== 'top' && this.axis === 'x'
    if (this.isHorizontal()) {
      const f = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1)
      let h = 0,
        u = 0
      c
        ? l
          ? ((h = s * t.width), (u = i * e.height))
          : ((h = i * t.height), (u = s * e.width))
        : o === 'start'
          ? (u = e.width)
          : o === 'end'
            ? (h = t.width)
            : o !== 'inner' && ((h = t.width / 2), (u = e.width / 2)),
        (this.paddingLeft = Math.max(((h - f + a) * this.width) / (this.width - f), 0)),
        (this.paddingRight = Math.max(((u - d + a) * this.width) / (this.width - d), 0))
    } else {
      let f = e.height / 2,
        d = t.height / 2
      o === 'start' ? ((f = 0), (d = t.height)) : o === 'end' && ((f = e.height), (d = 0)),
        (this.paddingTop = f + a),
        (this.paddingBottom = d + a)
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)))
  }
  afterFit() {
    nt(this.options.afterFit, [this])
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options
    return e === 'top' || e === 'bottom' || t === 'x'
  }
  isFullSize() {
    return this.options.fullSize
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t)
    let e, i
    for (e = 0, i = t.length; e < i; e++) X(t[e].label) && (t.splice(e, 1), i--, e--)
    this.afterTickToLabelConversion()
  }
  _getLabelSizes() {
    let t = this._labelSizes
    if (!t) {
      const e = this.options.ticks.sampleSize
      let i = this.ticks
      e < i.length && (i = Va(i, e)),
        (this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit))
    }
    return t
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: s, _longestTextCache: o } = this,
      a = [],
      r = [],
      c = Math.floor(e / Na(e, i))
    let l = 0,
      f = 0,
      d,
      h,
      u,
      p,
      g,
      b,
      m,
      x,
      _,
      v,
      y
    for (d = 0; d < e; d += c) {
      if (
        ((p = t[d].label),
        (g = this._resolveTickFontOptions(d)),
        (s.font = b = g.string),
        (m = o[b] = o[b] || { data: {}, gc: [] }),
        (x = g.lineHeight),
        (_ = v = 0),
        !X(p) && !at(p))
      )
        (_ = qi(s, m.data, m.gc, _, p)), (v = x)
      else if (at(p))
        for (h = 0, u = p.length; h < u; ++h) (y = p[h]), !X(y) && !at(y) && ((_ = qi(s, m.data, m.gc, _, y)), (v += x))
      a.push(_), r.push(v), (l = Math.max(_, l)), (f = Math.max(v, f))
    }
    ku(o, e)
    const M = a.indexOf(l),
      k = r.indexOf(f),
      S = (C) => ({ width: a[C] || 0, height: r[C] || 0 })
    return { first: S(0), last: S(e - 1), widest: S(M), highest: S(k), widths: a, heights: r }
  }
  getLabelForValue(t) {
    return t
  }
  getPixelForValue(t, e) {
    return NaN
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t)
    const e = this._startPixel + t * this._length
    return ud(this._alignToPixels ? ke(this.chart, e, 0) : e)
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length
    return this._reversePixels ? 1 - e : e
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue())
  }
  getBaseValue() {
    const { min: t, max: e } = this
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
  }
  getContext(t) {
    const e = this.ticks || []
    if (t >= 0 && t < e.length) {
      const i = e[t]
      return i.$context || (i.$context = Pu(this.getContext(), t, i))
    }
    return this.$context || (this.$context = Cu(this.chart.getContext(), this))
  }
  _tickSize() {
    const t = this.options.ticks,
      e = Ut(this.labelRotation),
      i = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      a = t.autoSkipPadding || 0,
      r = o ? o.widest.width + a : 0,
      c = o ? o.highest.height + a : 0
    return this.isHorizontal() ? (c * i > r * s ? r / i : c / s) : c * s < r * i ? c / i : r / s
  }
  _isVisible() {
    const t = this.options.display
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      i = this.chart,
      s = this.options,
      { grid: o, position: a, border: r } = s,
      c = o.offset,
      l = this.isHorizontal(),
      d = this.ticks.length + (c ? 1 : 0),
      h = vn(o),
      u = [],
      p = r.setContext(this.getContext()),
      g = p.display ? p.width : 0,
      b = g / 2,
      m = function (T) {
        return ke(i, T, g)
      }
    let x, _, v, y, M, k, S, C, O, P, I, W
    if (a === 'top') (x = m(this.bottom)), (k = this.bottom - h), (C = x - b), (P = m(t.top) + b), (W = t.bottom)
    else if (a === 'bottom') (x = m(this.top)), (P = t.top), (W = m(t.bottom) - b), (k = x + b), (C = this.top + h)
    else if (a === 'left') (x = m(this.right)), (M = this.right - h), (S = x - b), (O = m(t.left) + b), (I = t.right)
    else if (a === 'right') (x = m(this.left)), (O = t.left), (I = m(t.right) - b), (M = x + b), (S = this.left + h)
    else if (e === 'x') {
      if (a === 'center') x = m((t.top + t.bottom) / 2 + 0.5)
      else if (Y(a)) {
        const T = Object.keys(a)[0],
          j = a[T]
        x = m(this.chart.scales[T].getPixelForValue(j))
      }
      ;(P = t.top), (W = t.bottom), (k = x + b), (C = k + h)
    } else if (e === 'y') {
      if (a === 'center') x = m((t.left + t.right) / 2)
      else if (Y(a)) {
        const T = Object.keys(a)[0],
          j = a[T]
        x = m(this.chart.scales[T].getPixelForValue(j))
      }
      ;(M = x - b), (S = M - h), (O = t.left), (I = t.right)
    }
    const V = F(s.ticks.maxTicksLimit, d),
      w = Math.max(1, Math.ceil(d / V))
    for (_ = 0; _ < d; _ += w) {
      const T = this.getContext(_),
        j = o.setContext(T),
        et = r.setContext(T),
        Z = j.lineWidth,
        It = j.color,
        kt = et.dash || [],
        Ct = et.dashOffset,
        xt = j.tickWidth,
        zt = j.tickColor,
        Ft = j.tickBorderDash || [],
        Me = j.tickBorderDashOffset
      ;(v = Su(this, _, c)),
        v !== void 0 &&
          ((y = ke(i, v, Z)),
          l ? (M = S = O = I = y) : (k = C = P = W = y),
          u.push({
            tx1: M,
            ty1: k,
            tx2: S,
            ty2: C,
            x1: O,
            y1: P,
            x2: I,
            y2: W,
            width: Z,
            color: It,
            borderDash: kt,
            borderDashOffset: Ct,
            tickWidth: xt,
            tickColor: zt,
            tickBorderDash: Ft,
            tickBorderDashOffset: Me,
          }))
    }
    return (this._ticksLength = d), (this._borderValue = x), u
  }
  _computeLabelItems(t) {
    const e = this.axis,
      i = this.options,
      { position: s, ticks: o } = i,
      a = this.isHorizontal(),
      r = this.ticks,
      { align: c, crossAlign: l, padding: f, mirror: d } = o,
      h = vn(i.grid),
      u = h + f,
      p = d ? -f : u,
      g = -Ut(this.labelRotation),
      b = []
    let m,
      x,
      _,
      v,
      y,
      M,
      k,
      S,
      C,
      O,
      P,
      I,
      W = 'middle'
    if (s === 'top') (M = this.bottom - p), (k = this._getXAxisLabelAlignment())
    else if (s === 'bottom') (M = this.top + p), (k = this._getXAxisLabelAlignment())
    else if (s === 'left') {
      const w = this._getYAxisLabelAlignment(h)
      ;(k = w.textAlign), (y = w.x)
    } else if (s === 'right') {
      const w = this._getYAxisLabelAlignment(h)
      ;(k = w.textAlign), (y = w.x)
    } else if (e === 'x') {
      if (s === 'center') M = (t.top + t.bottom) / 2 + u
      else if (Y(s)) {
        const w = Object.keys(s)[0],
          T = s[w]
        M = this.chart.scales[w].getPixelForValue(T) + u
      }
      k = this._getXAxisLabelAlignment()
    } else if (e === 'y') {
      if (s === 'center') y = (t.left + t.right) / 2 - u
      else if (Y(s)) {
        const w = Object.keys(s)[0],
          T = s[w]
        y = this.chart.scales[w].getPixelForValue(T)
      }
      k = this._getYAxisLabelAlignment(h).textAlign
    }
    e === 'y' && (c === 'start' ? (W = 'top') : c === 'end' && (W = 'bottom'))
    const V = this._getLabelSizes()
    for (m = 0, x = r.length; m < x; ++m) {
      ;(_ = r[m]), (v = _.label)
      const w = o.setContext(this.getContext(m))
      ;(S = this.getPixelForTick(m) + o.labelOffset),
        (C = this._resolveTickFontOptions(m)),
        (O = C.lineHeight),
        (P = at(v) ? v.length : 1)
      const T = P / 2,
        j = w.color,
        et = w.textStrokeColor,
        Z = w.textStrokeWidth
      let It = k
      a
        ? ((y = S),
          k === 'inner' &&
            (m === x - 1
              ? (It = this.options.reverse ? 'left' : 'right')
              : m === 0
                ? (It = this.options.reverse ? 'right' : 'left')
                : (It = 'center')),
          s === 'top'
            ? l === 'near' || g !== 0
              ? (I = -P * O + O / 2)
              : l === 'center'
                ? (I = -V.highest.height / 2 - T * O + O)
                : (I = -V.highest.height + O / 2)
            : l === 'near' || g !== 0
              ? (I = O / 2)
              : l === 'center'
                ? (I = V.highest.height / 2 - T * O)
                : (I = V.highest.height - P * O),
          d && (I *= -1),
          g !== 0 && !w.showLabelBackdrop && (y += (O / 2) * Math.sin(g)))
        : ((M = S), (I = ((1 - P) * O) / 2))
      let kt
      if (w.showLabelBackdrop) {
        const Ct = mt(w.backdropPadding),
          xt = V.heights[m],
          zt = V.widths[m]
        let Ft = I - Ct.top,
          Me = 0 - Ct.left
        switch (W) {
          case 'middle':
            Ft -= xt / 2
            break
          case 'bottom':
            Ft -= xt
            break
        }
        switch (k) {
          case 'center':
            Me -= zt / 2
            break
          case 'right':
            Me -= zt
            break
          case 'inner':
            m === x - 1 ? (Me -= zt) : m > 0 && (Me -= zt / 2)
            break
        }
        kt = { left: Me, top: Ft, width: zt + Ct.width, height: xt + Ct.height, color: w.backdropColor }
      }
      b.push({
        label: v,
        font: C,
        textOffset: I,
        options: {
          rotation: g,
          color: j,
          strokeColor: et,
          strokeWidth: Z,
          textAlign: It,
          textBaseline: W,
          translation: [y, M],
          backdrop: kt,
        },
      })
    }
    return b
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options
    if (-Ut(this.labelRotation)) return t === 'top' ? 'left' : 'right'
    let s = 'center'
    return (
      e.align === 'start' ? (s = 'left') : e.align === 'end' ? (s = 'right') : e.align === 'inner' && (s = 'inner'), s
    )
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: i, mirror: s, padding: o },
      } = this.options,
      a = this._getLabelSizes(),
      r = t + o,
      c = a.widest.width
    let l, f
    return (
      e === 'left'
        ? s
          ? ((f = this.right + o),
            i === 'near' ? (l = 'left') : i === 'center' ? ((l = 'center'), (f += c / 2)) : ((l = 'right'), (f += c)))
          : ((f = this.right - r),
            i === 'near'
              ? (l = 'right')
              : i === 'center'
                ? ((l = 'center'), (f -= c / 2))
                : ((l = 'left'), (f = this.left)))
        : e === 'right'
          ? s
            ? ((f = this.left + o),
              i === 'near' ? (l = 'right') : i === 'center' ? ((l = 'center'), (f -= c / 2)) : ((l = 'left'), (f -= c)))
            : ((f = this.left + r),
              i === 'near'
                ? (l = 'left')
                : i === 'center'
                  ? ((l = 'center'), (f += c / 2))
                  : ((l = 'right'), (f = this.right)))
          : (l = 'right'),
      { textAlign: l, x: f }
    )
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return
    const t = this.chart,
      e = this.options.position
    if (e === 'left' || e === 'right') return { top: 0, left: this.left, bottom: t.height, right: this.right }
    if (e === 'top' || e === 'bottom') return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: i,
      top: s,
      width: o,
      height: a,
    } = this
    e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, o, a), t.restore())
  }
  getLineWidthForValue(t) {
    const e = this.options.grid
    if (!this._isVisible() || !e.display) return 0
    const s = this.ticks.findIndex((o) => o.value === t)
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0
  }
  drawGrid(t) {
    const e = this.options.grid,
      i = this.ctx,
      s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t))
    let o, a
    const r = (c, l, f) => {
      !f.width ||
        !f.color ||
        (i.save(),
        (i.lineWidth = f.width),
        (i.strokeStyle = f.color),
        i.setLineDash(f.borderDash || []),
        (i.lineDashOffset = f.borderDashOffset),
        i.beginPath(),
        i.moveTo(c.x, c.y),
        i.lineTo(l.x, l.y),
        i.stroke(),
        i.restore())
    }
    if (e.display)
      for (o = 0, a = s.length; o < a; ++o) {
        const c = s[o]
        e.drawOnChartArea && r({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
          e.drawTicks &&
            r(
              { x: c.tx1, y: c.ty1 },
              { x: c.tx2, y: c.ty2 },
              {
                color: c.tickColor,
                width: c.tickWidth,
                borderDash: c.tickBorderDash,
                borderDashOffset: c.tickBorderDashOffset,
              },
            )
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: i, grid: s },
      } = this,
      o = i.setContext(this.getContext()),
      a = i.display ? o.width : 0
    if (!a) return
    const r = s.setContext(this.getContext(0)).lineWidth,
      c = this._borderValue
    let l, f, d, h
    this.isHorizontal()
      ? ((l = ke(t, this.left, a) - a / 2), (f = ke(t, this.right, r) + r / 2), (d = h = c))
      : ((d = ke(t, this.top, a) - a / 2), (h = ke(t, this.bottom, r) + r / 2), (l = f = c)),
      e.save(),
      (e.lineWidth = o.width),
      (e.strokeStyle = o.color),
      e.beginPath(),
      e.moveTo(l, d),
      e.lineTo(f, h),
      e.stroke(),
      e.restore()
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return
    const i = this.ctx,
      s = this._computeLabelArea()
    s && Ie(i, s)
    const o = this.getLabelItems(t)
    for (const a of o) {
      const r = a.options,
        c = a.font,
        l = a.label,
        f = a.textOffset
      je(i, l, 0, f, c, r)
    }
    s && ze(i)
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: i, reverse: s },
    } = this
    if (!i.display) return
    const o = dt(i.font),
      a = mt(i.padding),
      r = i.align
    let c = o.lineHeight / 2
    e === 'bottom' || e === 'center' || Y(e)
      ? ((c += a.bottom), at(i.text) && (c += o.lineHeight * (i.text.length - 1)))
      : (c += a.top)
    const { titleX: l, titleY: f, maxWidth: d, rotation: h } = Au(this, c, e, r)
    je(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: d,
      rotation: h,
      textAlign: Du(r, e, s),
      textBaseline: 'middle',
      translation: [l, f],
    })
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      i = F(t.grid && t.grid.z, -1),
      s = F(t.border && t.border.z, 0)
    return !this._isVisible() || this.draw !== we.prototype.draw
      ? [
          {
            z: e,
            draw: (o) => {
              this.draw(o)
            },
          },
        ]
      : [
          {
            z: i,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle()
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder()
            },
          },
          {
            z: e,
            draw: (o) => {
              this.drawLabels(o)
            },
          },
        ]
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + 'AxisID',
      s = []
    let o, a
    for (o = 0, a = e.length; o < a; ++o) {
      const r = e[o]
      r[i] === this.id && (!t || r.type === t) && s.push(r)
    }
    return s
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t))
    return dt(e.font)
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight
    return (this.isHorizontal() ? this.width : this.height) / t
  }
}
class mi {
  constructor(t, e, i) {
    ;(this.type = t), (this.scope = e), (this.override = i), (this.items = Object.create(null))
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
  }
  register(t) {
    const e = Object.getPrototypeOf(t)
    let i
    Eu(e) && (i = this.register(e))
    const s = this.items,
      o = t.id,
      a = this.scope + '.' + o
    if (!o) throw new Error('class does not have id: ' + t)
    return o in s || ((s[o] = t), Ou(t, a, i), this.override && lt.override(t.id, t.overrides)), a
  }
  get(t) {
    return this.items[t]
  }
  unregister(t) {
    const e = this.items,
      i = t.id,
      s = this.scope
    i in e && delete e[i], s && i in lt[s] && (delete lt[s][i], this.override && delete $e[i])
  }
}
function Ou(n, t, e) {
  const i = Et(Object.create(null), [e ? lt.get(e) : {}, lt.get(t), n.defaults])
  lt.set(t, i), n.defaultRoutes && Tu(t, n.defaultRoutes), n.descriptors && lt.describe(t, n.descriptors)
}
function Tu(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split('.'),
      s = i.pop(),
      o = [n].concat(i).join('.'),
      a = t[e].split('.'),
      r = a.pop(),
      c = a.join('.')
    lt.route(o, s, c, r)
  })
}
function Eu(n) {
  return 'id' in n && 'defaults' in n
}
class Ru {
  constructor() {
    ;(this.controllers = new mi($t, 'datasets', !0)),
      (this.elements = new mi(Wt, 'elements')),
      (this.plugins = new mi(Object, 'plugins')),
      (this.scales = new mi(we, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements])
  }
  add(...t) {
    this._each('register', t)
  }
  remove(...t) {
    this._each('unregister', t)
  }
  addControllers(...t) {
    this._each('register', t, this.controllers)
  }
  addElements(...t) {
    this._each('register', t, this.elements)
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins)
  }
  addScales(...t) {
    this._each('register', t, this.scales)
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller')
  }
  getElement(t) {
    return this._get(t, this.elements, 'element')
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin')
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale')
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers)
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements)
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins)
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales)
  }
  _each(t, e, i) {
    ;[...e].forEach((s) => {
      const o = i || this._getRegistryForType(s)
      i || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : J(s, (a) => {
            const r = i || this._getRegistryForType(a)
            this._exec(t, r, a)
          })
    })
  }
  _exec(t, e, i) {
    const s = Po(t)
    nt(i['before' + s], [], i), e[t](i), nt(i['after' + s], [], i)
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e]
      if (i.isForType(t)) return i
    }
    return this.plugins
  }
  _get(t, e, i) {
    const s = e.get(t)
    if (s === void 0) throw new Error('"' + t + '" is not a registered ' + i + '.')
    return s
  }
}
var yt = new Ru()
class Lu {
  constructor() {
    this._init = []
  }
  notify(t, e, i, s) {
    e === 'beforeInit' && ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'))
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      a = this._notify(o, t, e, i)
    return e === 'afterDestroy' && (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')), a
  }
  _notify(t, e, i, s) {
    s = s || {}
    for (const o of t) {
      const a = o.plugin,
        r = a[i],
        c = [e, s, o.options]
      if (nt(r, c, a) === !1 && s.cancelable) return !1
    }
    return !0
  }
  invalidate() {
    X(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
  }
  _descriptors(t) {
    if (this._cache) return this._cache
    const e = (this._cache = this._createDescriptors(t))
    return this._notifyStateChanges(t), e
  }
  _createDescriptors(t, e) {
    const i = t && t.config,
      s = F(i.options && i.options.plugins, {}),
      o = Iu(i)
    return s === !1 && !e ? [] : Fu(t, o, s, e)
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      i = this._cache,
      s = (o, a) => o.filter((r) => !a.some((c) => r.plugin.id === c.plugin.id))
    this._notify(s(e, i), t, 'stop'), this._notify(s(i, e), t, 'start')
  }
}
function Iu(n) {
  const t = {},
    e = [],
    i = Object.keys(yt.plugins.items)
  for (let o = 0; o < i.length; o++) e.push(yt.getPlugin(i[o]))
  const s = n.plugins || []
  for (let o = 0; o < s.length; o++) {
    const a = s[o]
    e.indexOf(a) === -1 && (e.push(a), (t[a.id] = !0))
  }
  return { plugins: e, localIds: t }
}
function zu(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n
}
function Fu(n, { plugins: t, localIds: e }, i, s) {
  const o = [],
    a = n.getContext()
  for (const r of t) {
    const c = r.id,
      l = zu(i[c], s)
    l !== null && o.push({ plugin: r, options: Bu(n.config, { plugin: r, local: e[c] }, l, a) })
  }
  return o
}
function Bu(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t),
    a = n.getOptionScopes(i, o)
  return (
    e && t.defaults && a.push(t.defaults), n.createResolver(a, s, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  )
}
function Ks(n, t) {
  const e = lt.datasets[n] || {}
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x'
}
function Nu(n, t) {
  let e = n
  return n === '_index_' ? (e = t) : n === '_value_' && (e = t === 'x' ? 'y' : 'x'), e
}
function Vu(n, t) {
  return n === t ? '_index_' : '_value_'
}
function ja(n) {
  if (n === 'x' || n === 'y' || n === 'r') return n
}
function $u(n) {
  if (n === 'top' || n === 'bottom') return 'x'
  if (n === 'left' || n === 'right') return 'y'
}
function Zs(n, ...t) {
  if (ja(n)) return n
  for (const e of t) {
    const i = e.axis || $u(e.position) || (n.length > 1 && ja(n[0].toLowerCase()))
    if (i) return i
  }
  throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)
}
function Wa(n, t, e) {
  if (e[t + 'AxisID'] === n) return { axis: t }
}
function ju(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n)
    if (e.length) return Wa(n, 'x', e[0]) || Wa(n, 'y', e[0])
  }
  return {}
}
function Wu(n, t) {
  const e = $e[n.type] || { scales: {} },
    i = t.scales || {},
    s = Ks(n.type, t),
    o = Object.create(null)
  return (
    Object.keys(i).forEach((a) => {
      const r = i[a]
      if (!Y(r)) return console.error(`Invalid scale configuration for scale: ${a}`)
      if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`)
      const c = Zs(a, r, ju(a, n), lt.scales[r.type]),
        l = Vu(c, s),
        f = e.scales || {}
      o[a] = Rn(Object.create(null), [{ axis: c }, r, f[c], f[l]])
    }),
    n.data.datasets.forEach((a) => {
      const r = a.type || n.type,
        c = a.indexAxis || Ks(r, t),
        f = ($e[r] || {}).scales || {}
      Object.keys(f).forEach((d) => {
        const h = Nu(d, c),
          u = a[h + 'AxisID'] || h
        ;(o[u] = o[u] || Object.create(null)), Rn(o[u], [{ axis: h }, i[u], f[d]])
      })
    }),
    Object.keys(o).forEach((a) => {
      const r = o[a]
      Rn(r, [lt.scales[r.type], lt.scale])
    }),
    o
  )
}
function Gc(n) {
  const t = n.options || (n.options = {})
  ;(t.plugins = F(t.plugins, {})), (t.scales = Wu(n, t))
}
function qc(n) {
  return (n = n || {}), (n.datasets = n.datasets || []), (n.labels = n.labels || []), n
}
function Hu(n) {
  return (n = n || {}), (n.data = qc(n.data)), Gc(n), n
}
const Ha = new Map(),
  Kc = new Set()
function xi(n, t) {
  let e = Ha.get(n)
  return e || ((e = t()), Ha.set(n, e), Kc.add(e)), e
}
const wn = (n, t, e) => {
  const i = me(t, e)
  i !== void 0 && n.add(i)
}
class Yu {
  constructor(t) {
    ;(this._config = Hu(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map())
  }
  get platform() {
    return this._config.platform
  }
  get type() {
    return this._config.type
  }
  set type(t) {
    this._config.type = t
  }
  get data() {
    return this._config.data
  }
  set data(t) {
    this._config.data = qc(t)
  }
  get options() {
    return this._config.options
  }
  set options(t) {
    this._config.options = t
  }
  get plugins() {
    return this._config.plugins
  }
  update() {
    const t = this._config
    this.clearCache(), Gc(t)
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear()
  }
  datasetScopeKeys(t) {
    return xi(t, () => [[`datasets.${t}`, '']])
  }
  datasetAnimationScopeKeys(t, e) {
    return xi(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ])
  }
  datasetElementScopeKeys(t, e) {
    return xi(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, '']])
  }
  pluginScopeKeys(t) {
    const e = t.id,
      i = this.type
    return xi(`${i}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]])
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache
    let s = i.get(t)
    return (!s || e) && ((s = new Map()), i.set(t, s)), s
  }
  getOptionScopes(t, e, i) {
    const { options: s, type: o } = this,
      a = this._cachedScopes(t, i),
      r = a.get(e)
    if (r) return r
    const c = new Set()
    e.forEach((f) => {
      t && (c.add(t), f.forEach((d) => wn(c, t, d))),
        f.forEach((d) => wn(c, s, d)),
        f.forEach((d) => wn(c, $e[o] || {}, d)),
        f.forEach((d) => wn(c, lt, d)),
        f.forEach((d) => wn(c, Gs, d))
    })
    const l = Array.from(c)
    return l.length === 0 && l.push(Object.create(null)), Kc.has(e) && a.set(e, l), l
  }
  chartOptionScopes() {
    const { options: t, type: e } = this
    return [t, $e[e] || {}, lt.datasets[e] || {}, { type: e }, lt, Gs]
  }
  resolveNamedOptions(t, e, i, s = ['']) {
    const o = { $shared: !0 },
      { resolver: a, subPrefixes: r } = Ya(this._resolverCache, t, s)
    let c = a
    if (Xu(a, e)) {
      ;(o.$shared = !1), (i = xe(i) ? i() : i)
      const l = this.createResolver(t, i, r)
      c = rn(a, i, l)
    }
    for (const l of e) o[l] = c[l]
    return o
  }
  createResolver(t, e, i = [''], s) {
    const { resolver: o } = Ya(this._resolverCache, t, i)
    return Y(e) ? rn(o, e, void 0, s) : o
  }
}
function Ya(n, t, e) {
  let i = n.get(t)
  i || ((i = new Map()), n.set(t, i))
  const s = e.join()
  let o = i.get(s)
  return (
    o || ((o = { resolver: Ro(t, e), subPrefixes: e.filter((r) => !r.toLowerCase().includes('hover')) }), i.set(s, o)),
    o
  )
}
const Uu = (n) => Y(n) && Object.getOwnPropertyNames(n).some((t) => xe(n[t]))
function Xu(n, t) {
  const { isScriptable: e, isIndexable: i } = Ac(n)
  for (const s of t) {
    const o = e(s),
      a = i(s),
      r = (a || o) && n[s]
    if ((o && (xe(r) || Uu(r))) || (a && at(r))) return !0
  }
  return !1
}
var Gu = '4.4.1'
const qu = ['top', 'bottom', 'left', 'right', 'chartArea']
function Ua(n, t) {
  return n === 'top' || n === 'bottom' || (qu.indexOf(n) === -1 && t === 'x')
}
function Xa(n, t) {
  return function (e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n]
  }
}
function Ga(n) {
  const t = n.chart,
    e = t.options.animation
  t.notifyPlugins('afterRender'), nt(e && e.onComplete, [n], t)
}
function Ku(n) {
  const t = n.chart,
    e = t.options.animation
  nt(e && e.onProgress, [n], t)
}
function Zc(n) {
  return (
    zo() && typeof n == 'string' ? (n = document.getElementById(n)) : n && n.length && (n = n[0]),
    n && n.canvas && (n = n.canvas),
    n
  )
}
const $i = {},
  qa = (n) => {
    const t = Zc(n)
    return Object.values($i)
      .filter((e) => e.canvas === t)
      .pop()
  }
function Zu(n, t, e) {
  const i = Object.keys(n)
  for (const s of i) {
    const o = +s
    if (o >= t) {
      const a = n[s]
      delete n[s], (e > 0 || o > t) && (n[o + e] = a)
    }
  }
}
function Ju(n, t, e, i) {
  return !e || n.type === 'mouseout' ? null : i ? t : n
}
function _i(n, t, e) {
  return n.options.clip ? n[e] : t[e]
}
function Qu(n, t) {
  const { xScale: e, yScale: i } = n
  return e && i
    ? { left: _i(e, t, 'left'), right: _i(e, t, 'right'), top: _i(i, t, 'top'), bottom: _i(i, t, 'bottom') }
    : t
}
class Dt {
  static register(...t) {
    yt.add(...t), Ka()
  }
  static unregister(...t) {
    yt.remove(...t), Ka()
  }
  constructor(t, e) {
    const i = (this.config = new Yu(e)),
      s = Zc(t),
      o = qa(s)
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas with ID '" +
          o.canvas.id +
          "' can be reused.",
      )
    const a = i.createResolver(i.chartOptionScopes(), this.getContext())
    ;(this.platform = new (i.platform || bu(s))()), this.platform.updateConfig(i)
    const r = this.platform.acquireContext(s, a.aspectRatio),
      c = r && r.canvas,
      l = c && c.height,
      f = c && c.width
    if (
      ((this.id = ed()),
      (this.ctx = r),
      (this.canvas = c),
      (this.width = f),
      (this.height = l),
      (this._options = a),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new Lu()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = md((d) => this.update(d), a.resizeDelay || 0)),
      (this._dataChanges = []),
      ($i[this.id] = this),
      !r || !c)
    ) {
      console.error("Failed to create chart: can't acquire context from the given item")
      return
    }
    ne.listen(this, 'complete', Ga), ne.listen(this, 'progress', Ku), this._initialize(), this.attached && this.update()
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: i,
      height: s,
      _aspectRatio: o,
    } = this
    return X(t) ? (e && o ? o : s ? i / s : null) : t
  }
  get data() {
    return this.config.data
  }
  set data(t) {
    this.config.data = t
  }
  get options() {
    return this._options
  }
  set options(t) {
    this.config.options = t
  }
  get registry() {
    return yt
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive ? this.resize() : ma(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    )
  }
  clear() {
    return pa(this.canvas, this.ctx), this
  }
  stop() {
    return ne.stop(this), this
  }
  resize(t, e) {
    ne.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e)
  }
  _resize(t, e) {
    const i = this.options,
      s = this.canvas,
      o = i.maintainAspectRatio && this.aspectRatio,
      a = this.platform.getMaximumSize(s, t, e, o),
      r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      c = this.width ? 'resize' : 'attach'
    ;(this.width = a.width),
      (this.height = a.height),
      (this._aspectRatio = this.aspectRatio),
      ma(this, r, !0) &&
        (this.notifyPlugins('resize', { size: a }),
        nt(i.onResize, [this, a], this),
        this.attached && this._doResize(c) && this.render())
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {}
    J(e, (i, s) => {
      i.id = s
    })
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      i = this.scales,
      s = Object.keys(i).reduce((a, r) => ((a[r] = !1), a), {})
    let o = []
    e &&
      (o = o.concat(
        Object.keys(e).map((a) => {
          const r = e[a],
            c = Zs(a, r),
            l = c === 'r',
            f = c === 'x'
          return {
            options: r,
            dposition: l ? 'chartArea' : f ? 'bottom' : 'left',
            dtype: l ? 'radialLinear' : f ? 'category' : 'linear',
          }
        }),
      )),
      J(o, (a) => {
        const r = a.options,
          c = r.id,
          l = Zs(c, r),
          f = F(r.type, a.dtype)
        ;(r.position === void 0 || Ua(r.position, l) !== Ua(a.dposition)) && (r.position = a.dposition), (s[c] = !0)
        let d = null
        if (c in i && i[c].type === f) d = i[c]
        else {
          const h = yt.getScale(f)
          ;(d = new h({ id: c, type: f, ctx: this.ctx, chart: this })), (i[d.id] = d)
        }
        d.init(r, t)
      }),
      J(s, (a, r) => {
        a || delete i[r]
      }),
      J(i, (a) => {
        gt.configure(this, a, a.options), gt.addBox(this, a)
      })
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      i = t.length
    if ((t.sort((s, o) => s.index - o.index), i > e)) {
      for (let s = e; s < i; ++s) this._destroyDatasetMeta(s)
      t.splice(e, i - e)
    }
    this._sortedMetasets = t.slice(0).sort(Xa('order', 'index'))
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: e },
    } = this
    t.length > e.length && delete this._stacks,
      t.forEach((i, s) => {
        e.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s)
      })
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets
    let i, s
    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
      const o = e[i]
      let a = this.getDatasetMeta(i)
      const r = o.type || this.config.type
      if (
        (a.type && a.type !== r && (this._destroyDatasetMeta(i), (a = this.getDatasetMeta(i))),
        (a.type = r),
        (a.indexAxis = o.indexAxis || Ks(r, this.options)),
        (a.order = o.order || 0),
        (a.index = i),
        (a.label = '' + o.label),
        (a.visible = this.isDatasetVisible(i)),
        a.controller)
      )
        a.controller.updateIndex(i), a.controller.linkScales()
      else {
        const c = yt.getController(r),
          { datasetElementType: l, dataElementType: f } = lt.datasets[r]
        Object.assign(c, { dataElementType: yt.getElement(f), datasetElementType: l && yt.getElement(l) }),
          (a.controller = new c(this, i)),
          t.push(a.controller)
      }
    }
    return this._updateMetasets(), t
  }
  _resetElements() {
    J(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset()
      },
      this,
    )
  }
  reset() {
    this._resetElements(), this.notifyPlugins('reset')
  }
  update(t) {
    const e = this.config
    e.update()
    const i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
      s = (this._animationsDisabled = !i.animation)
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
    )
      return
    const o = this.buildOrUpdateControllers()
    this.notifyPlugins('beforeElementsUpdate')
    let a = 0
    for (let l = 0, f = this.data.datasets.length; l < f; l++) {
      const { controller: d } = this.getDatasetMeta(l),
        h = !s && o.indexOf(d) === -1
      d.buildOrUpdateElements(h), (a = Math.max(+d.getMaxOverflow(), a))
    }
    ;(a = this._minPadding = i.layout.autoPadding ? a : 0),
      this._updateLayout(a),
      s ||
        J(o, (l) => {
          l.reset()
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', { mode: t }),
      this._layers.sort(Xa('z', '_idx'))
    const { _active: r, _lastEvent: c } = this
    c ? this._eventHandler(c, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render()
  }
  _updateScales() {
    J(this.scales, (t) => {
      gt.removeBox(this, t)
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales()
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      i = new Set(t.events)
    ;(!oa(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents())
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || []
    for (const { method: i, start: s, count: o } of e) {
      const a = i === '_removeElements' ? -o : o
      Zu(t, s, a)
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges
    if (!t || !t.length) return
    this._dataChanges = []
    const e = this.data.datasets.length,
      i = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + ',' + a.splice(1).join(','))),
      s = i(0)
    for (let o = 1; o < e; o++) if (!oa(s, i(o))) return
    return Array.from(s)
      .map((o) => o.split(','))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }))
  }
  _updateLayout(t) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return
    gt.update(this, this.width, this.height, t)
    const e = this.chartArea,
      i = e.width <= 0 || e.height <= 0
    ;(this._layers = []),
      J(
        this.boxes,
        (s) => {
          ;(i && s.position === 'chartArea') || (s.configure && s.configure(), this._layers.push(...s._layers()))
        },
        this,
      ),
      this._layers.forEach((s, o) => {
        s._idx = o
      }),
      this.notifyPlugins('afterLayout')
  }
  _updateDatasets(t) {
    if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
      for (let e = 0, i = this.data.datasets.length; e < i; ++e) this.getDatasetMeta(e).controller.configure()
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, xe(t) ? t({ datasetIndex: e }) : t)
      this.notifyPlugins('afterDatasetsUpdate', { mode: t })
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t),
      s = { meta: i, index: t, mode: e, cancelable: !0 }
    this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
      (i.controller._update(e), (s.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', s))
  }
  render() {
    this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
      (ne.has(this) ? this.attached && !ne.running(this) && ne.start(this) : (this.draw(), Ga({ chart: this })))
  }
  draw() {
    let t
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw
      this._resize(i, s), (this._resizeBeforeDraw = null)
    }
    if (
      (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
    )
      return
    const e = this._layers
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea)
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea)
    this.notifyPlugins('afterDraw')
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      i = []
    let s, o
    for (s = 0, o = e.length; s < o; ++s) {
      const a = e[s]
      ;(!t || a.visible) && i.push(a)
    }
    return i
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0)
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return
    const t = this.getSortedVisibleDatasetMetas()
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e])
    this.notifyPlugins('afterDatasetsDraw')
  }
  _drawDataset(t) {
    const e = this.ctx,
      i = t._clip,
      s = !i.disabled,
      o = Qu(t, this.chartArea),
      a = { meta: t, index: t.index, cancelable: !0 }
    this.notifyPlugins('beforeDatasetDraw', a) !== !1 &&
      (s &&
        Ie(e, {
          left: i.left === !1 ? 0 : o.left - i.left,
          right: i.right === !1 ? this.width : o.right + i.right,
          top: i.top === !1 ? 0 : o.top - i.top,
          bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom,
        }),
      t.controller.draw(),
      s && ze(e),
      (a.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', a))
  }
  isPointInArea(t) {
    return le(t, this.chartArea, this._minPadding)
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = qh.modes[e]
    return typeof o == 'function' ? o(this, t, i, s) : []
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      i = this._metasets
    let s = i.filter((o) => o && o._dataset === e).pop()
    return (
      s ||
        ((s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(s)),
      s
    )
  }
  getContext() {
    return this.$context || (this.$context = ve(null, { chart: this, type: 'chart' }))
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t]
    if (!e) return !1
    const i = this.getDatasetMeta(t)
    return typeof i.hidden == 'boolean' ? !i.hidden : !e.hidden
  }
  setDatasetVisibility(t, e) {
    const i = this.getDatasetMeta(t)
    i.hidden = !e
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t]
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t]
  }
  _updateVisibility(t, e, i) {
    const s = i ? 'show' : 'hide',
      o = this.getDatasetMeta(t),
      a = o.controller._resolveAnimations(void 0, s)
    Un(e)
      ? ((o.data[e].hidden = !i), this.update())
      : (this.setDatasetVisibility(t, i),
        a.update(o, { visible: i }),
        this.update((r) => (r.datasetIndex === t ? s : void 0)))
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1)
  }
  show(t, e) {
    this._updateVisibility(t, e, !0)
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t]
    e && e.controller && e.controller._destroy(), delete this._metasets[t]
  }
  _stop() {
    let t, e
    for (this.stop(), ne.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
  }
  destroy() {
    this.notifyPlugins('beforeDestroy')
    const { canvas: t, ctx: e } = this
    this._stop(),
      this.config.clearCache(),
      t && (this.unbindEvents(), pa(t, e), this.platform.releaseContext(e), (this.canvas = null), (this.ctx = null)),
      delete $i[this.id],
      this.notifyPlugins('afterDestroy')
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t)
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0)
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      i = (o, a) => {
        e.addEventListener(this, o, a), (t[o] = a)
      },
      s = (o, a, r) => {
        ;(o.offsetX = a), (o.offsetY = r), this._eventHandler(o)
      }
    J(this.options.events, (o) => i(o, s))
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {})
    const t = this._responsiveListeners,
      e = this.platform,
      i = (c, l) => {
        e.addEventListener(this, c, l), (t[c] = l)
      },
      s = (c, l) => {
        t[c] && (e.removeEventListener(this, c, l), delete t[c])
      },
      o = (c, l) => {
        this.canvas && this.resize(c, l)
      }
    let a
    const r = () => {
      s('attach', r), (this.attached = !0), this.resize(), i('resize', o), i('detach', a)
    }
    ;(a = () => {
      ;(this.attached = !1), s('resize', o), this._stop(), this._resize(0, 0), i('attach', r)
    }),
      e.isAttached(this.canvas) ? r() : a()
  }
  unbindEvents() {
    J(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t)
    }),
      (this._listeners = {}),
      J(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t)
      }),
      (this._responsiveListeners = void 0)
  }
  updateHoverStyle(t, e, i) {
    const s = i ? 'set' : 'remove'
    let o, a, r, c
    for (
      e === 'dataset' && ((o = this.getDatasetMeta(t[0].datasetIndex)), o.controller['_' + s + 'DatasetHoverStyle']()),
        r = 0,
        c = t.length;
      r < c;
      ++r
    ) {
      a = t[r]
      const l = a && this.getDatasetMeta(a.datasetIndex).controller
      l && l[s + 'HoverStyle'](a.element, a.datasetIndex, a.index)
    }
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t) {
    const e = this._active || [],
      i = t.map(({ datasetIndex: o, index: a }) => {
        const r = this.getDatasetMeta(o)
        if (!r) throw new Error('No dataset found at index ' + o)
        return { datasetIndex: o, element: r.data[a], index: a }
      })
    !Ui(i, e) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e))
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i)
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover,
      o = (c, l) => c.filter((f) => !l.some((d) => f.datasetIndex === d.datasetIndex && f.index === d.index)),
      a = o(e, t),
      r = i ? t : o(t, e)
    a.length && this.updateHoverStyle(a, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0)
  }
  _eventHandler(t, e) {
    const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
      s = (a) => (a.options.events || this.options.events).includes(t.native.type)
    if (this.notifyPlugins('beforeEvent', i, s) === !1) return
    const o = this._handleEvent(t, e, i.inChartArea)
    return (i.cancelable = !1), this.notifyPlugins('afterEvent', i, s), (o || i.changed) && this.render(), this
  }
  _handleEvent(t, e, i) {
    const { _active: s = [], options: o } = this,
      a = e,
      r = this._getActiveElements(t, s, i, a),
      c = rd(t),
      l = Ju(t, this._lastEvent, i, c)
    i && ((this._lastEvent = null), nt(o.onHover, [t, r, this], this), c && nt(o.onClick, [t, r, this], this))
    const f = !Ui(r, s)
    return (f || e) && ((this._active = r), this._updateHoverStyles(r, s, e)), (this._lastEvent = l), f
  }
  _getActiveElements(t, e, i, s) {
    if (t.type === 'mouseout') return []
    if (!i) return e
    const o = this.options.hover
    return this.getElementsAtEventForMode(t, o.mode, o, s)
  }
}
D(Dt, 'defaults', lt),
  D(Dt, 'instances', $i),
  D(Dt, 'overrides', $e),
  D(Dt, 'registry', yt),
  D(Dt, 'version', Gu),
  D(Dt, 'getChart', qa)
function Ka() {
  return J(Dt.instances, (n) => n._plugins.invalidate())
}
function tp(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: a, outerRadius: r, innerRadius: c } = t
  let l = s / r
  n.beginPath(),
    n.arc(o, a, r, i - l, e + l),
    c > s ? ((l = s / c), n.arc(o, a, c, e + l, i - l, !0)) : n.arc(o, a, s, e + ft, i - ft),
    n.closePath(),
    n.clip()
}
function ep(n) {
  return Eo(n, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
}
function np(n, t, e, i) {
  const s = ep(n.options.borderRadius),
    o = (e - t) / 2,
    a = Math.min(o, (i * t) / 2),
    r = (c) => {
      const l = ((e - Math.min(o, c)) * i) / 2
      return ut(c, 0, Math.min(o, l))
    }
  return {
    outerStart: r(s.outerStart),
    outerEnd: r(s.outerEnd),
    innerStart: ut(s.innerStart, 0, a),
    innerEnd: ut(s.innerEnd, 0, a),
  }
}
function Ke(n, t, e, i) {
  return { x: e + n * Math.cos(t), y: i + n * Math.sin(t) }
}
function Qi(n, t, e, i, s, o) {
  const { x: a, y: r, startAngle: c, pixelMargin: l, innerRadius: f } = t,
    d = Math.max(t.outerRadius + i + e - l, 0),
    h = f > 0 ? f + i + e + l : 0
  let u = 0
  const p = s - c
  if (i) {
    const w = f > 0 ? f - i : 0,
      T = d > 0 ? d - i : 0,
      j = (w + T) / 2,
      et = j !== 0 ? (p * j) / (j + i) : p
    u = (p - et) / 2
  }
  const g = Math.max(0.001, p * d - e / ot) / d,
    b = (p - g) / 2,
    m = c + b + u,
    x = s - b - u,
    { outerStart: _, outerEnd: v, innerStart: y, innerEnd: M } = np(t, h, d, x - m),
    k = d - _,
    S = d - v,
    C = m + _ / k,
    O = x - v / S,
    P = h + y,
    I = h + M,
    W = m + y / P,
    V = x - M / I
  if ((n.beginPath(), o)) {
    const w = (C + O) / 2
    if ((n.arc(a, r, d, C, w), n.arc(a, r, d, w, O), v > 0)) {
      const Z = Ke(S, O, a, r)
      n.arc(Z.x, Z.y, v, O, x + ft)
    }
    const T = Ke(I, x, a, r)
    if ((n.lineTo(T.x, T.y), M > 0)) {
      const Z = Ke(I, V, a, r)
      n.arc(Z.x, Z.y, M, x + ft, V + Math.PI)
    }
    const j = (x - M / h + (m + y / h)) / 2
    if ((n.arc(a, r, h, x - M / h, j, !0), n.arc(a, r, h, j, m + y / h, !0), y > 0)) {
      const Z = Ke(P, W, a, r)
      n.arc(Z.x, Z.y, y, W + Math.PI, m - ft)
    }
    const et = Ke(k, m, a, r)
    if ((n.lineTo(et.x, et.y), _ > 0)) {
      const Z = Ke(k, C, a, r)
      n.arc(Z.x, Z.y, _, m - ft, C)
    }
  } else {
    n.moveTo(a, r)
    const w = Math.cos(C) * d + a,
      T = Math.sin(C) * d + r
    n.lineTo(w, T)
    const j = Math.cos(O) * d + a,
      et = Math.sin(O) * d + r
    n.lineTo(j, et)
  }
  n.closePath()
}
function ip(n, t, e, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r } = t
  let c = t.endAngle
  if (o) {
    Qi(n, t, e, i, c, s)
    for (let l = 0; l < o; ++l) n.fill()
    isNaN(r) || (c = a + (r % st || st))
  }
  return Qi(n, t, e, i, c, s), n.fill(), c
}
function sp(n, t, e, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r, options: c } = t,
    { borderWidth: l, borderJoinStyle: f, borderDash: d, borderDashOffset: h } = c,
    u = c.borderAlign === 'inner'
  if (!l) return
  n.setLineDash(d || []),
    (n.lineDashOffset = h),
    u ? ((n.lineWidth = l * 2), (n.lineJoin = f || 'round')) : ((n.lineWidth = l), (n.lineJoin = f || 'bevel'))
  let p = t.endAngle
  if (o) {
    Qi(n, t, e, i, p, s)
    for (let g = 0; g < o; ++g) n.stroke()
    isNaN(r) || (p = a + (r % st || st))
  }
  u && tp(n, t, p), o || (Qi(n, t, e, i, p, s), n.stroke())
}
class Ze extends Wt {
  constructor(e) {
    super()
    D(this, 'circumference')
    D(this, 'endAngle')
    D(this, 'fullCircles')
    D(this, 'innerRadius')
    D(this, 'outerRadius')
    D(this, 'pixelMargin')
    D(this, 'startAngle')
    ;(this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      e && Object.assign(this, e)
  }
  inRange(e, i, s) {
    const o = this.getProps(['x', 'y'], s),
      { angle: a, distance: r } = _c(o, { x: e, y: i }),
      {
        startAngle: c,
        endAngle: l,
        innerRadius: f,
        outerRadius: d,
        circumference: h,
      } = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], s),
      u = (this.options.spacing + this.options.borderWidth) / 2,
      g = F(h, l - c) >= st || Xn(a, c, l),
      b = re(r, f + u, d + u)
    return g && b
  }
  getCenterPoint(e) {
    const {
        x: i,
        y: s,
        startAngle: o,
        endAngle: a,
        innerRadius: r,
        outerRadius: c,
      } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], e),
      { offset: l, spacing: f } = this.options,
      d = (o + a) / 2,
      h = (r + c + f + l) / 2
    return { x: i + Math.cos(d) * h, y: s + Math.sin(d) * h }
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e)
  }
  draw(e) {
    const { options: i, circumference: s } = this,
      o = (i.offset || 0) / 4,
      a = (i.spacing || 0) / 2,
      r = i.circular
    if (
      ((this.pixelMargin = i.borderAlign === 'inner' ? 0.33 : 0),
      (this.fullCircles = s > st ? Math.floor(s / st) : 0),
      s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return
    e.save()
    const c = (this.startAngle + this.endAngle) / 2
    e.translate(Math.cos(c) * o, Math.sin(c) * o)
    const l = 1 - Math.sin(Math.min(ot, s || 0)),
      f = o * l
    ;(e.fillStyle = i.backgroundColor),
      (e.strokeStyle = i.borderColor),
      ip(e, this, f, a, r),
      sp(e, this, f, a, r),
      e.restore()
  }
}
D(Ze, 'id', 'arc'),
  D(Ze, 'defaults', {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  D(Ze, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
  D(Ze, 'descriptors', { _scriptable: !0, _indexable: (e) => e !== 'borderDash' })
function Jc(n, t, e = t) {
  ;(n.lineCap = F(e.borderCapStyle, t.borderCapStyle)),
    n.setLineDash(F(e.borderDash, t.borderDash)),
    (n.lineDashOffset = F(e.borderDashOffset, t.borderDashOffset)),
    (n.lineJoin = F(e.borderJoinStyle, t.borderJoinStyle)),
    (n.lineWidth = F(e.borderWidth, t.borderWidth)),
    (n.strokeStyle = F(e.borderColor, t.borderColor))
}
function op(n, t, e) {
  n.lineTo(e.x, e.y)
}
function ap(n) {
  return n.stepped ? Ad : n.tension || n.cubicInterpolationMode === 'monotone' ? Od : op
}
function Qc(n, t, e = {}) {
  const i = n.length,
    { start: s = 0, end: o = i - 1 } = e,
    { start: a, end: r } = t,
    c = Math.max(s, a),
    l = Math.min(o, r),
    f = (s < a && o < a) || (s > r && o > r)
  return { count: i, start: c, loop: t.loop, ilen: l < c && !f ? i + l - c : l - c }
}
function rp(n, t, e, i) {
  const { points: s, options: o } = t,
    { count: a, start: r, loop: c, ilen: l } = Qc(s, e, i),
    f = ap(o)
  let { move: d = !0, reverse: h } = i || {},
    u,
    p,
    g
  for (u = 0; u <= l; ++u)
    (p = s[(r + (h ? l - u : u)) % a]),
      !p.skip && (d ? (n.moveTo(p.x, p.y), (d = !1)) : f(n, g, p, h, o.stepped), (g = p))
  return c && ((p = s[(r + (h ? l : 0)) % a]), f(n, g, p, h, o.stepped)), !!c
}
function cp(n, t, e, i) {
  const s = t.points,
    { count: o, start: a, ilen: r } = Qc(s, e, i),
    { move: c = !0, reverse: l } = i || {}
  let f = 0,
    d = 0,
    h,
    u,
    p,
    g,
    b,
    m
  const x = (v) => (a + (l ? r - v : v)) % o,
    _ = () => {
      g !== b && (n.lineTo(f, b), n.lineTo(f, g), n.lineTo(f, m))
    }
  for (c && ((u = s[x(0)]), n.moveTo(u.x, u.y)), h = 0; h <= r; ++h) {
    if (((u = s[x(h)]), u.skip)) continue
    const v = u.x,
      y = u.y,
      M = v | 0
    M === p
      ? (y < g ? (g = y) : y > b && (b = y), (f = (d * f + v) / ++d))
      : (_(), n.lineTo(v, y), (p = M), (d = 0), (g = b = y)),
      (m = y)
  }
  _()
}
function Js(n) {
  const t = n.options,
    e = t.borderDash && t.borderDash.length
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== 'monotone' && !t.stepped && !e
    ? cp
    : rp
}
function lp(n) {
  return n.stepped ? ch : n.tension || n.cubicInterpolationMode === 'monotone' ? lh : Te
}
function fp(n, t, e, i) {
  let s = t._path
  s || ((s = t._path = new Path2D()), t.path(s, e, i) && s.closePath()), Jc(n, t.options), n.stroke(s)
}
function dp(n, t, e, i) {
  const { segments: s, options: o } = t,
    a = Js(t)
  for (const r of s)
    Jc(n, o, r.style), n.beginPath(), a(n, t, r, { start: e, end: e + i - 1 }) && n.closePath(), n.stroke()
}
const hp = typeof Path2D == 'function'
function up(n, t, e, i) {
  hp && !t.options.segment ? fp(n, t, e, i) : dp(n, t, e, i)
}
class pe extends Wt {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t)
  }
  updateControlPoints(t, e) {
    const i = this.options
    if ((i.tension || i.cubicInterpolationMode === 'monotone') && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop
      th(this._points, i, t, s, e), (this._pointsUpdated = !0)
    }
  }
  set points(t) {
    ;(this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1)
  }
  get points() {
    return this._points
  }
  get segments() {
    return this._segments || (this._segments = gh(this, this.options.segment))
  }
  first() {
    const t = this.segments,
      e = this.points
    return t.length && e[t[0].start]
  }
  last() {
    const t = this.segments,
      e = this.points,
      i = t.length
    return i && e[t[i - 1].end]
  }
  interpolate(t, e) {
    const i = this.options,
      s = t[e],
      o = this.points,
      a = Nc(this, { property: e, start: s, end: s })
    if (!a.length) return
    const r = [],
      c = lp(i)
    let l, f
    for (l = 0, f = a.length; l < f; ++l) {
      const { start: d, end: h } = a[l],
        u = o[d],
        p = o[h]
      if (u === p) {
        r.push(u)
        continue
      }
      const g = Math.abs((s - u[e]) / (p[e] - u[e])),
        b = c(u, p, g, i.stepped)
      ;(b[e] = t[e]), r.push(b)
    }
    return r.length === 1 ? r[0] : r
  }
  pathSegment(t, e, i) {
    return Js(this)(t, this, e, i)
  }
  path(t, e, i) {
    const s = this.segments,
      o = Js(this)
    let a = this._loop
    ;(e = e || 0), (i = i || this.points.length - e)
    for (const r of s) a &= o(t, this, r, { start: e, end: e + i - 1 })
    return !!a
  }
  draw(t, e, i, s) {
    const o = this.options || {}
    ;(this.points || []).length && o.borderWidth && (t.save(), up(t, this, i, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0))
  }
}
D(pe, 'id', 'line'),
  D(pe, 'defaults', {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  D(pe, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
  D(pe, 'descriptors', { _scriptable: !0, _indexable: (t) => t !== 'borderDash' && t !== 'fill' })
function Za(n, t, e, i) {
  const s = n.options,
    { [e]: o } = n.getProps([e], i)
  return Math.abs(t - o) < s.radius + s.hitRadius
}
class Bn extends Wt {
  constructor(e) {
    super()
    D(this, 'parsed')
    D(this, 'skip')
    D(this, 'stop')
    ;(this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e)
  }
  inRange(e, i, s) {
    const o = this.options,
      { x: a, y: r } = this.getProps(['x', 'y'], s)
    return Math.pow(e - a, 2) + Math.pow(i - r, 2) < Math.pow(o.hitRadius + o.radius, 2)
  }
  inXRange(e, i) {
    return Za(this, e, 'x', i)
  }
  inYRange(e, i) {
    return Za(this, e, 'y', i)
  }
  getCenterPoint(e) {
    const { x: i, y: s } = this.getProps(['x', 'y'], e)
    return { x: i, y: s }
  }
  size(e) {
    e = e || this.options || {}
    let i = e.radius || 0
    i = Math.max(i, (i && e.hoverRadius) || 0)
    const s = (i && e.borderWidth) || 0
    return (i + s) * 2
  }
  draw(e, i) {
    const s = this.options
    this.skip ||
      s.radius < 0.1 ||
      !le(this, i, this.size(s) / 2) ||
      ((e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      (e.fillStyle = s.backgroundColor),
      Ki(e, s, this.x, this.y))
  }
  getRange() {
    const e = this.options || {}
    return e.radius + e.hitRadius
  }
}
D(Bn, 'id', 'point'),
  D(Bn, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }),
  D(Bn, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' })
function tl(n, t) {
  const { x: e, y: i, base: s, width: o, height: a } = n.getProps(['x', 'y', 'base', 'width', 'height'], t)
  let r, c, l, f, d
  return (
    n.horizontal
      ? ((d = a / 2), (r = Math.min(e, s)), (c = Math.max(e, s)), (l = i - d), (f = i + d))
      : ((d = o / 2), (r = e - d), (c = e + d), (l = Math.min(i, s)), (f = Math.max(i, s))),
    { left: r, top: l, right: c, bottom: f }
  )
}
function ge(n, t, e, i) {
  return n ? 0 : ut(t, e, i)
}
function pp(n, t, e) {
  const i = n.options.borderWidth,
    s = n.borderSkipped,
    o = Dc(i)
  return {
    t: ge(s.top, o.top, 0, e),
    r: ge(s.right, o.right, 0, t),
    b: ge(s.bottom, o.bottom, 0, e),
    l: ge(s.left, o.left, 0, t),
  }
}
function gp(n, t, e) {
  const { enableBorderRadius: i } = n.getProps(['enableBorderRadius']),
    s = n.options.borderRadius,
    o = Fe(s),
    a = Math.min(t, e),
    r = n.borderSkipped,
    c = i || Y(s)
  return {
    topLeft: ge(!c || r.top || r.left, o.topLeft, 0, a),
    topRight: ge(!c || r.top || r.right, o.topRight, 0, a),
    bottomLeft: ge(!c || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: ge(!c || r.bottom || r.right, o.bottomRight, 0, a),
  }
}
function bp(n) {
  const t = tl(n),
    e = t.right - t.left,
    i = t.bottom - t.top,
    s = pp(n, e / 2, i / 2),
    o = gp(n, e / 2, i / 2)
  return {
    outer: { x: t.left, y: t.top, w: e, h: i, radius: o },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
      },
    },
  }
}
function Ls(n, t, e, i) {
  const s = t === null,
    o = e === null,
    r = n && !(s && o) && tl(n, i)
  return r && (s || re(t, r.left, r.right)) && (o || re(e, r.top, r.bottom))
}
function mp(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight
}
function xp(n, t) {
  n.rect(t.x, t.y, t.w, t.h)
}
function Is(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0,
    s = n.y !== e.y ? -t : 0,
    o = (n.x + n.w !== e.x + e.w ? t : 0) - i,
    a = (n.y + n.h !== e.y + e.h ? t : 0) - s
  return { x: n.x + i, y: n.y + s, w: n.w + o, h: n.h + a, radius: n.radius }
}
class nn extends Wt {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t)
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: i, backgroundColor: s },
      } = this,
      { inner: o, outer: a } = bp(this),
      r = mp(a.radius) ? Gn : xp
    t.save(),
      (a.w !== o.w || a.h !== o.h) &&
        (t.beginPath(), r(t, Is(a, e, o)), t.clip(), r(t, Is(o, -e, a)), (t.fillStyle = i), t.fill('evenodd')),
      t.beginPath(),
      r(t, Is(o, e)),
      (t.fillStyle = s),
      t.fill(),
      t.restore()
  }
  inRange(t, e, i) {
    return Ls(this, t, e, i)
  }
  inXRange(t, e) {
    return Ls(this, t, null, e)
  }
  inYRange(t, e) {
    return Ls(this, null, t, e)
  }
  getCenterPoint(t) {
    const { x: e, y: i, base: s, horizontal: o } = this.getProps(['x', 'y', 'base', 'horizontal'], t)
    return { x: o ? (e + s) / 2 : e, y: o ? i : (i + s) / 2 }
  }
  getRange(t) {
    return t === 'x' ? this.width / 2 : this.height / 2
  }
}
D(nn, 'id', 'bar'),
  D(nn, 'defaults', {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }),
  D(nn, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' })
var _p = Object.freeze({ __proto__: null, ArcElement: Ze, BarElement: nn, LineElement: pe, PointElement: Bn })
const Qs = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  Ja = Qs.map((n) => n.replace('rgb(', 'rgba(').replace(')', ', 0.5)'))
function el(n) {
  return Qs[n % Qs.length]
}
function nl(n) {
  return Ja[n % Ja.length]
}
function yp(n, t) {
  return (n.borderColor = el(t)), (n.backgroundColor = nl(t)), ++t
}
function vp(n, t) {
  return (n.backgroundColor = n.data.map(() => el(t++))), t
}
function wp(n, t) {
  return (n.backgroundColor = n.data.map(() => nl(t++))), t
}
function Mp(n) {
  let t = 0
  return (e, i) => {
    const s = n.getDatasetMeta(i).controller
    s instanceof Re ? (t = vp(e, t)) : s instanceof Fn ? (t = wp(e, t)) : s && (t = yp(e, t))
  }
}
function Qa(n) {
  let t
  for (t in n) if (n[t].borderColor || n[t].backgroundColor) return !0
  return !1
}
function Sp(n) {
  return n && (n.borderColor || n.backgroundColor)
}
var kp = {
  id: 'colors',
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(n, t, e) {
    if (!e.enabled) return
    const {
        data: { datasets: i },
        options: s,
      } = n.config,
      { elements: o } = s
    if (!e.forceOverride && (Qa(i) || Sp(s) || (o && Qa(o)))) return
    const a = Mp(n)
    i.forEach(a)
  },
}
function Cp(n, t, e, i, s) {
  const o = s.samples || i
  if (o >= e) return n.slice(t, t + e)
  const a = [],
    r = (e - 2) / (o - 2)
  let c = 0
  const l = t + e - 1
  let f = t,
    d,
    h,
    u,
    p,
    g
  for (a[c++] = n[f], d = 0; d < o - 2; d++) {
    let b = 0,
      m = 0,
      x
    const _ = Math.floor((d + 1) * r) + 1 + t,
      v = Math.min(Math.floor((d + 2) * r) + 1, e) + t,
      y = v - _
    for (x = _; x < v; x++) (b += n[x].x), (m += n[x].y)
    ;(b /= y), (m /= y)
    const M = Math.floor(d * r) + 1 + t,
      k = Math.min(Math.floor((d + 1) * r) + 1, e) + t,
      { x: S, y: C } = n[f]
    for (u = p = -1, x = M; x < k; x++)
      (p = 0.5 * Math.abs((S - b) * (n[x].y - C) - (S - n[x].x) * (m - C))), p > u && ((u = p), (h = n[x]), (g = x))
    ;(a[c++] = h), (f = g)
  }
  return (a[c++] = n[l]), a
}
function Pp(n, t, e, i) {
  let s = 0,
    o = 0,
    a,
    r,
    c,
    l,
    f,
    d,
    h,
    u,
    p,
    g
  const b = [],
    m = t + e - 1,
    x = n[t].x,
    v = n[m].x - x
  for (a = t; a < t + e; ++a) {
    ;(r = n[a]), (c = ((r.x - x) / v) * i), (l = r.y)
    const y = c | 0
    if (y === f) l < p ? ((p = l), (d = a)) : l > g && ((g = l), (h = a)), (s = (o * s + r.x) / ++o)
    else {
      const M = a - 1
      if (!X(d) && !X(h)) {
        const k = Math.min(d, h),
          S = Math.max(d, h)
        k !== u && k !== M && b.push({ ...n[k], x: s }), S !== u && S !== M && b.push({ ...n[S], x: s })
      }
      a > 0 && M !== u && b.push(n[M]), b.push(r), (f = y), (o = 0), (p = g = l), (d = h = u = a)
    }
  }
  return b
}
function il(n) {
  if (n._decimated) {
    const t = n._data
    delete n._decimated,
      delete n._data,
      Object.defineProperty(n, 'data', { configurable: !0, enumerable: !0, writable: !0, value: t })
  }
}
function tr(n) {
  n.data.datasets.forEach((t) => {
    il(t)
  })
}
function Dp(n, t) {
  const e = t.length
  let i = 0,
    s
  const { iScale: o } = n,
    { min: a, max: r, minDefined: c, maxDefined: l } = o.getUserBounds()
  return (
    c && (i = ut(ce(t, o.axis, a).lo, 0, e - 1)),
    l ? (s = ut(ce(t, o.axis, r).hi + 1, i, e) - i) : (s = e - i),
    { start: i, count: s }
  )
}
var Ap = {
  id: 'decimation',
  defaults: { algorithm: 'min-max', enabled: !1 },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      tr(n)
      return
    }
    const i = n.width
    n.data.datasets.forEach((s, o) => {
      const { _data: a, indexAxis: r } = s,
        c = n.getDatasetMeta(o),
        l = a || s.data
      if (Sn([r, n.options.indexAxis]) === 'y' || !c.controller.supportsDecimation) return
      const f = n.scales[c.xAxisID]
      if ((f.type !== 'linear' && f.type !== 'time') || n.options.parsing) return
      let { start: d, count: h } = Dp(c, l)
      const u = e.threshold || 4 * i
      if (h <= u) {
        il(s)
        return
      }
      X(a) &&
        ((s._data = l),
        delete s.data,
        Object.defineProperty(s, 'data', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated
          },
          set: function (g) {
            this._data = g
          },
        }))
      let p
      switch (e.algorithm) {
        case 'lttb':
          p = Cp(l, d, h, i, e)
          break
        case 'min-max':
          p = Pp(l, d, h, i)
          break
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)
      }
      s._decimated = p
    })
  },
  destroy(n) {
    tr(n)
  },
}
function Op(n, t, e) {
  const i = n.segments,
    s = n.points,
    o = t.points,
    a = []
  for (const r of i) {
    let { start: c, end: l } = r
    l = No(c, l, s)
    const f = to(e, s[c], s[l], r.loop)
    if (!t.segments) {
      a.push({ source: r, target: f, start: s[c], end: s[l] })
      continue
    }
    const d = Nc(t, f)
    for (const h of d) {
      const u = to(e, o[h.start], o[h.end], h.loop),
        p = Bc(r, s, u)
      for (const g of p)
        a.push({
          source: g,
          target: h,
          start: { [e]: er(f, u, 'start', Math.max) },
          end: { [e]: er(f, u, 'end', Math.min) },
        })
    }
  }
  return a
}
function to(n, t, e, i) {
  if (i) return
  let s = t[n],
    o = e[n]
  return n === 'angle' && ((s = Tt(s)), (o = Tt(o))), { property: n, start: s, end: o }
}
function Tp(n, t) {
  const { x: e = null, y: i = null } = n || {},
    s = t.points,
    o = []
  return (
    t.segments.forEach(({ start: a, end: r }) => {
      r = No(a, r, s)
      const c = s[a],
        l = s[r]
      i !== null
        ? (o.push({ x: c.x, y: i }), o.push({ x: l.x, y: i }))
        : e !== null && (o.push({ x: e, y: c.y }), o.push({ x: e, y: l.y }))
    }),
    o
  )
}
function No(n, t, e) {
  for (; t > n; t--) {
    const i = e[t]
    if (!isNaN(i.x) && !isNaN(i.y)) break
  }
  return t
}
function er(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0
}
function sl(n, t) {
  let e = [],
    i = !1
  return (
    at(n) ? ((i = !0), (e = n)) : (e = Tp(n, t)),
    e.length ? new pe({ points: e, options: { tension: 0 }, _loop: i, _fullLoop: i }) : null
  )
}
function nr(n) {
  return n && n.fill !== !1
}
function Ep(n, t, e) {
  let s = n[t].fill
  const o = [t]
  let a
  if (!e) return s
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!ct(s)) return s
    if (((a = n[s]), !a)) return !1
    if (a.visible) return s
    o.push(s), (s = a.fill)
  }
  return !1
}
function Rp(n, t, e) {
  const i = Fp(n)
  if (Y(i)) return isNaN(i.value) ? !1 : i
  let s = parseFloat(i)
  return ct(s) && Math.floor(s) === s
    ? Lp(i[0], t, s, e)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i
}
function Lp(n, t, e, i) {
  return (n === '-' || n === '+') && (e = t + e), e === t || e < 0 || e >= i ? !1 : e
}
function Ip(n, t) {
  let e = null
  return (
    n === 'start'
      ? (e = t.bottom)
      : n === 'end'
        ? (e = t.top)
        : Y(n)
          ? (e = t.getPixelForValue(n.value))
          : t.getBasePixel && (e = t.getBasePixel()),
    e
  )
}
function zp(n, t, e) {
  let i
  return (
    n === 'start'
      ? (i = e)
      : n === 'end'
        ? (i = t.options.reverse ? t.min : t.max)
        : Y(n)
          ? (i = n.value)
          : (i = t.getBaseValue()),
    i
  )
}
function Fp(n) {
  const t = n.options,
    e = t.fill
  let i = F(e && e.target, e)
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? 'origin' : i
}
function Bp(n) {
  const { scale: t, index: e, line: i } = n,
    s = [],
    o = i.segments,
    a = i.points,
    r = Np(t, e)
  r.push(sl({ x: null, y: t.bottom }, i))
  for (let c = 0; c < o.length; c++) {
    const l = o[c]
    for (let f = l.start; f <= l.end; f++) Vp(s, a[f], r)
  }
  return new pe({ points: s, options: {} })
}
function Np(n, t) {
  const e = [],
    i = n.getMatchingVisibleMetas('line')
  for (let s = 0; s < i.length; s++) {
    const o = i[s]
    if (o.index === t) break
    o.hidden || e.unshift(o.dataset)
  }
  return e
}
function Vp(n, t, e) {
  const i = []
  for (let s = 0; s < e.length; s++) {
    const o = e[s],
      { first: a, last: r, point: c } = $p(o, t, 'x')
    if (!(!c || (a && r))) {
      if (a) i.unshift(c)
      else if ((n.push(c), !r)) break
    }
  }
  n.push(...i)
}
function $p(n, t, e) {
  const i = n.interpolate(t, e)
  if (!i) return {}
  const s = i[e],
    o = n.segments,
    a = n.points
  let r = !1,
    c = !1
  for (let l = 0; l < o.length; l++) {
    const f = o[l],
      d = a[f.start][e],
      h = a[f.end][e]
    if (re(s, d, h)) {
      ;(r = s === d), (c = s === h)
      break
    }
  }
  return { first: r, last: c, point: i }
}
class ol {
  constructor(t) {
    ;(this.x = t.x), (this.y = t.y), (this.radius = t.radius)
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: a } = this
    return (e = e || { start: 0, end: st }), t.arc(s, o, a, e.end, e.start, !0), !i.bounds
  }
  interpolate(t) {
    const { x: e, y: i, radius: s } = this,
      o = t.angle
    return { x: e + Math.cos(o) * s, y: i + Math.sin(o) * s, angle: o }
  }
}
function jp(n) {
  const { chart: t, fill: e, line: i } = n
  if (ct(e)) return Wp(t, e)
  if (e === 'stack') return Bp(n)
  if (e === 'shape') return !0
  const s = Hp(n)
  return s instanceof ol ? s : sl(s, i)
}
function Wp(n, t) {
  const e = n.getDatasetMeta(t)
  return e && n.isDatasetVisible(t) ? e.dataset : null
}
function Hp(n) {
  return (n.scale || {}).getPointPositionForValue ? Up(n) : Yp(n)
}
function Yp(n) {
  const { scale: t = {}, fill: e } = n,
    i = Ip(e, t)
  if (ct(i)) {
    const s = t.isHorizontal()
    return { x: s ? i : null, y: s ? null : i }
  }
  return null
}
function Up(n) {
  const { scale: t, fill: e } = n,
    i = t.options,
    s = t.getLabels().length,
    o = i.reverse ? t.max : t.min,
    a = zp(e, t, o),
    r = []
  if (i.grid.circular) {
    const c = t.getPointPositionForValue(0, o)
    return new ol({ x: c.x, y: c.y, radius: t.getDistanceFromCenterForValue(a) })
  }
  for (let c = 0; c < s; ++c) r.push(t.getPointPositionForValue(c, a))
  return r
}
function zs(n, t, e) {
  const i = jp(t),
    { line: s, scale: o, axis: a } = t,
    r = s.options,
    c = r.fill,
    l = r.backgroundColor,
    { above: f = l, below: d = l } = c || {}
  i &&
    s.points.length &&
    (Ie(n, e), Xp(n, { line: s, target: i, above: f, below: d, area: e, scale: o, axis: a }), ze(n))
}
function Xp(n, t) {
  const { line: e, target: i, above: s, below: o, area: a, scale: r } = t,
    c = e._loop ? 'angle' : t.axis
  n.save(),
    c === 'x' &&
      o !== s &&
      (ir(n, i, a.top),
      sr(n, { line: e, target: i, color: s, scale: r, property: c }),
      n.restore(),
      n.save(),
      ir(n, i, a.bottom)),
    sr(n, { line: e, target: i, color: o, scale: r, property: c }),
    n.restore()
}
function ir(n, t, e) {
  const { segments: i, points: s } = t
  let o = !0,
    a = !1
  n.beginPath()
  for (const r of i) {
    const { start: c, end: l } = r,
      f = s[c],
      d = s[No(c, l, s)]
    o ? (n.moveTo(f.x, f.y), (o = !1)) : (n.lineTo(f.x, e), n.lineTo(f.x, f.y)),
      (a = !!t.pathSegment(n, r, { move: a })),
      a ? n.closePath() : n.lineTo(d.x, e)
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip()
}
function sr(n, t) {
  const { line: e, target: i, property: s, color: o, scale: a } = t,
    r = Op(e, i, s)
  for (const { source: c, target: l, start: f, end: d } of r) {
    const { style: { backgroundColor: h = o } = {} } = c,
      u = i !== !0
    n.save(), (n.fillStyle = h), Gp(n, a, u && to(s, f, d)), n.beginPath()
    const p = !!e.pathSegment(n, c)
    let g
    if (u) {
      p ? n.closePath() : or(n, i, d, s)
      const b = !!i.pathSegment(n, l, { move: p, reverse: !0 })
      ;(g = p && b), g || or(n, i, f, s)
    }
    n.closePath(), n.fill(g ? 'evenodd' : 'nonzero'), n.restore()
  }
}
function Gp(n, t, e) {
  const { top: i, bottom: s } = t.chart.chartArea,
    { property: o, start: a, end: r } = e || {}
  o === 'x' && (n.beginPath(), n.rect(a, i, r - a, s - i), n.clip())
}
function or(n, t, e, i) {
  const s = t.interpolate(e, i)
  s && n.lineTo(s.x, s.y)
}
var qp = {
  id: 'filler',
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length,
      s = []
    let o, a, r, c
    for (a = 0; a < i; ++a)
      (o = n.getDatasetMeta(a)),
        (r = o.dataset),
        (c = null),
        r &&
          r.options &&
          r instanceof pe &&
          (c = {
            visible: n.isDatasetVisible(a),
            index: a,
            fill: Rp(r, a, i),
            chart: n,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: r,
          }),
        (o.$filler = c),
        s.push(c)
    for (a = 0; a < i; ++a) (c = s[a]), !(!c || c.fill === !1) && (c.fill = Ep(s, a, e.propagate))
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === 'beforeDraw',
      s = n.getSortedVisibleDatasetMetas(),
      o = n.chartArea
    for (let a = s.length - 1; a >= 0; --a) {
      const r = s[a].$filler
      r && (r.line.updateControlPoints(o, r.axis), i && r.fill && zs(n.ctx, r, o))
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== 'beforeDatasetsDraw') return
    const i = n.getSortedVisibleDatasetMetas()
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler
      nr(o) && zs(n.ctx, o, n.chartArea)
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler
    !nr(i) || e.drawTime !== 'beforeDatasetDraw' || zs(n.ctx, i, n.chartArea)
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
}
const ar = (n, t) => {
    let { boxHeight: e = t, boxWidth: i = t } = n
    return (
      n.usePointStyle && ((e = Math.min(e, t)), (i = n.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: e, itemHeight: Math.max(t, e) }
    )
  },
  Kp = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index
class rr extends Wt {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, e, i) {
    ;(this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit()
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = this._margins.top), (this.bottom = this.height))
  }
  buildLabels() {
    const t = this.options.labels || {}
    let e = nt(t.generateLabels, [this.chart], this) || []
    t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (e = e.sort((i, s) => t.sort(i, s, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e)
  }
  fit() {
    const { options: t, ctx: e } = this
    if (!t.display) {
      this.width = this.height = 0
      return
    }
    const i = t.labels,
      s = dt(i.font),
      o = s.size,
      a = this._computeTitleHeight(),
      { boxWidth: r, itemHeight: c } = ar(i, o)
    let l, f
    ;(e.font = s.string),
      this.isHorizontal()
        ? ((l = this.maxWidth), (f = this._fitRows(a, o, r, c) + 10))
        : ((f = this.maxHeight), (l = this._fitCols(a, s, r, c) + 10)),
      (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(f, t.maxHeight || this.maxHeight))
  }
  _fitRows(t, e, i, s) {
    const {
        ctx: o,
        maxWidth: a,
        options: {
          labels: { padding: r },
        },
      } = this,
      c = (this.legendHitBoxes = []),
      l = (this.lineWidths = [0]),
      f = s + r
    let d = t
    ;(o.textAlign = 'left'), (o.textBaseline = 'middle')
    let h = -1,
      u = -f
    return (
      this.legendItems.forEach((p, g) => {
        const b = i + e / 2 + o.measureText(p.text).width
        ;(g === 0 || l[l.length - 1] + b + 2 * r > a) && ((d += f), (l[l.length - (g > 0 ? 0 : 1)] = 0), (u += f), h++),
          (c[g] = { left: 0, top: u, row: h, width: b, height: s }),
          (l[l.length - 1] += b + r)
      }),
      d
    )
  }
  _fitCols(t, e, i, s) {
    const {
        ctx: o,
        maxHeight: a,
        options: {
          labels: { padding: r },
        },
      } = this,
      c = (this.legendHitBoxes = []),
      l = (this.columnSizes = []),
      f = a - t
    let d = r,
      h = 0,
      u = 0,
      p = 0,
      g = 0
    return (
      this.legendItems.forEach((b, m) => {
        const { itemWidth: x, itemHeight: _ } = Zp(i, e, o, b, s)
        m > 0 && u + _ + 2 * r > f && ((d += h + r), l.push({ width: h, height: u }), (p += h + r), g++, (h = u = 0)),
          (c[m] = { left: p, top: u, col: g, width: x, height: _ }),
          (h = Math.max(h, x)),
          (u += _ + r)
      }),
      (d += h),
      l.push({ width: h, height: u }),
      d
    )
  }
  adjustHitBoxes() {
    if (!this.options.display) return
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: i,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      a = en(o, this.left, this.width)
    if (this.isHorizontal()) {
      let r = 0,
        c = pt(i, this.left + s, this.right - this.lineWidths[r])
      for (const l of e)
        r !== l.row && ((r = l.row), (c = pt(i, this.left + s, this.right - this.lineWidths[r]))),
          (l.top += this.top + t + s),
          (l.left = a.leftForLtr(a.x(c), l.width)),
          (c += l.width + s)
    } else {
      let r = 0,
        c = pt(i, this.top + t + s, this.bottom - this.columnSizes[r].height)
      for (const l of e)
        l.col !== r && ((r = l.col), (c = pt(i, this.top + t + s, this.bottom - this.columnSizes[r].height))),
          (l.top = c),
          (l.left += this.left + s),
          (l.left = a.leftForLtr(a.x(l.left), l.width)),
          (c += l.height + s)
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom'
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx
      Ie(t, this), this._draw(), ze(t)
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
      { align: o, labels: a } = t,
      r = lt.color,
      c = en(t.rtl, this.left, this.width),
      l = dt(a.font),
      { padding: f } = a,
      d = l.size,
      h = d / 2
    let u
    this.drawTitle(),
      (s.textAlign = c.textAlign('left')),
      (s.textBaseline = 'middle'),
      (s.lineWidth = 0.5),
      (s.font = l.string)
    const { boxWidth: p, boxHeight: g, itemHeight: b } = ar(a, d),
      m = function (M, k, S) {
        if (isNaN(p) || p <= 0 || isNaN(g) || g < 0) return
        s.save()
        const C = F(S.lineWidth, 1)
        if (
          ((s.fillStyle = F(S.fillStyle, r)),
          (s.lineCap = F(S.lineCap, 'butt')),
          (s.lineDashOffset = F(S.lineDashOffset, 0)),
          (s.lineJoin = F(S.lineJoin, 'miter')),
          (s.lineWidth = C),
          (s.strokeStyle = F(S.strokeStyle, r)),
          s.setLineDash(F(S.lineDash, [])),
          a.usePointStyle)
        ) {
          const O = { radius: (g * Math.SQRT2) / 2, pointStyle: S.pointStyle, rotation: S.rotation, borderWidth: C },
            P = c.xPlus(M, p / 2),
            I = k + h
          Pc(s, O, P, I, a.pointStyleWidth && p)
        } else {
          const O = k + Math.max((d - g) / 2, 0),
            P = c.leftForLtr(M, p),
            I = Fe(S.borderRadius)
          s.beginPath(),
            Object.values(I).some((W) => W !== 0) ? Gn(s, { x: P, y: O, w: p, h: g, radius: I }) : s.rect(P, O, p, g),
            s.fill(),
            C !== 0 && s.stroke()
        }
        s.restore()
      },
      x = function (M, k, S) {
        je(s, S.text, M, k + b / 2, l, { strikethrough: S.hidden, textAlign: c.textAlign(S.textAlign) })
      },
      _ = this.isHorizontal(),
      v = this._computeTitleHeight()
    _
      ? (u = { x: pt(o, this.left + f, this.right - i[0]), y: this.top + f + v, line: 0 })
      : (u = { x: this.left + f, y: pt(o, this.top + v + f, this.bottom - e[0].height), line: 0 }),
      Ic(this.ctx, t.textDirection)
    const y = b + f
    this.legendItems.forEach((M, k) => {
      ;(s.strokeStyle = M.fontColor), (s.fillStyle = M.fontColor)
      const S = s.measureText(M.text).width,
        C = c.textAlign(M.textAlign || (M.textAlign = a.textAlign)),
        O = p + h + S
      let P = u.x,
        I = u.y
      c.setWidth(this.width),
        _
          ? k > 0 &&
            P + O + f > this.right &&
            ((I = u.y += y), u.line++, (P = u.x = pt(o, this.left + f, this.right - i[u.line])))
          : k > 0 &&
            I + y > this.bottom &&
            ((P = u.x = P + e[u.line].width + f),
            u.line++,
            (I = u.y = pt(o, this.top + v + f, this.bottom - e[u.line].height)))
      const W = c.x(P)
      if ((m(W, I, M), (P = xd(C, P + p + h, _ ? P + O : this.right, t.rtl)), x(c.x(P), I, M), _)) u.x += O + f
      else if (typeof M.text != 'string') {
        const V = l.lineHeight
        u.y += al(M, V) + f
      } else u.y += y
    }),
      zc(this.ctx, t.textDirection)
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      i = dt(e.font),
      s = mt(e.padding)
    if (!e.display) return
    const o = en(t.rtl, this.left, this.width),
      a = this.ctx,
      r = e.position,
      c = i.size / 2,
      l = s.top + c
    let f,
      d = this.left,
      h = this.width
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)), (f = this.top + l), (d = pt(t.align, d, this.right - h))
    else {
      const p = this.columnSizes.reduce((g, b) => Math.max(g, b.height), 0)
      f = l + pt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight())
    }
    const u = pt(r, d, d + h)
    ;(a.textAlign = o.textAlign(Oo(r))),
      (a.textBaseline = 'middle'),
      (a.strokeStyle = e.color),
      (a.fillStyle = e.color),
      (a.font = i.string),
      je(a, e.text, u, f, i)
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = dt(t.font),
      i = mt(t.padding)
    return t.display ? e.lineHeight + i.height : 0
  }
  _getLegendItemAt(t, e) {
    let i, s, o
    if (re(t, this.left, this.right) && re(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (((s = o[i]), re(t, s.left, s.left + s.width) && re(e, s.top, s.top + s.height))) return this.legendItems[i]
    }
    return null
  }
  handleEvent(t) {
    const e = this.options
    if (!tg(t.type, e)) return
    const i = this._getLegendItemAt(t.x, t.y)
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const s = this._hoveredItem,
        o = Kp(s, i)
      s && !o && nt(e.onLeave, [t, s, this], this),
        (this._hoveredItem = i),
        i && !o && nt(e.onHover, [t, i, this], this)
    } else i && nt(e.onClick, [t, i, this], this)
  }
}
function Zp(n, t, e, i, s) {
  const o = Jp(i, n, t, e),
    a = Qp(s, i, t.lineHeight)
  return { itemWidth: o, itemHeight: a }
}
function Jp(n, t, e, i) {
  let s = n.text
  return (
    s && typeof s != 'string' && (s = s.reduce((o, a) => (o.length > a.length ? o : a))),
    t + e.size / 2 + i.measureText(s).width
  )
}
function Qp(n, t, e) {
  let i = n
  return typeof t.text != 'string' && (i = al(t, e)), i
}
function al(n, t) {
  const e = n.text ? n.text.length : 0
  return t * e
}
function tg(n, t) {
  return !!(
    ((n === 'mousemove' || n === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (n === 'click' || n === 'mouseup'))
  )
}
var rl = {
  id: 'legend',
  _element: rr,
  start(n, t, e) {
    const i = (n.legend = new rr({ ctx: n.ctx, options: e, chart: n }))
    gt.configure(n, i, e), gt.addBox(n, i)
  },
  stop(n) {
    gt.removeBox(n, n.legend), delete n.legend
  },
  beforeUpdate(n, t, e) {
    const i = n.legend
    gt.configure(n, i, e), (i.options = e)
  },
  afterUpdate(n) {
    const t = n.legend
    t.buildLabels(), t.adjustHitBoxes()
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event)
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const i = t.datasetIndex,
        s = e.chart
      s.isDatasetVisible(i) ? (s.hide(i), (t.hidden = !0)) : (s.show(i), (t.hidden = !1))
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets,
          {
            labels: { usePointStyle: e, pointStyle: i, textAlign: s, color: o, useBorderRadius: a, borderRadius: r },
          } = n.legend.options
        return n._getSortedDatasetMetas().map((c) => {
          const l = c.controller.getStyle(e ? 0 : void 0),
            f = mt(l.borderWidth)
          return {
            text: t[c.index].label,
            fillStyle: l.backgroundColor,
            fontColor: o,
            hidden: !c.visible,
            lineCap: l.borderCapStyle,
            lineDash: l.borderDash,
            lineDashOffset: l.borderDashOffset,
            lineJoin: l.borderJoinStyle,
            lineWidth: (f.width + f.height) / 4,
            strokeStyle: l.borderColor,
            pointStyle: i || l.pointStyle,
            rotation: l.rotation,
            textAlign: s || l.textAlign,
            borderRadius: a && (r || l.borderRadius),
            datasetIndex: c.index,
          }
        }, this)
      },
    },
    title: { color: (n) => n.chart.options.color, display: !1, position: 'center', text: '' },
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith('on'),
    labels: { _scriptable: (n) => !['generateLabels', 'filter', 'sort'].includes(n) },
  },
}
class Vo extends Wt {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, e) {
    const i = this.options
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0
      return
    }
    ;(this.width = this.right = t), (this.height = this.bottom = e)
    const s = at(i.text) ? i.text.length : 1
    this._padding = mt(i.padding)
    const o = s * dt(i.font).lineHeight + this._padding.height
    this.isHorizontal() ? (this.height = o) : (this.width = o)
  }
  isHorizontal() {
    const t = this.options.position
    return t === 'top' || t === 'bottom'
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: a } = this,
      r = a.align
    let c = 0,
      l,
      f,
      d
    return (
      this.isHorizontal()
        ? ((f = pt(r, i, o)), (d = e + t), (l = o - i))
        : (a.position === 'left'
            ? ((f = i + t), (d = pt(r, s, e)), (c = ot * -0.5))
            : ((f = o - t), (d = pt(r, e, s)), (c = ot * 0.5)),
          (l = s - e)),
      { titleX: f, titleY: d, maxWidth: l, rotation: c }
    )
  }
  draw() {
    const t = this.ctx,
      e = this.options
    if (!e.display) return
    const i = dt(e.font),
      o = i.lineHeight / 2 + this._padding.top,
      { titleX: a, titleY: r, maxWidth: c, rotation: l } = this._drawArgs(o)
    je(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: c,
      rotation: l,
      textAlign: Oo(e.align),
      textBaseline: 'middle',
      translation: [a, r],
    })
  }
}
function eg(n, t) {
  const e = new Vo({ ctx: n.ctx, options: t, chart: n })
  gt.configure(n, e, t), gt.addBox(n, e), (n.titleBlock = e)
}
var cl = {
  id: 'title',
  _element: Vo,
  start(n, t, e) {
    eg(n, e)
  },
  stop(n) {
    const t = n.titleBlock
    gt.removeBox(n, t), delete n.titleBlock
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock
    gt.configure(n, i, e), (i.options = e)
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
}
const yi = new WeakMap()
var ng = {
  id: 'subtitle',
  start(n, t, e) {
    const i = new Vo({ ctx: n.ctx, options: e, chart: n })
    gt.configure(n, i, e), gt.addBox(n, i), yi.set(n, i)
  },
  stop(n) {
    gt.removeBox(n, yi.get(n)), yi.delete(n)
  },
  beforeUpdate(n, t, e) {
    const i = yi.get(n)
    gt.configure(n, i, e), (i.options = e)
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'normal' },
    fullSize: !0,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
}
const Cn = {
  average(n) {
    if (!n.length) return !1
    let t,
      e,
      i = 0,
      s = 0,
      o = 0
    for (t = 0, e = n.length; t < e; ++t) {
      const a = n[t].element
      if (a && a.hasValue()) {
        const r = a.tooltipPosition()
        ;(i += r.x), (s += r.y), ++o
      }
    }
    return { x: i / o, y: s / o }
  },
  nearest(n, t) {
    if (!n.length) return !1
    let e = t.x,
      i = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      a,
      r
    for (o = 0, a = n.length; o < a; ++o) {
      const c = n[o].element
      if (c && c.hasValue()) {
        const l = c.getCenterPoint(),
          f = Xs(t, l)
        f < s && ((s = f), (r = c))
      }
    }
    if (r) {
      const c = r.tooltipPosition()
      ;(e = c.x), (i = c.y)
    }
    return { x: e, y: i }
  },
}
function Xt(n, t) {
  return t && (at(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n
}
function ie(n) {
  return (typeof n == 'string' || n instanceof String) &&
    n.indexOf(`
`) > -1
    ? n.split(`
`)
    : n
}
function ig(n, t) {
  const { element: e, datasetIndex: i, index: s } = t,
    o = n.getDatasetMeta(i).controller,
    { label: a, value: r } = o.getLabelAndValue(s)
  return {
    chart: n,
    label: a,
    parsed: o.getParsed(s),
    raw: n.data.datasets[i].data[s],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: e,
  }
}
function cr(n, t) {
  const e = n.chart.ctx,
    { body: i, footer: s, title: o } = n,
    { boxWidth: a, boxHeight: r } = t,
    c = dt(t.bodyFont),
    l = dt(t.titleFont),
    f = dt(t.footerFont),
    d = o.length,
    h = s.length,
    u = i.length,
    p = mt(t.padding)
  let g = p.height,
    b = 0,
    m = i.reduce((v, y) => v + y.before.length + y.lines.length + y.after.length, 0)
  if (
    ((m += n.beforeBody.length + n.afterBody.length),
    d && (g += d * l.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    m)
  ) {
    const v = t.displayColors ? Math.max(r, c.lineHeight) : c.lineHeight
    g += u * v + (m - u) * c.lineHeight + (m - 1) * t.bodySpacing
  }
  h && (g += t.footerMarginTop + h * f.lineHeight + (h - 1) * t.footerSpacing)
  let x = 0
  const _ = function (v) {
    b = Math.max(b, e.measureText(v).width + x)
  }
  return (
    e.save(),
    (e.font = l.string),
    J(n.title, _),
    (e.font = c.string),
    J(n.beforeBody.concat(n.afterBody), _),
    (x = t.displayColors ? a + 2 + t.boxPadding : 0),
    J(i, (v) => {
      J(v.before, _), J(v.lines, _), J(v.after, _)
    }),
    (x = 0),
    (e.font = f.string),
    J(n.footer, _),
    e.restore(),
    (b += p.width),
    { width: b, height: g }
  )
}
function sg(n, t) {
  const { y: e, height: i } = t
  return e < i / 2 ? 'top' : e > n.height - i / 2 ? 'bottom' : 'center'
}
function og(n, t, e, i) {
  const { x: s, width: o } = i,
    a = e.caretSize + e.caretPadding
  if ((n === 'left' && s + o + a > t.width) || (n === 'right' && s - o - a < 0)) return !0
}
function ag(n, t, e, i) {
  const { x: s, width: o } = e,
    {
      width: a,
      chartArea: { left: r, right: c },
    } = n
  let l = 'center'
  return (
    i === 'center'
      ? (l = s <= (r + c) / 2 ? 'left' : 'right')
      : s <= o / 2
        ? (l = 'left')
        : s >= a - o / 2 && (l = 'right'),
    og(l, n, t, e) && (l = 'center'),
    l
  )
}
function lr(n, t, e) {
  const i = e.yAlign || t.yAlign || sg(n, e)
  return { xAlign: e.xAlign || t.xAlign || ag(n, t, e, i), yAlign: i }
}
function rg(n, t) {
  let { x: e, width: i } = n
  return t === 'right' ? (e -= i) : t === 'center' && (e -= i / 2), e
}
function cg(n, t, e) {
  let { y: i, height: s } = n
  return t === 'top' ? (i += e) : t === 'bottom' ? (i -= s + e) : (i -= s / 2), i
}
function fr(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: a } = n,
    { xAlign: r, yAlign: c } = e,
    l = s + o,
    { topLeft: f, topRight: d, bottomLeft: h, bottomRight: u } = Fe(a)
  let p = rg(t, r)
  const g = cg(t, c, l)
  return (
    c === 'center'
      ? r === 'left'
        ? (p += l)
        : r === 'right' && (p -= l)
      : r === 'left'
        ? (p -= Math.max(f, h) + s)
        : r === 'right' && (p += Math.max(d, u) + s),
    { x: ut(p, 0, i.width - t.width), y: ut(g, 0, i.height - t.height) }
  )
}
function vi(n, t, e) {
  const i = mt(e.padding)
  return t === 'center' ? n.x + n.width / 2 : t === 'right' ? n.x + n.width - i.right : n.x + i.left
}
function dr(n) {
  return Xt([], ie(n))
}
function lg(n, t, e) {
  return ve(n, { tooltip: t, tooltipItems: e, type: 'tooltip' })
}
function hr(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
  return e ? n.override(e) : n
}
const ll = {
  beforeTitle: ee,
  title(n) {
    if (n.length > 0) {
      const t = n[0],
        e = t.chart.data.labels,
        i = e ? e.length : 0
      if (this && this.options && this.options.mode === 'dataset') return t.dataset.label || ''
      if (t.label) return t.label
      if (i > 0 && t.dataIndex < i) return e[t.dataIndex]
    }
    return ''
  },
  afterTitle: ee,
  beforeBody: ee,
  beforeLabel: ee,
  label(n) {
    if (this && this.options && this.options.mode === 'dataset')
      return n.label + ': ' + n.formattedValue || n.formattedValue
    let t = n.dataset.label || ''
    t && (t += ': ')
    const e = n.formattedValue
    return X(e) || (t += e), t
  },
  labelColor(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex)
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    }
  },
  labelTextColor() {
    return this.options.bodyColor
  },
  labelPointStyle(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex)
    return { pointStyle: e.pointStyle, rotation: e.rotation }
  },
  afterLabel: ee,
  afterBody: ee,
  beforeFooter: ee,
  footer: ee,
  afterFooter: ee,
}
function Pt(n, t, e, i) {
  const s = n[t].call(e, i)
  return typeof s > 'u' ? ll[t].call(e, i) : s
}
class eo extends Wt {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0)
  }
  initialize(t) {
    ;(this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0)
  }
  _resolveAnimations() {
    const t = this._cachedAnimations
    if (t) return t
    const e = this.chart,
      i = this.options.setContext(this.getContext()),
      s = i.enabled && e.options.animation && i.animations,
      o = new Vc(this.chart, s)
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o
  }
  getContext() {
    return this.$context || (this.$context = lg(this.chart.getContext(), this, this._tooltipItems))
  }
  getTitle(t, e) {
    const { callbacks: i } = e,
      s = Pt(i, 'beforeTitle', this, t),
      o = Pt(i, 'title', this, t),
      a = Pt(i, 'afterTitle', this, t)
    let r = []
    return (r = Xt(r, ie(s))), (r = Xt(r, ie(o))), (r = Xt(r, ie(a))), r
  }
  getBeforeBody(t, e) {
    return dr(Pt(e.callbacks, 'beforeBody', this, t))
  }
  getBody(t, e) {
    const { callbacks: i } = e,
      s = []
    return (
      J(t, (o) => {
        const a = { before: [], lines: [], after: [] },
          r = hr(i, o)
        Xt(a.before, ie(Pt(r, 'beforeLabel', this, o))),
          Xt(a.lines, Pt(r, 'label', this, o)),
          Xt(a.after, ie(Pt(r, 'afterLabel', this, o))),
          s.push(a)
      }),
      s
    )
  }
  getAfterBody(t, e) {
    return dr(Pt(e.callbacks, 'afterBody', this, t))
  }
  getFooter(t, e) {
    const { callbacks: i } = e,
      s = Pt(i, 'beforeFooter', this, t),
      o = Pt(i, 'footer', this, t),
      a = Pt(i, 'afterFooter', this, t)
    let r = []
    return (r = Xt(r, ie(s))), (r = Xt(r, ie(o))), (r = Xt(r, ie(a))), r
  }
  _createItems(t) {
    const e = this._active,
      i = this.chart.data,
      s = [],
      o = [],
      a = []
    let r = [],
      c,
      l
    for (c = 0, l = e.length; c < l; ++c) r.push(ig(this.chart, e[c]))
    return (
      t.filter && (r = r.filter((f, d, h) => t.filter(f, d, h, i))),
      t.itemSort && (r = r.sort((f, d) => t.itemSort(f, d, i))),
      J(r, (f) => {
        const d = hr(t.callbacks, f)
        s.push(Pt(d, 'labelColor', this, f)),
          o.push(Pt(d, 'labelPointStyle', this, f)),
          a.push(Pt(d, 'labelTextColor', this, f))
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = a),
      (this.dataPoints = r),
      r
    )
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()),
      s = this._active
    let o,
      a = []
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 })
    else {
      const r = Cn[i.position].call(this, s, this._eventPosition)
      ;(a = this._createItems(i)),
        (this.title = this.getTitle(a, i)),
        (this.beforeBody = this.getBeforeBody(a, i)),
        (this.body = this.getBody(a, i)),
        (this.afterBody = this.getAfterBody(a, i)),
        (this.footer = this.getFooter(a, i))
      const c = (this._size = cr(this, i)),
        l = Object.assign({}, r, c),
        f = lr(this.chart, i, l),
        d = fr(i, l, f, this.chart)
      ;(this.xAlign = f.xAlign),
        (this.yAlign = f.yAlign),
        (o = { opacity: 1, x: d.x, y: d.y, width: c.width, height: c.height, caretX: r.x, caretY: r.y })
    }
    ;(this._tooltipItems = a),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e })
  }
  drawCaret(t, e, i, s) {
    const o = this.getCaretPosition(t, i, s)
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3)
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: a, cornerRadius: r } = i,
      { topLeft: c, topRight: l, bottomLeft: f, bottomRight: d } = Fe(r),
      { x: h, y: u } = t,
      { width: p, height: g } = e
    let b, m, x, _, v, y
    return (
      o === 'center'
        ? ((v = u + g / 2),
          s === 'left'
            ? ((b = h), (m = b - a), (_ = v + a), (y = v - a))
            : ((b = h + p), (m = b + a), (_ = v - a), (y = v + a)),
          (x = b))
        : (s === 'left'
            ? (m = h + Math.max(c, f) + a)
            : s === 'right'
              ? (m = h + p - Math.max(l, d) - a)
              : (m = this.caretX),
          o === 'top'
            ? ((_ = u), (v = _ - a), (b = m - a), (x = m + a))
            : ((_ = u + g), (v = _ + a), (b = m + a), (x = m - a)),
          (y = _)),
      { x1: b, x2: m, x3: x, y1: _, y2: v, y3: y }
    )
  }
  drawTitle(t, e, i) {
    const s = this.title,
      o = s.length
    let a, r, c
    if (o) {
      const l = en(i.rtl, this.x, this.width)
      for (
        t.x = vi(this, i.titleAlign, i),
          e.textAlign = l.textAlign(i.titleAlign),
          e.textBaseline = 'middle',
          a = dt(i.titleFont),
          r = i.titleSpacing,
          e.fillStyle = i.titleColor,
          e.font = a.string,
          c = 0;
        c < o;
        ++c
      )
        e.fillText(s[c], l.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + r),
          c + 1 === o && (t.y += i.titleMarginBottom - r)
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const a = this.labelColors[i],
      r = this.labelPointStyles[i],
      { boxHeight: c, boxWidth: l } = o,
      f = dt(o.bodyFont),
      d = vi(this, 'left', o),
      h = s.x(d),
      u = c < f.lineHeight ? (f.lineHeight - c) / 2 : 0,
      p = e.y + u
    if (o.usePointStyle) {
      const g = { radius: Math.min(l, c) / 2, pointStyle: r.pointStyle, rotation: r.rotation, borderWidth: 1 },
        b = s.leftForLtr(h, l) + l / 2,
        m = p + c / 2
      ;(t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        Ki(t, g, b, m),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        Ki(t, g, b, m)
    } else {
      ;(t.lineWidth = Y(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0)
      const g = s.leftForLtr(h, l),
        b = s.leftForLtr(s.xPlus(h, 1), l - 2),
        m = Fe(a.borderRadius)
      Object.values(m).some((x) => x !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          Gn(t, { x: g, y: p, w: l, h: c, radius: m }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = a.backgroundColor),
          t.beginPath(),
          Gn(t, { x: b, y: p + 1, w: l - 2, h: c - 2, radius: m }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(g, p, l, c),
          t.strokeRect(g, p, l, c),
          (t.fillStyle = a.backgroundColor),
          t.fillRect(b, p + 1, l - 2, c - 2))
    }
    t.fillStyle = this.labelTextColors[i]
  }
  drawBody(t, e, i) {
    const { body: s } = this,
      { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: c, boxWidth: l, boxPadding: f } = i,
      d = dt(i.bodyFont)
    let h = d.lineHeight,
      u = 0
    const p = en(i.rtl, this.x, this.width),
      g = function (S) {
        e.fillText(S, p.x(t.x + u), t.y + h / 2), (t.y += h + o)
      },
      b = p.textAlign(a)
    let m, x, _, v, y, M, k
    for (
      e.textAlign = a,
        e.textBaseline = 'middle',
        e.font = d.string,
        t.x = vi(this, b, i),
        e.fillStyle = i.bodyColor,
        J(this.beforeBody, g),
        u = r && b !== 'right' ? (a === 'center' ? l / 2 + f : l + 2 + f) : 0,
        v = 0,
        M = s.length;
      v < M;
      ++v
    ) {
      for (
        m = s[v],
          x = this.labelTextColors[v],
          e.fillStyle = x,
          J(m.before, g),
          _ = m.lines,
          r && _.length && (this._drawColorBox(e, t, v, p, i), (h = Math.max(d.lineHeight, c))),
          y = 0,
          k = _.length;
        y < k;
        ++y
      )
        g(_[y]), (h = d.lineHeight)
      J(m.after, g)
    }
    ;(u = 0), (h = d.lineHeight), J(this.afterBody, g), (t.y -= o)
  }
  drawFooter(t, e, i) {
    const s = this.footer,
      o = s.length
    let a, r
    if (o) {
      const c = en(i.rtl, this.x, this.width)
      for (
        t.x = vi(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          e.textAlign = c.textAlign(i.footerAlign),
          e.textBaseline = 'middle',
          a = dt(i.footerFont),
          e.fillStyle = i.footerColor,
          e.font = a.string,
          r = 0;
        r < o;
        ++r
      )
        e.fillText(s[r], c.x(t.x), t.y + a.lineHeight / 2), (t.y += a.lineHeight + i.footerSpacing)
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: a } = this,
      { x: r, y: c } = t,
      { width: l, height: f } = i,
      { topLeft: d, topRight: h, bottomLeft: u, bottomRight: p } = Fe(s.cornerRadius)
    ;(e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(r + d, c),
      a === 'top' && this.drawCaret(t, e, i, s),
      e.lineTo(r + l - h, c),
      e.quadraticCurveTo(r + l, c, r + l, c + h),
      a === 'center' && o === 'right' && this.drawCaret(t, e, i, s),
      e.lineTo(r + l, c + f - p),
      e.quadraticCurveTo(r + l, c + f, r + l - p, c + f),
      a === 'bottom' && this.drawCaret(t, e, i, s),
      e.lineTo(r + u, c + f),
      e.quadraticCurveTo(r, c + f, r, c + f - u),
      a === 'center' && o === 'left' && this.drawCaret(t, e, i, s),
      e.lineTo(r, c + d),
      e.quadraticCurveTo(r, c, r + d, c),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke()
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      i = this.$animations,
      s = i && i.x,
      o = i && i.y
    if (s || o) {
      const a = Cn[t.position].call(this, this._active, this._eventPosition)
      if (!a) return
      const r = (this._size = cr(this, t)),
        c = Object.assign({}, a, this._size),
        l = lr(e, t, c),
        f = fr(t, c, l, e)
      ;(s._to !== f.x || o._to !== f.y) &&
        ((this.xAlign = l.xAlign),
        (this.yAlign = l.yAlign),
        (this.width = r.width),
        (this.height = r.height),
        (this.caretX = a.x),
        (this.caretY = a.y),
        this._resolveAnimations().update(this, f))
    }
  }
  _willRender() {
    return !!this.opacity
  }
  draw(t) {
    const e = this.options.setContext(this.getContext())
    let i = this.opacity
    if (!i) return
    this._updateAnimationTarget(e)
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y }
    i = Math.abs(i) < 0.001 ? 0 : i
    const a = mt(e.padding),
      r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length
    e.enabled &&
      r &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(o, t, s, e),
      Ic(t, e.textDirection),
      (o.y += a.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      zc(t, e.textDirection),
      t.restore())
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t, e) {
    const i = this._active,
      s = t.map(({ datasetIndex: r, index: c }) => {
        const l = this.chart.getDatasetMeta(r)
        if (!l) throw new Error('Cannot find a dataset at index ' + r)
        return { datasetIndex: r, element: l.data[c], index: c }
      }),
      o = !Ui(i, s),
      a = this._positionChanged(s, e)
    ;(o || a) && ((this._active = s), (this._eventPosition = e), (this._ignoreReplayEvents = !0), this.update(!0))
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents) return !1
    this._ignoreReplayEvents = !1
    const s = this.options,
      o = this._active || [],
      a = this._getActiveElements(t, o, e, i),
      r = this._positionChanged(a, t),
      c = e || !Ui(a, o) || r
    return (
      c &&
        ((this._active = a),
        (s.enabled || s.external) && ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      c
    )
  }
  _getActiveElements(t, e, i, s) {
    const o = this.options
    if (t.type === 'mouseout') return []
    if (!s)
      return e.filter(
        (r) =>
          this.chart.data.datasets[r.datasetIndex] &&
          this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0,
      )
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, i)
    return o.reverse && a.reverse(), a
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: s, options: o } = this,
      a = Cn[o.position].call(this, t, e)
    return a !== !1 && (i !== a.x || s !== a.y)
  }
}
D(eo, 'positioners', Cn)
var fl = {
    id: 'tooltip',
    _element: eo,
    positioners: Cn,
    afterInit(n, t, e) {
      e && (n.tooltip = new eo({ chart: n, options: e }))
    },
    beforeUpdate(n, t, e) {
      n.tooltip && n.tooltip.initialize(e)
    },
    reset(n, t, e) {
      n.tooltip && n.tooltip.initialize(e)
    },
    afterDraw(n) {
      const t = n.tooltip
      if (t && t._willRender()) {
        const e = { tooltip: t }
        if (n.notifyPlugins('beforeTooltipDraw', { ...e, cancelable: !0 }) === !1) return
        t.draw(n.ctx), n.notifyPlugins('afterTooltipDraw', e)
      }
    },
    afterEvent(n, t) {
      if (n.tooltip) {
        const e = t.replay
        n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0)
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (n, t) => t.bodyFont.size,
      boxWidth: (n, t) => t.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: ll,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (n) => n !== 'filter' && n !== 'itemSort' && n !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  },
  fg = Object.freeze({
    __proto__: null,
    Colors: kp,
    Decimation: Ap,
    Filler: qp,
    Legend: rl,
    SubTitle: ng,
    Title: cl,
    Tooltip: fl,
  })
const dg = (n, t, e, i) => (
  typeof t == 'string' ? ((e = n.push(t) - 1), i.unshift({ index: e, label: t })) : isNaN(t) && (e = null), e
)
function hg(n, t, e, i) {
  const s = n.indexOf(t)
  if (s === -1) return dg(n, t, e, i)
  const o = n.lastIndexOf(t)
  return s !== o ? e : s
}
const ug = (n, t) => (n === null ? null : ut(Math.round(n), 0, t))
function ur(n) {
  const t = this.getLabels()
  return n >= 0 && n < t.length ? t[n] : n
}
class ts extends we {
  constructor(t) {
    super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = [])
  }
  init(t) {
    const e = this._addedLabels
    if (e.length) {
      const i = this.getLabels()
      for (const { index: s, label: o } of e) i[s] === o && i.splice(s, 1)
      this._addedLabels = []
    }
    super.init(t)
  }
  parse(t, e) {
    if (X(t)) return null
    const i = this.getLabels()
    return (e = isFinite(e) && i[e] === t ? e : hg(i, t, F(e, t), this._addedLabels)), ug(e, i.length - 1)
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds()
    let { min: i, max: s } = this.getMinMax(!0)
    this.options.bounds === 'ticks' && (t || (i = 0), e || (s = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = s)
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      i = this.options.offset,
      s = []
    let o = this.getLabels()
    ;(o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0))
    for (let a = t; a <= e; a++) s.push({ value: a })
    return s
  }
  getLabelForValue(t) {
    return ur.call(this, t)
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    )
  }
  getPixelForTick(t) {
    const e = this.ticks
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
  }
  getBasePixel() {
    return this.bottom
  }
}
D(ts, 'id', 'category'), D(ts, 'defaults', { ticks: { callback: ur } })
function pg(n, t) {
  const e = [],
    { bounds: s, step: o, min: a, max: r, precision: c, count: l, maxTicks: f, maxDigits: d, includeBounds: h } = n,
    u = o || 1,
    p = f - 1,
    { min: g, max: b } = t,
    m = !X(a),
    x = !X(r),
    _ = !X(l),
    v = (b - g) / (d + 1)
  let y = ra((b - g) / p / u) * u,
    M,
    k,
    S,
    C
  if (y < 1e-14 && !m && !x) return [{ value: g }, { value: b }]
  ;(C = Math.ceil(b / y) - Math.floor(g / y)),
    C > p && (y = ra((C * y) / p / u) * u),
    X(c) || ((M = Math.pow(10, c)), (y = Math.ceil(y * M) / M)),
    s === 'ticks' ? ((k = Math.floor(g / y) * y), (S = Math.ceil(b / y) * y)) : ((k = g), (S = b)),
    m && x && o && dd((r - a) / o, y / 1e3)
      ? ((C = Math.round(Math.min((r - a) / y, f))), (y = (r - a) / C), (k = a), (S = r))
      : _
        ? ((k = m ? a : k), (S = x ? r : S), (C = l - 1), (y = (S - k) / C))
        : ((C = (S - k) / y), Ln(C, Math.round(C), y / 1e3) ? (C = Math.round(C)) : (C = Math.ceil(C)))
  const O = Math.max(ca(y), ca(k))
  ;(M = Math.pow(10, X(c) ? O : c)), (k = Math.round(k * M) / M), (S = Math.round(S * M) / M)
  let P = 0
  for (
    m &&
    (h && k !== a
      ? (e.push({ value: a }), k < a && P++, Ln(Math.round((k + P * y) * M) / M, a, pr(a, v, n)) && P++)
      : k < a && P++);
    P < C;
    ++P
  ) {
    const I = Math.round((k + P * y) * M) / M
    if (x && I > r) break
    e.push({ value: I })
  }
  return (
    x && h && S !== r
      ? e.length && Ln(e[e.length - 1].value, r, pr(r, v, n))
        ? (e[e.length - 1].value = r)
        : e.push({ value: r })
      : (!x || S === r) && e.push({ value: S }),
    e
  )
}
function pr(n, t, { horizontal: e, minRotation: i }) {
  const s = Ut(i),
    o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
    a = 0.75 * t * ('' + n).length
  return Math.min(t / o, a)
}
class es extends we {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0)
  }
  parse(t, e) {
    return X(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: i } = this.getUserBounds()
    let { min: s, max: o } = this
    const a = (c) => (s = e ? s : c),
      r = (c) => (o = i ? o : c)
    if (t) {
      const c = Kt(s),
        l = Kt(o)
      c < 0 && l < 0 ? r(0) : c > 0 && l > 0 && a(0)
    }
    if (s === o) {
      let c = o === 0 ? 1 : Math.abs(o * 0.05)
      r(o + c), t || a(s - c)
    }
    ;(this.min = s), (this.max = o)
  }
  getTickLimit() {
    const t = this.options.ticks
    let { maxTicksLimit: e, stepSize: i } = t,
      s
    return (
      i
        ? ((s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`,
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (e = e || 11)),
      e && (s = Math.min(e, s)),
      s
    )
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks
    let i = this.getTickLimit()
    i = Math.max(2, i)
    const s = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      o = this._range || this,
      a = pg(s, o)
    return (
      t.bounds === 'ticks' && xc(a, this, 'value'),
      t.reverse
        ? (a.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      a
    )
  }
  configure() {
    const t = this.ticks
    let e = this.min,
      i = this.max
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2
      ;(e -= s), (i += s)
    }
    ;(this._startValue = e), (this._endValue = i), (this._valueRange = i - e)
  }
  getLabelForValue(t) {
    return oi(t, this.chart.options.locale, this.options.ticks.format)
  }
}
class ln extends es {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0)
    ;(this.min = ct(t) ? t : 0), (this.max = ct(e) ? e : 1), this.handleTickRangeOptions()
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      i = Ut(this.options.ticks.minRotation),
      s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = this._resolveTickFontOptions(0)
    return Math.ceil(e / Math.min(40, o.lineHeight / s))
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
  }
}
D(ln, 'id', 'linear'), D(ln, 'defaults', { ticks: { callback: ms.formatters.numeric } })
const Kn = (n) => Math.floor(ue(n)),
  Pe = (n, t) => Math.pow(10, Kn(n) + t)
function gr(n) {
  return n / Math.pow(10, Kn(n)) === 1
}
function br(n, t, e) {
  const i = Math.pow(10, e),
    s = Math.floor(n / i)
  return Math.ceil(t / i) - s
}
function gg(n, t) {
  const e = t - n
  let i = Kn(e)
  for (; br(n, t, i) > 10; ) i++
  for (; br(n, t, i) < 10; ) i--
  return Math.min(i, Kn(n))
}
function bg(n, { min: t, max: e }) {
  t = Ot(n.min, t)
  const i = [],
    s = Kn(t)
  let o = gg(t, e),
    a = o < 0 ? Math.pow(10, Math.abs(o)) : 1
  const r = Math.pow(10, o),
    c = s > o ? Math.pow(10, s) : 0,
    l = Math.round((t - c) * a) / a,
    f = Math.floor((t - c) / r / 10) * r * 10
  let d = Math.floor((l - f) / Math.pow(10, o)),
    h = Ot(n.min, Math.round((c + f + d * Math.pow(10, o)) * a) / a)
  for (; h < e; )
    i.push({ value: h, major: gr(h), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (o++, (d = 2), (a = o >= 0 ? 1 : a)),
      (h = Math.round((c + f + d * Math.pow(10, o)) * a) / a)
  const u = Ot(n.max, h)
  return i.push({ value: u, major: gr(u), significand: d }), i
}
class fn extends we {
  constructor(t) {
    super(t), (this.start = void 0), (this.end = void 0), (this._startValue = void 0), (this._valueRange = 0)
  }
  parse(t, e) {
    const i = es.prototype.parse.apply(this, [t, e])
    if (i === 0) {
      this._zero = !0
      return
    }
    return ct(i) && i > 0 ? i : null
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0)
    ;(this.min = ct(t) ? Math.max(0, t) : null),
      (this.max = ct(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !ct(this._userMin) &&
        (this.min = t === Pe(this.min, 0) ? Pe(this.min, -1) : Pe(this.min, 0)),
      this.handleTickRangeOptions()
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds()
    let i = this.min,
      s = this.max
    const o = (r) => (i = t ? i : r),
      a = (r) => (s = e ? s : r)
    i === s && (i <= 0 ? (o(1), a(10)) : (o(Pe(i, -1)), a(Pe(s, 1)))),
      i <= 0 && o(Pe(s, -1)),
      s <= 0 && a(Pe(i, 1)),
      (this.min = i),
      (this.max = s)
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      i = bg(e, this)
    return (
      t.bounds === 'ticks' && xc(i, this, 'value'),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    )
  }
  getLabelForValue(t) {
    return t === void 0 ? '0' : oi(t, this.chart.options.locale, this.options.ticks.format)
  }
  configure() {
    const t = this.min
    super.configure(), (this._startValue = ue(t)), (this._valueRange = ue(this.max) - ue(t))
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(t === this.min ? 0 : (ue(t) - this._startValue) / this._valueRange)
    )
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t)
    return Math.pow(10, this._startValue + e * this._valueRange)
  }
}
D(fn, 'id', 'logarithmic'),
  D(fn, 'defaults', { ticks: { callback: ms.formatters.logarithmic, major: { enabled: !0 } } })
function no(n) {
  const t = n.ticks
  if (t.display && n.display) {
    const e = mt(t.backdropPadding)
    return F(t.font && t.font.size, lt.font.size) + e.height
  }
  return 0
}
function mg(n, t, e) {
  return (e = at(e) ? e : [e]), { w: Dd(n, t.string, e), h: e.length * t.lineHeight }
}
function mr(n, t, e, i, s) {
  return n === i || n === s
    ? { start: t - e / 2, end: t + e / 2 }
    : n < i || n > s
      ? { start: t - e, end: t }
      : { start: t, end: t + e }
}
function xg(n) {
  const t = {
      l: n.left + n._padding.left,
      r: n.right - n._padding.right,
      t: n.top + n._padding.top,
      b: n.bottom - n._padding.bottom,
    },
    e = Object.assign({}, t),
    i = [],
    s = [],
    o = n._pointLabels.length,
    a = n.options.pointLabels,
    r = a.centerPointLabels ? ot / o : 0
  for (let c = 0; c < o; c++) {
    const l = a.setContext(n.getPointLabelContext(c))
    s[c] = l.padding
    const f = n.getPointPosition(c, n.drawingArea + s[c], r),
      d = dt(l.font),
      h = mg(n.ctx, d, n._pointLabels[c])
    i[c] = h
    const u = Tt(n.getIndexAngle(c) + r),
      p = Math.round(Do(u)),
      g = mr(p, f.x, h.w, 0, 180),
      b = mr(p, f.y, h.h, 90, 270)
    _g(e, t, u, g, b)
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), (n._pointLabelItems = wg(n, i, s))
}
function _g(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)),
    a = Math.abs(Math.cos(e))
  let r = 0,
    c = 0
  i.start < t.l
    ? ((r = (t.l - i.start) / o), (n.l = Math.min(n.l, t.l - r)))
    : i.end > t.r && ((r = (i.end - t.r) / o), (n.r = Math.max(n.r, t.r + r))),
    s.start < t.t
      ? ((c = (t.t - s.start) / a), (n.t = Math.min(n.t, t.t - c)))
      : s.end > t.b && ((c = (s.end - t.b) / a), (n.b = Math.max(n.b, t.b + c)))
}
function yg(n, t, e) {
  const i = n.drawingArea,
    { extra: s, additionalAngle: o, padding: a, size: r } = e,
    c = n.getPointPosition(t, i + s + a, o),
    l = Math.round(Do(Tt(c.angle + ft))),
    f = kg(c.y, r.h, l),
    d = Mg(l),
    h = Sg(c.x, r.w, d)
  return { visible: !0, x: c.x, y: f, textAlign: d, left: h, top: f, right: h + r.w, bottom: f + r.h }
}
function vg(n, t) {
  if (!t) return !0
  const { left: e, top: i, right: s, bottom: o } = n
  return !(le({ x: e, y: i }, t) || le({ x: e, y: o }, t) || le({ x: s, y: i }, t) || le({ x: s, y: o }, t))
}
function wg(n, t, e) {
  const i = [],
    s = n._pointLabels.length,
    o = n.options,
    { centerPointLabels: a, display: r } = o.pointLabels,
    c = { extra: no(o) / 2, additionalAngle: a ? ot / s : 0 }
  let l
  for (let f = 0; f < s; f++) {
    ;(c.padding = e[f]), (c.size = t[f])
    const d = yg(n, f, c)
    i.push(d), r === 'auto' && ((d.visible = vg(d, l)), d.visible && (l = d))
  }
  return i
}
function Mg(n) {
  return n === 0 || n === 180 ? 'center' : n < 180 ? 'left' : 'right'
}
function Sg(n, t, e) {
  return e === 'right' ? (n -= t) : e === 'center' && (n -= t / 2), n
}
function kg(n, t, e) {
  return e === 90 || e === 270 ? (n -= t / 2) : (e > 270 || e < 90) && (n -= t), n
}
function Cg(n, t, e) {
  const { left: i, top: s, right: o, bottom: a } = e,
    { backdropColor: r } = t
  if (!X(r)) {
    const c = Fe(t.borderRadius),
      l = mt(t.backdropPadding)
    n.fillStyle = r
    const f = i - l.left,
      d = s - l.top,
      h = o - i + l.width,
      u = a - s + l.height
    Object.values(c).some((p) => p !== 0)
      ? (n.beginPath(), Gn(n, { x: f, y: d, w: h, h: u, radius: c }), n.fill())
      : n.fillRect(f, d, h, u)
  }
}
function Pg(n, t) {
  const {
    ctx: e,
    options: { pointLabels: i },
  } = n
  for (let s = t - 1; s >= 0; s--) {
    const o = n._pointLabelItems[s]
    if (!o.visible) continue
    const a = i.setContext(n.getPointLabelContext(s))
    Cg(e, a, o)
    const r = dt(a.font),
      { x: c, y: l, textAlign: f } = o
    je(e, n._pointLabels[s], c, l + r.lineHeight / 2, r, { color: a.color, textAlign: f, textBaseline: 'middle' })
  }
}
function dl(n, t, e, i) {
  const { ctx: s } = n
  if (e) s.arc(n.xCenter, n.yCenter, t, 0, st)
  else {
    let o = n.getPointPosition(0, t)
    s.moveTo(o.x, o.y)
    for (let a = 1; a < i; a++) (o = n.getPointPosition(a, t)), s.lineTo(o.x, o.y)
  }
}
function Dg(n, t, e, i, s) {
  const o = n.ctx,
    a = t.circular,
    { color: r, lineWidth: c } = t
  ;(!a && !i) ||
    !r ||
    !c ||
    e < 0 ||
    (o.save(),
    (o.strokeStyle = r),
    (o.lineWidth = c),
    o.setLineDash(s.dash),
    (o.lineDashOffset = s.dashOffset),
    o.beginPath(),
    dl(n, e, a, i),
    o.closePath(),
    o.stroke(),
    o.restore())
}
function Ag(n, t, e) {
  return ve(n, { label: e, index: t, type: 'pointLabel' })
}
class Pn extends es {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = [])
  }
  setDimensions() {
    const t = (this._padding = mt(no(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height)
    ;(this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, i) / 2))
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1)
    ;(this.min = ct(t) && !isNaN(t) ? t : 0), (this.max = ct(e) && !isNaN(e) ? e : 0), this.handleTickRangeOptions()
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / no(this.options))
  }
  generateTickLabels(t) {
    es.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, i) => {
          const s = nt(this.options.pointLabels.callback, [e, i], this)
          return s || s === 0 ? s : ''
        })
        .filter((e, i) => this.chart.getDataVisibility(i)))
  }
  fit() {
    const t = this.options
    t.display && t.pointLabels.display ? xg(this) : this.setCenterPoint(0, 0, 0, 0)
  }
  setCenterPoint(t, e, i, s) {
    ;(this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((i - s) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)))
  }
  getIndexAngle(t) {
    const e = st / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0
    return Tt(t * e + Ut(i))
  }
  getDistanceFromCenterForValue(t) {
    if (X(t)) return NaN
    const e = this.drawingArea / (this.max - this.min)
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
  }
  getValueForDistanceFromCenter(t) {
    if (X(t)) return NaN
    const e = t / (this.drawingArea / (this.max - this.min))
    return this.options.reverse ? this.max - e : this.min + e
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || []
    if (t >= 0 && t < e.length) {
      const i = e[t]
      return Ag(this.getContext(), t, i)
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - ft + i
    return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s }
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue())
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: s, bottom: o } = this._pointLabelItems[t]
    return { left: e, top: i, right: s, bottom: o }
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options
    if (t) {
      const i = this.ctx
      i.save(),
        i.beginPath(),
        dl(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore()
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: i, grid: s, border: o } = e,
      a = this._pointLabels.length
    let r, c, l
    if (
      (e.pointLabels.display && Pg(this, a),
      s.display &&
        this.ticks.forEach((f, d) => {
          if (d !== 0) {
            c = this.getDistanceFromCenterForValue(f.value)
            const h = this.getContext(d),
              u = s.setContext(h),
              p = o.setContext(h)
            Dg(this, u, c, a, p)
          }
        }),
      i.display)
    ) {
      for (t.save(), r = a - 1; r >= 0; r--) {
        const f = i.setContext(this.getPointLabelContext(r)),
          { color: d, lineWidth: h } = f
        !h ||
          !d ||
          ((t.lineWidth = h),
          (t.strokeStyle = d),
          t.setLineDash(f.borderDash),
          (t.lineDashOffset = f.borderDashOffset),
          (c = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
          (l = this.getPointPosition(r, c)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(l.x, l.y),
          t.stroke())
      }
      t.restore()
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      i = e.ticks
    if (!i.display) return
    const s = this.getIndexAngle(0)
    let o, a
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((r, c) => {
        if (c === 0 && !e.reverse) return
        const l = i.setContext(this.getContext(c)),
          f = dt(l.font)
        if (((o = this.getDistanceFromCenterForValue(this.ticks[c].value)), l.showLabelBackdrop)) {
          ;(t.font = f.string), (a = t.measureText(r.label).width), (t.fillStyle = l.backdropColor)
          const d = mt(l.backdropPadding)
          t.fillRect(-a / 2 - d.left, -o - f.size / 2 - d.top, a + d.width, f.size + d.height)
        }
        je(t, r.label, 0, -o, f, { color: l.color, strokeColor: l.textStrokeColor, strokeWidth: l.textStrokeWidth })
      }),
      t.restore()
  }
  drawTitle() {}
}
D(Pn, 'id', 'radialLinear'),
  D(Pn, 'defaults', {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: ms.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  D(Pn, 'defaultRoutes', { 'angleLines.color': 'borderColor', 'pointLabels.color': 'color', 'ticks.color': 'color' }),
  D(Pn, 'descriptors', { angleLines: { _fallback: 'grid' } })
const _s = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  At = Object.keys(_s)
function xr(n, t) {
  return n - t
}
function _r(n, t) {
  if (X(t)) return null
  const e = n._adapter,
    { parser: i, round: s, isoWeekday: o } = n._parseOpts
  let a = t
  return (
    typeof i == 'function' && (a = i(a)),
    ct(a) || (a = typeof i == 'string' ? e.parse(a, i) : e.parse(a)),
    a === null
      ? null
      : (s && (a = s === 'week' && (an(o) || o === !0) ? e.startOf(a, 'isoWeek', o) : e.startOf(a, s)), +a)
  )
}
function yr(n, t, e, i) {
  const s = At.length
  for (let o = At.indexOf(n); o < s - 1; ++o) {
    const a = _s[At[o]],
      r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= i) return At[o]
  }
  return At[s - 1]
}
function Og(n, t, e, i, s) {
  for (let o = At.length - 1; o >= At.indexOf(e); o--) {
    const a = At[o]
    if (_s[a].common && n._adapter.diff(s, i, a) >= t - 1) return a
  }
  return At[e ? At.indexOf(e) : 0]
}
function Tg(n) {
  for (let t = At.indexOf(n) + 1, e = At.length; t < e; ++t) if (_s[At[t]].common) return At[t]
}
function vr(n, t, e) {
  if (!e) n[t] = !0
  else if (e.length) {
    const { lo: i, hi: s } = Ao(e, t),
      o = e[i] >= t ? e[i] : e[s]
    n[o] = !0
  }
}
function Eg(n, t, e, i) {
  const s = n._adapter,
    o = +s.startOf(t[0].value, i),
    a = t[t.length - 1].value
  let r, c
  for (r = o; r <= a; r = +s.add(r, 1, i)) (c = e[r]), c >= 0 && (t[c].major = !0)
  return t
}
function wr(n, t, e) {
  const i = [],
    s = {},
    o = t.length
  let a, r
  for (a = 0; a < o; ++a) (r = t[a]), (s[r] = a), i.push({ value: r, major: !1 })
  return o === 0 || !e ? i : Eg(n, i, s, e)
}
class Zn extends we {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0)
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}),
      s = (this._adapter = new Hh._date(t.adapters.date))
    s.init(e),
      Rn(i.displayFormats, s.formats()),
      (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
      super.init(t),
      (this._normalized = e.normalized)
  }
  parse(t, e) {
    return t === void 0 ? null : _r(this, t)
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      i = t.time.unit || 'day'
    let { min: s, max: o, minDefined: a, maxDefined: r } = this.getUserBounds()
    function c(l) {
      !a && !isNaN(l.min) && (s = Math.min(s, l.min)), !r && !isNaN(l.max) && (o = Math.max(o, l.max))
    }
    ;(!a || !r) &&
      (c(this._getLabelBounds()), (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && c(this.getMinMax(!1))),
      (s = ct(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
      (o = ct(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o))
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps()
    let e = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY
    return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      i = t.ticks,
      s = i.source === 'labels' ? this.getLabelTimestamps() : this._generate()
    t.bounds === 'ticks' &&
      s.length &&
      ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]))
    const o = this.min,
      a = this.max,
      r = gd(s, o, a)
    return (
      (this._unit =
        e.unit ||
        (i.autoSkip
          ? yr(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : Og(this, r.length, e.minUnit, this.min, this.max))),
      (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : Tg(this._unit)),
      this.initOffsets(s),
      t.reverse && r.reverse(),
      wr(this, r, this._majorUnit)
    )
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value))
  }
  initOffsets(t = []) {
    let e = 0,
      i = 0,
      s,
      o
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1 ? (e = 1 - s) : (e = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1 ? (i = o) : (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2))
    const a = t.length < 3 ? 0.5 : 0.25
    ;(e = ut(e, 0, a)), (i = ut(i, 0, a)), (this._offsets = { start: e, end: i, factor: 1 / (e + 1 + i) })
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      i = this.max,
      s = this.options,
      o = s.time,
      a = o.unit || yr(o.minUnit, e, i, this._getLabelCapacity(e)),
      r = F(s.ticks.stepSize, 1),
      c = a === 'week' ? o.isoWeekday : !1,
      l = an(c) || c === !0,
      f = {}
    let d = e,
      h,
      u
    if ((l && (d = +t.startOf(d, 'isoWeek', c)), (d = +t.startOf(d, l ? 'day' : a)), t.diff(i, e, a) > 1e5 * r))
      throw new Error(e + ' and ' + i + ' are too far apart with stepSize of ' + r + ' ' + a)
    const p = s.ticks.source === 'data' && this.getDataTimestamps()
    for (h = d, u = 0; h < i; h = +t.add(h, r, a), u++) vr(f, h, p)
    return (
      (h === i || s.bounds === 'ticks' || u === 1) && vr(f, h, p),
      Object.keys(f)
        .sort(xr)
        .map((g) => +g)
    )
  }
  getLabelForValue(t) {
    const e = this._adapter,
      i = this.options.time
    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
  }
  format(t, e) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      a = e || s[o]
    return this._adapter.format(t, a)
  }
  _tickFormatFunction(t, e, i, s) {
    const o = this.options,
      a = o.ticks.callback
    if (a) return nt(a, [t, e, i], this)
    const r = o.time.displayFormats,
      c = this._unit,
      l = this._majorUnit,
      f = c && r[c],
      d = l && r[l],
      h = i[e],
      u = l && d && h && h.major
    return this._adapter.format(t, s || (u ? d : f))
  }
  generateTickLabels(t) {
    let e, i, s
    for (e = 0, i = t.length; e < i; ++e) (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t))
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min)
  }
  getPixelForValue(t) {
    const e = this._offsets,
      i = this.getDecimalForValue(t)
    return this.getPixelForDecimal((e.start + i) * e.factor)
  }
  getValueForPixel(t) {
    const e = this._offsets,
      i = this.getDecimalForPixel(t) / e.factor - e.end
    return this.min + i * (this.max - this.min)
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      i = this.ctx.measureText(t).width,
      s = Ut(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(s),
      a = Math.sin(s),
      r = this._resolveTickFontOptions(0).size
    return { w: i * o + r * a, h: i * a + r * o }
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      i = e.displayFormats,
      s = i[e.unit] || i.millisecond,
      o = this._tickFormatFunction(t, 0, wr(this, [t], this._majorUnit), s),
      a = this._getLabelSize(o),
      r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1
    return r > 0 ? r : 1
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      i
    if (t.length) return t
    const s = this.getMatchingVisibleMetas()
    if (this._normalized && s.length) return (this._cache.data = s[0].controller.getAllParsedValues(this))
    for (e = 0, i = s.length; e < i; ++e) t = t.concat(s[e].controller.getAllParsedValues(this))
    return (this._cache.data = this.normalize(t))
  }
  getLabelTimestamps() {
    const t = this._cache.labels || []
    let e, i
    if (t.length) return t
    const s = this.getLabels()
    for (e = 0, i = s.length; e < i; ++e) t.push(_r(this, s[e]))
    return (this._cache.labels = this._normalized ? t : this.normalize(t))
  }
  normalize(t) {
    return vc(t.sort(xr))
  }
}
D(Zn, 'id', 'time'),
  D(Zn, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: 'millisecond', displayFormats: {} },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  })
function wi(n, t, e) {
  let i = 0,
    s = n.length - 1,
    o,
    a,
    r,
    c
  e
    ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = ce(n, 'pos', t)),
      ({ pos: o, time: r } = n[i]),
      ({ pos: a, time: c } = n[s]))
    : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = ce(n, 'time', t)),
      ({ time: o, pos: r } = n[i]),
      ({ time: a, pos: c } = n[s]))
  const l = a - o
  return l ? r + ((c - r) * (t - o)) / l : r
}
class io extends Zn {
  constructor(t) {
    super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0)
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t))
    ;(this._minPos = wi(e, this.min)), (this._tableRange = wi(e, this.max) - this._minPos), super.initOffsets(t)
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this,
      s = [],
      o = []
    let a, r, c, l, f
    for (a = 0, r = t.length; a < r; ++a) (l = t[a]), l >= e && l <= i && s.push(l)
    if (s.length < 2)
      return [
        { time: e, pos: 0 },
        { time: i, pos: 1 },
      ]
    for (a = 0, r = s.length; a < r; ++a)
      (f = s[a + 1]), (c = s[a - 1]), (l = s[a]), Math.round((f + c) / 2) !== l && o.push({ time: l, pos: a / (r - 1) })
    return o
  }
  _generate() {
    const t = this.min,
      e = this.max
    let i = super.getDataTimestamps()
    return (
      (!i.includes(t) || !i.length) && i.splice(0, 0, t),
      (!i.includes(e) || i.length === 1) && i.push(e),
      i.sort((s, o) => s - o)
    )
  }
  _getTimestampsForTable() {
    let t = this._cache.all || []
    if (t.length) return t
    const e = this.getDataTimestamps(),
      i = this.getLabelTimestamps()
    return (
      e.length && i.length ? (t = this.normalize(e.concat(i))) : (t = e.length ? e : i), (t = this._cache.all = t), t
    )
  }
  getDecimalForValue(t) {
    return (wi(this._table, t) - this._minPos) / this._tableRange
  }
  getValueForPixel(t) {
    const e = this._offsets,
      i = this.getDecimalForPixel(t) / e.factor - e.end
    return wi(this._table, i * this._tableRange + this._minPos, !0)
  }
}
D(io, 'id', 'timeseries'), D(io, 'defaults', Zn.defaults)
var Rg = Object.freeze({
  __proto__: null,
  CategoryScale: ts,
  LinearScale: ln,
  LogarithmicScale: fn,
  RadialLinearScale: Pn,
  TimeScale: Zn,
  TimeSeriesScale: io,
})
const Lg = [Wh, _p, fg, Rg],
  hl = '#49A8FF',
  ul = '#154EC1',
  Mi = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  Ig = (n) =>
    n.map((t) => {
      const e = Math.floor(Math.random() * 1e5 + 1e4)
      return { month: t, earning: e, expenses: Math.floor(e * Math.random()) }
    }),
  zg = (n, t) => t.find((i) => i.month === n) || { month: n, earning: 0, expenses: 0 },
  Nn = (n, t = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency: t }).format(n),
  Fg = { class: 'flex justify-center w-full h-full overflow-hidden relative' },
  Fs = 4,
  Bg = St({
    __name: 'RevenueReportChart',
    props: { months: {}, revenues: {} },
    setup(n) {
      const { t } = Lt()
      Dt.register(...Lg),
        Dt.register([
          {
            id: 'background-color',
            beforeDatasetDraw: function (s) {
              const o = s.ctx
              s.config.data.datasets.forEach(function (r, c) {
                const l = s.getDatasetMeta(c)
                if (l.type === 'bar') {
                  const f = hl
                  l.data.forEach(function (d) {
                    ;(o.fillStyle = f), o.fillRect(d.x - Fs / 2, 0, Fs, s.chartArea.bottom)
                  })
                }
              })
            },
          },
        ])
      const e = jt(null),
        i = jt(!1)
      return (
        lc(() => {
          if (e.value) {
            const s = e.value.getContext('2d')
            s &&
              new Dt(s, {
                type: 'bar',
                data: {
                  labels: n.months,
                  datasets: [
                    {
                      data: n.revenues.map(({ earning: o, expenses: a }) => (a / o) * 100),
                      backgroundColor: ul,
                      barThickness: Fs,
                    },
                  ],
                },
                options: {
                  maintainAspectRatio: !1,
                  plugins: {
                    legend: { display: !1 },
                    tooltip: {
                      callbacks: {
                        title: function (o) {
                          const a = o[0].label
                          return t(`dashboard.months.${a.toLowerCase()}`)
                        },
                        label: function (o) {
                          return `${t('dashboard.cards.expenses')}: ${Nn(Number(o.parsed.y))}`
                        },
                      },
                    },
                  },
                  scales: {
                    x: { stacked: !0, grid: { display: !1 }, border: { width: 0 } },
                    y: {
                      display: !1,
                      beginAtZero: !0,
                      ticks: {
                        callback: function (o) {
                          return Nn(Number(o))
                        },
                      },
                    },
                  },
                },
              })
          }
          _f(() => {
            i.value = !0
          })
        }),
        (s, o) => (
          it(), Jt('div', Fg, [A('canvas', { ref_key: 'canvas', ref: e, style: { 'max-width': '100%' } }, null, 512)])
        )
      )
    },
  }),
  Ng = bs(Bg, [['__scopeId', 'data-v-b9831e70']]),
  Vg = (n) => {
    const t = Object.keys(n[0])
    return [t.join(','), ...n.map((i) => t.map((s) => JSON.stringify(i[s])).join(','))].join(`\r
`)
  },
  pl = (n, t) => {
    const e = Vg(n),
      i = new Blob([e], { type: 'text/csv' }),
      s = document.createElement('a')
    ;(s.href = window.URL.createObjectURL(i)), (s.download = t), s.click()
  },
  $g = { class: 'card-title text-secondary font-bold uppercase' },
  jg = { class: 'flex gap-2' },
  Wg = { class: 'flex flex-col items-start w-full sm:w-1/3 md:w-2/5 lg:w-1/4 gap-2 md:gap-8 pl-4' },
  Hg = { class: 'text-xl font-semibold' },
  Yg = { class: 'whitespace-nowrap mt-2' },
  Ug = { class: 'flex flex-col sm:flex-col gap-2 md:gap-8 w-full' },
  Xg = { class: 'flex items-center' },
  Gg = { class: 'text-secondary' },
  qg = { class: 'mt-2 text-xl font-semibold' },
  Kg = { class: 'flex items-center' },
  Zg = { class: 'text-secondary' },
  Jg = { class: 'mt-2 text-xl font-semibold' },
  Qg = St({
    __name: 'RevenueReport',
    setup(n) {
      const { t } = Lt(),
        e = Ig(Mi),
        i = new Date().getFullYear(),
        s = vt(() => Mi.map((l) => ({ text: `${t(`dashboard.months.${l.toLowerCase()}`)} ${i}`, value: `${l} ${i}` }))),
        o = jt(`${Mi[0]} ${i}`),
        a = vt(() => zg(o.value.split(' ')[0], e)),
        r = vt(() => a.value.earning + a.value.expenses),
        c = () => {
          pl(e, 'revenue-report')
        }
      return (l, f) => {
        const d = U('VaSelect'),
          h = U('VaButton'),
          u = U('VaCardTitle'),
          p = U('VaCardContent')
        return (
          it(),
          wt(
            E(ii),
            { class: 'flex flex-col' },
            {
              default: z(() => [
                R(
                  u,
                  { class: 'flex items-start justify-between' },
                  {
                    default: z(() => [
                      A('h1', $g, $(E(t)('dashboard.cards.revenueReport')), 1),
                      A('div', jg, [
                        R(
                          d,
                          {
                            modelValue: o.value,
                            'onUpdate:modelValue': f[0] || (f[0] = (g) => (o.value = g)),
                            preset: 'small',
                            options: s.value,
                            class: 'w-24',
                            'text-by': 'text',
                            'value-by': 'value',
                          },
                          null,
                          8,
                          ['modelValue', 'options'],
                        ),
                        R(
                          h,
                          { class: 'h-2', size: 'small', preset: 'primary', onClick: c },
                          { default: z(() => [q($(E(t)('dashboard.cards.export')), 1)]), _: 1 },
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                R(
                  p,
                  { class: 'flex flex-col-reverse md:flex-row md:items-center justify-between gap-5 h-full' },
                  {
                    default: z(() => [
                      A('section', Wg, [
                        A('div', null, [
                          A('p', Hg, $(E(Nn)(r.value)), 1),
                          A('p', Yg, $(E(t)('dashboard.cards.totalEarnings')), 1),
                        ]),
                        A('div', Ug, [
                          A('div', null, [
                            A('div', Xg, [
                              A(
                                'span',
                                { class: 'inline-block w-2 h-2 mr-2 -ml-4', style: Yn({ backgroundColor: E(hl) }) },
                                null,
                                4,
                              ),
                              A('span', Gg, $(E(t)('dashboard.cards.earningsThisMonth')), 1),
                            ]),
                            A('div', qg, $(E(Nn)(a.value.earning)), 1),
                          ]),
                          A('div', null, [
                            A('div', Kg, [
                              A(
                                'span',
                                { class: 'inline-block w-2 h-2 mr-2 -ml-4', style: Yn({ backgroundColor: E(ul) }) },
                                null,
                                4,
                              ),
                              A('span', Zg, $(E(t)('dashboard.cards.expensesThisMonth')), 1),
                            ]),
                            A('div', Jg, $(E(Nn)(a.value.expenses)), 1),
                          ]),
                        ]),
                      ]),
                      R(
                        Ng,
                        {
                          class: 'w-2/3 md:w-3/5 lg:w-3/4 h-full min-h-72 sm:min-h-32 pt-4',
                          revenues: E(e),
                          months: E(Mi),
                        },
                        null,
                        8,
                        ['revenues', 'months'],
                      ),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  t0 = St({
    __name: 'ProjectStatusBadge',
    props: { status: {} },
    setup(n) {
      const { t } = Lt(),
        e = n,
        i = { 'in progress': 'primary', archived: 'secondary', completed: 'success', important: 'warning' },
        s = { 'in progress': 'inProgress', archived: 'archived', completed: 'completed', important: 'important' },
        o = vt(() => t(`projects.status.${s[e.status]}`))
      return (a, r) => {
        const c = U('VaBadge')
        return it(), wt(c, { square: '', color: i[e.status], text: o.value.toUpperCase() }, null, 8, ['color', 'text'])
      }
    },
  }),
  e0 = [
    {
      id: 'project-1',
      project_name: '海曼项目管理系统',
      project_owner: '1',
      team: ['1', '2'],
      status: 'in progress',
      created_at: '2024-01-15T10:30:00Z',
    },
    {
      id: 'project-2',
      project_name: 'Web前端重构',
      project_owner: '2',
      team: ['2', '3'],
      status: 'important',
      created_at: '2024-02-01T09:15:00Z',
    },
    {
      id: 'project-3',
      project_name: '移动端应用开发',
      project_owner: '3',
      team: ['1', '3'],
      status: 'completed',
      created_at: '2023-12-10T14:20:00Z',
    },
  ],
  n0 = async (n) => {
    await new Promise((e) => setTimeout(e, 200))
    const t = [...e0]
    return { data: t, pagination: { page: n.page, perPage: n.perPage, total: t.length } }
  },
  i0 = async (n) => (
    await new Promise((t) => setTimeout(t, 300)), console.log('Adding project:', n.project_name), { success: !0 }
  ),
  s0 = async (n) => (
    await new Promise((t) => setTimeout(t, 300)), console.log('Updating project:', n.id), { success: !0 }
  ),
  o0 = async (n) => (
    await new Promise((t) => setTimeout(t, 300)), console.log('Removing project:', n.id), { success: !0 }
  ),
  a0 = yf('projects', {
    state: () => ({ items: [], pagination: { page: 1, perPage: 10, total: 0 } }),
    actions: {
      async getAll(n) {
        const { data: t, pagination: e } = await n0({ ...n.sorting, ...n.pagination })
        ;(this.items = t), (this.pagination = e)
      },
      async add(n) {
        if ((await i0(n)).success) {
          const e = { ...n, id: `project-${Date.now()}`, created_at: new Date().toISOString() }
          this.items.push(e)
        }
      },
      async update(n) {
        if ((await s0(n)).success) {
          const e = this.items.findIndex(({ id: i }) => i === n.id)
          e !== -1 && this.items.splice(e, 1, n)
        }
      },
      async remove(n) {
        if (await o0(n)) {
          const e = this.items.findIndex(({ id: i }) => i === n.id)
          this.items.splice(e, 1)
        }
      },
    },
  })
function gl() {
  const { users: n } = Tf(),
    t = (s) => n.value.find(({ id: o }) => s === o),
    e = (s) => {
      const o = ['primary', '#FFD43A', '#ADFF00', '#262824', 'danger'],
        a = s.charCodeAt(0) % o.length
      return o[a]
    }
  return {
    users: n,
    getUserById: t,
    getTeamOptions: (s) =>
      s.reduce((o, a) => {
        const r = t(a)
        return r && o.push({ label: r.fullname, src: r.avatar, fallbackText: r.fullname[0], color: e(r.fullname) }), o
      }, []),
  }
}
const r0 = () => jt({ page: 1, perPage: 10, total: 0 }),
  c0 = () => jt({ sortBy: 'created_at', sortingOrder: 'desc' }),
  l0 = (n) => {
    const t = jt(!1),
      e = a0(),
      { getUserById: i } = gl(),
      { sorting: s = c0(), pagination: o = r0() } = n ?? {},
      a = async () => {
        ;(t.value = !0), await e.getAll({ sorting: E(s), pagination: E(o) }), (o.value = e.pagination), (t.value = !1)
      },
      r = vt(() => {
        const c = e.items.slice((o.value.page - 1) * o.value.perPage, o.value.page * o.value.perPage),
          l = (f, d) => {
            var h
            return d === 'project_owner'
              ? (h = i(f.project_owner)) == null
                ? void 0
                : h.fullname
              : d === 'team'
                ? f.team
                    .map((u) => {
                      var p
                      return ((p = i(u)) == null ? void 0 : p.fullname) || ''
                    })
                    .join(', ')
                : d === 'created_at'
                  ? new Date(f[d])
                  : f[d]
          }
        return (
          s.value.sortBy &&
            s.value.sortingOrder &&
            c.sort(
              (f, d) => (
                (f = l(f, s.value.sortBy)),
                (d = l(d, s.value.sortBy)),
                f < d
                  ? s.value.sortingOrder === 'asc'
                    ? -1
                    : 1
                  : f > d
                    ? s.value.sortingOrder === 'asc'
                      ? 1
                      : -1
                    : 0
              ),
            ),
          c
        )
      })
    return (
      a(),
      {
        isLoading: t,
        projects: r,
        fetch: a,
        async add(c) {
          ;(t.value = !0), await e.add(c), await a(), (t.value = !1)
        },
        async update(c) {
          ;(t.value = !0), await e.update(c), await a(), (t.value = !1)
        },
        async remove(c) {
          ;(t.value = !0), await e.remove(c), await a(), (t.value = !1)
        },
        pagination: o,
        sorting: s,
      }
    )
  },
  f0 = { class: 'card-title text-secondary font-bold uppercase' },
  d0 = { key: 0 },
  h0 = { class: 'ellipsis max-w-[230px] lg:max-w-[450px]' },
  u0 = { class: 'flex items-center gap-2 ellipsis max-w-[230px]' },
  p0 = { key: 1, class: 'p-4 flex justify-center items-center text-[var(--va-secondary)]' },
  g0 = St({
    __name: 'ProjectTable',
    setup(n) {
      const { t } = Lt(),
        e = vt(() =>
          Of([
            { label: t('dashboard.table.name'), key: 'project_name', sortable: !0 },
            { label: t('dashboard.table.status'), key: 'status', sortable: !0 },
            { label: t('dashboard.table.team'), key: 'team', sortable: !0 },
          ]),
        ),
        i = jt({ page: 1, perPage: 5, total: 0 }),
        { projects: s, isLoading: o, sorting: a } = l0({ pagination: i }),
        { getTeamOptions: r, getUserById: c } = gl()
      return (l, f) => {
        const d = U('VaButton'),
          h = U('VaCardTitle'),
          u = U('VaAvatarGroup'),
          p = U('VaDataTable'),
          g = U('VaCardContent'),
          b = U('VaCard')
        return (
          it(),
          wt(b, null, {
            default: z(() => [
              R(
                h,
                { class: 'flex items-start justify-between' },
                {
                  default: z(() => [
                    A('h1', f0, $(E(t)('dashboard.cards.projectTable')), 1),
                    R(
                      d,
                      { preset: 'primary', size: 'small', to: '/projects' },
                      { default: z(() => [q($(E(t)('dashboard.cards.viewAllProjects')), 1)]), _: 1 },
                    ),
                  ]),
                  _: 1,
                },
              ),
              R(g, null, {
                default: z(() => [
                  E(s).length > 0
                    ? (it(),
                      Jt('div', d0, [
                        R(
                          p,
                          {
                            'sort-by': E(a).sortBy,
                            'onUpdate:sortBy': f[0] || (f[0] = (m) => (E(a).sortBy = m)),
                            'sorting-order': E(a).sortingOrder,
                            'onUpdate:sortingOrder': f[1] || (f[1] = (m) => (E(a).sortingOrder = m)),
                            items: E(s),
                            columns: e.value,
                            loading: E(o),
                          },
                          {
                            'cell(project_name)': z(({ rowData: m }) => [A('div', h0, $(m.project_name), 1)]),
                            'cell(project_owner)': z(({ rowData: m }) => {
                              var x
                              return [
                                A('div', u0, [
                                  E(c)(m.project_owner)
                                    ? (it(),
                                      wt(Ef, { key: 0, user: E(c)(m.project_owner), size: 'small' }, null, 8, ['user']))
                                    : fc('', !0),
                                  q(' ' + $((x = E(c)(m.project_owner)) == null ? void 0 : x.fullname), 1),
                                ]),
                              ]
                            }),
                            'cell(team)': z(({ rowData: m }) => [
                              R(u, { size: 'small', options: E(r)(m.team), max: 2 }, null, 8, ['options']),
                            ]),
                            'cell(status)': z(({ rowData: m }) => [R(t0, { status: m.status }, null, 8, ['status'])]),
                            _: 1,
                          },
                          8,
                          ['sort-by', 'sorting-order', 'items', 'columns', 'loading'],
                        ),
                      ]))
                    : (it(), Jt('div', p0, 'No projects')),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          })
        )
      }
    },
  })
class _e {
  constructor() {
    ;(this._partials = new Float64Array(32)), (this._n = 0)
  }
  add(t) {
    const e = this._partials
    let i = 0
    for (let s = 0; s < this._n && s < 32; s++) {
      const o = e[s],
        a = t + o,
        r = Math.abs(t) < Math.abs(o) ? t - (a - o) : o - (a - t)
      r && (e[i++] = r), (t = a)
    }
    return (e[i] = t), (this._n = i + 1), this
  }
  valueOf() {
    const t = this._partials
    let e = this._n,
      i,
      s,
      o,
      a = 0
    if (e > 0) {
      for (a = t[--e]; e > 0 && ((i = a), (s = t[--e]), (a = i + s), (o = s - (a - i)), !o); );
      e > 0 && ((o < 0 && t[e - 1] < 0) || (o > 0 && t[e - 1] > 0)) && ((s = o * 2), (i = a + s), s == i - a && (a = i))
    }
    return a
  }
}
function* b0(n) {
  for (const t of n) yield* t
}
function bl(n) {
  return Array.from(b0(n))
}
function Je(n, t, e) {
  ;(n = +n), (t = +t), (e = (s = arguments.length) < 2 ? ((t = n), (n = 0), 1) : s < 3 ? 1 : +e)
  for (var i = -1, s = Math.max(0, Math.ceil((t - n) / e)) | 0, o = new Array(s); ++i < s; ) o[i] = n + i * e
  return o
}
var L = 1e-6,
  $o = 1e-12,
  H = Math.PI,
  rt = H / 2,
  Mr = H / 4,
  Rt = H * 2,
  _t = 180 / H,
  Q = H / 180,
  G = Math.abs,
  gn = Math.atan,
  Qt = Math.atan2,
  N = Math.cos,
  Si = Math.ceil,
  ml = Math.exp,
  ns = Math.log,
  Bs = Math.pow,
  B = Math.sin,
  Vt =
    Math.sign ||
    function (n) {
      return n > 0 ? 1 : n < 0 ? -1 : 0
    },
  Mt = Math.sqrt,
  jo = Math.tan
function xl(n) {
  return n > 1 ? 0 : n < -1 ? H : Math.acos(n)
}
function Ht(n) {
  return n > 1 ? rt : n < -1 ? -rt : Math.asin(n)
}
function ht() {}
function is(n, t) {
  n && kr.hasOwnProperty(n.type) && kr[n.type](n, t)
}
var Sr = {
    Feature: function (n, t) {
      is(n.geometry, t)
    },
    FeatureCollection: function (n, t) {
      for (var e = n.features, i = -1, s = e.length; ++i < s; ) is(e[i].geometry, t)
    },
  },
  kr = {
    Sphere: function (n, t) {
      t.sphere()
    },
    Point: function (n, t) {
      ;(n = n.coordinates), t.point(n[0], n[1], n[2])
    },
    MultiPoint: function (n, t) {
      for (var e = n.coordinates, i = -1, s = e.length; ++i < s; ) (n = e[i]), t.point(n[0], n[1], n[2])
    },
    LineString: function (n, t) {
      so(n.coordinates, t, 0)
    },
    MultiLineString: function (n, t) {
      for (var e = n.coordinates, i = -1, s = e.length; ++i < s; ) so(e[i], t, 0)
    },
    Polygon: function (n, t) {
      Cr(n.coordinates, t)
    },
    MultiPolygon: function (n, t) {
      for (var e = n.coordinates, i = -1, s = e.length; ++i < s; ) Cr(e[i], t)
    },
    GeometryCollection: function (n, t) {
      for (var e = n.geometries, i = -1, s = e.length; ++i < s; ) is(e[i], t)
    },
  }
function so(n, t, e) {
  var i = -1,
    s = n.length - e,
    o
  for (t.lineStart(); ++i < s; ) (o = n[i]), t.point(o[0], o[1], o[2])
  t.lineEnd()
}
function Cr(n, t) {
  var e = -1,
    i = n.length
  for (t.polygonStart(); ++e < i; ) so(n[e], t, 1)
  t.polygonEnd()
}
function Ee(n, t) {
  n && Sr.hasOwnProperty(n.type) ? Sr[n.type](n, t) : is(n, t)
}
function oo(n) {
  return [Qt(n[1], n[0]), Ht(n[2])]
}
function dn(n) {
  var t = n[0],
    e = n[1],
    i = N(e)
  return [i * N(t), i * B(t), B(e)]
}
function ki(n, t) {
  return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
}
function ss(n, t) {
  return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
}
function Ns(n, t) {
  ;(n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2])
}
function Ci(n, t) {
  return [n[0] * t, n[1] * t, n[2] * t]
}
function ao(n) {
  var t = Mt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2])
  ;(n[0] /= t), (n[1] /= t), (n[2] /= t)
}
function ro(n, t) {
  function e(i, s) {
    return (i = n(i, s)), t(i[0], i[1])
  }
  return (
    n.invert &&
      t.invert &&
      (e.invert = function (i, s) {
        return (i = t.invert(i, s)), i && n.invert(i[0], i[1])
      }),
    e
  )
}
function co(n, t) {
  return G(n) > H && (n -= Math.round(n / Rt) * Rt), [n, t]
}
co.invert = co
function _l(n, t, e) {
  return (n %= Rt) ? (t || e ? ro(Dr(n), Ar(t, e)) : Dr(n)) : t || e ? Ar(t, e) : co
}
function Pr(n) {
  return function (t, e) {
    return (t += n), G(t) > H && (t -= Math.round(t / Rt) * Rt), [t, e]
  }
}
function Dr(n) {
  var t = Pr(n)
  return (t.invert = Pr(-n)), t
}
function Ar(n, t) {
  var e = N(n),
    i = B(n),
    s = N(t),
    o = B(t)
  function a(r, c) {
    var l = N(c),
      f = N(r) * l,
      d = B(r) * l,
      h = B(c),
      u = h * e + f * i
    return [Qt(d * s - u * o, f * e - h * i), Ht(u * s + d * o)]
  }
  return (
    (a.invert = function (r, c) {
      var l = N(c),
        f = N(r) * l,
        d = B(r) * l,
        h = B(c),
        u = h * s - d * o
      return [Qt(d * s + h * o, f * e + u * i), Ht(u * e - f * i)]
    }),
    a
  )
}
function m0(n) {
  n = _l(n[0] * Q, n[1] * Q, n.length > 2 ? n[2] * Q : 0)
  function t(e) {
    return (e = n(e[0] * Q, e[1] * Q)), (e[0] *= _t), (e[1] *= _t), e
  }
  return (
    (t.invert = function (e) {
      return (e = n.invert(e[0] * Q, e[1] * Q)), (e[0] *= _t), (e[1] *= _t), e
    }),
    t
  )
}
function x0(n, t, e, i, s, o) {
  if (e) {
    var a = N(t),
      r = B(t),
      c = i * e
    s == null
      ? ((s = t + i * Rt), (o = t - c / 2))
      : ((s = Or(a, s)), (o = Or(a, o)), (i > 0 ? s < o : s > o) && (s += i * Rt))
    for (var l, f = s; i > 0 ? f > o : f < o; f -= c) (l = oo([a, -r * N(f), -r * B(f)])), n.point(l[0], l[1])
  }
}
function Or(n, t) {
  ;(t = dn(t)), (t[0] -= n), ao(t)
  var e = xl(-t[1])
  return ((-t[2] < 0 ? -e : e) + Rt - L) % Rt
}
function yl() {
  var n = [],
    t
  return {
    point: function (e, i, s) {
      t.push([e, i, s])
    },
    lineStart: function () {
      n.push((t = []))
    },
    lineEnd: ht,
    rejoin: function () {
      n.length > 1 && n.push(n.pop().concat(n.shift()))
    },
    result: function () {
      var e = n
      return (n = []), (t = null), e
    },
  }
}
function ji(n, t) {
  return G(n[0] - t[0]) < L && G(n[1] - t[1]) < L
}
function Pi(n, t, e, i) {
  ;(this.x = n), (this.z = t), (this.o = e), (this.e = i), (this.v = !1), (this.n = this.p = null)
}
function vl(n, t, e, i, s) {
  var o = [],
    a = [],
    r,
    c
  if (
    (n.forEach(function (p) {
      if (!((g = p.length - 1) <= 0)) {
        var g,
          b = p[0],
          m = p[g],
          x
        if (ji(b, m)) {
          if (!b[2] && !m[2]) {
            for (s.lineStart(), r = 0; r < g; ++r) s.point((b = p[r])[0], b[1])
            s.lineEnd()
            return
          }
          m[0] += 2 * L
        }
        o.push((x = new Pi(b, p, null, !0))),
          a.push((x.o = new Pi(b, null, x, !1))),
          o.push((x = new Pi(m, p, null, !1))),
          a.push((x.o = new Pi(m, null, x, !0)))
      }
    }),
    !!o.length)
  ) {
    for (a.sort(t), Tr(o), Tr(a), r = 0, c = a.length; r < c; ++r) a[r].e = e = !e
    for (var l = o[0], f, d; ; ) {
      for (var h = l, u = !0; h.v; ) if ((h = h.n) === l) return
      ;(f = h.z), s.lineStart()
      do {
        if (((h.v = h.o.v = !0), h.e)) {
          if (u) for (r = 0, c = f.length; r < c; ++r) s.point((d = f[r])[0], d[1])
          else i(h.x, h.n.x, 1, s)
          h = h.n
        } else {
          if (u) for (f = h.p.z, r = f.length - 1; r >= 0; --r) s.point((d = f[r])[0], d[1])
          else i(h.x, h.p.x, -1, s)
          h = h.p
        }
        ;(h = h.o), (f = h.z), (u = !u)
      } while (!h.v)
      s.lineEnd()
    }
  }
}
function Tr(n) {
  if ((t = n.length)) {
    for (var t, e = 0, i = n[0], s; ++e < t; ) (i.n = s = n[e]), (s.p = i), (i = s)
    ;(i.n = s = n[0]), (s.p = i)
  }
}
function Vs(n) {
  return G(n[0]) <= H ? n[0] : Vt(n[0]) * (((G(n[0]) + H) % Rt) - H)
}
function wl(n, t) {
  var e = Vs(t),
    i = t[1],
    s = B(i),
    o = [B(e), -N(e), 0],
    a = 0,
    r = 0,
    c = new _e()
  s === 1 ? (i = rt + L) : s === -1 && (i = -rt - L)
  for (var l = 0, f = n.length; l < f; ++l)
    if ((h = (d = n[l]).length))
      for (
        var d, h, u = d[h - 1], p = Vs(u), g = u[1] / 2 + Mr, b = B(g), m = N(g), x = 0;
        x < h;
        ++x, p = v, b = M, m = k, u = _
      ) {
        var _ = d[x],
          v = Vs(_),
          y = _[1] / 2 + Mr,
          M = B(y),
          k = N(y),
          S = v - p,
          C = S >= 0 ? 1 : -1,
          O = C * S,
          P = O > H,
          I = b * M
        if ((c.add(Qt(I * C * B(O), m * k + I * N(O))), (a += P ? S + C * Rt : S), P ^ (p >= e) ^ (v >= e))) {
          var W = ss(dn(u), dn(_))
          ao(W)
          var V = ss(o, W)
          ao(V)
          var w = (P ^ (S >= 0) ? -1 : 1) * Ht(V[2])
          ;(i > w || (i === w && (W[0] || W[1]))) && (r += P ^ (S >= 0) ? 1 : -1)
        }
      }
  return (a < -L || (a < L && c < -$o)) ^ (r & 1)
}
function Ml(n, t, e, i) {
  return function (s) {
    var o = t(s),
      a = yl(),
      r = t(a),
      c = !1,
      l,
      f,
      d,
      h = {
        point: u,
        lineStart: g,
        lineEnd: b,
        polygonStart: function () {
          ;(h.point = m), (h.lineStart = x), (h.lineEnd = _), (f = []), (l = [])
        },
        polygonEnd: function () {
          ;(h.point = u), (h.lineStart = g), (h.lineEnd = b), (f = bl(f))
          var v = wl(l, i)
          f.length
            ? (c || (s.polygonStart(), (c = !0)), vl(f, y0, v, e, s))
            : v && (c || (s.polygonStart(), (c = !0)), s.lineStart(), e(null, null, 1, s), s.lineEnd()),
            c && (s.polygonEnd(), (c = !1)),
            (f = l = null)
        },
        sphere: function () {
          s.polygonStart(), s.lineStart(), e(null, null, 1, s), s.lineEnd(), s.polygonEnd()
        },
      }
    function u(v, y) {
      n(v, y) && s.point(v, y)
    }
    function p(v, y) {
      o.point(v, y)
    }
    function g() {
      ;(h.point = p), o.lineStart()
    }
    function b() {
      ;(h.point = u), o.lineEnd()
    }
    function m(v, y) {
      d.push([v, y]), r.point(v, y)
    }
    function x() {
      r.lineStart(), (d = [])
    }
    function _() {
      m(d[0][0], d[0][1]), r.lineEnd()
      var v = r.clean(),
        y = a.result(),
        M,
        k = y.length,
        S,
        C,
        O
      if ((d.pop(), l.push(d), (d = null), !!k)) {
        if (v & 1) {
          if (((C = y[0]), (S = C.length - 1) > 0)) {
            for (c || (s.polygonStart(), (c = !0)), s.lineStart(), M = 0; M < S; ++M) s.point((O = C[M])[0], O[1])
            s.lineEnd()
          }
          return
        }
        k > 1 && v & 2 && y.push(y.pop().concat(y.shift())), f.push(y.filter(_0))
      }
    }
    return h
  }
}
function _0(n) {
  return n.length > 1
}
function y0(n, t) {
  return ((n = n.x)[0] < 0 ? n[1] - rt - L : rt - n[1]) - ((t = t.x)[0] < 0 ? t[1] - rt - L : rt - t[1])
}
const Er = Ml(
  function () {
    return !0
  },
  v0,
  M0,
  [-H, -rt],
)
function v0(n) {
  var t = NaN,
    e = NaN,
    i = NaN,
    s
  return {
    lineStart: function () {
      n.lineStart(), (s = 1)
    },
    point: function (o, a) {
      var r = o > 0 ? H : -H,
        c = G(o - t)
      G(c - H) < L
        ? (n.point(t, (e = (e + a) / 2 > 0 ? rt : -rt)),
          n.point(i, e),
          n.lineEnd(),
          n.lineStart(),
          n.point(r, e),
          n.point(o, e),
          (s = 0))
        : i !== r &&
          c >= H &&
          (G(t - i) < L && (t -= i * L),
          G(o - r) < L && (o -= r * L),
          (e = w0(t, e, o, a)),
          n.point(i, e),
          n.lineEnd(),
          n.lineStart(),
          n.point(r, e),
          (s = 0)),
        n.point((t = o), (e = a)),
        (i = r)
    },
    lineEnd: function () {
      n.lineEnd(), (t = e = NaN)
    },
    clean: function () {
      return 2 - s
    },
  }
}
function w0(n, t, e, i) {
  var s,
    o,
    a = B(n - e)
  return G(a) > L ? gn((B(t) * (o = N(i)) * B(e) - B(i) * (s = N(t)) * B(n)) / (s * o * a)) : (t + i) / 2
}
function M0(n, t, e, i) {
  var s
  if (n == null)
    (s = e * rt),
      i.point(-H, s),
      i.point(0, s),
      i.point(H, s),
      i.point(H, 0),
      i.point(H, -s),
      i.point(0, -s),
      i.point(-H, -s),
      i.point(-H, 0),
      i.point(-H, s)
  else if (G(n[0] - t[0]) > L) {
    var o = n[0] < t[0] ? H : -H
    ;(s = (e * o) / 2), i.point(-o, s), i.point(0, s), i.point(o, s)
  } else i.point(t[0], t[1])
}
function S0(n) {
  var t = N(n),
    e = 6 * Q,
    i = t > 0,
    s = G(t) > L
  function o(f, d, h, u) {
    x0(u, n, e, h, f, d)
  }
  function a(f, d) {
    return N(f) * N(d) > t
  }
  function r(f) {
    var d, h, u, p, g
    return {
      lineStart: function () {
        ;(p = u = !1), (g = 1)
      },
      point: function (b, m) {
        var x = [b, m],
          _,
          v = a(b, m),
          y = i ? (v ? 0 : l(b, m)) : v ? l(b + (b < 0 ? H : -H), m) : 0
        if (
          (!d && (p = u = v) && f.lineStart(),
          v !== u && ((_ = c(d, x)), (!_ || ji(d, _) || ji(x, _)) && (x[2] = 1)),
          v !== u)
        )
          (g = 0),
            v
              ? (f.lineStart(), (_ = c(x, d)), f.point(_[0], _[1]))
              : ((_ = c(d, x)), f.point(_[0], _[1], 2), f.lineEnd()),
            (d = _)
        else if (s && d && i ^ v) {
          var M
          !(y & h) &&
            (M = c(x, d, !0)) &&
            ((g = 0),
            i
              ? (f.lineStart(), f.point(M[0][0], M[0][1]), f.point(M[1][0], M[1][1]), f.lineEnd())
              : (f.point(M[1][0], M[1][1]), f.lineEnd(), f.lineStart(), f.point(M[0][0], M[0][1], 3)))
        }
        v && (!d || !ji(d, x)) && f.point(x[0], x[1]), (d = x), (u = v), (h = y)
      },
      lineEnd: function () {
        u && f.lineEnd(), (d = null)
      },
      clean: function () {
        return g | ((p && u) << 1)
      },
    }
  }
  function c(f, d, h) {
    var u = dn(f),
      p = dn(d),
      g = [1, 0, 0],
      b = ss(u, p),
      m = ki(b, b),
      x = b[0],
      _ = m - x * x
    if (!_) return !h && f
    var v = (t * m) / _,
      y = (-t * x) / _,
      M = ss(g, b),
      k = Ci(g, v),
      S = Ci(b, y)
    Ns(k, S)
    var C = M,
      O = ki(k, C),
      P = ki(C, C),
      I = O * O - P * (ki(k, k) - 1)
    if (!(I < 0)) {
      var W = Mt(I),
        V = Ci(C, (-O - W) / P)
      if ((Ns(V, k), (V = oo(V)), !h)) return V
      var w = f[0],
        T = d[0],
        j = f[1],
        et = d[1],
        Z
      T < w && ((Z = w), (w = T), (T = Z))
      var It = T - w,
        kt = G(It - H) < L,
        Ct = kt || It < L
      if (
        (!kt && et < j && ((Z = j), (j = et), (et = Z)),
        Ct
          ? kt
            ? (j + et > 0) ^ (V[1] < (G(V[0] - w) < L ? j : et))
            : j <= V[1] && V[1] <= et
          : (It > H) ^ (w <= V[0] && V[0] <= T))
      ) {
        var xt = Ci(C, (-O + W) / P)
        return Ns(xt, k), [V, oo(xt)]
      }
    }
  }
  function l(f, d) {
    var h = i ? n : H - n,
      u = 0
    return f < -h ? (u |= 1) : f > h && (u |= 2), d < -h ? (u |= 4) : d > h && (u |= 8), u
  }
  return Ml(a, r, o, i ? [0, -n] : [-H, n - H])
}
function k0(n, t, e, i, s, o) {
  var a = n[0],
    r = n[1],
    c = t[0],
    l = t[1],
    f = 0,
    d = 1,
    h = c - a,
    u = l - r,
    p
  if (((p = e - a), !(!h && p > 0))) {
    if (((p /= h), h < 0)) {
      if (p < f) return
      p < d && (d = p)
    } else if (h > 0) {
      if (p > d) return
      p > f && (f = p)
    }
    if (((p = s - a), !(!h && p < 0))) {
      if (((p /= h), h < 0)) {
        if (p > d) return
        p > f && (f = p)
      } else if (h > 0) {
        if (p < f) return
        p < d && (d = p)
      }
      if (((p = i - r), !(!u && p > 0))) {
        if (((p /= u), u < 0)) {
          if (p < f) return
          p < d && (d = p)
        } else if (u > 0) {
          if (p > d) return
          p > f && (f = p)
        }
        if (((p = o - r), !(!u && p < 0))) {
          if (((p /= u), u < 0)) {
            if (p > d) return
            p > f && (f = p)
          } else if (u > 0) {
            if (p < f) return
            p < d && (d = p)
          }
          return (
            f > 0 && ((n[0] = a + f * h), (n[1] = r + f * u)), d < 1 && ((t[0] = a + d * h), (t[1] = r + d * u)), !0
          )
        }
      }
    }
  }
}
var Dn = 1e9,
  Di = -Dn
function C0(n, t, e, i) {
  function s(l, f) {
    return n <= l && l <= e && t <= f && f <= i
  }
  function o(l, f, d, h) {
    var u = 0,
      p = 0
    if (l == null || (u = a(l, d)) !== (p = a(f, d)) || (c(l, f) < 0) ^ (d > 0))
      do h.point(u === 0 || u === 3 ? n : e, u > 1 ? i : t)
      while ((u = (u + d + 4) % 4) !== p)
    else h.point(f[0], f[1])
  }
  function a(l, f) {
    return G(l[0] - n) < L
      ? f > 0
        ? 0
        : 3
      : G(l[0] - e) < L
        ? f > 0
          ? 2
          : 1
        : G(l[1] - t) < L
          ? f > 0
            ? 1
            : 0
          : f > 0
            ? 3
            : 2
  }
  function r(l, f) {
    return c(l.x, f.x)
  }
  function c(l, f) {
    var d = a(l, 1),
      h = a(f, 1)
    return d !== h ? d - h : d === 0 ? f[1] - l[1] : d === 1 ? l[0] - f[0] : d === 2 ? l[1] - f[1] : f[0] - l[0]
  }
  return function (l) {
    var f = l,
      d = yl(),
      h,
      u,
      p,
      g,
      b,
      m,
      x,
      _,
      v,
      y,
      M,
      k = { point: S, lineStart: I, lineEnd: W, polygonStart: O, polygonEnd: P }
    function S(w, T) {
      s(w, T) && f.point(w, T)
    }
    function C() {
      for (var w = 0, T = 0, j = u.length; T < j; ++T)
        for (var et = u[T], Z = 1, It = et.length, kt = et[0], Ct, xt, zt = kt[0], Ft = kt[1]; Z < It; ++Z)
          (Ct = zt),
            (xt = Ft),
            (kt = et[Z]),
            (zt = kt[0]),
            (Ft = kt[1]),
            xt <= i
              ? Ft > i && (zt - Ct) * (i - xt) > (Ft - xt) * (n - Ct) && ++w
              : Ft <= i && (zt - Ct) * (i - xt) < (Ft - xt) * (n - Ct) && --w
      return w
    }
    function O() {
      ;(f = d), (h = []), (u = []), (M = !0)
    }
    function P() {
      var w = C(),
        T = M && w,
        j = (h = bl(h)).length
      ;(T || j) &&
        (l.polygonStart(),
        T && (l.lineStart(), o(null, null, 1, l), l.lineEnd()),
        j && vl(h, r, w, o, l),
        l.polygonEnd()),
        (f = l),
        (h = u = p = null)
    }
    function I() {
      ;(k.point = V), u && u.push((p = [])), (y = !0), (v = !1), (x = _ = NaN)
    }
    function W() {
      h && (V(g, b), m && v && d.rejoin(), h.push(d.result())), (k.point = S), v && f.lineEnd()
    }
    function V(w, T) {
      var j = s(w, T)
      if ((u && p.push([w, T]), y)) (g = w), (b = T), (m = j), (y = !1), j && (f.lineStart(), f.point(w, T))
      else if (j && v) f.point(w, T)
      else {
        var et = [(x = Math.max(Di, Math.min(Dn, x))), (_ = Math.max(Di, Math.min(Dn, _)))],
          Z = [(w = Math.max(Di, Math.min(Dn, w))), (T = Math.max(Di, Math.min(Dn, T)))]
        k0(et, Z, n, t, e, i)
          ? (v || (f.lineStart(), f.point(et[0], et[1])), f.point(Z[0], Z[1]), j || f.lineEnd(), (M = !1))
          : j && (f.lineStart(), f.point(w, T), (M = !1))
      }
      ;(x = w), (_ = T), (v = j)
    }
    return k
  }
}
var lo,
  fo,
  Wi,
  Hi,
  hn = { sphere: ht, point: ht, lineStart: P0, lineEnd: ht, polygonStart: ht, polygonEnd: ht }
function P0() {
  ;(hn.point = A0), (hn.lineEnd = D0)
}
function D0() {
  hn.point = hn.lineEnd = ht
}
function A0(n, t) {
  ;(n *= Q), (t *= Q), (fo = n), (Wi = B(t)), (Hi = N(t)), (hn.point = O0)
}
function O0(n, t) {
  ;(n *= Q), (t *= Q)
  var e = B(t),
    i = N(t),
    s = G(n - fo),
    o = N(s),
    a = B(s),
    r = i * a,
    c = Hi * e - Wi * i * o,
    l = Wi * e + Hi * i * o
  lo.add(Qt(Mt(r * r + c * c), l)), (fo = n), (Wi = e), (Hi = i)
}
function T0(n) {
  return (lo = new _e()), Ee(n, hn), +lo
}
var ho = [null, null],
  E0 = { type: 'LineString', coordinates: ho }
function uo(n, t) {
  return (ho[0] = n), (ho[1] = t), T0(E0)
}
var Rr = {
    Feature: function (n, t) {
      return os(n.geometry, t)
    },
    FeatureCollection: function (n, t) {
      for (var e = n.features, i = -1, s = e.length; ++i < s; ) if (os(e[i].geometry, t)) return !0
      return !1
    },
  },
  Lr = {
    Sphere: function () {
      return !0
    },
    Point: function (n, t) {
      return Ir(n.coordinates, t)
    },
    MultiPoint: function (n, t) {
      for (var e = n.coordinates, i = -1, s = e.length; ++i < s; ) if (Ir(e[i], t)) return !0
      return !1
    },
    LineString: function (n, t) {
      return zr(n.coordinates, t)
    },
    MultiLineString: function (n, t) {
      for (var e = n.coordinates, i = -1, s = e.length; ++i < s; ) if (zr(e[i], t)) return !0
      return !1
    },
    Polygon: function (n, t) {
      return Fr(n.coordinates, t)
    },
    MultiPolygon: function (n, t) {
      for (var e = n.coordinates, i = -1, s = e.length; ++i < s; ) if (Fr(e[i], t)) return !0
      return !1
    },
    GeometryCollection: function (n, t) {
      for (var e = n.geometries, i = -1, s = e.length; ++i < s; ) if (os(e[i], t)) return !0
      return !1
    },
  }
function os(n, t) {
  return n && Lr.hasOwnProperty(n.type) ? Lr[n.type](n, t) : !1
}
function Ir(n, t) {
  return uo(n, t) === 0
}
function zr(n, t) {
  for (var e, i, s, o = 0, a = n.length; o < a; o++) {
    if (
      ((i = uo(n[o], t)),
      i === 0 ||
        (o > 0 &&
          ((s = uo(n[o], n[o - 1])),
          s > 0 && e <= s && i <= s && (e + i - s) * (1 - Math.pow((e - i) / s, 2)) < $o * s)))
    )
      return !0
    e = i
  }
  return !1
}
function Fr(n, t) {
  return !!wl(n.map(R0), Sl(t))
}
function R0(n) {
  return (n = n.map(Sl)), n.pop(), n
}
function Sl(n) {
  return [n[0] * Q, n[1] * Q]
}
function L0(n, t) {
  return (n && Rr.hasOwnProperty(n.type) ? Rr[n.type] : os)(n, t)
}
function Br(n, t, e) {
  var i = Je(n, t - L, e).concat(t)
  return function (s) {
    return i.map(function (o) {
      return [s, o]
    })
  }
}
function Nr(n, t, e) {
  var i = Je(n, t - L, e).concat(t)
  return function (s) {
    return i.map(function (o) {
      return [o, s]
    })
  }
}
function kl() {
  var n,
    t,
    e,
    i,
    s,
    o,
    a,
    r,
    c = 10,
    l = c,
    f = 90,
    d = 360,
    h,
    u,
    p,
    g,
    b = 2.5
  function m() {
    return { type: 'MultiLineString', coordinates: x() }
  }
  function x() {
    return Je(Si(i / f) * f, e, f)
      .map(p)
      .concat(Je(Si(r / d) * d, a, d).map(g))
      .concat(
        Je(Si(t / c) * c, n, c)
          .filter(function (_) {
            return G(_ % f) > L
          })
          .map(h),
      )
      .concat(
        Je(Si(o / l) * l, s, l)
          .filter(function (_) {
            return G(_ % d) > L
          })
          .map(u),
      )
  }
  return (
    (m.lines = function () {
      return x().map(function (_) {
        return { type: 'LineString', coordinates: _ }
      })
    }),
    (m.outline = function () {
      return {
        type: 'Polygon',
        coordinates: [p(i).concat(g(a).slice(1), p(e).reverse().slice(1), g(r).reverse().slice(1))],
      }
    }),
    (m.extent = function (_) {
      return arguments.length ? m.extentMajor(_).extentMinor(_) : m.extentMinor()
    }),
    (m.extentMajor = function (_) {
      return arguments.length
        ? ((i = +_[0][0]),
          (e = +_[1][0]),
          (r = +_[0][1]),
          (a = +_[1][1]),
          i > e && ((_ = i), (i = e), (e = _)),
          r > a && ((_ = r), (r = a), (a = _)),
          m.precision(b))
        : [
            [i, r],
            [e, a],
          ]
    }),
    (m.extentMinor = function (_) {
      return arguments.length
        ? ((t = +_[0][0]),
          (n = +_[1][0]),
          (o = +_[0][1]),
          (s = +_[1][1]),
          t > n && ((_ = t), (t = n), (n = _)),
          o > s && ((_ = o), (o = s), (s = _)),
          m.precision(b))
        : [
            [t, o],
            [n, s],
          ]
    }),
    (m.step = function (_) {
      return arguments.length ? m.stepMajor(_).stepMinor(_) : m.stepMinor()
    }),
    (m.stepMajor = function (_) {
      return arguments.length ? ((f = +_[0]), (d = +_[1]), m) : [f, d]
    }),
    (m.stepMinor = function (_) {
      return arguments.length ? ((c = +_[0]), (l = +_[1]), m) : [c, l]
    }),
    (m.precision = function (_) {
      return arguments.length
        ? ((b = +_), (h = Br(o, s, 90)), (u = Nr(t, n, b)), (p = Br(r, a, 90)), (g = Nr(i, e, b)), m)
        : b
    }),
    m
      .extentMajor([
        [-180, -90 + L],
        [180, 90 - L],
      ])
      .extentMinor([
        [-180, -80 - L],
        [180, 80 + L],
      ])
  )
}
function I0() {
  return kl()()
}
const po = (n) => n
var $s = new _e(),
  go = new _e(),
  Cl,
  Pl,
  bo,
  mo,
  oe = {
    point: ht,
    lineStart: ht,
    lineEnd: ht,
    polygonStart: function () {
      ;(oe.lineStart = z0), (oe.lineEnd = B0)
    },
    polygonEnd: function () {
      ;(oe.lineStart = oe.lineEnd = oe.point = ht), $s.add(G(go)), (go = new _e())
    },
    result: function () {
      var n = $s / 2
      return ($s = new _e()), n
    },
  }
function z0() {
  oe.point = F0
}
function F0(n, t) {
  ;(oe.point = Dl), (Cl = bo = n), (Pl = mo = t)
}
function Dl(n, t) {
  go.add(mo * n - bo * t), (bo = n), (mo = t)
}
function B0() {
  Dl(Cl, Pl)
}
var un = 1 / 0,
  as = un,
  Jn = -un,
  rs = Jn,
  cs = {
    point: N0,
    lineStart: ht,
    lineEnd: ht,
    polygonStart: ht,
    polygonEnd: ht,
    result: function () {
      var n = [
        [un, as],
        [Jn, rs],
      ]
      return (Jn = rs = -(as = un = 1 / 0)), n
    },
  }
function N0(n, t) {
  n < un && (un = n), n > Jn && (Jn = n), t < as && (as = t), t > rs && (rs = t)
}
var xo = 0,
  _o = 0,
  An = 0,
  ls = 0,
  fs = 0,
  Qe = 0,
  yo = 0,
  vo = 0,
  On = 0,
  Al,
  Ol,
  Gt,
  qt,
  Nt = {
    point: We,
    lineStart: Vr,
    lineEnd: $r,
    polygonStart: function () {
      ;(Nt.lineStart = j0), (Nt.lineEnd = W0)
    },
    polygonEnd: function () {
      ;(Nt.point = We), (Nt.lineStart = Vr), (Nt.lineEnd = $r)
    },
    result: function () {
      var n = On ? [yo / On, vo / On] : Qe ? [ls / Qe, fs / Qe] : An ? [xo / An, _o / An] : [NaN, NaN]
      return (xo = _o = An = ls = fs = Qe = yo = vo = On = 0), n
    },
  }
function We(n, t) {
  ;(xo += n), (_o += t), ++An
}
function Vr() {
  Nt.point = V0
}
function V0(n, t) {
  ;(Nt.point = $0), We((Gt = n), (qt = t))
}
function $0(n, t) {
  var e = n - Gt,
    i = t - qt,
    s = Mt(e * e + i * i)
  ;(ls += (s * (Gt + n)) / 2), (fs += (s * (qt + t)) / 2), (Qe += s), We((Gt = n), (qt = t))
}
function $r() {
  Nt.point = We
}
function j0() {
  Nt.point = H0
}
function W0() {
  Tl(Al, Ol)
}
function H0(n, t) {
  ;(Nt.point = Tl), We((Al = Gt = n), (Ol = qt = t))
}
function Tl(n, t) {
  var e = n - Gt,
    i = t - qt,
    s = Mt(e * e + i * i)
  ;(ls += (s * (Gt + n)) / 2),
    (fs += (s * (qt + t)) / 2),
    (Qe += s),
    (s = qt * n - Gt * t),
    (yo += s * (Gt + n)),
    (vo += s * (qt + t)),
    (On += s * 3),
    We((Gt = n), (qt = t))
}
function El(n) {
  this._context = n
}
El.prototype = {
  _radius: 4.5,
  pointRadius: function (n) {
    return (this._radius = n), this
  },
  polygonStart: function () {
    this._line = 0
  },
  polygonEnd: function () {
    this._line = NaN
  },
  lineStart: function () {
    this._point = 0
  },
  lineEnd: function () {
    this._line === 0 && this._context.closePath(), (this._point = NaN)
  },
  point: function (n, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(n, t), (this._point = 1)
        break
      }
      case 1: {
        this._context.lineTo(n, t)
        break
      }
      default: {
        this._context.moveTo(n + this._radius, t), this._context.arc(n, t, this._radius, 0, Rt)
        break
      }
    }
  },
  result: ht,
}
var wo = new _e(),
  js,
  Rl,
  Ll,
  Tn,
  En,
  Qn = {
    point: ht,
    lineStart: function () {
      Qn.point = Y0
    },
    lineEnd: function () {
      js && Il(Rl, Ll), (Qn.point = ht)
    },
    polygonStart: function () {
      js = !0
    },
    polygonEnd: function () {
      js = null
    },
    result: function () {
      var n = +wo
      return (wo = new _e()), n
    },
  }
function Y0(n, t) {
  ;(Qn.point = Il), (Rl = Tn = n), (Ll = En = t)
}
function Il(n, t) {
  ;(Tn -= n), (En -= t), wo.add(Mt(Tn * Tn + En * En)), (Tn = n), (En = t)
}
let jr, ds, Wr, Hr
class Yr {
  constructor(t) {
    ;(this._append = t == null ? zl : U0(t)), (this._radius = 4.5), (this._ = '')
  }
  pointRadius(t) {
    return (this._radius = +t), this
  }
  polygonStart() {
    this._line = 0
  }
  polygonEnd() {
    this._line = NaN
  }
  lineStart() {
    this._point = 0
  }
  lineEnd() {
    this._line === 0 && (this._ += 'Z'), (this._point = NaN)
  }
  point(t, e) {
    switch (this._point) {
      case 0: {
        this._append`M${t},${e}`, (this._point = 1)
        break
      }
      case 1: {
        this._append`L${t},${e}`
        break
      }
      default: {
        if ((this._append`M${t},${e}`, this._radius !== Wr || this._append !== ds)) {
          const i = this._radius,
            s = this._
          ;(this._ = ''),
            this._append`m0,${i}a${i},${i} 0 1,1 0,${-2 * i}a${i},${i} 0 1,1 0,${2 * i}z`,
            (Wr = i),
            (ds = this._append),
            (Hr = this._),
            (this._ = s)
        }
        this._ += Hr
        break
      }
    }
  }
  result() {
    const t = this._
    return (this._ = ''), t.length ? t : null
  }
}
function zl(n) {
  let t = 1
  this._ += n[0]
  for (const e = n.length; t < e; ++t) this._ += arguments[t] + n[t]
}
function U0(n) {
  const t = Math.floor(n)
  if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`)
  if (t > 15) return zl
  if (t !== jr) {
    const e = 10 ** t
    ;(jr = t),
      (ds = function (s) {
        let o = 1
        this._ += s[0]
        for (const a = s.length; o < a; ++o) this._ += Math.round(arguments[o] * e) / e + s[o]
      })
  }
  return ds
}
function Ur(n, t) {
  let e = 3,
    i = 4.5,
    s,
    o
  function a(r) {
    return r && (typeof i == 'function' && o.pointRadius(+i.apply(this, arguments)), Ee(r, s(o))), o.result()
  }
  return (
    (a.area = function (r) {
      return Ee(r, s(oe)), oe.result()
    }),
    (a.measure = function (r) {
      return Ee(r, s(Qn)), Qn.result()
    }),
    (a.bounds = function (r) {
      return Ee(r, s(cs)), cs.result()
    }),
    (a.centroid = function (r) {
      return Ee(r, s(Nt)), Nt.result()
    }),
    (a.projection = function (r) {
      return arguments.length ? ((s = r == null ? ((n = null), po) : (n = r).stream), a) : n
    }),
    (a.context = function (r) {
      return arguments.length
        ? ((o = r == null ? ((t = null), new Yr(e)) : new El((t = r))), typeof i != 'function' && o.pointRadius(i), a)
        : t
    }),
    (a.pointRadius = function (r) {
      return arguments.length ? ((i = typeof r == 'function' ? r : (o.pointRadius(+r), +r)), a) : i
    }),
    (a.digits = function (r) {
      if (!arguments.length) return e
      if (r == null) e = null
      else {
        const c = Math.floor(r)
        if (!(c >= 0)) throw new RangeError(`invalid digits: ${r}`)
        e = c
      }
      return t === null && (o = new Yr(e)), a
    }),
    a.projection(n).digits(e).context(t)
  )
}
function Wo(n) {
  return function (t) {
    var e = new Mo()
    for (var i in n) e[i] = n[i]
    return (e.stream = t), e
  }
}
function Mo() {}
Mo.prototype = {
  constructor: Mo,
  point: function (n, t) {
    this.stream.point(n, t)
  },
  sphere: function () {
    this.stream.sphere()
  },
  lineStart: function () {
    this.stream.lineStart()
  },
  lineEnd: function () {
    this.stream.lineEnd()
  },
  polygonStart: function () {
    this.stream.polygonStart()
  },
  polygonEnd: function () {
    this.stream.polygonEnd()
  },
}
function Ho(n, t, e) {
  var i = n.clipExtent && n.clipExtent()
  return (
    n.scale(150).translate([0, 0]),
    i != null && n.clipExtent(null),
    Ee(e, n.stream(cs)),
    t(cs.result()),
    i != null && n.clipExtent(i),
    n
  )
}
function Yo(n, t, e) {
  return Ho(
    n,
    function (i) {
      var s = t[1][0] - t[0][0],
        o = t[1][1] - t[0][1],
        a = Math.min(s / (i[1][0] - i[0][0]), o / (i[1][1] - i[0][1])),
        r = +t[0][0] + (s - a * (i[1][0] + i[0][0])) / 2,
        c = +t[0][1] + (o - a * (i[1][1] + i[0][1])) / 2
      n.scale(150 * a).translate([r, c])
    },
    e,
  )
}
function Fl(n, t, e) {
  return Yo(n, [[0, 0], t], e)
}
function Bl(n, t, e) {
  return Ho(
    n,
    function (i) {
      var s = +t,
        o = s / (i[1][0] - i[0][0]),
        a = (s - o * (i[1][0] + i[0][0])) / 2,
        r = -o * i[0][1]
      n.scale(150 * o).translate([a, r])
    },
    e,
  )
}
function Nl(n, t, e) {
  return Ho(
    n,
    function (i) {
      var s = +t,
        o = s / (i[1][1] - i[0][1]),
        a = -o * i[0][0],
        r = (s - o * (i[1][1] + i[0][1])) / 2
      n.scale(150 * o).translate([a, r])
    },
    e,
  )
}
var Xr = 16,
  X0 = N(30 * Q)
function Gr(n, t) {
  return +t ? q0(n, t) : G0(n)
}
function G0(n) {
  return Wo({
    point: function (t, e) {
      ;(t = n(t, e)), this.stream.point(t[0], t[1])
    },
  })
}
function q0(n, t) {
  function e(i, s, o, a, r, c, l, f, d, h, u, p, g, b) {
    var m = l - i,
      x = f - s,
      _ = m * m + x * x
    if (_ > 4 * t && g--) {
      var v = a + h,
        y = r + u,
        M = c + p,
        k = Mt(v * v + y * y + M * M),
        S = Ht((M /= k)),
        C = G(G(M) - 1) < L || G(o - d) < L ? (o + d) / 2 : Qt(y, v),
        O = n(C, S),
        P = O[0],
        I = O[1],
        W = P - i,
        V = I - s,
        w = x * W - m * V
      ;((w * w) / _ > t || G((m * W + x * V) / _ - 0.5) > 0.3 || a * h + r * u + c * p < X0) &&
        (e(i, s, o, a, r, c, P, I, C, (v /= k), (y /= k), M, g, b),
        b.point(P, I),
        e(P, I, C, v, y, M, l, f, d, h, u, p, g, b))
    }
  }
  return function (i) {
    var s,
      o,
      a,
      r,
      c,
      l,
      f,
      d,
      h,
      u,
      p,
      g,
      b = {
        point: m,
        lineStart: x,
        lineEnd: v,
        polygonStart: function () {
          i.polygonStart(), (b.lineStart = y)
        },
        polygonEnd: function () {
          i.polygonEnd(), (b.lineStart = x)
        },
      }
    function m(S, C) {
      ;(S = n(S, C)), i.point(S[0], S[1])
    }
    function x() {
      ;(d = NaN), (b.point = _), i.lineStart()
    }
    function _(S, C) {
      var O = dn([S, C]),
        P = n(S, C)
      e(d, h, f, u, p, g, (d = P[0]), (h = P[1]), (f = S), (u = O[0]), (p = O[1]), (g = O[2]), Xr, i), i.point(d, h)
    }
    function v() {
      ;(b.point = m), i.lineEnd()
    }
    function y() {
      x(), (b.point = M), (b.lineEnd = k)
    }
    function M(S, C) {
      _((s = S), C), (o = d), (a = h), (r = u), (c = p), (l = g), (b.point = _)
    }
    function k() {
      e(d, h, f, u, p, g, o, a, s, r, c, l, Xr, i), (b.lineEnd = v), v()
    }
    return b
  }
}
var K0 = Wo({
  point: function (n, t) {
    this.stream.point(n * Q, t * Q)
  },
})
function Z0(n) {
  return Wo({
    point: function (t, e) {
      var i = n(t, e)
      return this.stream.point(i[0], i[1])
    },
  })
}
function J0(n, t, e, i, s) {
  function o(a, r) {
    return (a *= i), (r *= s), [t + n * a, e - n * r]
  }
  return (
    (o.invert = function (a, r) {
      return [((a - t) / n) * i, ((e - r) / n) * s]
    }),
    o
  )
}
function qr(n, t, e, i, s, o) {
  if (!o) return J0(n, t, e, i, s)
  var a = N(o),
    r = B(o),
    c = a * n,
    l = r * n,
    f = a / n,
    d = r / n,
    h = (r * e - a * t) / n,
    u = (r * t + a * e) / n
  function p(g, b) {
    return (g *= i), (b *= s), [c * g - l * b + t, e - l * g - c * b]
  }
  return (
    (p.invert = function (g, b) {
      return [i * (f * g - d * b + h), s * (u - d * g - f * b)]
    }),
    p
  )
}
function de(n) {
  return Vl(function () {
    return n
  })()
}
function Vl(n) {
  var t,
    e = 150,
    i = 480,
    s = 250,
    o = 0,
    a = 0,
    r = 0,
    c = 0,
    l = 0,
    f,
    d = 0,
    h = 1,
    u = 1,
    p = null,
    g = Er,
    b = null,
    m,
    x,
    _,
    v = po,
    y = 0.5,
    M,
    k,
    S,
    C,
    O
  function P(w) {
    return S(w[0] * Q, w[1] * Q)
  }
  function I(w) {
    return (w = S.invert(w[0], w[1])), w && [w[0] * _t, w[1] * _t]
  }
  ;(P.stream = function (w) {
    return C && O === w ? C : (C = K0(Z0(f)(g(M(v((O = w)))))))
  }),
    (P.preclip = function (w) {
      return arguments.length ? ((g = w), (p = void 0), V()) : g
    }),
    (P.postclip = function (w) {
      return arguments.length ? ((v = w), (b = m = x = _ = null), V()) : v
    }),
    (P.clipAngle = function (w) {
      return arguments.length ? ((g = +w ? S0((p = w * Q)) : ((p = null), Er)), V()) : p * _t
    }),
    (P.clipExtent = function (w) {
      return arguments.length
        ? ((v =
            w == null
              ? ((b = m = x = _ = null), po)
              : C0((b = +w[0][0]), (m = +w[0][1]), (x = +w[1][0]), (_ = +w[1][1]))),
          V())
        : b == null
          ? null
          : [
              [b, m],
              [x, _],
            ]
    }),
    (P.scale = function (w) {
      return arguments.length ? ((e = +w), W()) : e
    }),
    (P.translate = function (w) {
      return arguments.length ? ((i = +w[0]), (s = +w[1]), W()) : [i, s]
    }),
    (P.center = function (w) {
      return arguments.length ? ((o = (w[0] % 360) * Q), (a = (w[1] % 360) * Q), W()) : [o * _t, a * _t]
    }),
    (P.rotate = function (w) {
      return arguments.length
        ? ((r = (w[0] % 360) * Q), (c = (w[1] % 360) * Q), (l = w.length > 2 ? (w[2] % 360) * Q : 0), W())
        : [r * _t, c * _t, l * _t]
    }),
    (P.angle = function (w) {
      return arguments.length ? ((d = (w % 360) * Q), W()) : d * _t
    }),
    (P.reflectX = function (w) {
      return arguments.length ? ((h = w ? -1 : 1), W()) : h < 0
    }),
    (P.reflectY = function (w) {
      return arguments.length ? ((u = w ? -1 : 1), W()) : u < 0
    }),
    (P.precision = function (w) {
      return arguments.length ? ((M = Gr(k, (y = w * w))), V()) : Mt(y)
    }),
    (P.fitExtent = function (w, T) {
      return Yo(P, w, T)
    }),
    (P.fitSize = function (w, T) {
      return Fl(P, w, T)
    }),
    (P.fitWidth = function (w, T) {
      return Bl(P, w, T)
    }),
    (P.fitHeight = function (w, T) {
      return Nl(P, w, T)
    })
  function W() {
    var w = qr(e, 0, 0, h, u, d).apply(null, t(o, a)),
      T = qr(e, i - w[0], s - w[1], h, u, d)
    return (f = _l(r, c, l)), (k = ro(t, T)), (S = ro(f, k)), (M = Gr(k, y)), V()
  }
  function V() {
    return (C = O = null), P
  }
  return function () {
    return (t = n.apply(this, arguments)), (P.invert = t.invert && I), W()
  }
}
function Uo(n) {
  var t = 0,
    e = H / 3,
    i = Vl(n),
    s = i(t, e)
  return (
    (s.parallels = function (o) {
      return arguments.length ? i((t = o[0] * Q), (e = o[1] * Q)) : [t * _t, e * _t]
    }),
    s
  )
}
function Q0(n) {
  var t = N(n)
  function e(i, s) {
    return [i * t, B(s) / t]
  }
  return (
    (e.invert = function (i, s) {
      return [i / t, Ht(s * t)]
    }),
    e
  )
}
function tb(n, t) {
  var e = B(n),
    i = (e + B(t)) / 2
  if (G(i) < L) return Q0(n)
  var s = 1 + e * (2 * i - e),
    o = Mt(s) / i
  function a(r, c) {
    var l = Mt(s - 2 * i * B(c)) / i
    return [l * B((r *= i)), o - l * N(r)]
  }
  return (
    (a.invert = function (r, c) {
      var l = o - c,
        f = Qt(r, G(l)) * Vt(l)
      return l * i < 0 && (f -= H * Vt(r) * Vt(l)), [f / i, Ht((s - (r * r + l * l) * i * i) / (2 * i))]
    }),
    a
  )
}
function hs() {
  return Uo(tb).scale(155.424).center([0, 33.6442])
}
function $l() {
  return hs().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7])
}
function eb(n) {
  var t = n.length
  return {
    point: function (e, i) {
      for (var s = -1; ++s < t; ) n[s].point(e, i)
    },
    sphere: function () {
      for (var e = -1; ++e < t; ) n[e].sphere()
    },
    lineStart: function () {
      for (var e = -1; ++e < t; ) n[e].lineStart()
    },
    lineEnd: function () {
      for (var e = -1; ++e < t; ) n[e].lineEnd()
    },
    polygonStart: function () {
      for (var e = -1; ++e < t; ) n[e].polygonStart()
    },
    polygonEnd: function () {
      for (var e = -1; ++e < t; ) n[e].polygonEnd()
    },
  }
}
function nb() {
  var n,
    t,
    e = $l(),
    i,
    s = hs().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
    o,
    a = hs().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
    r,
    c,
    l = {
      point: function (h, u) {
        c = [h, u]
      },
    }
  function f(h) {
    var u = h[0],
      p = h[1]
    return (c = null), i.point(u, p), c || (o.point(u, p), c) || (r.point(u, p), c)
  }
  ;(f.invert = function (h) {
    var u = e.scale(),
      p = e.translate(),
      g = (h[0] - p[0]) / u,
      b = (h[1] - p[1]) / u
    return (
      b >= 0.12 && b < 0.234 && g >= -0.425 && g < -0.214
        ? s
        : b >= 0.166 && b < 0.234 && g >= -0.214 && g < -0.115
          ? a
          : e
    ).invert(h)
  }),
    (f.stream = function (h) {
      return n && t === h ? n : (n = eb([e.stream((t = h)), s.stream(h), a.stream(h)]))
    }),
    (f.precision = function (h) {
      return arguments.length ? (e.precision(h), s.precision(h), a.precision(h), d()) : e.precision()
    }),
    (f.scale = function (h) {
      return arguments.length ? (e.scale(h), s.scale(h * 0.35), a.scale(h), f.translate(e.translate())) : e.scale()
    }),
    (f.translate = function (h) {
      if (!arguments.length) return e.translate()
      var u = e.scale(),
        p = +h[0],
        g = +h[1]
      return (
        (i = e
          .translate(h)
          .clipExtent([
            [p - 0.455 * u, g - 0.238 * u],
            [p + 0.455 * u, g + 0.238 * u],
          ])
          .stream(l)),
        (o = s
          .translate([p - 0.307 * u, g + 0.201 * u])
          .clipExtent([
            [p - 0.425 * u + L, g + 0.12 * u + L],
            [p - 0.214 * u - L, g + 0.234 * u - L],
          ])
          .stream(l)),
        (r = a
          .translate([p - 0.205 * u, g + 0.212 * u])
          .clipExtent([
            [p - 0.214 * u + L, g + 0.166 * u + L],
            [p - 0.115 * u - L, g + 0.234 * u - L],
          ])
          .stream(l)),
        d()
      )
    }),
    (f.fitExtent = function (h, u) {
      return Yo(f, h, u)
    }),
    (f.fitSize = function (h, u) {
      return Fl(f, h, u)
    }),
    (f.fitWidth = function (h, u) {
      return Bl(f, h, u)
    }),
    (f.fitHeight = function (h, u) {
      return Nl(f, h, u)
    })
  function d() {
    return (n = t = null), f
  }
  return f.scale(1070)
}
function jl(n) {
  return function (t, e) {
    var i = N(t),
      s = N(e),
      o = n(i * s)
    return o === 1 / 0 ? [2, 0] : [o * s * B(t), o * B(e)]
  }
}
function ri(n) {
  return function (t, e) {
    var i = Mt(t * t + e * e),
      s = n(i),
      o = B(s),
      a = N(s)
    return [Qt(t * o, i * a), Ht(i && (e * o) / i)]
  }
}
var Wl = jl(function (n) {
  return Mt(2 / (1 + n))
})
Wl.invert = ri(function (n) {
  return 2 * Ht(n / 2)
})
function ib() {
  return de(Wl)
    .scale(124.75)
    .clipAngle(180 - 0.001)
}
var Hl = jl(function (n) {
  return (n = xl(n)) && n / B(n)
})
Hl.invert = ri(function (n) {
  return n
})
function sb() {
  return de(Hl)
    .scale(79.4188)
    .clipAngle(180 - 0.001)
}
function ys(n, t) {
  return [n, ns(jo((rt + t) / 2))]
}
ys.invert = function (n, t) {
  return [n, 2 * gn(ml(t)) - rt]
}
function ob() {
  return Yl(ys).scale(961 / Rt)
}
function Yl(n) {
  var t = de(n),
    e = t.center,
    i = t.scale,
    s = t.translate,
    o = t.clipExtent,
    a = null,
    r,
    c,
    l
  ;(t.scale = function (d) {
    return arguments.length ? (i(d), f()) : i()
  }),
    (t.translate = function (d) {
      return arguments.length ? (s(d), f()) : s()
    }),
    (t.center = function (d) {
      return arguments.length ? (e(d), f()) : e()
    }),
    (t.clipExtent = function (d) {
      return arguments.length
        ? (d == null ? (a = r = c = l = null) : ((a = +d[0][0]), (r = +d[0][1]), (c = +d[1][0]), (l = +d[1][1])), f())
        : a == null
          ? null
          : [
              [a, r],
              [c, l],
            ]
    })
  function f() {
    var d = H * i(),
      h = t(m0(t.rotate()).invert([0, 0]))
    return o(
      a == null
        ? [
            [h[0] - d, h[1] - d],
            [h[0] + d, h[1] + d],
          ]
        : n === ys
          ? [
              [Math.max(h[0] - d, a), r],
              [Math.min(h[0] + d, c), l],
            ]
          : [
              [a, Math.max(h[1] - d, r)],
              [c, Math.min(h[1] + d, l)],
            ],
    )
  }
  return f()
}
function Ai(n) {
  return jo((rt + n) / 2)
}
function ab(n, t) {
  var e = N(n),
    i = n === t ? B(n) : ns(e / N(t)) / ns(Ai(t) / Ai(n)),
    s = (e * Bs(Ai(n), i)) / i
  if (!i) return ys
  function o(a, r) {
    s > 0 ? r < -rt + L && (r = -rt + L) : r > rt - L && (r = rt - L)
    var c = s / Bs(Ai(r), i)
    return [c * B(i * a), s - c * N(i * a)]
  }
  return (
    (o.invert = function (a, r) {
      var c = s - r,
        l = Vt(i) * Mt(a * a + c * c),
        f = Qt(a, G(c)) * Vt(c)
      return c * i < 0 && (f -= H * Vt(a) * Vt(c)), [f / i, 2 * gn(Bs(s / l, 1 / i)) - rt]
    }),
    o
  )
}
function rb() {
  return Uo(ab).scale(109.5).parallels([30, 30])
}
function us(n, t) {
  return [n, t]
}
us.invert = us
function cb() {
  return de(us).scale(152.63)
}
function lb(n, t) {
  var e = N(n),
    i = n === t ? B(n) : (e - N(t)) / (t - n),
    s = e / i + n
  if (G(i) < L) return us
  function o(a, r) {
    var c = s - r,
      l = i * a
    return [c * B(l), s - c * N(l)]
  }
  return (
    (o.invert = function (a, r) {
      var c = s - r,
        l = Qt(a, G(c)) * Vt(c)
      return c * i < 0 && (l -= H * Vt(a) * Vt(c)), [l / i, s - Vt(i) * Mt(a * a + c * c)]
    }),
    o
  )
}
function fb() {
  return Uo(lb).scale(131.154).center([0, 13.9389])
}
var Vn = 1.340264,
  $n = -0.081106,
  jn = 893e-6,
  Wn = 0.003796,
  ps = Mt(3) / 2,
  db = 12
function Ul(n, t) {
  var e = Ht(ps * B(t)),
    i = e * e,
    s = i * i * i
  return [(n * N(e)) / (ps * (Vn + 3 * $n * i + s * (7 * jn + 9 * Wn * i))), e * (Vn + $n * i + s * (jn + Wn * i))]
}
Ul.invert = function (n, t) {
  for (
    var e = t, i = e * e, s = i * i * i, o = 0, a, r, c;
    o < db &&
    ((r = e * (Vn + $n * i + s * (jn + Wn * i)) - t),
    (c = Vn + 3 * $n * i + s * (7 * jn + 9 * Wn * i)),
    (e -= a = r / c),
    (i = e * e),
    (s = i * i * i),
    !(G(a) < $o));
    ++o
  );
  return [(ps * n * (Vn + 3 * $n * i + s * (7 * jn + 9 * Wn * i))) / N(e), Ht(B(e) / ps)]
}
function hb() {
  return de(Ul).scale(177.158)
}
function Xl(n, t) {
  var e = N(t),
    i = N(n) * e
  return [(e * B(n)) / i, B(t) / i]
}
Xl.invert = ri(gn)
function ub() {
  return de(Xl).scale(144.049).clipAngle(60)
}
function Gl(n, t) {
  var e = t * t,
    i = e * e
  return [
    n * (0.8707 - 0.131979 * e + i * (-0.013791 + i * (0.003971 * e - 0.001529 * i))),
    t * (1.007226 + e * (0.015085 + i * (-0.044475 + 0.028874 * e - 0.005916 * i))),
  ]
}
Gl.invert = function (n, t) {
  var e = t,
    i = 25,
    s
  do {
    var o = e * e,
      a = o * o
    e -= s =
      (e * (1.007226 + o * (0.015085 + a * (-0.044475 + 0.028874 * o - 0.005916 * a))) - t) /
      (1.007226 + o * (0.015085 * 3 + a * (-0.044475 * 7 + 0.028874 * 9 * o - 0.005916 * 11 * a)))
  } while (G(s) > L && --i > 0)
  return [n / (0.8707 + (o = e * e) * (-0.131979 + o * (-0.013791 + o * o * o * (0.003971 - 0.001529 * o)))), e]
}
function pb() {
  return de(Gl).scale(175.295)
}
function ql(n, t) {
  return [N(t) * B(n), B(t)]
}
ql.invert = ri(Ht)
function gb() {
  return de(ql)
    .scale(249.5)
    .clipAngle(90 + L)
}
function Kl(n, t) {
  var e = N(t),
    i = 1 + N(n) * e
  return [(e * B(n)) / i, B(t) / i]
}
Kl.invert = ri(function (n) {
  return 2 * gn(n)
})
function bb() {
  return de(Kl).scale(250).clipAngle(142)
}
function Zl(n, t) {
  return [ns(jo((rt + t) / 2)), -n]
}
Zl.invert = function (n, t) {
  return [-t, 2 * gn(ml(n)) - rt]
}
function mb() {
  var n = Yl(Zl),
    t = n.center,
    e = n.rotate
  return (
    (n.center = function (i) {
      return arguments.length ? t([-i[1], i[0]]) : ((i = t()), [i[1], -i[0]])
    }),
    (n.rotate = function (i) {
      return arguments.length ? e([i[0], i[1], i.length > 2 ? i[2] + 90 : 90]) : ((i = e()), [i[0], i[1], i[2] - 90])
    }),
    e([0, 0, 90]).scale(159.155)
  )
}
function K(n) {
  for (var t = (n.length / 6) | 0, e = new Array(t), i = 0; i < t; ) e[i] = '#' + n.slice(i * 6, ++i * 6)
  return e
}
function vs(n, t, e) {
  ;(n.prototype = t.prototype = e), (e.constructor = n)
}
function Xo(n, t) {
  var e = Object.create(n.prototype)
  for (var i in t) e[i] = t[i]
  return e
}
function bn() {}
var He = 0.7,
  pn = 1 / He,
  sn = '\\s*([+-]?\\d+)\\s*',
  ti = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  Zt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  xb = /^#([0-9a-f]{3,8})$/,
  _b = new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`),
  yb = new RegExp(`^rgb\\(${Zt},${Zt},${Zt}\\)$`),
  vb = new RegExp(`^rgba\\(${sn},${sn},${sn},${ti}\\)$`),
  wb = new RegExp(`^rgba\\(${Zt},${Zt},${Zt},${ti}\\)$`),
  Mb = new RegExp(`^hsl\\(${ti},${Zt},${Zt}\\)$`),
  Sb = new RegExp(`^hsla\\(${ti},${Zt},${Zt},${ti}\\)$`),
  Kr = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  }
vs(bn, Go, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n)
  },
  displayable() {
    return this.rgb().displayable()
  },
  hex: Zr,
  formatHex: Zr,
  formatHex8: kb,
  formatHsl: Cb,
  formatRgb: Jr,
  toString: Jr,
})
function Zr() {
  return this.rgb().formatHex()
}
function kb() {
  return this.rgb().formatHex8()
}
function Cb() {
  return Ql(this).formatHsl()
}
function Jr() {
  return this.rgb().formatRgb()
}
function Go(n) {
  var t, e
  return (
    (n = (n + '').trim().toLowerCase()),
    (t = xb.exec(n))
      ? ((e = t[1].length),
        (t = parseInt(t[1], 16)),
        e === 6
          ? Qr(t)
          : e === 3
            ? new bt(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (t & 240), ((t & 15) << 4) | (t & 15), 1)
            : e === 8
              ? Oi((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : e === 4
                ? Oi(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = _b.exec(n))
        ? new bt(t[1], t[2], t[3], 1)
        : (t = yb.exec(n))
          ? new bt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = vb.exec(n))
            ? Oi(t[1], t[2], t[3], t[4])
            : (t = wb.exec(n))
              ? Oi((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = Mb.exec(n))
                ? nc(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Sb.exec(n))
                  ? nc(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Kr.hasOwnProperty(n)
                    ? Qr(Kr[n])
                    : n === 'transparent'
                      ? new bt(NaN, NaN, NaN, 0)
                      : null
  )
}
function Qr(n) {
  return new bt((n >> 16) & 255, (n >> 8) & 255, n & 255, 1)
}
function Oi(n, t, e, i) {
  return i <= 0 && (n = t = e = NaN), new bt(n, t, e, i)
}
function Jl(n) {
  return n instanceof bn || (n = Go(n)), n ? ((n = n.rgb()), new bt(n.r, n.g, n.b, n.opacity)) : new bt()
}
function ei(n, t, e, i) {
  return arguments.length === 1 ? Jl(n) : new bt(n, t, e, i ?? 1)
}
function bt(n, t, e, i) {
  ;(this.r = +n), (this.g = +t), (this.b = +e), (this.opacity = +i)
}
vs(
  bt,
  ei,
  Xo(bn, {
    brighter(n) {
      return (n = n == null ? pn : Math.pow(pn, n)), new bt(this.r * n, this.g * n, this.b * n, this.opacity)
    },
    darker(n) {
      return (n = n == null ? He : Math.pow(He, n)), new bt(this.r * n, this.g * n, this.b * n, this.opacity)
    },
    rgb() {
      return this
    },
    clamp() {
      return new bt(Ne(this.r), Ne(this.g), Ne(this.b), gs(this.opacity))
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    hex: tc,
    formatHex: tc,
    formatHex8: Pb,
    formatRgb: ec,
    toString: ec,
  }),
)
function tc() {
  return `#${Le(this.r)}${Le(this.g)}${Le(this.b)}`
}
function Pb() {
  return `#${Le(this.r)}${Le(this.g)}${Le(this.b)}${Le((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
}
function ec() {
  const n = gs(this.opacity)
  return `${n === 1 ? 'rgb(' : 'rgba('}${Ne(this.r)}, ${Ne(this.g)}, ${Ne(this.b)}${n === 1 ? ')' : `, ${n})`}`
}
function gs(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n))
}
function Ne(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0))
}
function Le(n) {
  return (n = Ne(n)), (n < 16 ? '0' : '') + n.toString(16)
}
function nc(n, t, e, i) {
  return i <= 0 ? (n = t = e = NaN) : e <= 0 || e >= 1 ? (n = t = NaN) : t <= 0 && (n = NaN), new Yt(n, t, e, i)
}
function Ql(n) {
  if (n instanceof Yt) return new Yt(n.h, n.s, n.l, n.opacity)
  if ((n instanceof bn || (n = Go(n)), !n)) return new Yt()
  if (n instanceof Yt) return n
  n = n.rgb()
  var t = n.r / 255,
    e = n.g / 255,
    i = n.b / 255,
    s = Math.min(t, e, i),
    o = Math.max(t, e, i),
    a = NaN,
    r = o - s,
    c = (o + s) / 2
  return (
    r
      ? (t === o ? (a = (e - i) / r + (e < i) * 6) : e === o ? (a = (i - t) / r + 2) : (a = (t - e) / r + 4),
        (r /= c < 0.5 ? o + s : 2 - o - s),
        (a *= 60))
      : (r = c > 0 && c < 1 ? 0 : a),
    new Yt(a, r, c, n.opacity)
  )
}
function Db(n, t, e, i) {
  return arguments.length === 1 ? Ql(n) : new Yt(n, t, e, i ?? 1)
}
function Yt(n, t, e, i) {
  ;(this.h = +n), (this.s = +t), (this.l = +e), (this.opacity = +i)
}
vs(
  Yt,
  Db,
  Xo(bn, {
    brighter(n) {
      return (n = n == null ? pn : Math.pow(pn, n)), new Yt(this.h, this.s, this.l * n, this.opacity)
    },
    darker(n) {
      return (n = n == null ? He : Math.pow(He, n)), new Yt(this.h, this.s, this.l * n, this.opacity)
    },
    rgb() {
      var n = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(n) || isNaN(this.s) ? 0 : this.s,
        e = this.l,
        i = e + (e < 0.5 ? e : 1 - e) * t,
        s = 2 * e - i
      return new bt(
        Ws(n >= 240 ? n - 240 : n + 120, s, i),
        Ws(n, s, i),
        Ws(n < 120 ? n + 240 : n - 120, s, i),
        this.opacity,
      )
    },
    clamp() {
      return new Yt(ic(this.h), Ti(this.s), Ti(this.l), gs(this.opacity))
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    formatHsl() {
      const n = gs(this.opacity)
      return `${n === 1 ? 'hsl(' : 'hsla('}${ic(this.h)}, ${Ti(this.s) * 100}%, ${Ti(this.l) * 100}%${
        n === 1 ? ')' : `, ${n})`
      }`
    },
  }),
)
function ic(n) {
  return (n = (n || 0) % 360), n < 0 ? n + 360 : n
}
function Ti(n) {
  return Math.max(0, Math.min(1, n || 0))
}
function Ws(n, t, e) {
  return (n < 60 ? t + ((e - t) * n) / 60 : n < 180 ? e : n < 240 ? t + ((e - t) * (240 - n)) / 60 : t) * 255
}
const Ab = Math.PI / 180,
  Ob = 180 / Math.PI
var tf = -0.14861,
  qo = 1.78277,
  Ko = -0.29227,
  ws = -0.90649,
  ni = 1.97294,
  sc = ni * ws,
  oc = ni * qo,
  ac = qo * Ko - ws * tf
function Tb(n) {
  if (n instanceof Ve) return new Ve(n.h, n.s, n.l, n.opacity)
  n instanceof bt || (n = Jl(n))
  var t = n.r / 255,
    e = n.g / 255,
    i = n.b / 255,
    s = (ac * i + sc * t - oc * e) / (ac + sc - oc),
    o = i - s,
    a = (ni * (e - s) - Ko * o) / ws,
    r = Math.sqrt(a * a + o * o) / (ni * s * (1 - s)),
    c = r ? Math.atan2(a, o) * Ob - 120 : NaN
  return new Ve(c < 0 ? c + 360 : c, r, s, n.opacity)
}
function te(n, t, e, i) {
  return arguments.length === 1 ? Tb(n) : new Ve(n, t, e, i ?? 1)
}
function Ve(n, t, e, i) {
  ;(this.h = +n), (this.s = +t), (this.l = +e), (this.opacity = +i)
}
vs(
  Ve,
  te,
  Xo(bn, {
    brighter(n) {
      return (n = n == null ? pn : Math.pow(pn, n)), new Ve(this.h, this.s, this.l * n, this.opacity)
    },
    darker(n) {
      return (n = n == null ? He : Math.pow(He, n)), new Ve(this.h, this.s, this.l * n, this.opacity)
    },
    rgb() {
      var n = isNaN(this.h) ? 0 : (this.h + 120) * Ab,
        t = +this.l,
        e = isNaN(this.s) ? 0 : this.s * t * (1 - t),
        i = Math.cos(n),
        s = Math.sin(n)
      return new bt(
        255 * (t + e * (tf * i + qo * s)),
        255 * (t + e * (Ko * i + ws * s)),
        255 * (t + e * (ni * i)),
        this.opacity,
      )
    },
  }),
)
function Eb(n, t, e, i, s) {
  var o = n * n,
    a = o * n
  return ((1 - 3 * n + 3 * o - a) * t + (4 - 6 * o + 3 * a) * e + (1 + 3 * n + 3 * o - 3 * a) * i + a * s) / 6
}
function Rb(n) {
  var t = n.length - 1
  return function (e) {
    var i = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), t - 1) : Math.floor(e * t),
      s = n[i],
      o = n[i + 1],
      a = i > 0 ? n[i - 1] : 2 * s - o,
      r = i < t - 1 ? n[i + 2] : 2 * o - s
    return Eb((e - i / t) * t, a, s, o, r)
  }
}
const Zo = (n) => () => n
function ef(n, t) {
  return function (e) {
    return n + e * t
  }
}
function Lb(n, t, e) {
  return (
    (n = Math.pow(n, e)),
    (t = Math.pow(t, e) - n),
    (e = 1 / e),
    function (i) {
      return Math.pow(n + i * t, e)
    }
  )
}
function Ib(n, t) {
  var e = t - n
  return e ? ef(n, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Zo(isNaN(n) ? t : n)
}
function zb(n) {
  return (n = +n) == 1
    ? on
    : function (t, e) {
        return e - t ? Lb(t, e, n) : Zo(isNaN(t) ? e : t)
      }
}
function on(n, t) {
  var e = t - n
  return e ? ef(n, e) : Zo(isNaN(n) ? t : n)
}
;(function n(t) {
  var e = zb(t)
  function i(s, o) {
    var a = e((s = ei(s)).r, (o = ei(o)).r),
      r = e(s.g, o.g),
      c = e(s.b, o.b),
      l = on(s.opacity, o.opacity)
    return function (f) {
      return (s.r = a(f)), (s.g = r(f)), (s.b = c(f)), (s.opacity = l(f)), s + ''
    }
  }
  return (i.gamma = n), i
})(1)
function Fb(n) {
  return function (t) {
    var e = t.length,
      i = new Array(e),
      s = new Array(e),
      o = new Array(e),
      a,
      r
    for (a = 0; a < e; ++a) (r = ei(t[a])), (i[a] = r.r || 0), (s[a] = r.g || 0), (o[a] = r.b || 0)
    return (
      (i = n(i)),
      (s = n(s)),
      (o = n(o)),
      (r.opacity = 1),
      function (c) {
        return (r.r = i(c)), (r.g = s(c)), (r.b = o(c)), r + ''
      }
    )
  }
}
var Bb = Fb(Rb)
function nf(n) {
  return (function t(e) {
    e = +e
    function i(s, o) {
      var a = n((s = te(s)).h, (o = te(o)).h),
        r = on(s.s, o.s),
        c = on(s.l, o.l),
        l = on(s.opacity, o.opacity)
      return function (f) {
        return (s.h = a(f)), (s.s = r(f)), (s.l = c(Math.pow(f, e))), (s.opacity = l(f)), s + ''
      }
    }
    return (i.gamma = t), i
  })(1)
}
nf(Ib)
var Jo = nf(on)
const tt = (n) => Bb(n[n.length - 1])
var Nb = new Array(3)
  .concat(
    'd8b365f5f5f55ab4ac',
    'a6611adfc27d80cdc1018571',
    'a6611adfc27df5f5f580cdc1018571',
    '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
    '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
    '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
    '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
    '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
    '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30',
  )
  .map(K)
const Vb = tt(Nb)
var $b = new Array(3)
  .concat(
    'af8dc3f7f7f77fbf7b',
    '7b3294c2a5cfa6dba0008837',
    '7b3294c2a5cff7f7f7a6dba0008837',
    '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
    '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
    '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
    '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
    '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
    '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b',
  )
  .map(K)
const jb = tt($b)
var Wb = new Array(3)
  .concat(
    'e9a3c9f7f7f7a1d76a',
    'd01c8bf1b6dab8e1864dac26',
    'd01c8bf1b6daf7f7f7b8e1864dac26',
    'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
    'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
    'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
    'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
    '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
    '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419',
  )
  .map(K)
const Hb = tt(Wb)
var Yb = new Array(3)
  .concat(
    '998ec3f7f7f7f1a340',
    '5e3c99b2abd2fdb863e66101',
    '5e3c99b2abd2f7f7f7fdb863e66101',
    '542788998ec3d8daebfee0b6f1a340b35806',
    '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
    '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
    '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
    '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
    '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08',
  )
  .map(K)
const Ub = tt(Yb)
var Xb = new Array(3)
  .concat(
    'ef8a62f7f7f767a9cf',
    'ca0020f4a58292c5de0571b0',
    'ca0020f4a582f7f7f792c5de0571b0',
    'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
    'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
    'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
    'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
    '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
    '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061',
  )
  .map(K)
const Gb = tt(Xb)
var qb = new Array(3)
  .concat(
    'ef8a62ffffff999999',
    'ca0020f4a582bababa404040',
    'ca0020f4a582ffffffbababa404040',
    'b2182bef8a62fddbc7e0e0e09999994d4d4d',
    'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
    'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
    'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
    '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
    '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a',
  )
  .map(K)
const Kb = tt(qb)
var Zb = new Array(3)
  .concat(
    'fc8d59ffffbf91bfdb',
    'd7191cfdae61abd9e92c7bb6',
    'd7191cfdae61ffffbfabd9e92c7bb6',
    'd73027fc8d59fee090e0f3f891bfdb4575b4',
    'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
    'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
    'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
    'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
    'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695',
  )
  .map(K)
const Jb = tt(Zb)
var Qb = new Array(3)
  .concat(
    'fc8d59ffffbf91cf60',
    'd7191cfdae61a6d96a1a9641',
    'd7191cfdae61ffffbfa6d96a1a9641',
    'd73027fc8d59fee08bd9ef8b91cf601a9850',
    'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
    'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
    'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
    'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
    'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837',
  )
  .map(K)
const tm = tt(Qb)
var em = new Array(3)
  .concat(
    'fc8d59ffffbf99d594',
    'd7191cfdae61abdda42b83ba',
    'd7191cfdae61ffffbfabdda42b83ba',
    'd53e4ffc8d59fee08be6f59899d5943288bd',
    'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
    'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
    'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
    '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
    '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2',
  )
  .map(K)
const nm = tt(em)
var im = new Array(3)
  .concat(
    'e5f5f999d8c92ca25f',
    'edf8fbb2e2e266c2a4238b45',
    'edf8fbb2e2e266c2a42ca25f006d2c',
    'edf8fbccece699d8c966c2a42ca25f006d2c',
    'edf8fbccece699d8c966c2a441ae76238b45005824',
    'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
    'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b',
  )
  .map(K)
const sm = tt(im)
var om = new Array(3)
  .concat(
    'e0ecf49ebcda8856a7',
    'edf8fbb3cde38c96c688419d',
    'edf8fbb3cde38c96c68856a7810f7c',
    'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
    'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
    'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
    'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b',
  )
  .map(K)
const am = tt(om)
var rm = new Array(3)
  .concat(
    'e0f3dba8ddb543a2ca',
    'f0f9e8bae4bc7bccc42b8cbe',
    'f0f9e8bae4bc7bccc443a2ca0868ac',
    'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
    'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
    'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
    'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081',
  )
  .map(K)
const cm = tt(rm)
var lm = new Array(3)
  .concat(
    'fee8c8fdbb84e34a33',
    'fef0d9fdcc8afc8d59d7301f',
    'fef0d9fdcc8afc8d59e34a33b30000',
    'fef0d9fdd49efdbb84fc8d59e34a33b30000',
    'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
    'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
    'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000',
  )
  .map(K)
const fm = tt(lm)
var dm = new Array(3)
  .concat(
    'ece2f0a6bddb1c9099',
    'f6eff7bdc9e167a9cf02818a',
    'f6eff7bdc9e167a9cf1c9099016c59',
    'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
    'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
    'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
    'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636',
  )
  .map(K)
const hm = tt(dm)
var um = new Array(3)
  .concat(
    'ece7f2a6bddb2b8cbe',
    'f1eef6bdc9e174a9cf0570b0',
    'f1eef6bdc9e174a9cf2b8cbe045a8d',
    'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
    'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
    'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
    'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858',
  )
  .map(K)
const pm = tt(um)
var gm = new Array(3)
  .concat(
    'e7e1efc994c7dd1c77',
    'f1eef6d7b5d8df65b0ce1256',
    'f1eef6d7b5d8df65b0dd1c77980043',
    'f1eef6d4b9dac994c7df65b0dd1c77980043',
    'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
    'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
    'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f',
  )
  .map(K)
const bm = tt(gm)
var mm = new Array(3)
  .concat(
    'fde0ddfa9fb5c51b8a',
    'feebe2fbb4b9f768a1ae017e',
    'feebe2fbb4b9f768a1c51b8a7a0177',
    'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
    'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
    'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
    'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a',
  )
  .map(K)
const xm = tt(mm)
var _m = new Array(3)
  .concat(
    'edf8b17fcdbb2c7fb8',
    'ffffcca1dab441b6c4225ea8',
    'ffffcca1dab441b6c42c7fb8253494',
    'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
    'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
    'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
    'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58',
  )
  .map(K)
const ym = tt(_m)
var vm = new Array(3)
  .concat(
    'f7fcb9addd8e31a354',
    'ffffccc2e69978c679238443',
    'ffffccc2e69978c67931a354006837',
    'ffffccd9f0a3addd8e78c67931a354006837',
    'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
    'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
    'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529',
  )
  .map(K)
const wm = tt(vm)
var Mm = new Array(3)
  .concat(
    'fff7bcfec44fd95f0e',
    'ffffd4fed98efe9929cc4c02',
    'ffffd4fed98efe9929d95f0e993404',
    'ffffd4fee391fec44ffe9929d95f0e993404',
    'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
    'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
    'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506',
  )
  .map(K)
const Sm = tt(Mm)
var km = new Array(3)
  .concat(
    'ffeda0feb24cf03b20',
    'ffffb2fecc5cfd8d3ce31a1c',
    'ffffb2fecc5cfd8d3cf03b20bd0026',
    'ffffb2fed976feb24cfd8d3cf03b20bd0026',
    'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
    'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
    'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026',
  )
  .map(K)
const Cm = tt(km)
var Pm = new Array(3)
  .concat(
    'deebf79ecae13182bd',
    'eff3ffbdd7e76baed62171b5',
    'eff3ffbdd7e76baed63182bd08519c',
    'eff3ffc6dbef9ecae16baed63182bd08519c',
    'eff3ffc6dbef9ecae16baed64292c62171b5084594',
    'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
    'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b',
  )
  .map(K)
const Dm = tt(Pm)
var Am = new Array(3)
  .concat(
    'e5f5e0a1d99b31a354',
    'edf8e9bae4b374c476238b45',
    'edf8e9bae4b374c47631a354006d2c',
    'edf8e9c7e9c0a1d99b74c47631a354006d2c',
    'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
    'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
    'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b',
  )
  .map(K)
const Om = tt(Am)
var Tm = new Array(3)
  .concat(
    'f0f0f0bdbdbd636363',
    'f7f7f7cccccc969696525252',
    'f7f7f7cccccc969696636363252525',
    'f7f7f7d9d9d9bdbdbd969696636363252525',
    'f7f7f7d9d9d9bdbdbd969696737373525252252525',
    'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
    'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000',
  )
  .map(K)
const Em = tt(Tm)
var Rm = new Array(3)
  .concat(
    'efedf5bcbddc756bb1',
    'f2f0f7cbc9e29e9ac86a51a3',
    'f2f0f7cbc9e29e9ac8756bb154278f',
    'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
    'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
    'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
    'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d',
  )
  .map(K)
const Lm = tt(Rm)
var Im = new Array(3)
  .concat(
    'fee0d2fc9272de2d26',
    'fee5d9fcae91fb6a4acb181d',
    'fee5d9fcae91fb6a4ade2d26a50f15',
    'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
    'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
    'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
    'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d',
  )
  .map(K)
const zm = tt(Im)
var Fm = new Array(3)
  .concat(
    'fee6cefdae6be6550d',
    'feeddefdbe85fd8d3cd94701',
    'feeddefdbe85fd8d3ce6550da63603',
    'feeddefdd0a2fdae6bfd8d3ce6550da63603',
    'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
    'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
    'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704',
  )
  .map(K)
const Bm = tt(Fm)
function Nm(n) {
  return (
    (n = Math.max(0, Math.min(1, n))),
    'rgb(' +
      Math.max(
        0,
        Math.min(255, Math.round(-4.54 - n * (35.34 - n * (2381.73 - n * (6402.7 - n * (7024.72 - n * 2710.57)))))),
      ) +
      ', ' +
      Math.max(
        0,
        Math.min(255, Math.round(32.49 + n * (170.73 + n * (52.82 - n * (131.46 - n * (176.58 - n * 67.37)))))),
      ) +
      ', ' +
      Math.max(
        0,
        Math.min(255, Math.round(81.24 + n * (442.36 - n * (2482.43 - n * (6167.24 - n * (6614.94 - n * 2475.67)))))),
      ) +
      ')'
  )
}
const Vm = Jo(te(300, 0.5, 0), te(-240, 0.5, 1))
var $m = Jo(te(-100, 0.75, 0.35), te(80, 1.5, 0.8)),
  jm = Jo(te(260, 0.75, 0.35), te(80, 1.5, 0.8)),
  Ei = te()
function Wm(n) {
  ;(n < 0 || n > 1) && (n -= Math.floor(n))
  var t = Math.abs(n - 0.5)
  return (Ei.h = 360 * n - 100), (Ei.s = 1.5 - 1.5 * t), (Ei.l = 0.8 - 0.9 * t), Ei + ''
}
var Ri = ei(),
  Hm = Math.PI / 3,
  Ym = (Math.PI * 2) / 3
function Um(n) {
  var t
  return (
    (n = (0.5 - n) * Math.PI),
    (Ri.r = 255 * (t = Math.sin(n)) * t),
    (Ri.g = 255 * (t = Math.sin(n + Hm)) * t),
    (Ri.b = 255 * (t = Math.sin(n + Ym)) * t),
    Ri + ''
  )
}
function Xm(n) {
  return (
    (n = Math.max(0, Math.min(1, n))),
    'rgb(' +
      Math.max(
        0,
        Math.min(
          255,
          Math.round(34.61 + n * (1172.33 - n * (10793.56 - n * (33300.12 - n * (38394.49 - n * 14825.05))))),
        ),
      ) +
      ', ' +
      Math.max(
        0,
        Math.min(255, Math.round(23.31 + n * (557.33 + n * (1225.33 - n * (3574.96 - n * (1073.77 + n * 707.56)))))),
      ) +
      ', ' +
      Math.max(
        0,
        Math.min(255, Math.round(27.2 + n * (3211.1 - n * (15327.97 - n * (27814 - n * (22569.18 - n * 6838.66)))))),
      ) +
      ')'
  )
}
function Ms(n) {
  var t = n.length
  return function (e) {
    return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))]
  }
}
const Gm = Ms(
  K(
    '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725',
  ),
)
var qm = Ms(
    K(
      '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf',
    ),
  ),
  Km = Ms(
    K(
      '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4',
    ),
  ),
  Zm = Ms(
    K(
      '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921',
    ),
  )
const Hn = {
  geoAzimuthalEqualArea: ib,
  geoAzimuthalEquidistant: sb,
  geoGnomonic: ub,
  geoOrthographic: gb,
  geoStereographic: bb,
  geoEqualEarth: hb,
  geoAlbers: $l,
  geoAlbersUsa: nb,
  geoConicConformal: rb,
  geoConicEqualArea: hs,
  geoConicEquidistant: fb,
  geoEquirectangular: cb,
  geoMercator: ob,
  geoTransverseMercator: mb,
  geoNaturalEarth1: pb,
}
Object.keys(Hn).forEach((n) => {
  Hn[`${n.charAt(3).toLowerCase()}${n.slice(4)}`] = Hn[n]
})
class Ue extends we {
  constructor(t) {
    super(t), (this.outlineBounds = null), (this.oldChartBounds = null), (this.geoPath = Ur())
  }
  init(t) {
    ;(t.position = 'chartArea'),
      super.init(t),
      typeof t.projection == 'function'
        ? (this.projection = t.projection)
        : (this.projection = (Hn[t.projection] || Hn.albersUsa)()),
      this.geoPath.projection(this.projection),
      (this.outlineBounds = null),
      (this.oldChartBounds = null)
  }
  computeBounds(t) {
    const e = Ur(this.projection.fitWidth(1e3, t)).bounds(t),
      i = Math.ceil(e[1][1] - e[0][1]),
      s = Math.ceil(e[1][0] - e[0][0]),
      o = this.projection.translate()
    this.outlineBounds = {
      width: s,
      height: i,
      aspectRatio: s / i,
      refScale: this.projection.scale(),
      refX: o[0],
      refY: o[1],
    }
  }
  updateBounds() {
    const t = this.chart.chartArea,
      e = this.outlineBounds
    if (!e) return !1
    const i = this.options.padding,
      s = typeof i == 'number' ? i : i.top,
      o = typeof i == 'number' ? i : i.left,
      a = typeof i == 'number' ? i : i.bottom,
      r = typeof i == 'number' ? i : i.right,
      c = t.right - t.left - o - r,
      l = t.bottom - t.top - s - a,
      f = this.oldChartBounds
    this.oldChartBounds = { chartWidth: c, chartHeight: l }
    const d = Math.min(c / e.width, l / e.height),
      h = e.width * d,
      u = e.height * d,
      p = (c - h) * 0.5 + t.left + o,
      g = (l - u) * 0.5 + t.top + s,
      b = this.options
    return (
      this.projection
        .scale(e.refScale * d * b.projectionScale)
        .translate([d * e.refX + p + b.projectionOffset[0], d * e.refY + g + b.projectionOffset[1]]),
      !f || f.chartWidth !== this.oldChartBounds.chartWidth || f.chartHeight !== this.oldChartBounds.chartHeight
    )
  }
}
Ue.id = 'projection'
Ue.defaults = { projection: 'albersUsa', projectionScale: 1, projectionOffset: [0, 0], padding: 0 }
Ue.descriptors = { _scriptable: (n) => n !== 'projection', _indexable: (n) => n !== 'projectionOffset' }
const Ss = {
  position: 'chartArea',
  property: 'value',
  grid: { z: 1, drawOnChartArea: !1 },
  ticks: { z: 1 },
  legend: { align: 'right', position: 'bottom-right', length: 100, width: 50, margin: 8, indicatorWidth: 10 },
}
function Jm(n) {
  const { indicatorWidth: t, align: e, margin: i } = n,
    s = (typeof i == 'number' ? i : i.left) + (e === 'right' ? t : 0),
    o = (typeof i == 'number' ? i : i.top) + (e === 'bottom' ? t : 0),
    a = (typeof i == 'number' ? i : i.right) + (e === 'left' ? t : 0),
    r = (typeof i == 'number' ? i : i.bottom) + (e === 'top' ? t : 0)
  return { left: s, top: o, right: a, bottom: r }
}
function Qm(n, t, e, i, s) {
  const { indicatorWidth: o, align: a, position: r } = t,
    c = a === 'top' || a === 'bottom',
    l = (a === 'left' ? s.w : e) + (c ? o : 0),
    f = (a === 'top' ? s.h : i) + (c ? 0 : o),
    d = Jm(t)
  if (typeof r == 'string')
    switch (r) {
      case 'top-left':
        return [d.left, d.top]
      case 'top':
        return [(n.right - l) / 2, d.top]
      case 'left':
        return [d.left, (n.bottom - f) / 2]
      case 'top-right':
        return [n.right - l - d.right, d.top]
      case 'bottom-right':
        return [n.right - l - d.right, n.bottom - f - d.bottom]
      case 'bottom':
        return [(n.right - l) / 2, n.bottom - f - d.bottom]
      case 'bottom-left':
        return [d.left, n.bottom - f - d.bottom]
      default:
        return [n.right - l - d.right, (n.bottom - f) / 2]
    }
  return [r.x, r.y]
}
class tn extends ln {
  constructor() {
    super(...arguments), (this.legendSize = { w: 0, h: 0 })
  }
  init(t) {
    ;(t.position = 'chartArea'), super.init(t), (this.axis = 'r')
  }
  parse(t, e) {
    return t && typeof t[this.options.property] == 'number' ? t[this.options.property] : super.parse(t, e)
  }
  isHorizontal() {
    return this.options.legend.align === 'top' || this.options.legend.align === 'bottom'
  }
  _getNormalizedValue(t) {
    return t == null || Number.isNaN(t) ? null : (t - this._startValue) / this._valueRange
  }
  update(t, e, i) {
    const s = Math.min(e, this.bottom == null ? Number.POSITIVE_INFINITY : this.bottom),
      o = Math.min(t, this.right == null ? Number.POSITIVE_INFINITY : this.right),
      a = this.options.legend,
      r = this.isHorizontal(),
      c = (u, p) => (u < 1 ? p * u : u),
      l = Math.min(o, c(r ? a.length : a.width, o)) - (r ? 0 : a.indicatorWidth),
      f = Math.min(s, c(r ? a.width : a.length, s)) - (r ? a.indicatorWidth : 0)
    ;(this.legendSize = { w: l, h: f }), (this.bottom = f), (this.height = f), (this.right = l), (this.width = l)
    const d = this.options.position
    this.options.position = this.options.legend.align
    const h = super.update(l, f, i)
    return (
      (this.options.position = d), (this.height = Math.min(f, this.height)), (this.width = Math.min(l, this.width)), h
    )
  }
  _computeLabelArea() {}
  draw(t) {
    if (!this._isVisible()) return
    const e = Qm(t, this.options.legend, this.width, this.height, this.legendSize),
      { ctx: i } = this
    i.save(), i.translate(e[0], e[1])
    const s = this.options.position
    ;(this.options.position = this.options.legend.align),
      super.draw({ ...t, bottom: this.height + 10, right: this.width }),
      (this.options.position = s)
    const { indicatorWidth: o } = this.options.legend
    switch (this.options.legend.align) {
      case 'left':
        i.translate(this.legendSize.w, 0)
        break
      case 'top':
        i.translate(0, this.legendSize.h)
        break
      case 'bottom':
        i.translate(0, -o)
        break
      default:
        i.translate(-o, 0)
        break
    }
    this._drawIndicator(), i.restore()
  }
  _drawIndicator() {}
}
class sf extends fn {
  constructor() {
    super(...arguments), (this.legendSize = { w: 0, h: 0 })
  }
  init(t) {
    tn.prototype.init.call(this, t)
  }
  parse(t, e) {
    return tn.prototype.parse.call(this, t, e)
  }
  isHorizontal() {
    return this.options.legend.align === 'top' || this.options.legend.align === 'bottom'
  }
  _getNormalizedValue(t) {
    return t == null || Number.isNaN(t) ? null : (Math.log10(t) - this._startValue) / this._valueRange
  }
  update(t, e, i) {
    return tn.prototype.update.call(this, t, e, i)
  }
  _computeLabelArea() {}
  draw(t) {
    return tn.prototype.draw.call(this, t)
  }
  _drawIndicator() {}
}
const ae = {
  interpolateBlues: Dm,
  interpolateBrBG: Vb,
  interpolateBuGn: sm,
  interpolateBuPu: am,
  interpolateCividis: Nm,
  interpolateCool: jm,
  interpolateCubehelixDefault: Vm,
  interpolateGnBu: cm,
  interpolateGreens: Om,
  interpolateGreys: Em,
  interpolateInferno: Km,
  interpolateMagma: qm,
  interpolateOrRd: fm,
  interpolateOranges: Bm,
  interpolatePRGn: jb,
  interpolatePiYG: Hb,
  interpolatePlasma: Zm,
  interpolatePuBu: pm,
  interpolatePuBuGn: hm,
  interpolatePuOr: Ub,
  interpolatePuRd: bm,
  interpolatePurples: Lm,
  interpolateRainbow: Wm,
  interpolateRdBu: Gb,
  interpolateRdGy: Kb,
  interpolateRdPu: xm,
  interpolateRdYlBu: Jb,
  interpolateRdYlGn: tm,
  interpolateReds: zm,
  interpolateSinebow: Um,
  interpolateSpectral: nm,
  interpolateTurbo: Xm,
  interpolateViridis: Gm,
  interpolateWarm: $m,
  interpolateYlGn: wm,
  interpolateYlGnBu: ym,
  interpolateYlOrBr: Sm,
  interpolateYlOrRd: Cm,
}
Object.keys(ae).forEach((n) => {
  ;(ae[`${n.charAt(11).toLowerCase()}${n.slice(12)}`] = ae[n]), (ae[n.slice(11)] = ae[n])
})
function of(n, t) {
  const e = 1 / t
  if (n <= e) return 0
  if (n >= 1 - e) return 1
  for (let i = 0; i < 1; i += e) if (n < i) return i - e / 2
  return n
}
const af = { interpolate: 'blues', missing: 'transparent', quantize: 0 }
class ye extends tn {
  get interpolate() {
    const t = this.options
    return t
      ? typeof t.interpolate == 'function'
        ? t.interpolate
        : ae[t.interpolate] || ae.blues
      : (e) => `rgb(${e},${e},${e})`
  }
  getColorForValue(t) {
    const e = this._getNormalizedValue(t)
    return e == null || Number.isNaN(e) ? this.options.missing : this.getColor(e)
  }
  getColor(t) {
    let e = t
    return this.options.quantize > 0 && (e = of(e, this.options.quantize)), this.interpolate(e)
  }
  _drawIndicator() {
    const { indicatorWidth: t } = this.options.legend,
      e = this._reversePixels
    if (this.isHorizontal()) {
      const i = this.width
      if (this.options.quantize > 0) {
        const s = i / this.options.quantize,
          o = e ? (a) => i - s - a : (a) => a
        for (let a = 0; a < i; a += s) {
          const r = (a + s / 2) / i
          ;(this.ctx.fillStyle = this.getColor(r)), this.ctx.fillRect(o(a), 0, s, t)
        }
      } else {
        const s = e ? (o) => i - 1 - o : (o) => o
        for (let o = 0; o < i; o += 1)
          (this.ctx.fillStyle = this.getColor((o + 0.5) / i)), this.ctx.fillRect(s(o), 0, 1, t)
      }
    } else {
      const i = this.height
      if (this.options.quantize > 0) {
        const s = i / this.options.quantize,
          o = e ? (a) => i - s - a : (a) => a
        for (let a = 0; a < i; a += s) {
          const r = (a + s / 2) / i
          ;(this.ctx.fillStyle = this.getColor(r)), this.ctx.fillRect(0, o(a), t, s)
        }
      } else {
        const s = e ? (o) => i - 1 - o : (o) => o
        for (let o = 0; o < i; o += 1)
          (this.ctx.fillStyle = this.getColor((o + 0.5) / i)), this.ctx.fillRect(0, s(o), t, 1)
      }
    }
  }
}
ye.id = 'color'
ye.defaults = Et({}, [ln.defaults, Ss, af])
ye.descriptors = { _scriptable: (n) => n !== 'interpolate', _indexable: !1 }
class Qo extends sf {
  constructor() {
    super(...arguments), (this.interpolate = (t) => `rgb(${t},${t},${t})`)
  }
  init(t) {
    super.init(t),
      typeof t.interpolate == 'function'
        ? (this.interpolate = t.interpolate)
        : (this.interpolate = ae[t.interpolate] || ae.blues)
  }
  getColorForValue(t) {
    return ye.prototype.getColorForValue.call(this, t)
  }
  getColor(t) {
    let e = t
    return this.options.quantize > 0 && (e = of(e, this.options.quantize)), this.interpolate(e)
  }
  _drawIndicator() {
    return ye.prototype._drawIndicator.call(this)
  }
}
Qo.id = 'colorLogarithmic'
Qo.defaults = Et({}, [fn.defaults, Ss, af])
Qo.descriptors = { _scriptable: (n) => n !== 'interpolate', _indexable: !1 }
const rf = {
  missing: 1,
  mode: 'area',
  range: [2, 20],
  legend: { align: 'bottom', length: 90, width: 70, indicatorWidth: 42 },
}
class Ye extends tn {
  constructor() {
    super(...arguments), (this._model = null)
  }
  getSizeForValue(t) {
    const e = this._getNormalizedValue(t)
    return e == null || Number.isNaN(e) ? this.options.missing : this.getSizeImpl(e)
  }
  getSizeImpl(t) {
    const [e, i] = this.options.range
    if (this.options.mode === 'area') {
      const o = i * i * Math.PI,
        a = e * e * Math.PI,
        r = o - a,
        c = t * r + a
      return Math.sqrt(c / Math.PI)
    }
    const s = i - e
    return t * s + e
  }
  _drawIndicator() {
    const { ctx: t } = this,
      e = this.options.legend.indicatorWidth / 2,
      i = this.isHorizontal(),
      s = this.ticks,
      o = this.getLabelItems(),
      a = o
        ? o.map((r) => ({ [i ? 'x' : 'y']: r.options.translation[i ? 0 : 1] }))
        : s.map((r, c) => ({ [i ? 'x' : 'y']: this.getPixelForTick(c) }))
    if (
      ((this._gridLineItems || []).forEach((r) => {
        if (
          (t.save(),
          (t.strokeStyle = r.color),
          (t.lineWidth = r.width),
          t.setLineDash && (t.setLineDash(r.borderDash), (t.lineDashOffset = r.borderDashOffset)),
          t.beginPath(),
          this.options.grid.drawTicks)
        )
          switch (this.options.legend.align) {
            case 'left':
              t.moveTo(0, r.ty1), t.lineTo(e, r.ty2)
              break
            case 'top':
              t.moveTo(r.tx1, 0), t.lineTo(r.tx2, e)
              break
            case 'bottom':
              t.moveTo(r.tx1, e), t.lineTo(r.tx2, e * 2)
              break
            default:
              t.moveTo(e, r.ty1), t.lineTo(e * 2, r.ty2)
              break
          }
        t.stroke(), t.restore()
      }),
      this._model)
    ) {
      const r = this._model
      ;(t.strokeStyle = r.borderColor), (t.lineWidth = r.borderWidth || 0), (t.fillStyle = r.backgroundColor)
    } else t.fillStyle = 'blue'
    s.forEach((r, c) => {
      const l = a[c],
        f = this.getSizeForValue(r.value),
        d = i ? l.x : e,
        h = i ? e : l.y,
        u = { pointStyle: 'circle', borderWidth: 0, ...(this._model || {}), radius: f }
      Ki(t, u, d, h)
    })
  }
}
Ye.id = 'size'
Ye.defaults = Et({}, [ln.defaults, Ss, rf])
Ye.descriptors = { _scriptable: !0, _indexable: (n) => n !== 'range' }
class cf extends sf {
  constructor() {
    super(...arguments), (this._model = null)
  }
  getSizeForValue(t) {
    const e = this._getNormalizedValue(t)
    return e == null || Number.isNaN(e) ? this.options.missing : this.getSizeImpl(e)
  }
  getSizeImpl(t) {
    return Ye.prototype.getSizeImpl.call(this, t)
  }
  _drawIndicator() {
    Ye.prototype._drawIndicator.call(this)
  }
}
cf.id = 'sizeLogarithmic'
cf.defaults = Et({}, [fn.defaults, Ss, rf])
function t1(n, t) {
  return [
    [n[0][0] - t, n[0][1] - t],
    [n[1][0] + t, n[1][1] + t],
  ]
}
class fe extends Wt {
  constructor() {
    super(...arguments), (this.cache = void 0)
  }
  inRange(t, e) {
    const i = this.getBounds(),
      s = (Number.isNaN(t) || (t >= i.x && t <= i.x2)) && (Number.isNaN(e) || (e >= i.y && e <= i.y2)),
      o = this.projectionScale.geoPath.projection()
    if (s && !Number.isNaN(t) && !Number.isNaN(e) && typeof o.invert == 'function') {
      const a = o.invert([t, e])
      return a != null && L0(this.feature, a)
    }
    return s
  }
  inXRange(t) {
    return this.inRange(t, Number.NaN)
  }
  inYRange(t) {
    return this.inRange(Number.NaN, t)
  }
  getCenterPoint() {
    if (this.cache && this.cache.center) return this.cache.center
    let t
    if (this.center) {
      const e = this.projectionScale.projection([this.center.longitude, this.center.latitude])
      t = { x: e[0], y: e[1] }
    } else {
      const e = this.projectionScale.geoPath.centroid(this.feature)
      t = { x: e[0], y: e[1] }
    }
    return (this.cache = { ...(this.cache || {}), center: t }), t
  }
  getBounds() {
    if (this.cache && this.cache.bounds) return this.cache.bounds
    const t = t1(this.projectionScale.geoPath.bounds(this.feature), this.options.borderWidth / 2),
      e = { x: t[0][0], x2: t[1][0], y: t[0][1], y2: t[1][1], width: t[1][0] - t[0][0], height: t[1][1] - t[0][1] }
    return (this.cache = { ...(this.cache || {}), bounds: e }), e
  }
  _drawInCache(t) {
    const e = this.getBounds()
    if (!Number.isFinite(e.x)) return
    const i = this.cache && this.cache.canvas ? this.cache.canvas : t.createElement('canvas'),
      s = Math.floor(e.x),
      o = Math.floor(e.y),
      a = Math.ceil(e.x + e.width),
      r = Math.ceil(e.y + e.height),
      c = this.pixelRatio || 1,
      l = Math.ceil(Math.max(a - s, 1) * c),
      f = Math.ceil(Math.max(r - o, 1) * c)
    if (l <= 0 || f <= 0) return
    ;(i.width = l), (i.height = f)
    const d = i.getContext('2d')
    d &&
      (d.clearRect(0, 0, i.width, i.height),
      d.save(),
      d.scale(c, c),
      d.translate(-s, -o),
      this._drawImpl(d),
      d.restore(),
      (this.cache = { ...(this.cache || {}), canvas: i, canvasKey: this._optionsToKey() }))
  }
  _optionsToKey() {
    const { options: t } = this
    return `${t.backgroundColor};${t.borderColor};${t.borderWidth};${this.pixelRatio}`
  }
  _drawImpl(t) {
    const { feature: e } = this,
      { options: i } = this
    t.beginPath(),
      this.projectionScale.geoPath.context(t)(e),
      i.backgroundColor && ((t.fillStyle = i.backgroundColor), t.fill()),
      i.borderColor && ((t.strokeStyle = i.borderColor), (t.lineWidth = i.borderWidth), t.stroke())
  }
  draw(t) {
    const { feature: e } = this
    if (!e) return
    ;(!this.cache || this.cache.canvasKey !== this._optionsToKey()) && this._drawInCache(t.canvas.ownerDocument)
    const i = this.getBounds()
    if (this.cache && this.cache.canvas && this.cache.canvas.width > 0 && this.cache.canvas.height > 0) {
      const s = Math.floor(i.x),
        o = Math.floor(i.y),
        a = Math.ceil(i.x + i.width),
        r = Math.ceil(i.y + i.height),
        c = a - s,
        l = r - o
      c > 0 && l > 0 && t.drawImage(this.cache.canvas, s, o, a - s, r - o)
    } else Number.isFinite(i.x) && (t.save(), this._drawImpl(t), t.restore())
  }
}
fe.id = 'geoFeature'
fe.defaults = {
  ...nn.defaults,
  outlineBackgroundColor: null,
  outlineBorderWidth: 0,
  graticuleBorderColor: '#CCCCCC',
  graticuleBorderWidth: 0,
}
fe.defaultRoutes = { outlineBorderColor: 'borderColor', ...(nn.defaultRoutes || {}) }
const lf = { showOutline: !1, showGraticule: !1, clipMap: !0 },
  ff = { scales: { projection: { axis: 'x', type: Ue.id, position: 'chartArea', display: !1 } } }
function rc(n) {
  const t = { ...n }
  return (
    Object.keys(n).forEach((e) => {
      let i = e
      if (e.startsWith('outline')) {
        const s = e.slice(7)
        i = s[0].toLowerCase() + s.slice(1)
      } else if (e.startsWith('hoverOutline')) i = `hover${e.slice(12)}`
      else return
      delete t[e], (t[i] = n[e])
    }),
    t
  )
}
class df extends $t {
  getGeoDataset() {
    return super.getDataset()
  }
  getGeoOptions() {
    return this.chart.options
  }
  getProjectionScale() {
    return this.getScaleForId('projection')
  }
  linkScales() {
    const t = this.getGeoDataset(),
      e = this.getMeta()
    ;(e.xAxisID = 'projection'),
      (t.xAxisID = 'projection'),
      (e.yAxisID = 'projection'),
      (t.yAxisID = 'projection'),
      (e.xScale = this.getScaleForId('projection')),
      (e.yScale = this.getScaleForId('projection')),
      this.getProjectionScale().computeBounds(this.resolveOutline())
  }
  showOutline() {
    return F(this.getGeoDataset().showOutline, this.getGeoOptions().showOutline)
  }
  clipMap() {
    return F(this.getGeoDataset().clipMap, this.getGeoOptions().clipMap)
  }
  getGraticule() {
    return F(this.getGeoDataset().showGraticule, this.getGeoOptions().showGraticule)
  }
  update(t) {
    super.update(t)
    const e = this.getMeta(),
      i = this.getProjectionScale(),
      s = i.updateBounds()
    if (this.showOutline()) {
      const o = e.dataset
      if (
        (s && delete o.cache,
        (o.projectionScale = i),
        (o.pixelRatio = this.chart.currentDevicePixelRatio),
        t !== 'resize')
      ) {
        const a = rc(this.resolveDatasetElementOptions(t)),
          r = { feature: this.resolveOutline(), options: a }
        this.updateElement(o, void 0, r, t), this.getGraticule() && (e.graticule = a)
      }
    } else this.getGraticule() && t !== 'resize' && (e.graticule = rc(this.resolveDatasetElementOptions(t)))
    this.updateElements(e.data, 0, e.data.length, t), s && e.data.forEach((o) => delete o.cache)
  }
  resolveOutline() {
    const e = this.getGeoDataset().outline || { type: 'Sphere' }
    return Array.isArray(e) ? { type: 'FeatureCollection', features: e } : e
  }
  showGraticule() {
    const t = this.getGraticule(),
      e = this.getMeta().graticule
    if (!t || !e) return
    const { ctx: i } = this.chart,
      o = this.getProjectionScale().geoPath.context(i)
    if ((i.save(), i.beginPath(), typeof t == 'boolean')) t && o(I0())
    else {
      const a = kl()
      t.stepMajor && a.stepMajor(t.stepMajor), t.stepMinor && a.stepMinor(t.stepMinor), o(a())
    }
    ;(i.strokeStyle = e.graticuleBorderColor), (i.lineWidth = e.graticuleBorderWidth), i.stroke(), i.restore()
  }
  draw() {
    const { chart: t } = this,
      e = this.clipMap()
    let i = !1
    ;(e === !0 || e === 'outline' || e === 'outline+graticule') && ((i = !0), Ie(t.ctx, t.chartArea)),
      this.showOutline() &&
        this.getMeta().dataset &&
        this.getMeta().dataset.draw.call(this.getMeta().dataset, t.ctx, t.chartArea),
      e === !0 || e === 'graticule' || e === 'outline+graticule'
        ? i || Ie(t.ctx, t.chartArea)
        : i && ((i = !1), ze(t.ctx)),
      this.showGraticule(),
      e === !0 || e === 'items' ? i || Ie(t.ctx, t.chartArea) : i && ((i = !1), ze(t.ctx)),
      this.getMeta().data.forEach((s) => s.draw.call(s, t.ctx, t.chartArea)),
      i && ((i = !1), ze(t.ctx))
  }
}
function hf(n, t, e, i = [], s = []) {
  yt.addControllers(e),
    Array.isArray(i) ? yt.addElements(...i) : yt.addElements(i),
    Array.isArray(s) ? yt.addScales(...s) : yt.addScales(s)
  const o = t
  return (o.type = n), o
}
class mn extends df {
  initialize() {
    super.initialize(), (this.enableOptionSharing = !0)
  }
  linkScales() {
    super.linkScales()
    const t = this.getGeoDataset(),
      e = this.getMeta()
    ;(e.vAxisID = 'color'),
      (e.rAxisID = 'color'),
      (t.vAxisID = 'color'),
      (t.rAxisID = 'color'),
      (e.rScale = this.getScaleForId('color')),
      (e.vScale = e.rScale),
      (e.iScale = e.xScale),
      (e.iAxisID = e.xAxisID),
      (t.iAxisID = e.xAxisID)
  }
  _getOtherScale(t) {
    return t
  }
  parse(t, e) {
    const i = this.getMeta().rScale,
      { data: s } = this.getDataset(),
      o = this._cachedMeta
    for (let a = t; a < t + e; a += 1) o._parsed[a] = { [i.axis]: i.parse(s[a], a) }
  }
  updateElements(t, e, i, s) {
    const o = this.resolveDataElementOptions(e, s),
      a = this.getSharedOptions(o),
      r = this.includeOptions(s, a),
      c = this.getProjectionScale()
    this.updateSharedOptions(a, s, o)
    for (let l = e; l < e + i; l += 1) {
      const f = t[l]
      ;(f.projectionScale = c),
        (f.feature = this._data[l].feature),
        (f.center = this._data[l].center),
        (f.pixelRatio = this.chart.currentDevicePixelRatio)
      const d = f.getCenterPoint(),
        h = { x: d.x, y: d.y }
      r && (h.options = a || this.resolveDataElementOptions(l, s)), this.updateElement(f, l, h, s)
    }
  }
  indexToColor(t) {
    const e = this.getMeta().rScale
    return e.getColorForValue(this.getParsed(t)[e.axis])
  }
}
mn.id = 'choropleth'
mn.defaults = Et({}, [lf, { datasetElementType: fe.id, dataElementType: fe.id }])
mn.overrides = Et({}, [
  ff,
  {
    plugins: {
      tooltip: {
        callbacks: {
          title() {
            return ''
          },
          label(n) {
            var t, e, i, s
            return n.formattedValue == null
              ? (e = (t = n.chart.data) === null || t === void 0 ? void 0 : t.labels) === null || e === void 0
                ? void 0
                : e[n.dataIndex]
              : `${
                  (s = (i = n.chart.data) === null || i === void 0 ? void 0 : i.labels) === null || s === void 0
                    ? void 0
                    : s[n.dataIndex]
                }: ${n.formattedValue}`
          },
        },
      },
      colors: { enabled: !1 },
    },
    scales: { color: { type: ye.id, axis: 'x' } },
    elements: {
      geoFeature: {
        backgroundColor(n) {
          return n.dataIndex == null
            ? null
            : n.chart.getDatasetMeta(n.datasetIndex).controller.indexToColor(n.dataIndex)
        },
      },
    },
  },
])
class e1 extends Dt {
  constructor(t, e) {
    super(t, hf('choropleth', e, mn, fe, [ye, Ue]))
  }
}
e1.id = mn.id
class ci extends df {
  initialize() {
    super.initialize(), (this.enableOptionSharing = !0)
  }
  linkScales() {
    super.linkScales()
    const t = this.getGeoDataset(),
      e = this.getMeta()
    ;(e.vAxisID = 'size'),
      (e.rAxisID = 'size'),
      (t.vAxisID = 'size'),
      (t.rAxisID = 'size'),
      (e.rScale = this.getScaleForId('size')),
      (e.vScale = e.rScale),
      (e.iScale = e.xScale),
      (e.iAxisID = e.xAxisID),
      (t.iAxisID = e.xAxisID)
  }
  _getOtherScale(t) {
    return t
  }
  parse(t, e) {
    const i = this.getMeta().rScale,
      s = this.getDataset().data,
      o = this._cachedMeta
    for (let a = t; a < t + e; a += 1) {
      const r = s[a]
      o._parsed[a] = {
        x: r.longitude == null ? r.x : r.longitude,
        y: r.latitude == null ? r.y : r.latitude,
        [i.axis]: i.parse(r, a),
      }
    }
  }
  updateElements(t, e, i, s) {
    const o = s === 'reset',
      a = this.resolveDataElementOptions(e, s),
      r = this.getSharedOptions(a),
      c = this.includeOptions(s, r),
      l = this.getProjectionScale()
    ;(this.getMeta().rScale._model = a), this.updateSharedOptions(r, s, a)
    for (let f = e; f < e + i; f += 1) {
      const d = t[f],
        h = this.getParsed(f),
        u = l.projection([h.x, h.y]),
        p = { x: u ? u[0] : 0, y: u ? u[1] : 0, skip: Number.isNaN(h.x) || Number.isNaN(h.y) }
      c && ((p.options = r || this.resolveDataElementOptions(f, s)), o && (p.options.radius = 0)),
        this.updateElement(d, f, p, s)
    }
  }
  indexToRadius(t) {
    const e = this.getMeta().rScale
    return e.getSizeForValue(this.getParsed(t)[e.axis])
  }
}
ci.id = 'bubbleMap'
ci.defaults = Et({}, [
  lf,
  { dataElementType: Bn.id, datasetElementType: fe.id, showOutline: !0, clipMap: 'outline+graticule' },
])
ci.overrides = Et({}, [
  ff,
  {
    plugins: {
      tooltip: {
        callbacks: {
          title() {
            return ''
          },
          label(n) {
            var t, e, i, s
            return n.formattedValue == null
              ? (e = (t = n.chart.data) === null || t === void 0 ? void 0 : t.labels) === null || e === void 0
                ? void 0
                : e[n.dataIndex]
              : `${
                  (s = (i = n.chart.data) === null || i === void 0 ? void 0 : i.labels) === null || s === void 0
                    ? void 0
                    : s[n.dataIndex]
                }: ${n.formattedValue}`
          },
        },
      },
    },
    scales: { size: { axis: 'x', type: Ye.id } },
    elements: {
      point: {
        radius(n) {
          return n.dataIndex == null
            ? null
            : n.chart.getDatasetMeta(n.datasetIndex).controller.indexToRadius(n.dataIndex)
        },
        hoverRadius(n) {
          return n.dataIndex == null
            ? null
            : n.chart.getDatasetMeta(n.datasetIndex).controller.indexToRadius(n.dataIndex) + 1
        },
      },
    },
  },
])
class n1 extends Dt {
  constructor(t, e) {
    super(t, hf('bubbleMap', e, ci, fe, [Ye, Ue]))
  }
}
n1.id = ci.id
const i1 = St({
    __name: 'Map',
    props: { options: {}, data: {} },
    setup(n) {
      const { t } = Lt()
      Dt.register(cl, fl, rl, Ze, ts, mn, Ue, ye, fe)
      const e = jt(null)
      function i(o) {
        return o >= 0.9 ? '#63A6F8' : o > 0.4 ? '#8FC0FA' : '#EDF0F1'
      }
      const s = n
      return (
        vf(() => {
          e.value !== null &&
            new Dt(e.value.getContext('2d'), {
              type: 'choropleth',
              data: s.data,
              options: {
                plugins: {
                  legend: { display: !1 },
                  tooltip: {
                    callbacks: {
                      title: function (o) {
                        return o[0].label
                      },
                      label: function (o) {
                        var a
                        return `${t('dashboard.table.revenue')}: $${(
                          ((a = o.raw) == null ? void 0 : a.value) || 0
                        ).toFixed(2)}K`
                      },
                    },
                  },
                },
                scales: {
                  projection: { axis: 'x', projection: 'mercator', projectionScale: 1.6 },
                  color: { axis: 'x', quantize: 5, display: !1, interpolate: i },
                },
                animation: !1,
              },
            })
        }),
        (o, a) => (it(), Jt('canvas', { ref_key: 'canvas', ref: e, style: { 'max-width': '100%' } }, null, 512))
      )
    },
  }),
  s1 = { class: 'card-title text-secondary font-bold uppercase' },
  o1 = St({
    __name: 'RevenueByLocationMap',
    setup(n) {
      const { t } = Lt(),
        e = (o) =>
          ['United States of America', 'Canada', 'United Kingdom', 'China', 'Japan'].includes(o)
            ? 10
            : ['Antarctica', 'Greenland'].includes(o)
              ? 0
              : Math.random() * 10,
        i = jt(null)
      lc(async () => {
        i.value = (
          await Ae(async () => {
            const { default: o } = await import('./geo-C-C7pKt0.js')
            return { default: o }
          }, [])
        ).default
      })
      const s = vt(() =>
        i.value
          ? {
              labels: i.value.features.map((o) => o.properties.name),
              datasets: [
                {
                  label: t('dashboard.cards.countries'),
                  data: i.value.features.map((o) => ({ feature: o, value: e(o.properties.name) })),
                },
              ],
            }
          : { labels: [], datasets: [] },
      )
      return (o, a) => {
        const r = U('VaCardTitle'),
          c = U('VaProgressCircle'),
          l = U('VaAspectRatio'),
          f = U('VaCardContent')
        return (
          it(),
          wt(
            E(ii),
            { class: 'flex flex-col' },
            {
              default: z(() => [
                R(
                  r,
                  { class: 'flex items-center justify-between' },
                  { default: z(() => [A('h1', s1, $(E(t)('dashboard.cards.revenueByLocation')), 1)]), _: 1 },
                ),
                R(
                  f,
                  { class: 'flex-1 flex overflow-hidden' },
                  {
                    default: z(() => [
                      R(
                        l,
                        { class: 'w-full md:min-h-72 overflow-hidden relative flex items-center' },
                        {
                          default: z(() => [
                            i.value
                              ? (it(),
                                wt(i1, { key: 0, data: s.value, class: 'dashboard-map flex-1 h-full' }, null, 8, [
                                  'data',
                                ]))
                              : (it(),
                                wt(c, {
                                  key: 1,
                                  indeterminate: '',
                                  class: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                                })),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  a1 = bs(o1, [['__scopeId', 'data-v-7bcf918c']]),
  r1 = { class: 'flex items-center justify-between' },
  c1 = { class: 'text-lg font-semibold grow' },
  l1 = { class: 'mb-2' },
  f1 = { class: 'text-xs text-secondary' },
  d1 = St({
    __name: 'DataSectionItem',
    props: { title: {}, value: {}, changeText: {}, up: { type: Boolean }, iconBackground: {}, iconColor: {} },
    setup(n) {
      const { t } = Lt(),
        e = n,
        i = vt(() => ({ 'text-success': e.up, 'text-red-600': !e.up }))
      return (s, o) => {
        const a = U('VaCardContent')
        return (
          it(),
          wt(E(ii), null, {
            default: z(() => [
              R(a, null, {
                default: z(() => [
                  A('section', null, [
                    A('header', r1, [
                      A('div', c1, $(s.value), 1),
                      A(
                        'div',
                        { class: 'p-1 rounded', style: Yn({ backgroundColor: s.iconBackground, color: s.iconColor }) },
                        [Hs(s.$slots, 'icon')],
                        4,
                      ),
                    ]),
                    A('div', null, [
                      A('p', l1, $(s.title), 1),
                      A('p', f1, [
                        A(
                          'span',
                          { class: wf(i.value) },
                          [
                            s.up ? (it(), Jt(Yi, { key: 0 }, [q('↑')], 64)) : (it(), Jt(Yi, { key: 1 }, [q('↓')], 64)),
                            q(' ' + $(s.changeText), 1),
                          ],
                          2,
                        ),
                        q(' ' + $(E(t)('dashboard.time.sinceLastMonth')), 1),
                      ]),
                    ]),
                  ]),
                ]),
                _: 3,
              }),
            ]),
            _: 3,
          })
        )
      }
    },
  }),
  h1 = { class: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4' },
  u1 = St({
    __name: 'DataSection',
    setup(n) {
      const { getColor: t } = dc(),
        { t: e } = Lt(),
        i = vt(() => [
          {
            id: 'openInvoices',
            title: e('dashboard.metrics.openInvoices'),
            value: '$35,548',
            icon: 'mso-attach_money',
            changeText: '$1, 450',
            changeDirection: 'down',
            iconBackground: t('success'),
            iconColor: t('on-success'),
          },
          {
            id: 'ongoingProjects',
            title: e('dashboard.metrics.ongoingProjects'),
            value: '15',
            icon: 'mso-folder_open',
            changeText: '25.36%',
            changeDirection: 'up',
            iconBackground: t('info'),
            iconColor: t('on-info'),
          },
          {
            id: 'employees',
            title: e('dashboard.metrics.employees'),
            value: '25',
            icon: 'mso-account_circle',
            changeText: '2.5%',
            changeDirection: 'up',
            iconBackground: t('danger'),
            iconColor: t('on-danger'),
          },
          {
            id: 'newProfit',
            title: e('dashboard.metrics.newProfit'),
            value: '27%',
            icon: 'mso-grade',
            changeText: '4%',
            changeDirection: 'up',
            iconBackground: t('warning'),
            iconColor: t('on-warning'),
          },
        ])
      return (s, o) => {
        const a = U('VaIcon')
        return (
          it(),
          Jt('div', h1, [
            (it(!0),
            Jt(
              Yi,
              null,
              Mf(
                i.value,
                (r) => (
                  it(),
                  wt(
                    d1,
                    {
                      key: r.id,
                      title: r.title,
                      value: r.value,
                      'change-text': r.changeText,
                      up: r.changeDirection === 'up',
                      'icon-background': r.iconBackground,
                      'icon-color': r.iconColor,
                    },
                    { icon: z(() => [R(a, { name: r.icon, size: 'large' }, null, 8, ['name'])]), _: 2 },
                    1032,
                    ['title', 'value', 'change-text', 'up', 'icon-background', 'icon-color'],
                  )
                ),
              ),
              128,
            )),
          ])
        )
      }
    },
  }),
  Li = "'Inter', sans-serif",
  p1 = {
    scales: { x: { ticks: { font: { family: Li } } }, y: { ticks: { font: { family: Li } } } },
    plugins: {
      legend: { position: 'bottom', labels: { font: { color: '#34495e', family: Li, size: 14 }, usePointStyle: !0 } },
      tooltip: { bodyFont: { size: 14, family: Li }, boxPadding: 4 },
    },
    datasets: {
      line: { fill: 'origin', tension: 0.3, borderColor: 'transparent' },
      bubble: { borderColor: 'transparent' },
      bar: { borderColor: 'transparent' },
    },
    maintainAspectRatio: !1,
    animation: !0,
  },
  cc = {
    cutout: '80%',
    scales: {
      x: { display: !1, grid: { display: !1 } },
      y: { display: !1, grid: { display: !1 }, ticks: { display: !1 } },
    },
    plugins: { legend: { display: !1 } },
    datasets: {
      line: { fill: 'origin', tension: 0.3, borderColor: 'transparent' },
      bubble: { borderColor: 'transparent' },
      bar: { borderColor: 'transparent' },
    },
    maintainAspectRatio: !1,
    animation: !0,
  },
  g1 = {
    pie: Xe(Ge(() => Ae(() => import('./PieChart-C8TMdsuP.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))),
    doughnut: Xe(Ge(() => Ae(() => import('./DoughnutChart-CNLzaOXz.js'), __vite__mapDeps([7, 1, 2, 3, 4, 5, 6])))),
    bubble: Xe(Ge(() => Ae(() => import('./BubbleChart-Bbfh61Su.js'), __vite__mapDeps([8, 1, 2, 3, 4, 5, 6])))),
    line: Xe(Ge(() => Ae(() => import('./LineChart-BSmS5uCL.js'), __vite__mapDeps([9, 1, 2, 3, 4, 5, 6])))),
    bar: Xe(Ge(() => Ae(() => import('./BarChart-CfB27JJF.js'), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6])))),
    'horizontal-bar': Xe(
      Ge(() => Ae(() => import('./HorizontalBarChart-DPK0I4sv.js'), __vite__mapDeps([11, 1, 2, 3, 4, 5, 6]))),
    ),
  },
  uf = St({
    name: 'VaChart',
    __name: 'VaChart',
    props: { data: {}, options: {}, type: {} },
    setup(n) {
      const t = n,
        e = g1[t.type],
        i = vt(() => ({ ...p1, ...t.options }))
      return (s, o) => (
        it(),
        wt(Sf(E(e)), { 'chart-data': s.data, data: s.data, options: i.value, class: 'va-chart' }, null, 8, [
          'chart-data',
          'data',
          'options',
        ])
      )
    },
  })
function b1(n = [], t = 0.6) {
  const { getGlobalConfig: e } = kf(),
    { setHSLAColor: i, getColor: s } = dc(),
    o = (f) => (typeof f == 'string' ? i(s(f), { a: t }) : f.map((d) => i(s(d), { a: t }))),
    a = (f) => (typeof f == 'string' ? s(f) : f.map((d) => s(d))),
    r = jt(o(n)),
    c = jt(a(n)),
    l = vt(() => e().colors)
  return (
    Cf(l, () => {
      ;(r.value = o(n)), (c.value = a(n))
    }),
    { generateHSLAColors: o, generateColors: a, generatedColors: c, generatedHSLAColors: r }
  )
}
function pf(n, t) {
  const i = n.datasets.map((s) => s.backgroundColor).map((s) => b1(s, t).generatedColors)
  return vt(() => {
    const s = n.datasets.map((o, a) => ({ ...o, backgroundColor: i[a].value }))
    return { ...n, datasets: s }
  })
}
const gf = '#154EC1',
  bf = '#ECF0F1',
  m1 = {
    labels: ['Profit', 'Expenses'],
    datasets: [{ label: 'Yearly Breakdown', backgroundColor: [gf, bf], data: [432, 167] }],
  },
  x1 = (n) => {
    var e, i
    let t = (e = n.canvas.parentNode) == null ? void 0 : e.querySelector('div')
    if (!t) {
      ;(t = document.createElement('div')),
        (t.style.background = 'rgba(0, 0, 0, 0.7)'),
        (t.style.borderRadius = '3px'),
        (t.style.color = 'white'),
        (t.style.opacity = '1'),
        (t.style.pointerEvents = 'none'),
        (t.style.position = 'absolute'),
        (t.style.left = '0'),
        (t.style.top = '0'),
        (t.style.transition = 'all .1s ease'),
        (t.style.height = 'min-content'),
        (t.style.maxWidth = '200px'),
        (t.style.zIndex = '9999')
      const s = document.createElement('table')
      ;(s.style.margin = '0px'), t.appendChild(s), (i = n.canvas.parentNode) == null || i.appendChild(t)
    }
    return t
  },
  _1 = (n) => {
    const { chart: t, tooltip: e } = n,
      i = x1(t)
    if (e.opacity === 0) {
      i.style.opacity = '0'
      return
    }
    if (e.body) {
      const s = e.title || [],
        o = e.body.map((l) => l.lines),
        a = document.createElement('thead')
      s.forEach((l) => {
        const f = document.createElement('tr')
        f.style.borderWidth = '0'
        const d = document.createElement('th')
        d.style.borderWidth = '0'
        const h = document.createTextNode(l)
        d.appendChild(h), f.appendChild(d), a.appendChild(f)
      })
      const r = document.createElement('tbody')
      o.forEach((l, f) => {
        const d = e.labelColors[f],
          h = document.createElement('span')
        ;(h.style.background = String(d.backgroundColor)),
          (h.style.borderColor = String(d.borderColor)),
          (h.style.borderWidth = '2px'),
          (h.style.marginRight = '10px'),
          (h.style.height = '10px'),
          (h.style.width = '10px'),
          (h.style.display = 'inline-block')
        const u = document.createElement('tr')
        ;(u.style.backgroundColor = 'inherit'), (u.style.borderWidth = '0')
        const p = document.createElement('td')
        p.style.borderWidth = '0'
        const g = document.createTextNode(l)
        p.appendChild(h), p.appendChild(g), u.appendChild(p), r.appendChild(u)
      })
      const c = i.querySelector('table')
      for (; c != null && c.firstChild; ) c.firstChild.remove()
      c == null || c.appendChild(a), c == null || c.appendChild(r)
    }
    ;(i.style.opacity = '1'),
      (i.style.padding = e.options.padding + 'px ' + e.options.padding + 'px'),
      Pf(t.canvas.parentNode, i, { placement: 'top', middleware: [Df(), Af()] }).then(({ x: s, y: o }) => {
        Object.assign(i.style, { left: `${s}px`, top: `${o}px` })
      })
  },
  y1 = { class: 'card-title text-secondary font-bold uppercase' },
  v1 = { class: 'w-1/2' },
  w1 = { class: 'text-xs text-success whitespace-nowrap' },
  M1 = { class: 'text-secondary' },
  S1 = { class: 'my-4 gap-2 flex flex-col' },
  k1 = { class: 'flex items-center' },
  C1 = { class: 'text-secondary' },
  P1 = { class: 'flex items-center' },
  D1 = { class: 'text-secondary' },
  A1 = { class: 'w-1/2 flex items-center h-full flex-1 lg:pl-16 pl-2 -mr-1' },
  O1 = St({
    __name: 'YearlyBreakup',
    setup(n) {
      var o
      const { t } = Lt(),
        e = pf(m1),
        i = vt(() =>
          e.value
            ? {
                ...e.value,
                labels: [t('dashboard.cards.profit'), t('dashboard.cards.expenses')],
                datasets: e.value.datasets.map((a) => ({ ...a, label: t('dashboard.cards.yearlyBreakup') })),
              }
            : null,
        ),
        s = {
          ...cc,
          plugins: { ...cc.plugins, tooltip: { enabled: !1, position: 'nearest', external: _1 } },
          circumference: 360 * (((o = e.value) == null ? void 0 : o.datasets[0].data.reduce((a, r) => a + r, 0)) / 800),
        }
      return (a, r) => {
        const c = U('VaCardTitle'),
          l = U('VaIcon'),
          f = U('VaCardContent')
        return (
          it(),
          wt(E(ii), null, {
            default: z(() => [
              R(
                c,
                { class: 'pb-0!' },
                { default: z(() => [A('h1', y1, $(E(t)('dashboard.cards.yearlyBreakup')), 1)]), _: 1 },
              ),
              R(
                f,
                { class: 'flex flex-row gap-1' },
                {
                  default: z(() => [
                    A('section', v1, [
                      r[1] || (r[1] = A('div', { class: 'text-xl font-bold mb-2' }, '$36,358', -1)),
                      A('p', w1, [
                        R(l, { name: 'arrow_outward' }),
                        r[0] || (r[0] = q(' +2,5% ')),
                        A('span', M1, $(E(t)('dashboard.cards.lastYear')), 1),
                      ]),
                      A('div', S1, [
                        A('div', k1, [
                          A(
                            'span',
                            { class: 'inline-block w-2 h-2 mr-2', style: Yn({ backgroundColor: E(gf) }) },
                            null,
                            4,
                          ),
                          A('span', C1, $(E(t)('dashboard.cards.profit')), 1),
                        ]),
                        A('div', P1, [
                          A(
                            'span',
                            { class: 'inline-block w-2 h-2 mr-2', style: Yn({ backgroundColor: E(bf) }) },
                            null,
                            4,
                          ),
                          A('span', D1, $(E(t)('dashboard.cards.expenses')), 1),
                        ]),
                      ]),
                    ]),
                    A('div', A1, [
                      i.value
                        ? (it(),
                          wt(
                            uf,
                            {
                              key: 0,
                              data: i.value,
                              class: 'chart chart--donut h-[90px] w-[90px]',
                              type: 'doughnut',
                              options: s,
                            },
                            null,
                            8,
                            ['data'],
                          ))
                        : fc('', !0),
                    ]),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  T1 = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Monthly Earnings',
        backgroundColor: 'rgba(75,192,192,0.4)',
        data: [10, 35, 14, 17, 12, 40, 75, 55, 30, 51, 25, 7],
      },
    ],
  },
  E1 = { class: 'card-title text-tag text-secondary font-bold uppercase' },
  R1 = { class: 'p-1 bg-black rounded absolute right-4 top-4' },
  L1 = { class: 'text-xs text-success' },
  I1 = { class: 'text-secondary' },
  z1 = { class: 'w-full flex items-center' },
  F1 = St({
    __name: 'MonthlyEarnings',
    setup(n) {
      const { t } = Lt(),
        e = pf(T1),
        i = {
          scales: {
            x: { display: !1, grid: { display: !1 } },
            y: { display: !1, grid: { display: !1 }, ticks: { display: !1 } },
          },
          interaction: { intersect: !1, mode: 'index' },
          plugins: {
            legend: { display: !1 },
            tooltip: {
              enabled: !0,
              callbacks: {
                title: function () {
                  return t('dashboard.cards.monthlyEarnings')
                },
                label: function (s) {
                  return `${t('dashboard.cards.earnings')}: $${s.parsed.y.toLocaleString()}`
                },
              },
            },
          },
        }
      return (s, o) => {
        const a = U('VaCardTitle'),
          r = U('VaIcon'),
          c = U('VaCardContent')
        return (
          it(),
          wt(E(ii), null, {
            default: z(() => [
              R(a, null, { default: z(() => [A('h1', E1, $(E(t)('dashboard.cards.monthlyEarnings')), 1)]), _: 1 }),
              R(c, null, {
                default: z(() => [
                  A('div', R1, [R(r, { name: 'mso-attach_money', color: '#fff', size: 'large' })]),
                  A('section', null, [
                    o[1] || (o[1] = A('div', { class: 'text-xl font-bold mb-2' }, '$6,820', -1)),
                    A('p', L1, [
                      R(r, { name: 'arrow_upward' }),
                      o[0] || (o[0] = q(' 25.36% ')),
                      A('span', I1, $(E(t)('dashboard.cards.lastMonth')), 1),
                    ]),
                  ]),
                  A('div', z1, [R(uf, { data: E(e), class: 'h-24', type: 'line', options: i }, null, 8, ['data'])]),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  B1 = { class: 'card-title text-secondary font-bold uppercase' },
  N1 = { class: 'flex justify-between' },
  V1 = St({
    __name: 'RegionRevenue',
    setup(n) {
      const { t } = Lt(),
        e = jt('Today'),
        i = vt(() => [
          { label: t('dashboard.time.today'), value: 'Today' },
          { label: t('dashboard.time.week'), value: 'Week' },
          { label: t('dashboard.time.month'), value: 'Month' },
        ]),
        s = vt(() => [
          { key: 'name', label: t('dashboard.table.topRegion') },
          { key: 'revenue', label: t('dashboard.table.revenue'), align: 'right' },
        ]),
        o = [
          { name: 'Japan', revenueToday: '4,748,454', revenueWeek: '30,000,000', revenueMonth: '120,000,000' },
          { name: 'United Kingdom', revenueToday: '405,748', revenueWeek: '2,500,000', revenueMonth: '10,000,000' },
          { name: 'United States', revenueToday: '308,536', revenueWeek: '1,800,000', revenueMonth: '8,000,000' },
          { name: 'China', revenueToday: '250,963', revenueWeek: '1,600,000', revenueMonth: '7,000,000' },
          { name: 'Canada', revenueToday: '29,415', revenueWeek: '180,000', revenueMonth: '800,000' },
          { name: 'Australia', revenueToday: '15,000', revenueWeek: '100,000', revenueMonth: '500,000' },
          { name: 'India', revenueToday: '10,000', revenueWeek: '50,000', revenueMonth: '200,000' },
        ],
        a = () => {
          pl(o, 'region-revenue')
        }
      return (r, c) => {
        const l = U('VaCardTitle'),
          f = U('VaButtonToggle'),
          d = U('VaButton'),
          h = U('VaDataTable'),
          u = U('VaCardContent'),
          p = U('VaCard')
        return (
          it(),
          wt(p, null, {
            default: z(() => [
              R(
                l,
                { class: 'flex justify-between' },
                { default: z(() => [A('h1', B1, $(E(t)('dashboard.cards.revenueByTopRegions')), 1)]), _: 1 },
              ),
              R(
                u,
                { class: 'flex flex-col gap-1' },
                {
                  default: z(() => [
                    A('div', N1, [
                      R(
                        f,
                        {
                          modelValue: e.value,
                          'onUpdate:modelValue': c[0] || (c[0] = (g) => (e.value = g)),
                          options: i.value,
                          color: 'background-element',
                          size: 'small',
                        },
                        null,
                        8,
                        ['modelValue', 'options'],
                      ),
                      R(
                        d,
                        { preset: 'primary', size: 'small', onClick: a },
                        { default: z(() => [q($(E(t)('dashboard.actions.export')), 1)]), _: 1 },
                      ),
                    ]),
                    R(
                      h,
                      { class: 'region-revenue-table', columns: s.value, items: o },
                      { 'cell(revenue)': z(({ rowData: g }) => [q(' $' + $(g[`revenue${e.value}`]), 1)]), _: 1 },
                      8,
                      ['columns'],
                    ),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  $1 = bs(V1, [['__scopeId', 'data-v-f4740b66']]),
  j1 = { class: 'va-timeline-item' },
  W1 = { class: 'va-timeline-item__icon-cell' },
  H1 = { class: 'va-timeline-item__icon' },
  Y1 = { class: 'va-timeline-item__content-cell' },
  U1 = { class: 'va-timeline-item__content' },
  X1 = { class: 'va-timeline-item__date-cell' },
  G1 = St({
    __name: 'va-timeline-item',
    props: { date: { type: String, default: '' } },
    setup(n) {
      return (t, e) => {
        const i = U('VaIcon')
        return (
          it(),
          Jt('tr', j1, [
            A('td', W1, [A('div', H1, [R(i, { name: 'schedule', size: '22px', color: 'backgroundBorder' })])]),
            A('td', Y1, [A('div', U1, [Hs(t.$slots, 'default', {}, void 0, !0)])]),
            A('td', X1, [Hs(t.$slots, 'date', {}, () => [q($(t.$props.date), 1)], !0)]),
          ])
        )
      }
    },
  }),
  De = bs(G1, [['__scopeId', 'data-v-96a7e8cc']]),
  q1 = { class: 'card-title text-secondary font-bold uppercase' },
  K1 = { class: 'mt-4' },
  Z1 = St({
    __name: 'Timeline',
    setup(n) {
      const { t } = Lt()
      return (e, i) => {
        const s = U('VaCardTitle'),
          o = U('RouterLink'),
          a = U('VaCardContent'),
          r = U('VaCard')
        return (
          it(),
          wt(r, null, {
            default: z(() => [
              R(
                s,
                { class: 'flex justify-between' },
                { default: z(() => [A('h1', q1, $(E(t)('dashboard.cards.timeline')), 1)]), _: 1 },
              ),
              R(a, null, {
                default: z(() => [
                  A('table', K1, [
                    A('tbody', null, [
                      R(
                        De,
                        { date: '25m ago' },
                        {
                          default: z(() => [
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[0] || (i[0] = [q('Donald')])), _: 1 },
                            ),
                            q(' ' + $(E(t)('dashboard.timeline.updatedStatus')) + ' ', 1),
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[1] || (i[1] = [q('Refund #1234')])), _: 1 },
                            ),
                            q(' ' + $(E(t)('dashboard.timeline.awaitingResponse')), 1),
                          ]),
                          _: 1,
                        },
                      ),
                      R(
                        De,
                        { date: '1h ago' },
                        {
                          default: z(() => [
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[2] || (i[2] = [q('Lycy Peterson')])), _: 1 },
                            ),
                            q(
                              ' ' +
                                $(E(t)('dashboard.timeline.addedToGroup')) +
                                ', ' +
                                $(E(t)('dashboard.timeline.groupName')) +
                                ' Overtake ',
                              1,
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      R(
                        De,
                        { date: '2h ago' },
                        {
                          default: z(() => [
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[3] || (i[3] = [q('Joseph Rust')])), _: 1 },
                            ),
                            q(' ' + $(E(t)('dashboard.timeline.openedShowcase')) + ' ', 1),
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[4] || (i[4] = [q('Mannat #112233')])), _: 1 },
                            ),
                            q(' ' + $(E(t)('dashboard.timeline.withTheme')), 1),
                          ]),
                          _: 1,
                        },
                      ),
                      R(
                        De,
                        { date: '3d ago' },
                        {
                          default: z(() => [
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[5] || (i[5] = [q('Donald')])), _: 1 },
                            ),
                            q(
                              ' ' +
                                $(E(t)('dashboard.timeline.updatedStatusTo')) +
                                ' ' +
                                $(E(t)('dashboard.timeline.awaitingResponse')),
                              1,
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      R(
                        De,
                        { date: 'Nov 14, 2023' },
                        {
                          default: z(() => [
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[6] || (i[6] = [q('Lycy Peterson')])), _: 1 },
                            ),
                            q(' ' + $(E(t)('dashboard.timeline.addedToGroup')), 1),
                          ]),
                          _: 1,
                        },
                      ),
                      R(
                        De,
                        { date: 'Nov 14, 2023' },
                        {
                          default: z(() => [
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/users' },
                              { default: z(() => i[7] || (i[7] = [q('Dan Rya')])), _: 1 },
                            ),
                            q(' ' + $(E(t)('dashboard.timeline.addedToGroup')), 1),
                          ]),
                          _: 1,
                        },
                      ),
                      R(
                        De,
                        { date: 'Nov 15, 2023' },
                        {
                          default: z(() => [
                            q($(E(t)('dashboard.timeline.projectCreated')) + ' ', 1),
                            R(
                              o,
                              { class: 'va-link font-semibold', to: '/projects' },
                              { default: z(() => i[8] || (i[8] = [q('Vuestic 2023')])), _: 1 },
                            ),
                            q(' ' + $(E(t)('dashboard.timeline.wasCreated')), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  J1 = { class: 'page-title font-bold' },
  Q1 = { class: 'flex flex-col gap-4' },
  tx = { class: 'flex flex-col sm:flex-row gap-4' },
  ex = { class: 'flex flex-col gap-4 w-full sm:w-[30%]' },
  nx = { class: 'flex flex-col md:flex-row gap-4' },
  ix = { class: 'flex flex-col md:flex-row gap-4' },
  sx = St({
    __name: 'Dashboard',
    setup(n) {
      const { t } = Lt()
      return (e, i) => (
        it(),
        Jt(
          Yi,
          null,
          [
            A('h1', J1, $(E(t)('menu.dashboard')), 1),
            A('section', Q1, [
              A('div', tx, [R(Qg, { class: 'w-full sm:w-[70%]' }), A('div', ex, [R(O1, { class: 'h-full' }), R(F1)])]),
              R(u1),
              A('div', nx, [R(a1, { class: 'w-full md:w-4/6' }), R($1, { class: 'w-full md:w-2/6' })]),
              A('div', ix, [R(g0, { class: 'w-full md:w-1/2' }), R(Z1, { class: 'w-full md:w-1/2' })]),
            ]),
          ],
          64,
        )
      )
    },
  }),
  lx = Object.freeze(Object.defineProperty({ __proto__: null, default: sx }, Symbol.toStringTag, { value: 'Module' }))
export {
  Ze as A,
  nn as B,
  Dt as C,
  Re as D,
  ln as L,
  Bn as P,
  fl as a,
  rl as b,
  ts as c,
  pe as d,
  Ii as e,
  Fi as f,
  qs as g,
  zi as h,
  qp as i,
  lx as j,
  cl as p,
}
//# sourceMappingURL=Dashboard-DVRfWaeA.js.map
