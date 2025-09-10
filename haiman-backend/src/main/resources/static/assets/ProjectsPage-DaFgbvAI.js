import { u as de, b as we, a as Ce } from './index-BSHr1LGa.js'
import {
  s as Me,
  r as L,
  p as H,
  m as me,
  i as d,
  d as G,
  l as ae,
  c as M,
  o as i,
  k as x,
  h as o,
  w as h,
  g as v,
  F as O,
  t as P,
  v as R,
  A as ce,
  j as U,
  e as F,
  C as Z,
  N as Y,
  _ as pe,
  P as ue,
  f as _e,
  I as $e,
} from './index-0P5HgXYM.js'
import { v as ve } from './v4-Ch9TGLTe.js'
import { d as Te } from './fabrics-ICBww9Ht.js'
import { u as Se, v as te } from './utils-CXsEiNOM.js'
import { u as Be } from './useToast-BC5rw6nA.js'
const Le = (r) => ({ not_started: '未开始', in_progress: '进行中', completed: '已完成', failed: '失败' })[r] || r,
  W = [
    {
      id: 'material-001-2023-001',
      material_code: 'MAT-001',
      material_name: '钢材-Q235',
      created_at: '2023-12-01T08:00:00Z',
      product_count: 15,
      test_items: ['抗拉强度测试', '硬度测试', '化学成分分析'],
    },
    {
      id: 'material-002-2023-002',
      material_code: 'MAT-002',
      material_name: '铝合金-6061',
      created_at: '2023-12-03T10:30:00Z',
      product_count: 8,
      test_items: ['抗拉强度测试', '耐腐蚀性测试', '表面粗糙度测试'],
    },
    {
      id: 'material-003-2023-003',
      material_code: 'MAT-003',
      material_name: '碳纤维复合材料',
      created_at: '2023-12-05T14:15:00Z',
      product_count: 3,
      test_items: ['拉伸模量测试', '弯曲强度测试', '层间剪切强度测试', '疲劳测试'],
    },
    {
      id: 'material-004-2023-004',
      material_code: 'MAT-004',
      material_name: '不锈钢-304',
      created_at: '2023-12-07T09:45:00Z',
      product_count: 22,
      test_items: ['抗拉强度测试', '耐腐蚀性测试', '硬度测试'],
    },
    {
      id: 'material-005-2023-005',
      material_code: 'MAT-005',
      material_name: '聚合物材料-PVC',
      created_at: '2023-12-10T11:20:00Z',
      product_count: 12,
      test_items: ['拉伸强度测试', '冲击强度测试', '热变形温度测试'],
    },
    {
      id: 'material-006-2023-006',
      material_code: 'MAT-006',
      material_name: '钛合金-Ti6Al4V',
      created_at: '2023-12-12T16:30:00Z',
      product_count: 5,
      test_items: ['抗拉强度测试', '疲劳测试', '生物相容性测试', '密度测试'],
    },
  ],
  Ie = async (r) => {
    await new Promise((b) => setTimeout(b, 300))
    const { search: e, sortBy: a, sortingOrder: s } = r
    let y = [...W]
    ;(y = y.map((b) => ({ ...b, product_count: N.filter((T) => T.material_id === b.id).length }))),
      e &&
        (y = y.filter(
          (b) =>
            b.material_code.toLowerCase().includes(e.toLowerCase()) ||
            b.material_name.toLowerCase().includes(e.toLowerCase()) ||
            b.test_items.some((T) => T.toLowerCase().includes(e.toLowerCase())),
        )),
      a &&
        s &&
        y.sort((b, T) => {
          const w = b[a],
            g = T[a]
          return s === 'asc' ? (w < g ? -1 : w > g ? 1 : 0) : w > g ? -1 : w < g ? 1 : 0
        })
    const { page: t = 1, perPage: p = 10 } = r || {},
      _ = (t - 1) * p,
      f = _ + p
    return { data: y.slice(_, f), pagination: { page: t, perPage: p, total: y.length } }
  },
  ze = async (r) => {
    await new Promise((a) => setTimeout(a, 300))
    const e = { ...r, id: ve(), created_at: new Date().toISOString() }
    return W.unshift(e), [e]
  },
  Ee = async (r) => {
    await new Promise((a) => setTimeout(a, 300))
    const e = W.findIndex((a) => a.id === r.id)
    return e !== -1 && (W[e] = r), [r]
  },
  Ue = async (r) => {
    await new Promise((a) => setTimeout(a, 300))
    const e = W.findIndex((a) => a.id === r.id)
    return (
      e !== -1 &&
        (W.splice(e, 1),
        N.map((s, y) => (s.material_id === r.id ? y : -1))
          .filter((s) => s !== -1)
          .reverse()
          .forEach((s) => {
            N.splice(s, 1)
          })),
      !0
    )
  },
  N = [
    {
      id: 'product-001-001',
      product_serial: 'PROD-001-001',
      product_name: 'Q235钢板-1号',
      material_id: 'material-001-2023-001',
      created_at: '2023-12-01T09:00:00Z',
      status: 'not_started',
      test_items: ['拉伸试验', '冲击试验', '硬度测试'],
    },
    {
      id: 'product-001-002',
      product_serial: 'PROD-001-002',
      product_name: 'Q235钢管-1号',
      material_id: 'material-001-2023-001',
      created_at: '2023-12-01T10:00:00Z',
      status: 'in_progress',
      test_items: ['拉伸试验', '冲击试验', '硬度测试'],
    },
    {
      id: 'product-002-001',
      product_serial: 'PROD-002-001',
      product_name: '6061铝板-1号',
      material_id: 'material-002-2023-002',
      created_at: '2023-12-03T11:00:00Z',
      status: 'completed',
      test_items: ['拉伸试验', '弯曲试验', '腐蚀测试'],
    },
  ],
  Fe = async (r) => (await new Promise((e) => setTimeout(e, 100)), N.filter((e) => e.material_id === r)),
  Ae = async () => (await new Promise((r) => setTimeout(r, 100)), [...N]),
  Oe = async (r, e) => {
    await new Promise((y) => setTimeout(y, 300))
    const a = W.find((y) => y.id === e)
    if (!a) throw new Error('Material not found')
    const s = {
      ...r,
      id: ve(),
      material_id: e,
      created_at: new Date().toISOString(),
      status: r.status || 'not_started',
      test_items: [...a.test_items],
    }
    return N.unshift(s), [s]
  },
  je = async (r) => {
    await new Promise((y) => setTimeout(y, 300))
    const e = W.find((y) => y.id === r.material_id)
    if (!e) throw new Error('Material not found')
    const a = { ...r, test_items: [...e.test_items] },
      s = N.findIndex((y) => y.id === r.id)
    return s !== -1 && (N[s] = a), [a]
  },
  qe = async (r) => {
    await new Promise((a) => setTimeout(a, 300))
    const e = N.findIndex((a) => a.id === r.id)
    return e !== -1 && N.splice(e, 1), !0
  },
  Ne = Me('materials', {
    state: () => ({ items: [], pagination: { page: 1, perPage: 10, total: 0 } }),
    actions: {
      async getAll(r) {
        const { data: e, pagination: a } = await Ie({ ...r.filters, ...r.sorting, ...r.pagination })
        ;(this.items = e), (this.pagination = a)
      },
      async add(r) {
        const [e] = await ze(r)
        return e
      },
      async update(r) {
        const [e] = await Ee(r)
        return e
      },
      async remove(r) {
        return await Ue(r)
      },
    },
  }),
  Qe = () => L({ page: 1, perPage: 10, total: 0 }),
  Re = () => L({ sortBy: 'material_code', sortingOrder: 'asc' }),
  Ze = () => L({ search: '' }),
  Ke = (r) => {
    const e = L(!1),
      a = Ne(),
      { sorting: s = Re(), pagination: y = Qe(), filters: t = Ze() } = {},
      p = async () => {
        ;(e.value = !0), console.log('🔄 Starting fetch, setting isLoading = true')
        try {
          console.log('📞 Calling materialsStore.getAll...'),
            await a.getAll({ pagination: d(y), sorting: d(s), filters: d(t) }),
            (y.value = a.pagination),
            console.log('✅ Data loaded successfully, items count:', a.items.length)
        } catch (w) {
          console.error('❌ Error fetching materials:', w)
        } finally {
          console.log('🏁 Setting isLoading = false'),
            (e.value = !1),
            console.log('📊 Final state - isLoading:', e.value, 'materials count:', a.items.length)
        }
      },
      _ = H(() => a.items)
    return (
      me(() => {
        console.log('� Component mounted, calling fetch...'), p()
      }),
      {
        materials: _,
        isLoading: e,
        pagination: y,
        sorting: s,
        filters: t,
        add: async (w) => {
          e.value = !0
          try {
            await a.add(w), await p()
          } finally {
            e.value = !1
          }
        },
        update: async (w) => {
          e.value = !0
          try {
            await a.update(w), await p()
          } finally {
            e.value = !1
          }
        },
        remove: async (w) => {
          e.value = !0
          try {
            await a.remove(w), await p()
          } finally {
            e.value = !1
          }
        },
        fetch: p,
      }
    )
  },
  j = L(!1),
  q = L([])
function se() {
  return {
    products: q,
    isLoading: j,
    add: async (p, _) => {
      j.value = !0
      try {
        const f = await Oe(p, _)
        return f.length > 0 && q.value.unshift(f[0]), f
      } finally {
        j.value = !1
      }
    },
    update: async (p) => {
      j.value = !0
      try {
        const _ = await je(p)
        if (_.length > 0) {
          const f = q.value.findIndex((b) => b.id === p.id)
          f !== -1 && (q.value[f] = _[0])
        }
        return _
      } finally {
        j.value = !1
      }
    },
    remove: async (p) => {
      j.value = !0
      try {
        const _ = await qe(p)
        if (_) {
          const f = q.value.findIndex((b) => b.id === p.id)
          f !== -1 && q.value.splice(f, 1)
        }
        return _
      } finally {
        j.value = !1
      }
    },
    load: async () => {
      j.value = !0
      try {
        q.value = await Ae()
      } finally {
        j.value = !1
      }
    },
    loadByMaterialId: async (p) => {
      j.value = !0
      try {
        const _ = await Fe(p),
          f = q.value.filter((b) => b.material_id !== p)
        return (q.value = [...f, ..._]), _
      } finally {
        j.value = !1
      }
    },
    getProductsByMaterial: (p) => q.value.filter((_) => _.material_id === p),
    getProductStatusText: Le,
  }
}
const We = { class: 'font-semibold text-primary' },
  He = { class: 'text-secondary' },
  Ge = { key: 0, class: 'flex flex-wrap gap-1' },
  Je = { key: 1, class: 'flex flex-wrap gap-1' },
  Xe = { key: 0, class: 'flex gap-2 items-center' },
  Ye = { key: 1, class: 'flex gap-2 items-center' },
  De = { class: 'flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2' },
  et = { key: 0, class: 'flex' },
  tt = G({
    __name: 'MaterialsTable',
    props: {
      materials: { type: Array, required: !0 },
      loading: { type: Boolean, required: !0 },
      sortBy: { type: String, default: void 0 },
      sortingOrder: { type: String, default: void 0 },
      pagination: { type: Object, required: !0 },
      searchQuery: { type: String, default: '' },
    },
    emits: ['edit', 'delete', 'addProduct', 'editProduct', 'deleteProduct'],
    setup(r, { emit: e }) {
      const { t: a } = ae(),
        { getProductsByMaterial: s } = se(),
        y = H(() =>
          Te([
            { label: a('materials.table.name'), key: 'name', sortable: !1 },
            { label: a('materials.table.description'), key: 'description', sortable: !1 },
            { label: a('materials.table.type'), key: 'type', sortable: !1 },
            { label: a('materials.table.status'), key: 'status', sortable: !1 },
            { label: a('materials.table.testItems'), key: 'test_items', sortable: !1 },
            { label: a('materials.table.actions'), key: 'actions', sortable: !1 },
          ]),
        ),
        t = r,
        p = e,
        _ = de(t, 'sortBy', p),
        f = de(t, 'sortingOrder', p),
        b = L(new Set()),
        T = H(() => {
          if (!t.searchQuery.trim()) return t.materials
          const c = t.searchQuery.toLowerCase().trim()
          return t.materials.filter((n) => {
            const C =
                n.material_code.toLowerCase().includes(c) ||
                n.material_name.toLowerCase().includes(c) ||
                n.test_items.some((B) => B.toLowerCase().includes(c)),
              m = s(n.id).some(
                (B) =>
                  B.product_serial.toLowerCase().includes(c) ||
                  B.product_name.toLowerCase().includes(c) ||
                  B.test_items.some((E) => E.toLowerCase().includes(c)),
              )
            return C || m
          })
        }),
        w = H(() => {
          const c = []
          return (
            T.value.forEach((n) => {
              c.push({ id: n.id, type: 'material', level: 0, material: n })
              const C = s(n.id),
                u = t.searchQuery.trim(),
                m = u
                  ? C.filter((E) => {
                      const K = t.searchQuery.toLowerCase()
                      return (
                        E.product_serial.toLowerCase().includes(K) ||
                        E.product_name.toLowerCase().includes(K) ||
                        E.test_items.some((l) => l.toLowerCase().includes(K))
                      )
                    })
                  : C
              ;(b.value.has(n.id) || (u && m.length > 0)) &&
                (u && m.length > 0 && b.value.add(n.id),
                m.forEach((E) => {
                  c.push({ id: `product-${E.id}`, type: 'product', level: 1, product: E, parentId: n.id })
                }))
            }),
            c
          )
        }),
        g = (c) => {
          b.value.has(c) ? b.value.delete(c) : b.value.add(c)
        },
        V = (c) => {
          for (const n of t.materials) if (s(n.id).some((u) => u.id === c)) return n
        },
        $ = (c) =>
          ({
            not_started: { text: '未开始', color: 'secondary' },
            in_progress: { text: '进行中', color: 'warning' },
            completed: { text: '已完成', color: 'success' },
            failed: { text: '失败', color: 'danger' },
          })[c] || { text: c, color: 'secondary' },
        A = H(() => Math.ceil(t.pagination.total / t.pagination.perPage))
      return (c, n) => {
        const C = M('VaButton'),
          u = M('VaIcon'),
          m = M('VaBadge'),
          B = M('VaDataTable'),
          E = M('VaSelect'),
          K = M('VaPagination')
        return (
          i(),
          x('div', null, [
            o(
              B,
              {
                'sort-by': d(_),
                'onUpdate:sortBy': n[0] || (n[0] = (l) => (Y(_) ? (_.value = l) : null)),
                'sorting-order': d(f),
                'onUpdate:sortingOrder': n[1] || (n[1] = (l) => (Y(f) ? (f.value = l) : null)),
                items: w.value,
                columns: y.value,
                loading: r.loading,
                class: 'materials-tree-table',
              },
              {
                'cell(name)': h(({ rowData: l }) => [
                  v(
                    'div',
                    { class: ce(['flex items-center', l.level > 0 ? 'pl-8' : '']) },
                    [
                      l.type === 'material' && l.material
                        ? (i(),
                          x(
                            O,
                            { key: 0 },
                            [
                              o(
                                C,
                                {
                                  icon: b.value.has(l.material.id) ? 'expand_more' : 'chevron_right',
                                  preset: 'plain',
                                  size: 'small',
                                  class: 'mr-2',
                                  onClick: (I) => g(l.material.id),
                                },
                                null,
                                8,
                                ['icon', 'onClick'],
                              ),
                              o(u, { name: 'inventory', class: 'mr-2 text-primary' }),
                              v('span', We, P(l.material.material_code), 1),
                            ],
                            64,
                          ))
                        : l.type === 'product' && l.product
                          ? (i(),
                            x(
                              O,
                              { key: 1 },
                              [
                                o(u, { name: 'widgets', class: 'mr-2 text-secondary' }),
                                v('span', He, P(l.product.product_serial), 1),
                              ],
                              64,
                            ))
                          : R('', !0),
                    ],
                    2,
                  ),
                ]),
                'cell(description)': h(({ rowData: l }) => [
                  v(
                    'div',
                    { class: ce(['ellipsis max-w-[200px]', l.level > 0 ? 'text-gray-600' : '']) },
                    [
                      l.type === 'material' && l.material
                        ? (i(), x(O, { key: 0 }, [U(P(l.material.material_name), 1)], 64))
                        : l.type === 'product' && l.product
                          ? (i(), x(O, { key: 1 }, [U(P(l.product.product_name), 1)], 64))
                          : R('', !0),
                    ],
                    2,
                  ),
                ]),
                'cell(type)': h(({ rowData: l }) => [
                  l.type === 'material'
                    ? (i(),
                      F(
                        m,
                        { key: 0, text: d(a)('materials.type.material'), color: 'primary', size: 'small' },
                        null,
                        8,
                        ['text'],
                      ))
                    : (i(),
                      F(
                        m,
                        { key: 1, text: d(a)('materials.type.product'), color: 'secondary', size: 'small' },
                        null,
                        8,
                        ['text'],
                      )),
                ]),
                'cell(status)': h(({ rowData: l }) => [
                  l.type === 'material' && l.material
                    ? (i(),
                      F(
                        m,
                        {
                          key: 0,
                          text: d(a)('materials.status.productCount', { count: l.material.product_count }),
                          color: 'info',
                          size: 'small',
                        },
                        null,
                        8,
                        ['text'],
                      ))
                    : l.type === 'product' && l.product
                      ? (i(),
                        F(
                          m,
                          { key: 1, text: $(l.product.status).text, color: $(l.product.status).color, size: 'small' },
                          null,
                          8,
                          ['text', 'color'],
                        ))
                      : R('', !0),
                ]),
                'cell(test_items)': h(({ rowData: l }) => [
                  l.type === 'material' && l.material
                    ? (i(),
                      x('div', Ge, [
                        (i(!0),
                        x(
                          O,
                          null,
                          Z(
                            l.material.test_items,
                            (I) => (i(), F(m, { key: I, text: I, color: 'success', size: 'small' }, null, 8, ['text'])),
                          ),
                          128,
                        )),
                      ]))
                    : l.type === 'product' && l.product
                      ? (i(),
                        x('div', Je, [
                          (i(!0),
                          x(
                            O,
                            null,
                            Z(
                              l.product.test_items,
                              (I) => (
                                i(), F(m, { key: I, text: I, color: 'success', size: 'small' }, null, 8, ['text'])
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : R('', !0),
                ]),
                'cell(actions)': h(({ rowData: l }) => [
                  l.type === 'material' && l.material
                    ? (i(),
                      x('div', Xe, [
                        o(
                          C,
                          {
                            preset: 'primary',
                            size: 'small',
                            color: 'success',
                            icon: 'add',
                            'aria-label': '添加产品',
                            onClick: (I) => c.$emit('addProduct', l.material),
                          },
                          { default: h(() => n[6] || (n[6] = [U(' 添加产品 ')])), _: 2 },
                          1032,
                          ['onClick'],
                        ),
                        o(
                          C,
                          {
                            preset: 'primary',
                            size: 'small',
                            color: 'primary',
                            icon: 'edit',
                            'aria-label': '编辑物料',
                            onClick: (I) => c.$emit('edit', l.material),
                          },
                          { default: h(() => n[7] || (n[7] = [U(' 编辑 ')])), _: 2 },
                          1032,
                          ['onClick'],
                        ),
                        o(
                          C,
                          {
                            preset: 'primary',
                            size: 'small',
                            icon: 'delete',
                            color: 'danger',
                            'aria-label': '删除物料',
                            onClick: (I) => c.$emit('delete', l.material),
                          },
                          { default: h(() => n[8] || (n[8] = [U(' 删除 ')])), _: 2 },
                          1032,
                          ['onClick'],
                        ),
                      ]))
                    : l.type === 'product' && l.product
                      ? (i(),
                        x('div', Ye, [
                          o(
                            C,
                            {
                              preset: 'primary',
                              size: 'small',
                              color: 'primary',
                              icon: 'edit',
                              'aria-label': '编辑产品',
                              onClick: () => {
                                const I = V(l.product.id)
                                I && c.$emit('editProduct', l.product, I)
                              },
                            },
                            { default: h(() => n[9] || (n[9] = [U(' 编辑 ')])), _: 2 },
                            1032,
                            ['onClick'],
                          ),
                          o(
                            C,
                            {
                              preset: 'primary',
                              size: 'small',
                              icon: 'delete',
                              color: 'danger',
                              'aria-label': '删除产品',
                              onClick: () => {
                                const I = V(l.product.id)
                                I && c.$emit('deleteProduct', l.product, I)
                              },
                            },
                            { default: h(() => n[10] || (n[10] = [U(' 删除 ')])), _: 2 },
                            1032,
                            ['onClick'],
                          ),
                        ]))
                      : R('', !0),
                ]),
                _: 1,
              },
              8,
              ['sort-by', 'sorting-order', 'items', 'columns', 'loading'],
            ),
            v('div', De, [
              v('div', null, [
                v(
                  'b',
                  null,
                  P(c.$props.pagination.total) + ' ' + P(d(a)('materials.table.results') || '条结果') + '.',
                  1,
                ),
                U(' ' + P(d(a)('materials.table.resultsPerPage') || '每页显示') + ' ', 1),
                o(
                  E,
                  {
                    modelValue: c.$props.pagination.perPage,
                    'onUpdate:modelValue': n[2] || (n[2] = (l) => (c.$props.pagination.perPage = l)),
                    class: '!w-20',
                    options: [10, 50, 100],
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
              ]),
              A.value > 1
                ? (i(),
                  x('div', et, [
                    o(
                      C,
                      {
                        preset: 'secondary',
                        icon: 'va-arrow-left',
                        'aria-label': d(a)('materials.table.previousPage') || '上一页',
                        disabled: c.$props.pagination.page === 1,
                        onClick: n[3] || (n[3] = (l) => c.$props.pagination.page--),
                      },
                      null,
                      8,
                      ['aria-label', 'disabled'],
                    ),
                    o(
                      C,
                      {
                        class: 'mr-2',
                        preset: 'secondary',
                        icon: 'va-arrow-right',
                        'aria-label': d(a)('materials.table.nextPage') || '下一页',
                        disabled: c.$props.pagination.page === A.value,
                        onClick: n[4] || (n[4] = (l) => c.$props.pagination.page++),
                      },
                      null,
                      8,
                      ['aria-label', 'disabled'],
                    ),
                    o(
                      K,
                      {
                        modelValue: c.$props.pagination.page,
                        'onUpdate:modelValue': n[5] || (n[5] = (l) => (c.$props.pagination.page = l)),
                        'buttons-preset': 'secondary',
                        pages: A.value,
                        'visible-pages': 5,
                        'boundary-links': !1,
                        'direction-links': !1,
                      },
                      null,
                      8,
                      ['modelValue', 'pages'],
                    ),
                  ]))
                : R('', !0),
            ]),
          ])
        )
      }
    },
  }),
  at = pe(tt, [['__scopeId', 'data-v-1419c4a5']]),
  st = { class: 'min-h-[4rem]' },
  lt = { key: 0, class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' },
  ot = { class: 'flex justify-between mt-auto' },
  rt = { key: 1, class: 'space-y-4' },
  nt = { class: 'flex items-center justify-between mb-4' },
  it = { class: 'flex items-center gap-4 flex-1' },
  dt = { class: 'flex-1' },
  ct = { class: 'flex items-center gap-4' },
  ut = { class: 'text-primary font-semibold text-lg' },
  mt = { class: 'va-h5' },
  pt = { class: 'text-[var(--va-secondary)] text-sm mt-1' },
  _t = { class: 'flex items-center gap-2' },
  vt = { class: 'text-[var(--va-secondary)]' },
  ft = { class: 'flex flex-col gap-2 mb-4' },
  gt = { class: 'text-[var(--va-secondary)] text-sm' },
  yt = { class: 'flex flex-wrap gap-1' },
  bt = { class: 'flex justify-between items-center mb-4' },
  xt = { class: 'flex gap-2' },
  ht = { key: 0, class: 'mt-4 border-t pt-4' },
  Vt = { key: 0, class: 'space-y-2' },
  kt = { key: 1, class: 'space-y-3' },
  Pt = { class: 'flex items-center justify-between' },
  wt = { class: 'flex-1' },
  Ct = { class: 'flex items-center gap-4 mb-2' },
  Mt = { class: 'font-medium' },
  $t = { class: 'text-[var(--va-secondary)]' },
  Tt = { class: 'flex items-center gap-4 text-sm text-[var(--va-secondary)]' },
  St = { key: 0, class: 'mt-2' },
  Bt = { class: 'text-xs text-[var(--va-secondary)] mb-1' },
  Lt = { class: 'flex flex-wrap gap-1' },
  It = { class: 'flex gap-1' },
  zt = { key: 2, class: 'p-4 text-center text-[var(--va-secondary)]' },
  Et = { key: 2, class: 'p-4 flex justify-center items-center text-[var(--va-secondary)]' },
  Ut = G({
    __name: 'MaterialsCards',
    props: { materials: { type: Array, required: !0 }, loading: { type: Boolean, required: !0 } },
    emits: ['edit', 'delete', 'addProduct', 'editProduct', 'deleteProduct'],
    setup(r) {
      const { t: e } = ae(),
        { loadByMaterialId: a, getProductStatusText: s, getProductsByMaterial: y } = se(),
        t = L(new Set()),
        p = L(new Map()),
        _ = async (g) => {
          t.value.has(g) ? t.value.delete(g) : (t.value.add(g), p.value.has(g) || (await f(g)))
        },
        f = async (g) => {
          p.value.set(g, !0)
          try {
            await a(g), p.value.set(g, !1)
          } catch (V) {
            p.value.set(g, !1), console.error('加载产品失败:', V)
          }
        },
        b = (g) => t.value.has(g),
        T = (g) => y(g),
        w = (g) => p.value.get(g) || !1
      return (g, V) => {
        const $ = M('VaSkeleton'),
          A = M('VaCardContent'),
          c = M('VaCard'),
          n = M('VaButton'),
          C = M('VaBadge')
        return (
          i(),
          x('div', st, [
            r.loading
              ? (i(),
                x('div', lt, [
                  (i(),
                  x(
                    O,
                    null,
                    Z(6, (u) =>
                      o(
                        c,
                        { key: u, outlined: '' },
                        {
                          default: h(() => [
                            o(
                              A,
                              { class: 'flex flex-col h-full p-4' },
                              {
                                default: h(() => [
                                  o($, { height: '20px', class: 'mb-2' }),
                                  o($, { height: '32px', class: 'mb-4' }),
                                  o($, { height: '20px', class: 'mb-4' }),
                                  o($, { height: '40px', class: 'mb-4' }),
                                  v('div', ot, [
                                    o($, { height: '32px', width: '32px' }),
                                    o($, { height: '32px', width: '32px' }),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 2,
                        },
                        1024,
                      ),
                    ),
                    64,
                  )),
                ]))
              : r.materials.length > 0
                ? (i(),
                  x('div', rt, [
                    (i(!0),
                    x(
                      O,
                      null,
                      Z(
                        r.materials,
                        (u) => (
                          i(),
                          F(
                            c,
                            {
                              key: u.id,
                              style: { '--va-card-outlined-border': '1px solid var(--va-background-element)' },
                              outlined: '',
                            },
                            {
                              default: h(() => [
                                o(
                                  A,
                                  { class: 'flex flex-col' },
                                  {
                                    default: h(() => [
                                      v('div', nt, [
                                        v('div', it, [
                                          o(
                                            n,
                                            {
                                              preset: 'secondary',
                                              icon: b(u.id) ? 'mso-keyboard_arrow_down' : 'mso-keyboard_arrow_right',
                                              size: 'small',
                                              onClick: (m) => _(u.id),
                                            },
                                            null,
                                            8,
                                            ['icon', 'onClick'],
                                          ),
                                          v('div', dt, [
                                            v('div', ct, [
                                              v('div', ut, P(u.material_code), 1),
                                              v('h4', mt, P(u.material_name), 1),
                                            ]),
                                            v('div', pt, P(new Date(u.created_at).toLocaleDateString()), 1),
                                          ]),
                                          v('div', _t, [
                                            v('span', vt, P(d(e)('materials.table.productCount')) + ':', 1),
                                            o(C, { text: u.product_count.toString(), color: 'info' }, null, 8, [
                                              'text',
                                            ]),
                                          ]),
                                        ]),
                                      ]),
                                      v('div', ft, [
                                        v('span', gt, P(d(e)('materials.table.testItems')) + ':', 1),
                                        v('div', yt, [
                                          (i(!0),
                                          x(
                                            O,
                                            null,
                                            Z(
                                              u.test_items,
                                              (m) => (
                                                i(),
                                                F(C, { key: m, text: m, color: 'success', size: 'small' }, null, 8, [
                                                  'text',
                                                ])
                                              ),
                                            ),
                                            128,
                                          )),
                                        ]),
                                      ]),
                                      v('div', bt, [
                                        o(
                                          n,
                                          {
                                            preset: 'primary',
                                            icon: 'mso-add',
                                            onClick: (m) => g.$emit('addProduct', u),
                                          },
                                          { default: h(() => [U(P(d(e)('products.form.addTitle')), 1)]), _: 2 },
                                          1032,
                                          ['onClick'],
                                        ),
                                        v('div', xt, [
                                          o(
                                            n,
                                            {
                                              preset: 'secondary',
                                              icon: 'mso-edit',
                                              color: 'primary',
                                              'aria-label': d(e)('materials.table.editMaterial'),
                                              onClick: (m) => g.$emit('edit', u),
                                            },
                                            { default: h(() => [U(P(d(e)('materials.table.editMaterial')), 1)]), _: 2 },
                                            1032,
                                            ['aria-label', 'onClick'],
                                          ),
                                          o(
                                            n,
                                            {
                                              preset: 'secondary',
                                              icon: 'mso-delete',
                                              color: 'danger',
                                              'aria-label': d(e)('materials.table.deleteMaterial'),
                                              onClick: (m) => g.$emit('delete', u),
                                            },
                                            {
                                              default: h(() => [U(P(d(e)('materials.table.deleteMaterial')), 1)]),
                                              _: 2,
                                            },
                                            1032,
                                            ['aria-label', 'onClick'],
                                          ),
                                        ]),
                                      ]),
                                      b(u.id)
                                        ? (i(),
                                          x('div', ht, [
                                            w(u.id)
                                              ? (i(),
                                                x('div', Vt, [
                                                  (i(),
                                                  x(
                                                    O,
                                                    null,
                                                    Z(3, (m) => o($, { key: m, height: '60px' })),
                                                    64,
                                                  )),
                                                ]))
                                              : T(u.id).length > 0
                                                ? (i(),
                                                  x('div', kt, [
                                                    (i(!0),
                                                    x(
                                                      O,
                                                      null,
                                                      Z(
                                                        T(u.id),
                                                        (m) => (
                                                          i(),
                                                          F(
                                                            c,
                                                            {
                                                              key: m.id,
                                                              class: 'bg-[var(--va-background-secondary)]',
                                                              outlined: '',
                                                            },
                                                            {
                                                              default: h(() => [
                                                                o(
                                                                  A,
                                                                  { class: 'p-4' },
                                                                  {
                                                                    default: h(() => [
                                                                      v('div', Pt, [
                                                                        v('div', wt, [
                                                                          v('div', Ct, [
                                                                            v('span', Mt, P(m.product_serial), 1),
                                                                            v('span', $t, P(m.product_name), 1),
                                                                          ]),
                                                                          v('div', Tt, [
                                                                            v(
                                                                              'span',
                                                                              null,
                                                                              P(
                                                                                new Date(
                                                                                  m.created_at,
                                                                                ).toLocaleDateString(),
                                                                              ),
                                                                              1,
                                                                            ),
                                                                            o(
                                                                              C,
                                                                              {
                                                                                text: d(s)(m.status),
                                                                                color:
                                                                                  m.status === 'completed'
                                                                                    ? 'success'
                                                                                    : m.status === 'in_progress'
                                                                                      ? 'warning'
                                                                                      : 'info',
                                                                                size: 'small',
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['text', 'color'],
                                                                            ),
                                                                          ]),
                                                                          m.test_items && m.test_items.length > 0
                                                                            ? (i(),
                                                                              x('div', St, [
                                                                                v(
                                                                                  'div',
                                                                                  Bt,
                                                                                  P(d(e)('materials.table.testItems')) +
                                                                                    ':',
                                                                                  1,
                                                                                ),
                                                                                v('div', Lt, [
                                                                                  (i(!0),
                                                                                  x(
                                                                                    O,
                                                                                    null,
                                                                                    Z(
                                                                                      m.test_items,
                                                                                      (B) => (
                                                                                        i(),
                                                                                        F(
                                                                                          C,
                                                                                          {
                                                                                            key: B,
                                                                                            text: B,
                                                                                            color: 'success',
                                                                                            size: 'small',
                                                                                          },
                                                                                          null,
                                                                                          8,
                                                                                          ['text'],
                                                                                        )
                                                                                      ),
                                                                                    ),
                                                                                    128,
                                                                                  )),
                                                                                ]),
                                                                              ]))
                                                                            : R('', !0),
                                                                        ]),
                                                                        v('div', It, [
                                                                          o(
                                                                            n,
                                                                            {
                                                                              preset: 'secondary',
                                                                              icon: 'mso-edit',
                                                                              color: 'primary',
                                                                              size: 'small',
                                                                              onClick: (B) => g.$emit('editProduct', m),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['onClick'],
                                                                          ),
                                                                          o(
                                                                            n,
                                                                            {
                                                                              preset: 'secondary',
                                                                              icon: 'mso-delete',
                                                                              color: 'danger',
                                                                              size: 'small',
                                                                              onClick: (B) =>
                                                                                g.$emit('deleteProduct', m),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['onClick'],
                                                                          ),
                                                                        ]),
                                                                      ]),
                                                                    ]),
                                                                    _: 2,
                                                                  },
                                                                  1024,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1024,
                                                          )
                                                        ),
                                                      ),
                                                      128,
                                                    )),
                                                  ]))
                                                : (i(), x('div', zt, '该物料下暂无产品')),
                                          ]))
                                        : R('', !0),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                              ]),
                              _: 2,
                            },
                            1024,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]))
                : (i(), x('div', Et, P(d(e)('materials.noData')), 1)),
          ])
        )
      }
    },
  }),
  Ft = { class: 'mb-4' },
  At = { key: 0, class: 'flex flex-wrap gap-2' },
  Ot = { class: 'flex justify-end flex-col-reverse sm:flex-row mt-4 gap-2' },
  jt = G({
    __name: 'EditMaterialForm',
    props: { material: { type: Object, default: null }, saveButtonLabel: { type: String, default: 'Save' } },
    emits: ['save', 'close'],
    setup(r, { expose: e, emit: a }) {
      const s = r,
        y = { material_code: '', material_name: '', product_count: 0, test_items: [] },
        t = L({ ...y }),
        p = H(() =>
          Object.keys(t.value).some((V) =>
            s.material && s.material[V] !== t.value[V] ? !0 : !s.material && t.value[V] !== y[V],
          ),
        )
      e({ isFormHasUnsavedChanges: p })
      const _ = Se('add-material-form'),
        f = a,
        b = async () => {
          if (t.value.material_code.trim() !== '' && t.value.material_name.trim() !== '' && t.value.product_count > 0)
            if (s.material) {
              const $ = {
                ...s.material,
                material_code: t.value.material_code,
                material_name: t.value.material_name,
                product_count: t.value.product_count,
                test_items: t.value.test_items,
              }
              f('save', $)
            } else f('save', t.value)
        },
        T = L(''),
        w = () => {
          T.value.trim() &&
            !t.value.test_items.includes(T.value.trim()) &&
            (t.value.test_items.push(T.value.trim()), (T.value = ''))
        },
        g = (V) => {
          t.value.test_items.splice(V, 1)
        }
      return (
        s.material &&
          (t.value = {
            material_code: s.material.material_code,
            material_name: s.material.material_name,
            product_count: s.material.product_count,
            test_items: [...s.material.test_items],
          }),
        (V, $) => {
          const A = M('VaInput'),
            c = M('VaButton'),
            n = M('VaBadge'),
            C = M('VaForm')
          return (
            i(),
            F(
              C,
              { ref_key: 'form', ref: _, onKeydown: ue(b, ['enter']) },
              {
                default: h(() => [
                  o(
                    A,
                    {
                      modelValue: t.value.material_code,
                      'onUpdate:modelValue': $[0] || ($[0] = (u) => (t.value.material_code = u)),
                      label: V.$t('materials.form.materialCode'),
                      rules: [d(te).required],
                      class: 'mb-4',
                      name: 'material_code',
                    },
                    null,
                    8,
                    ['modelValue', 'label', 'rules'],
                  ),
                  o(
                    A,
                    {
                      modelValue: t.value.material_name,
                      'onUpdate:modelValue': $[1] || ($[1] = (u) => (t.value.material_name = u)),
                      label: V.$t('materials.form.materialName'),
                      rules: [d(te).required],
                      class: 'mb-4',
                      name: 'material_name',
                    },
                    null,
                    8,
                    ['modelValue', 'label', 'rules'],
                  ),
                  o(
                    A,
                    {
                      modelValue: t.value.product_count,
                      'onUpdate:modelValue': $[2] || ($[2] = (u) => (t.value.product_count = u)),
                      label: V.$t('materials.form.productCount'),
                      type: 'number',
                      rules: [d(te).required],
                      class: 'mb-4',
                      name: 'product_count',
                      min: 0,
                    },
                    null,
                    8,
                    ['modelValue', 'label', 'rules'],
                  ),
                  v('div', Ft, [
                    o(
                      A,
                      {
                        modelValue: T.value,
                        'onUpdate:modelValue': $[3] || ($[3] = (u) => (T.value = u)),
                        label: V.$t('materials.form.addTestItem'),
                        class: 'mb-2',
                        onKeydown: ue(_e(w, ['prevent']), ['enter']),
                      },
                      {
                        appendInner: h(() => [o(c, { preset: 'plain', icon: 'add', color: 'primary', onClick: w })]),
                        _: 1,
                      },
                      8,
                      ['modelValue', 'label', 'onKeydown'],
                    ),
                    t.value.test_items.length > 0
                      ? (i(),
                        x('div', At, [
                          (i(!0),
                          x(
                            O,
                            null,
                            Z(
                              t.value.test_items,
                              (u, m) => (
                                i(),
                                F(
                                  n,
                                  { key: m, text: u, color: 'info' },
                                  {
                                    prepend: h(() => [
                                      o(
                                        c,
                                        {
                                          preset: 'plain',
                                          icon: 'close',
                                          size: 'small',
                                          color: 'danger',
                                          onClick: (B) => g(m),
                                        },
                                        null,
                                        8,
                                        ['onClick'],
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ['text'],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : R('', !0),
                  ]),
                  v('div', Ot, [
                    o(
                      c,
                      { preset: 'secondary', color: 'secondary', onClick: $[4] || ($[4] = (u) => V.$emit('close')) },
                      { default: h(() => [U(P(V.$t('users.cancel')), 1)]), _: 1 },
                    ),
                    o(
                      c,
                      { disabled: !p.value, onClick: b },
                      { default: h(() => [U(P(r.saveButtonLabel), 1)]), _: 1 },
                      8,
                      ['disabled'],
                    ),
                  ]),
                ]),
                _: 1,
              },
              512,
            )
          )
        }
      )
    },
  }),
  qt = { class: 'flex justify-end space-x-2' },
  Nt = G({
    __name: 'EditProductForm',
    props: { editingProduct: { default: null }, loading: { type: Boolean, default: !1 } },
    emits: ['save', 'close'],
    setup(r, { emit: e }) {
      const a = r,
        s = e,
        y = [
          { value: 'not_started', text: '未开始' },
          { value: 'in_progress', text: '进行中' },
          { value: 'completed', text: '已完成' },
          { value: 'failed', text: '失败' },
        ],
        t = L({ product_serial: '', product_name: '', material_id: '', status: 'not_started' })
      $e(
        () => a.editingProduct,
        (_) => {
          _
            ? (t.value = {
                product_serial: _.product_serial,
                product_name: _.product_name,
                material_id: _.material_id,
                status: _.status,
              })
            : (t.value = { product_serial: '', product_name: '', material_id: '', status: 'not_started' })
        },
        { immediate: !0 },
      )
      const p = () => {
        t.value.product_serial.trim() && t.value.product_name.trim() && s('save', { ...t.value })
      }
      return (_, f) => {
        const b = M('VaInput'),
          T = M('VaSelect'),
          w = M('VaButton'),
          g = M('VaForm')
        return (
          i(),
          F(
            g,
            { ref: 'form', onSubmit: _e(p, ['prevent']) },
            {
              default: h(() => [
                o(
                  b,
                  {
                    modelValue: t.value.product_serial,
                    'onUpdate:modelValue': f[0] || (f[0] = (V) => (t.value.product_serial = V)),
                    rules: [(V) => !!V || '产品序列号不能为空'],
                    label: '产品序列号',
                    class: 'mb-4',
                  },
                  null,
                  8,
                  ['modelValue', 'rules'],
                ),
                o(
                  b,
                  {
                    modelValue: t.value.product_name,
                    'onUpdate:modelValue': f[1] || (f[1] = (V) => (t.value.product_name = V)),
                    rules: [(V) => !!V || '产品名称不能为空'],
                    label: '产品名称',
                    class: 'mb-4',
                  },
                  null,
                  8,
                  ['modelValue', 'rules'],
                ),
                o(
                  T,
                  {
                    modelValue: t.value.status,
                    'onUpdate:modelValue': f[2] || (f[2] = (V) => (t.value.status = V)),
                    options: y,
                    'text-by': 'text',
                    'value-by': 'value',
                    label: '状态',
                    class: 'mb-4',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                v('div', qt, [
                  o(
                    w,
                    { preset: 'secondary', onClick: f[3] || (f[3] = (V) => _.$emit('close')) },
                    { default: h(() => f[4] || (f[4] = [U('取消')])), _: 1 },
                  ),
                  o(
                    w,
                    { type: 'submit', loading: _.loading },
                    { default: h(() => [U(P(_.editingProduct ? '更新产品' : '添加产品'), 1)]), _: 1 },
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
  }),
  Qt = { class: 'page-title' },
  Rt = { class: 'flex flex-col md:flex-row gap-2 mb-2 justify-between items-start md:items-center' },
  Zt = { class: 'flex flex-col sm:flex-row gap-2 justify-start items-start sm:items-center' },
  Kt = { key: 0, class: 'va-h5 mb-4' },
  Wt = { key: 1, class: 'va-h5 mb-4' },
  Ht = { key: 0, class: 'va-h5 mb-4' },
  Gt = { key: 1, class: 'va-h5 mb-4' },
  Jt = G({
    __name: 'ProjectsPage',
    setup(r) {
      const e = we('materials-view', !0),
        a = L(''),
        { t: s } = ae(),
        y = Ke(),
        { materials: t, update: p, add: _, isLoading: f, remove: b, pagination: T, sorting: w, fetch: g } = y,
        V = se(),
        { add: $, update: A, remove: c, load: n } = V
      me(async () => {
        await Promise.all([g(), n()])
      })
      const C = L(null),
        u = L(!1),
        m = L(null),
        B = L(!1),
        E = L(null),
        K = (S) => {
          ;(C.value = S), (u.value = !0)
        },
        l = () => {
          ;(C.value = null), (u.value = !0)
        },
        I = (S) => {
          ;(E.value = S), (m.value = null), (B.value = !0)
        },
        le = (S) => {
          ;(m.value = S), (E.value = t.value.find((k) => k.id === S.material_id) || null), (B.value = !0)
        },
        { init: Q } = Be(),
        fe = async (S) => {
          try {
            'id' in S
              ? (await p(S), Q({ message: s('materials.messages.updated'), color: 'success' }))
              : (await _(S), Q({ message: s('materials.messages.created'), color: 'success' })),
              (u.value = !1)
          } catch (k) {
            console.error('❌ Error saving material:', k),
              Q({ message: 'Error saving material: ' + k.message, color: 'danger' })
          }
        },
        { confirm: D } = Ce(),
        oe = async (S) => {
          ;(await D({
            title: s('materials.confirm.deleteTitle'),
            message: s('materials.confirm.deleteMessage', { name: S.material_name }),
            okText: s('materials.confirm.delete'),
            size: 'small',
            maxWidth: '380px',
          })) && (await b(S), Q({ message: s('materials.messages.deleted'), color: 'success' }))
        },
        ge = async (S) => {
          try {
            if (!E.value) throw new Error('No material selected')
            if (m.value) {
              const k = { ...m.value, ...S }
              await A(k), Q({ message: '产品更新成功', color: 'success' })
            } else {
              const k = { ...S, test_items: [] }
              await $(k, E.value.id), Q({ message: '产品添加成功', color: 'success' })
            }
            await g(), (B.value = !1)
          } catch (k) {
            console.error('❌ Error saving product:', k),
              Q({ message: 'Error saving product: ' + k.message, color: 'danger' })
          }
        },
        re = async (S) => {
          if (
            await D({
              title: s('products.confirm.deleteTitle'),
              message: s('products.confirm.deleteMessage', { name: S.product_name }),
              okText: s('products.confirm.delete'),
              size: 'small',
              maxWidth: '380px',
            })
          )
            try {
              await c(S), await g(), Q({ message: s('products.messages.deleted'), color: 'success' })
            } catch (J) {
              console.error('❌ Error deleting product:', J),
                Q({ message: 'Error deleting product: ' + J.message, color: 'danger' })
            }
        },
        ne = L(),
        ye = async (S) => {
          ne.value.isFormHasUnsavedChanges
            ? (await D({ maxWidth: '380px', message: s('materials.confirm.unsavedChanges'), size: 'small' })) && S()
            : S()
        }
      return (S, k) => {
        const J = M('VaButtonToggle'),
          be = M('VaIcon'),
          xe = M('VaInput'),
          he = M('VaButton'),
          Ve = M('VaCardContent'),
          ie = M('VaModal'),
          ke = M('VaCard')
        return (
          i(),
          x(
            O,
            null,
            [
              v('h1', Qt, P(d(s)('menu.projects')), 1),
              o(ke, null, {
                default: h(() => [
                  o(Ve, null, {
                    default: h(() => [
                      v('div', Rt, [
                        v('div', Zt, [
                          o(
                            J,
                            {
                              modelValue: d(e),
                              'onUpdate:modelValue': k[0] || (k[0] = (z) => (Y(e) ? (e.value = z) : null)),
                              color: 'background-element',
                              'border-color': 'background-element',
                              class: 'view-mode-toggle',
                              options: [
                                { label: d(s)('materials.viewMode.cards'), value: !0 },
                                { label: d(s)('materials.viewMode.table'), value: !1 },
                              ],
                            },
                            null,
                            8,
                            ['modelValue', 'options'],
                          ),
                          o(
                            xe,
                            {
                              modelValue: a.value,
                              'onUpdate:modelValue': k[1] || (k[1] = (z) => (a.value = z)),
                              placeholder: d(s)('materials.search.placeholder'),
                              clearable: '',
                              class: 'search-input',
                            },
                            {
                              prependInner: h(() => [o(be, { name: 'search', color: 'secondary', size: 'small' })]),
                              _: 1,
                            },
                            8,
                            ['modelValue', 'placeholder'],
                          ),
                        ]),
                        o(
                          he,
                          { icon: 'add', onClick: l },
                          { default: h(() => [U(P(d(s)('materials.form.addTitle')), 1)]), _: 1 },
                        ),
                      ]),
                      d(e)
                        ? (i(),
                          F(
                            Ut,
                            {
                              key: 0,
                              materials: d(t),
                              loading: d(f),
                              onEdit: K,
                              onDelete: oe,
                              onAddProduct: I,
                              onEditProduct: le,
                              onDeleteProduct: re,
                            },
                            null,
                            8,
                            ['materials', 'loading'],
                          ))
                        : (i(),
                          F(
                            at,
                            {
                              key: 1,
                              'sort-by': d(w).sortBy,
                              'onUpdate:sortBy': k[2] || (k[2] = (z) => (d(w).sortBy = z)),
                              'sorting-order': d(w).sortingOrder,
                              'onUpdate:sortingOrder': k[3] || (k[3] = (z) => (d(w).sortingOrder = z)),
                              pagination: d(T),
                              'onUpdate:pagination': k[4] || (k[4] = (z) => (Y(T) ? (T.value = z) : null)),
                              materials: d(t),
                              loading: d(f),
                              'search-query': a.value,
                              onEdit: K,
                              onDelete: oe,
                              onAddProduct: I,
                              onEditProduct: le,
                              onDeleteProduct: re,
                            },
                            null,
                            8,
                            ['sort-by', 'sorting-order', 'pagination', 'materials', 'loading', 'search-query'],
                          )),
                    ]),
                    _: 1,
                  }),
                  o(
                    ie,
                    {
                      modelValue: u.value,
                      'onUpdate:modelValue': k[5] || (k[5] = (z) => (u.value = z)),
                      size: 'small',
                      'mobile-fullscreen': '',
                      'close-button': '',
                      stateful: '',
                      'hide-default-actions': '',
                      'before-cancel': ye,
                    },
                    {
                      default: h(({ cancel: z, ok: ee }) => [
                        C.value === null
                          ? (i(), x('h1', Kt, P(d(s)('materials.form.addTitle')), 1))
                          : (i(), x('h1', Wt, P(d(s)('materials.form.editTitle')), 1)),
                        o(
                          jt,
                          {
                            ref_key: 'editFormRef',
                            ref: ne,
                            material: C.value,
                            'save-button-label':
                              C.value === null ? d(s)('materials.form.addTitle') : d(s)('users.save'),
                            onClose: z,
                            onSave: (X) => {
                              fe(X), ee()
                            },
                          },
                          null,
                          8,
                          ['material', 'save-button-label', 'onClose', 'onSave'],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['modelValue'],
                  ),
                  o(
                    ie,
                    {
                      modelValue: B.value,
                      'onUpdate:modelValue': k[6] || (k[6] = (z) => (B.value = z)),
                      size: 'small',
                      'mobile-fullscreen': '',
                      'close-button': '',
                      stateful: '',
                      'hide-default-actions': '',
                    },
                    {
                      default: h(({ cancel: z, ok: ee }) => {
                        var X
                        return [
                          m.value === null
                            ? (i(),
                              x(
                                'h1',
                                Ht,
                                P(
                                  d(s)('products.form.addToMaterial', {
                                    materialName: (X = E.value) == null ? void 0 : X.material_name,
                                  }),
                                ),
                                1,
                              ))
                            : (i(), x('h1', Gt, P(d(s)('products.form.editTitle')), 1)),
                          o(
                            Nt,
                            {
                              'editing-product': m.value,
                              onClose: z,
                              onSave: (Pe) => {
                                ge(Pe), ee()
                              },
                            },
                            null,
                            8,
                            ['editing-product', 'onClose', 'onSave'],
                          ),
                        ]
                      }),
                      _: 1,
                    },
                    8,
                    ['modelValue'],
                  ),
                ]),
                _: 1,
              }),
            ],
            64,
          )
        )
      }
    },
  }),
  sa = pe(Jt, [['__scopeId', 'data-v-fa304a22']])
export { sa as default }
//# sourceMappingURL=ProjectsPage-DaFgbvAI.js.map
