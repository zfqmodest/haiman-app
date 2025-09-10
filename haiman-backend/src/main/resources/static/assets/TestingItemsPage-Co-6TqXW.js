import {
  s as ne,
  r as x,
  p as k,
  m as Z,
  i as o,
  d as j,
  l as N,
  c as f,
  o as P,
  e as H,
  w as V,
  g as _,
  h as g,
  t as w,
  N as A,
  I as J,
  j as E,
  k as U,
  F as le,
  _ as ie,
} from './index-0P5HgXYM.js'
import { d as re } from './fabrics-ICBww9Ht.js'
import { u as z, a as Q } from './index-BSHr1LGa.js'
import { u as ce } from './useToast-BC5rw6nA.js'
const G = 'testing-items-data',
  me = () => [
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      item_code: 'TI001',
      item_name: '功能测试项',
      item_type: 'data_analysis',
      description: '验证系统功能是否正常运行',
      created_at: '2024-01-15T10:30:00Z',
    },
    {
      id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
      item_code: 'TI002',
      item_name: '性能评估项',
      item_type: 'average_analysis',
      description: '评估系统性能指标',
      created_at: '2024-01-02T10:30:00Z',
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      item_code: 'TI003',
      item_name: '用户体验评分',
      item_type: 'subjective_analysis',
      description: '主观评价用户体验感受',
      created_at: '2024-02-01T09:45:00Z',
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440004',
      item_code: 'TI004',
      item_name: '数据准确性验证',
      item_type: 'data_analysis',
      description: '验证数据处理的准确性',
      created_at: '2024-02-10T16:20:00Z',
    },
  ],
  L = () => {
    try {
      const s = localStorage.getItem(G)
      if (s) {
        const e = JSON.parse(s)
        return console.log('📦 Loading data from localStorage:', e.length, 'items'), e
      }
    } catch (s) {
      console.warn('Failed to load data from localStorage:', s)
    }
    const a = me()
    return console.log('🏁 Using initial mock data:', a.length, 'items'), a
  },
  $ = (a) => {
    try {
      localStorage.setItem(G, JSON.stringify(a)), console.log('💾 Saved data to localStorage:', a.length, 'items')
    } catch (s) {
      console.warn('Failed to save data to localStorage:', s)
    }
  },
  de = ne('testingItems', {
    state: () => ({ items: [], pagination: { page: 1, perPage: 10, total: 0 } }),
    actions: {
      async getAll(a) {
        console.log('🔄 TestingItemsStore: getAll called with options:', a)
        const s = L()
        await new Promise((t) => setTimeout(t, 500))
        let e = s
        if (a.filters.search) {
          const t = a.filters.search.toLowerCase()
          e = s.filter(
            (y) =>
              y.item_code.toLowerCase().includes(t) ||
              y.item_name.toLowerCase().includes(t) ||
              (y.description && y.description.toLowerCase().includes(t)),
          )
        }
        a.sorting.sortBy &&
          a.sorting.sortingOrder &&
          e.sort((t, y) => {
            const b = t[a.sorting.sortBy],
              r = y[a.sorting.sortBy]
            if (typeof b == 'string' && typeof r == 'string') {
              const u = b.localeCompare(r)
              return a.sorting.sortingOrder === 'desc' ? -u : u
            }
            return typeof b == 'number' && typeof r == 'number'
              ? a.sorting.sortingOrder === 'desc'
                ? r - b
                : b - r
              : 0
          })
        const n = (a.pagination.page - 1) * a.pagination.perPage,
          m = n + a.pagination.perPage,
          v = e.slice(n, m)
        ;(this.items = v),
          (this.pagination = { ...a.pagination, total: e.length }),
          console.log('✅ TestingItemsStore: Data loaded successfully, items:', this.items.length)
      },
      async add(a) {
        console.log('🆕 TestingItemsStore: Adding testing item:', a)
        const s = { ...a, id: `550e8400-e29b-41d4-a716-${Date.now()}`, created_at: new Date().toISOString() }
        console.log('🔨 Created new item with ID:', s.id), await new Promise((n) => setTimeout(n, 300))
        const e = L()
        console.log('📥 Current data before add:', e.length, 'items'),
          e.unshift(s),
          console.log('📤 Data after add:', e.length, 'items'),
          $(e),
          console.log('✅ TestingItemsStore: Testing item added successfully')
      },
      async update(a) {
        console.log('📝 TestingItemsStore: Updating testing item:', a.id), await new Promise((n) => setTimeout(n, 300))
        const s = L(),
          e = s.findIndex((n) => n.id === a.id)
        e !== -1 && ((s[e] = { ...a }), $(s), console.log('✅ TestingItemsStore: Testing item updated successfully'))
      },
      async remove(a) {
        console.log('🗑️ TestingItemsStore: Removing testing item:', a.id), await new Promise((n) => setTimeout(n, 300))
        const s = L(),
          e = s.findIndex((n) => n.id === a.id)
        e !== -1 && (s.splice(e, 1), $(s), console.log('✅ TestingItemsStore: Testing item removed successfully'))
      },
    },
  }),
  ge = () => x({ page: 1, perPage: 10, total: 0 }),
  ue = () => x({ sortBy: 'item_code', sortingOrder: 'asc' }),
  pe = () => x({ search: '' }),
  _e = (a) => {
    const s = x(!1),
      e = de(),
      { sorting: n = ue(), pagination: m = ge(), filters: v = pe() } = {},
      t = async () => {
        ;(s.value = !0), console.log('🔄 Starting fetch, setting isLoading = true')
        try {
          console.log('📞 Calling testingItemsStore.getAll...'),
            await e.getAll({ pagination: o(m), sorting: o(n), filters: o(v) }),
            (m.value = e.pagination),
            console.log('✅ Data loaded successfully, items count:', e.items.length)
        } catch (l) {
          console.error('❌ Error fetching testing items:', l)
        } finally {
          console.log('🏁 Setting isLoading = false'),
            (s.value = !1),
            console.log('📊 Final state - isLoading:', s.value, 'testing items count:', e.items.length)
        }
      },
      y = k(() => e.items)
    return (
      Z(() => {
        console.log('🚀 Component mounted, calling fetch...'), t()
      }),
      {
        testingItems: y,
        isLoading: s,
        pagination: m,
        sorting: n,
        filters: v,
        add: async (l) => {
          s.value = !0
          try {
            await e.add(l), (m.value.page = 1), await t()
          } finally {
            s.value = !1
          }
        },
        update: async (l) => {
          s.value = !0
          try {
            await e.update(l), await t()
          } finally {
            s.value = !1
          }
        },
        remove: async (l) => {
          s.value = !0
          try {
            await e.remove(l), await t()
          } finally {
            s.value = !1
          }
        },
        fetch: t,
      }
    )
  },
  fe = { class: 'flex items-center gap-2' },
  ye = { class: 'font-medium' },
  ve = { class: 'flex gap-2' },
  Ie = j({
    __name: 'TestingItemsTable',
    props: {
      testingItems: { type: Array, required: !0 },
      loading: { type: Boolean, required: !0 },
      sortBy: { type: String, default: void 0 },
      sortingOrder: { type: String, default: void 0 },
      pagination: { type: Object, required: !0 },
      searchQuery: { type: String, default: '' },
    },
    emits: ['edit', 'delete', 'update:sortBy', 'update:sortingOrder'],
    setup(a, { emit: s }) {
      const { t: e } = N(),
        n = k(() =>
          re([
            { label: e('testingItems.table.code'), key: 'code', sortable: !1 },
            { label: e('testingItems.table.testItems'), key: 'item_name', sortable: !1 },
            { label: e('testingItems.table.type'), key: 'type', sortable: !1 },
            { label: e('testingItems.table.description'), key: 'description', sortable: !1 },
            { label: e('testingItems.table.actions'), key: 'actions', sortable: !1 },
          ]),
        ),
        m = a,
        v = s,
        t = z(m, 'sortBy', v),
        y = z(m, 'sortingOrder', v),
        b = (u) =>
          ({
            data_analysis: { label: e('testingItems.types.data_analysis'), color: 'primary' },
            average_analysis: { label: e('testingItems.types.average_analysis'), color: 'success' },
            subjective_analysis: { label: e('testingItems.types.subjective_analysis'), color: 'warning' },
          })[u] || { label: u, color: 'secondary' },
        r = k(() => {
          if (!m.searchQuery) return m.testingItems
          const u = m.searchQuery.toLowerCase()
          return m.testingItems.filter(
            (l) =>
              l.item_code.toLowerCase().includes(u) ||
              l.item_name.toLowerCase().includes(u) ||
              (l.description && l.description.toLowerCase().includes(u)),
          )
        })
      return (u, l) => {
        const S = f('VaIcon'),
          F = f('VaBadge'),
          p = f('VaButton'),
          d = f('VaDataTable')
        return (
          P(),
          H(
            d,
            {
              'sort-by': o(t),
              'onUpdate:sortBy': l[0] || (l[0] = (i) => (A(t) ? (t.value = i) : null)),
              'sorting-order': o(y),
              'onUpdate:sortingOrder': l[1] || (l[1] = (i) => (A(y) ? (y.value = i) : null)),
              columns: n.value,
              items: r.value,
              loading: a.loading,
              'sticky-header': '',
              onRow: () => {},
            },
            {
              'cell(code)': V(({ rowData: i }) => [
                _('div', fe, [g(S, { name: 'science', size: 'small' }), _('span', ye, w(i.item_code), 1)]),
              ]),
              'cell(item_name)': V(({ rowData: i }) => [_('span', null, w(i.item_name), 1)]),
              'cell(type)': V(({ rowData: i }) => [
                g(F, { text: b(i.item_type).label, color: b(i.item_type).color }, null, 8, ['text', 'color']),
              ]),
              'cell(description)': V(({ rowData: i }) => [_('span', null, w(i.description || '-'), 1)]),
              'cell(actions)': V(({ rowData: i }) => [
                _('div', ve, [
                  g(
                    p,
                    {
                      preset: 'secondary',
                      size: 'small',
                      icon: 'edit',
                      'aria-label': 'Edit testing item',
                      onClick: (D) => v('edit', i),
                    },
                    null,
                    8,
                    ['onClick'],
                  ),
                  g(
                    p,
                    {
                      preset: 'secondary',
                      size: 'small',
                      icon: 'delete',
                      color: 'danger',
                      'aria-label': 'Delete testing item',
                      onClick: (D) => v('delete', i),
                    },
                    null,
                    8,
                    ['onClick'],
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ['sort-by', 'sorting-order', 'columns', 'items', 'loading'],
          )
        )
      }
    },
  }),
  be = { class: 'row' },
  he = { class: 'row' },
  Ve = { class: 'row' },
  Te = { class: 'row' },
  we = { class: 'flex gap-2 justify-end' },
  xe = j({
    __name: 'EditTestingItemForm',
    props: { testingItem: { type: Object, default: null }, saveButtonLabel: { type: String, default: '' } },
    emits: ['save', 'close'],
    setup(a, { expose: s, emit: e }) {
      const { t: n } = N(),
        m = a,
        v = e,
        t = x({ item_code: '', item_name: '', item_type: 'data_analysis', description: '' }),
        y = k(() => m.testingItem !== null),
        b = () => {
          t.value = { item_code: '', item_name: '', item_type: 'data_analysis', description: '' }
        }
      J(
        () => m.testingItem,
        (p) => {
          p
            ? (t.value = {
                item_code: p.item_code,
                item_name: p.item_name,
                item_type: p.item_type,
                description: p.description || '',
              })
            : b()
        },
        { immediate: !0 },
      )
      const r = k(
          () => t.value.item_code.trim() !== '' && t.value.item_name.trim() !== '' && t.value.item_type.length > 0,
        ),
        u = k(
          () =>
            t.value.item_code.trim() !== '' ||
            t.value.item_name.trim() !== '' ||
            (t.value.description && t.value.description.trim() !== ''),
        )
      s({ isFormHasUnsavedChanges: u })
      const l = () => {
          var p, d
          if (r.value)
            if (y.value && m.testingItem) {
              const i = {
                ...m.testingItem,
                item_code: t.value.item_code.trim(),
                item_name: t.value.item_name.trim(),
                item_type: t.value.item_type,
                description: ((p = t.value.description) == null ? void 0 : p.trim()) || '',
              }
              v('save', i)
            } else {
              const i = {
                item_code: t.value.item_code.trim(),
                item_name: t.value.item_name.trim(),
                item_type: t.value.item_type,
                description: ((d = t.value.description) == null ? void 0 : d.trim()) || '',
              }
              v('save', i)
            }
        },
        S = () => {
          v('close')
        },
        F = k(() => [
          { value: 'data_analysis', text: n('testingItems.types.data_analysis') },
          { value: 'average_analysis', text: n('testingItems.types.average_analysis') },
          { value: 'subjective_analysis', text: n('testingItems.types.subjective_analysis') },
        ])
      return (p, d) => {
        const i = f('VaInput'),
          D = f('VaSelect'),
          C = f('VaTextarea'),
          O = f('VaButton'),
          M = f('VaForm')
        return (
          P(),
          H(
            M,
            { class: 'flex flex-col gap-4' },
            {
              default: V(() => [
                _('div', be, [
                  g(
                    i,
                    {
                      modelValue: t.value.item_code,
                      'onUpdate:modelValue': d[0] || (d[0] = (h) => (t.value.item_code = h)),
                      label: o(n)('testingItems.form.itemCode'),
                      placeholder: o(n)('testingItems.form.itemCodePlaceholder'),
                      rules: [(h) => !!h.trim() || o(n)('testingItems.form.itemCodeRequired')],
                      required: '',
                    },
                    null,
                    8,
                    ['modelValue', 'label', 'placeholder', 'rules'],
                  ),
                ]),
                _('div', he, [
                  g(
                    i,
                    {
                      modelValue: t.value.item_name,
                      'onUpdate:modelValue': d[1] || (d[1] = (h) => (t.value.item_name = h)),
                      label: o(n)('testingItems.form.itemName'),
                      placeholder: o(n)('testingItems.form.itemNamePlaceholder'),
                      rules: [(h) => !!h.trim() || o(n)('testingItems.form.itemNameRequired')],
                      required: '',
                    },
                    null,
                    8,
                    ['modelValue', 'label', 'placeholder', 'rules'],
                  ),
                ]),
                _('div', Ve, [
                  g(
                    D,
                    {
                      modelValue: t.value.item_type,
                      'onUpdate:modelValue': d[2] || (d[2] = (h) => (t.value.item_type = h)),
                      label: o(n)('testingItems.form.itemType'),
                      options: F.value,
                      'value-by': 'value',
                      'text-by': 'text',
                      required: '',
                    },
                    null,
                    8,
                    ['modelValue', 'label', 'options'],
                  ),
                ]),
                _('div', Te, [
                  g(
                    C,
                    {
                      modelValue: t.value.description,
                      'onUpdate:modelValue': d[3] || (d[3] = (h) => (t.value.description = h)),
                      label: o(n)('testingItems.form.description'),
                      placeholder: o(n)('testingItems.form.descriptionPlaceholder'),
                      rows: '3',
                      autosize: '',
                      counter: '',
                      'max-length': '500',
                    },
                    null,
                    8,
                    ['modelValue', 'label', 'placeholder'],
                  ),
                ]),
                _('div', we, [
                  g(
                    O,
                    { preset: 'secondary', color: 'secondary', onClick: S },
                    { default: V(() => [E(w(o(n)('testingItems.form.cancel')), 1)]), _: 1 },
                  ),
                  g(
                    O,
                    { disabled: !r.value, onClick: l },
                    { default: V(() => [E(w(a.saveButtonLabel || o(n)('testingItems.form.save')), 1)]), _: 1 },
                    8,
                    ['disabled'],
                  ),
                ]),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  Se = { class: 'page-title' },
  Ce = { class: 'flex flex-col md:flex-row gap-2 mb-2 justify-between items-start md:items-center' },
  ke = { class: 'flex flex-col sm:flex-row gap-2 justify-start items-start sm:items-center' },
  Be = { class: 'flex justify-between items-center mt-4 pt-4 border-t border-gray-200' },
  De = { class: 'text-sm text-gray-500' },
  Pe = { class: 'flex items-center gap-4' },
  Fe = { class: 'flex items-center gap-2' },
  Oe = { key: 0, class: 'va-h5 mb-4' },
  Le = { key: 1, class: 'va-h5 mb-4' },
  Me = j({
    __name: 'TestingItemsPage',
    setup(a) {
      const s = x(''),
        { t: e } = N(),
        n = _e(),
        { testingItems: m, update: v, add: t, isLoading: y, remove: b, pagination: r, sorting: u, fetch: l } = n,
        S = async (I) => {
          console.log('🔄 Pagination changed:', I), (r.value = I), await l()
        }
      J(
        u,
        async () => {
          console.log('🔄 Sorting changed:', u.value), await l()
        },
        { deep: !0 },
      ),
        Z(async () => {
          await l()
        })
      const p = x(null),
        d = x(!1),
        i = (I) => {
          ;(p.value = I), (d.value = !0)
        },
        D = () => {
          console.log('🔍 createNewTestingItem called'),
            (p.value = null),
            (d.value = !0),
            console.log('🔍 doShowTestingItemFormModal set to:', d.value)
        },
        { init: C } = ce(),
        O = async (I) => {
          try {
            'id' in I
              ? (await v(I), C({ message: e('testingItems.messages.updated'), color: 'success' }))
              : (await t(I), C({ message: e('testingItems.messages.created'), color: 'success' })),
              (d.value = !1)
          } catch (c) {
            console.error('❌ Error saving testing item:', c),
              C({ message: 'Error saving testing item: ' + c.message, color: 'danger' })
          }
        },
        { confirm: M } = Q(),
        h = async (I) => {
          if (
            await M({
              title: e('testingItems.confirm.deleteTitle'),
              message: e('testingItems.confirm.deleteMessage', { name: I.item_name }),
              okText: e('testingItems.confirm.delete'),
              cancelText: e('testingItems.confirm.cancel'),
            })
          )
            try {
              await b(I), C({ message: e('testingItems.messages.deleted'), color: 'success' })
            } catch (B) {
              console.error('❌ Error deleting testing item:', B),
                C({ message: 'Error deleting testing item: ' + B.message, color: 'danger' })
            }
        },
        R = x(),
        K = async (I) => {
          var c
          if ((c = R.value) != null && c.isFormHasUnsavedChanges) {
            const { confirm: B } = Q()
            ;(await B({
              title: e('testingItems.confirm.unsavedChangesTitle'),
              message: e('testingItems.confirm.unsavedChanges'),
              okText: e('common.confirm'),
              cancelText: e('common.cancel'),
            })) && I()
          } else I()
        }
      return (I, c) => {
        const B = f('VaIcon'),
          q = f('VaInput'),
          Y = f('VaButton'),
          W = f('VaSelect'),
          X = f('VaPagination'),
          ee = f('VaCardContent'),
          te = f('VaModal'),
          se = f('VaCard')
        return (
          P(),
          U(
            le,
            null,
            [
              _('h1', Se, w(o(e)('testingItems.title')), 1),
              g(se, null, {
                default: V(() => [
                  g(ee, null, {
                    default: V(() => [
                      _('div', Ce, [
                        _('div', ke, [
                          g(
                            q,
                            {
                              modelValue: s.value,
                              'onUpdate:modelValue': c[0] || (c[0] = (T) => (s.value = T)),
                              placeholder: o(e)('testingItems.search.placeholder'),
                              clearable: '',
                              class: 'search-input',
                            },
                            {
                              prependInner: V(() => [g(B, { name: 'search', color: 'secondary', size: 'small' })]),
                              _: 1,
                            },
                            8,
                            ['modelValue', 'placeholder'],
                          ),
                        ]),
                        g(
                          Y,
                          { icon: 'add', onClick: c[1] || (c[1] = () => D()) },
                          { default: V(() => [E(w(o(e)('testingItems.form.addTitle')), 1)]), _: 1 },
                        ),
                      ]),
                      g(
                        Ie,
                        {
                          'testing-items': o(m),
                          loading: o(y),
                          pagination: o(r),
                          'sort-by': o(u).sortBy,
                          'sorting-order': o(u).sortingOrder,
                          'onUpdate:pagination': S,
                          onEdit: i,
                          onDelete: h,
                        },
                        null,
                        8,
                        ['testing-items', 'loading', 'pagination', 'sort-by', 'sorting-order'],
                      ),
                      _('div', Be, [
                        _('div', De, w(o(r).total) + ' 条结果.', 1),
                        _('div', Pe, [
                          _('div', Fe, [
                            c[7] || (c[7] = _('span', { class: 'text-sm' }, '每页显示', -1)),
                            g(
                              W,
                              {
                                modelValue: o(r).perPage,
                                'onUpdate:modelValue': [
                                  c[2] || (c[2] = (T) => (o(r).perPage = T)),
                                  c[3] || (c[3] = (T) => S(o(r))),
                                ],
                                options: [
                                  { value: 10, text: '10' },
                                  { value: 20, text: '20' },
                                  { value: 50, text: '50' },
                                ],
                                style: { width: '80px' },
                              },
                              null,
                              8,
                              ['modelValue'],
                            ),
                          ]),
                          g(
                            X,
                            {
                              modelValue: o(r).page,
                              'onUpdate:modelValue': [
                                c[4] || (c[4] = (T) => (o(r).page = T)),
                                c[5] || (c[5] = (T) => S(o(r))),
                              ],
                              pages: Math.ceil(o(r).total / o(r).perPage),
                              'visible-pages': 5,
                            },
                            null,
                            8,
                            ['modelValue', 'pages'],
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }),
                  g(
                    te,
                    {
                      modelValue: d.value,
                      'onUpdate:modelValue': c[6] || (c[6] = (T) => (d.value = T)),
                      size: 'small',
                      'mobile-fullscreen': '',
                      'close-button': '',
                      stateful: '',
                      'hide-default-actions': '',
                      'before-cancel': K,
                    },
                    {
                      default: V(({ cancel: T, ok: ae }) => [
                        p.value === null
                          ? (P(), U('h1', Oe, w(o(e)('testingItems.form.addTitle')), 1))
                          : (P(), U('h1', Le, w(o(e)('testingItems.form.editTitle')), 1)),
                        g(
                          xe,
                          {
                            ref_key: 'editFormRef',
                            ref: R,
                            'testing-item': p.value,
                            'save-button-label':
                              p.value === null ? o(e)('testingItems.form.addTitle') : o(e)('users.save'),
                            onClose: T,
                            onSave: (oe) => {
                              O(oe), ae()
                            },
                          },
                          null,
                          8,
                          ['testing-item', 'save-button-label', 'onClose', 'onSave'],
                        ),
                      ]),
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
  Ne = ie(Me, [['__scopeId', 'data-v-b45ca1a4']])
export { Ne as default }
//# sourceMappingURL=TestingItemsPage-Co-6TqXW.js.map
