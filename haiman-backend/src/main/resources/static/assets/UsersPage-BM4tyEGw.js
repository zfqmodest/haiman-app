import { d as Y } from './fabrics-ICBww9Ht.js'
import { u as q, a as E } from './index-BSHr1LGa.js'
import { _ as A, u as Z } from './useUsers-CVVRekrF.js'
import {
  d as T,
  l as N,
  p as O,
  M as ee,
  c as m,
  o as M,
  k as F,
  h as o,
  w as p,
  g as i,
  j,
  t as f,
  i as e,
  N as z,
  v as R,
  F as D,
  _ as se,
  r as k,
  I as le,
  e as ae,
  x as oe,
} from './index-0P5HgXYM.js'
import { u as te, v as C } from './utils-CXsEiNOM.js'
import { u as re } from './useToast-BC5rw6nA.js'
import './v4-Ch9TGLTe.js'
const ne = { class: 'flex items-center gap-2 max-w-[230px] ellipsis' },
  ue = { class: 'max-w-[120px] ellipsis' },
  ie = { class: 'ellipsis max-w-[200px]' },
  de = { class: 'ellipsis max-w-[230px]' },
  me = { class: 'flex gap-3 justify-start items-center' },
  pe = { class: 'flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2' },
  ce = { key: 0, class: 'flex' },
  fe = T({
    __name: 'UsersTable',
    props: {
      users: { type: Array, required: !0 },
      loading: { type: Boolean, default: !1 },
      pagination: { type: Object, required: !0 },
      sortBy: { type: String, required: !0 },
      sortingOrder: { type: String, default: null },
    },
    emits: ['edit-user', 'delete-user', 'update:sortBy', 'update:sortingOrder'],
    setup(w, { emit: _ }) {
      const { t: n } = N(),
        r = O(() =>
          Y([
            { label: n('users.fullName'), key: 'fullname', sortable: !0 },
            { label: n('users.username'), key: 'username', sortable: !0 },
            { label: n('users.phone'), key: 'phone', sortable: !0 },
            { label: n('users.email'), key: 'email', sortable: !0 },
            { label: n('users.role'), key: 'role', sortable: !0 },
            { label: n('users.status'), key: 'status', sortable: !0 },
            { label: n('users.actions'), key: 'actions', align: 'left' },
          ]),
        ),
        c = w,
        d = _,
        x = ee(c, 'users'),
        t = q(c, 'sortBy', d),
        U = q(c, 'sortingOrder', d),
        g = { 1: 'primary', 2: 'info', 3: 'background-element' },
        $ = (s) => {
          switch (s) {
            case 1:
              return '管理员'
            case 2:
              return '测试人员'
            case 3:
              return '普通人员'
            default:
              return '未知角色'
          }
        },
        v = O(() => Math.ceil(c.pagination.total / c.pagination.perPage)),
        { confirm: B } = E(),
        b = async (s) => {
          ;(await B({
            title: n('users.deleteUserTitle'),
            message: n('users.deleteUserMessage', { name: s.fullname }),
            okText: n('users.delete'),
            cancelText: n('users.cancel'),
            size: 'small',
            maxWidth: '380px',
          })) && d('delete-user', s)
        }
      return (s, u) => {
        const h = m('VaBadge'),
          V = m('VaButton'),
          S = m('VaDataTable'),
          P = m('VaSelect'),
          a = m('VaPagination')
        return (
          M(),
          F(
            D,
            null,
            [
              o(
                S,
                {
                  'sort-by': e(t),
                  'onUpdate:sortBy': u[0] || (u[0] = (l) => (z(t) ? (t.value = l) : null)),
                  'sorting-order': e(U),
                  'onUpdate:sortingOrder': u[1] || (u[1] = (l) => (z(U) ? (U.value = l) : null)),
                  columns: r.value,
                  items: x.value,
                  loading: s.$props.loading,
                },
                {
                  'cell(fullname)': p(({ rowData: l }) => [
                    i('div', ne, [o(A, { user: l, size: 'small' }, null, 8, ['user']), j(' ' + f(l.fullname), 1)]),
                  ]),
                  'cell(username)': p(({ rowData: l }) => [i('div', ue, f(l.username), 1)]),
                  'cell(email)': p(({ rowData: l }) => [i('div', ie, f(l.email), 1)]),
                  'cell(phone)': p(({ rowData: l }) => [i('div', de, f(l.phone), 1)]),
                  'cell(role)': p(({ rowData: l }) => [
                    o(h, { text: $(l.role), color: g[l.role] }, null, 8, ['text', 'color']),
                  ]),
                  'cell(actions)': p(({ rowData: l }) => [
                    i('div', me, [
                      o(
                        V,
                        {
                          preset: 'primary',
                          size: 'small',
                          icon: 'mso-edit',
                          'aria-label': e(n)('users.editUserAria'),
                          onClick: (I) => s.$emit('edit-user', l),
                        },
                        null,
                        8,
                        ['aria-label', 'onClick'],
                      ),
                      o(
                        V,
                        {
                          preset: 'primary',
                          size: 'small',
                          icon: 'mso-delete',
                          color: 'danger',
                          'aria-label': e(n)('users.deleteUserAria'),
                          disabled: l.role === 1,
                          title: l.role === 1 ? e(n)('users.cannotDeleteAdmin') : '',
                          onClick: (I) => b(l),
                        },
                        null,
                        8,
                        ['aria-label', 'disabled', 'title', 'onClick'],
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ['sort-by', 'sorting-order', 'columns', 'items', 'loading'],
              ),
              i('div', pe, [
                i('div', null, [
                  i('b', null, f(s.$props.pagination.total) + ' ' + f(e(n)('users.results')) + '.', 1),
                  j(' ' + f(e(n)('users.resultsPerPage')) + ' ', 1),
                  o(
                    P,
                    {
                      modelValue: s.$props.pagination.perPage,
                      'onUpdate:modelValue': u[2] || (u[2] = (l) => (s.$props.pagination.perPage = l)),
                      class: '!w-20',
                      options: [10, 50, 100],
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                ]),
                v.value > 1
                  ? (M(),
                    F('div', ce, [
                      o(
                        V,
                        {
                          preset: 'secondary',
                          icon: 'va-arrow-left',
                          'aria-label': e(n)('users.previousPage'),
                          disabled: s.$props.pagination.page === 1,
                          onClick: u[3] || (u[3] = (l) => s.$props.pagination.page--),
                        },
                        null,
                        8,
                        ['aria-label', 'disabled'],
                      ),
                      o(
                        V,
                        {
                          class: 'mr-2',
                          preset: 'secondary',
                          icon: 'va-arrow-right',
                          'aria-label': e(n)('users.nextPage'),
                          disabled: s.$props.pagination.page === v.value,
                          onClick: u[4] || (u[4] = (l) => s.$props.pagination.page++),
                        },
                        null,
                        8,
                        ['aria-label', 'disabled'],
                      ),
                      o(
                        a,
                        {
                          modelValue: s.$props.pagination.page,
                          'onUpdate:modelValue': u[5] || (u[5] = (l) => (s.$props.pagination.page = l)),
                          'buttons-preset': 'secondary',
                          pages: v.value,
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
            ],
            64,
          )
        )
      }
    },
  }),
  ve = se(fe, [['__scopeId', 'data-v-5fb640c1']]),
  ge = { class: 'self-stretch justify-start items-center gap-4 inline-flex' },
  be = { class: 'self-stretch flex-col justify-start items-start gap-4 flex' },
  Ve = { class: 'flex gap-4 flex-col sm:flex-row w-full' },
  ye = { class: 'flex gap-4 flex-col sm:flex-row w-full' },
  we = { class: 'w-full sm:w-1/2' },
  _e = { key: 0, class: 'text-gray-500' },
  xe = { class: 'flex gap-4 flex-col sm:flex-row w-full' },
  Ue = { class: 'flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center' },
  $e = T({
    __name: 'EditUserForm',
    props: {
      user: { type: Object, default: null },
      saveButtonLabel: { type: String, default: 'Save' },
      loading: { type: Boolean, default: !1 },
    },
    emits: ['close', 'save'],
    setup(w, { expose: _, emit: n }) {
      const { t: r } = N(),
        c = k(!1),
        d = w,
        x = {
          avatar: '',
          fullname: '',
          role: 3,
          username: '',
          email: '',
          password: '',
          notes: '',
          phone: '',
          active: !0,
        },
        t = k({ ...x }),
        U = O(() =>
          Object.keys(t.value).some((b) => {
            var s
            return b === 'avatar' ? !1 : t.value[b] !== ((s = d.user ?? x) == null ? void 0 : s[b])
          }),
        )
      _({ isFormHasUnsavedChanges: U }),
        le(
          () => d.user,
          () => {
            d.user && (t.value = { ...d.user, avatar: '' })
          },
          { immediate: !0 },
        )
      const g = te('add-user-form'),
        $ = n,
        v = () => {
          g.validate() && $('save', t.value)
        },
        B = O(() =>
          d.user && d.user.role === 1
            ? [
                { text: '管理员', value: 1 },
                { text: '测试人员', value: 2 },
                { text: '普通人员', value: 3 },
              ]
            : [
                { text: '测试人员', value: 2 },
                { text: '普通人员', value: 3 },
              ],
        )
      return (b, s) => {
        const u = m('VaInput'),
          h = m('VaButton'),
          V = m('VaSelect'),
          S = m('VaForm')
        return (
          M(),
          ae(
            S,
            { ref: 'add-user-form', class: 'flex-col justify-start items-start gap-4 inline-flex w-full' },
            {
              default: p(({ isValid: P }) => [
                i('div', ge, [o(A, { user: t.value, size: 'large' }, null, 8, ['user'])]),
                i('div', be, [
                  i('div', Ve, [
                    o(
                      u,
                      {
                        modelValue: t.value.fullname,
                        'onUpdate:modelValue': s[0] || (s[0] = (a) => (t.value.fullname = a)),
                        label: e(r)('users.fullName'),
                        class: 'w-full sm:w-1/2',
                        rules: [e(C).required],
                        name: 'fullName',
                      },
                      null,
                      8,
                      ['modelValue', 'label', 'rules'],
                    ),
                    o(
                      u,
                      {
                        modelValue: t.value.username,
                        'onUpdate:modelValue': s[1] || (s[1] = (a) => (t.value.username = a)),
                        label: e(r)('users.username'),
                        class: 'w-full sm:w-1/2',
                        rules: [e(C).required],
                        name: 'username',
                      },
                      null,
                      8,
                      ['modelValue', 'label', 'rules'],
                    ),
                  ]),
                  i('div', ye, [
                    o(
                      u,
                      {
                        modelValue: t.value.email,
                        'onUpdate:modelValue': s[2] || (s[2] = (a) => (t.value.email = a)),
                        label: e(r)('users.email'),
                        class: 'w-full sm:w-1/2',
                        rules: [e(C).required],
                        name: 'email',
                        type: 'email',
                      },
                      null,
                      8,
                      ['modelValue', 'label', 'rules'],
                    ),
                    i('div', we, [
                      o(
                        u,
                        {
                          modelValue: t.value.password,
                          'onUpdate:modelValue': s[4] || (s[4] = (a) => (t.value.password = a)),
                          label: e(r)('users.password'),
                          class: 'w-full',
                          rules: d.user ? [] : [e(C).required],
                          name: 'password',
                          type: c.value ? 'text' : 'password',
                          placeholder: d.user ? e(r)('users.passwordInputHint') : '',
                        },
                        {
                          append: p(() => [
                            o(
                              h,
                              {
                                icon: c.value ? 'visibility' : 'visibility_off',
                                size: 'small',
                                preset: 'secondary',
                                'aria-label': c.value ? e(r)('users.hidePassword') : e(r)('users.showPassword'),
                                onClick: s[3] || (s[3] = (a) => (c.value = !c.value)),
                              },
                              null,
                              8,
                              ['icon', 'aria-label'],
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['modelValue', 'label', 'rules', 'type', 'placeholder'],
                      ),
                      d.user ? (M(), F('small', _e, f(e(r)('users.passwordChangeHint')), 1)) : R('', !0),
                    ]),
                  ]),
                  i('div', xe, [
                    o(
                      u,
                      {
                        modelValue: t.value.phone,
                        'onUpdate:modelValue': s[5] || (s[5] = (a) => (t.value.phone = a)),
                        label: e(r)('users.phone'),
                        class: 'w-full sm:w-1/2',
                        rules: [e(C).required],
                        name: 'phone',
                      },
                      null,
                      8,
                      ['modelValue', 'label', 'rules'],
                    ),
                    o(
                      V,
                      {
                        modelValue: t.value.role,
                        'onUpdate:modelValue': s[6] || (s[6] = (a) => (t.value.role = a)),
                        label: e(r)('users.role'),
                        class: 'w-full sm:w-1/2',
                        options: B.value,
                        rules: [e(C).required],
                        name: 'role',
                        'value-by': 'value',
                      },
                      null,
                      8,
                      ['modelValue', 'label', 'options', 'rules'],
                    ),
                  ]),
                  i('div', Ue, [
                    o(
                      h,
                      {
                        preset: 'secondary',
                        color: 'secondary',
                        disabled: w.loading,
                        onClick: s[7] || (s[7] = (a) => b.$emit('close')),
                      },
                      { default: p(() => [j(f(e(r)('users.cancel')), 1)]), _: 1 },
                      8,
                      ['disabled'],
                    ),
                    o(
                      h,
                      { disabled: !P || w.loading, loading: w.loading, onClick: v },
                      { default: p(() => [j(f(w.saveButtonLabel), 1)]), _: 2 },
                      1032,
                      ['disabled', 'loading'],
                    ),
                  ]),
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
  he = { class: 'page-title' },
  Ce = { class: 'flex flex-col md:flex-row gap-2 mb-2 justify-between' },
  ke = { class: 'flex flex-col md:flex-row gap-2 justify-start' },
  Be = { class: 'va-h5' },
  Te = T({
    __name: 'UsersPage',
    setup(w) {
      const _ = k(!1),
        n = k(!1),
        { t: r } = N(),
        { users: c, isLoading: d, filters: x, sorting: t, pagination: U, error: g, ...$ } = Z(),
        v = k(null),
        B = (a) => {
          ;(v.value = a), (_.value = !0)
        },
        b = () => {
          ;(v.value = null), (_.value = !0)
        },
        { init: s } = re()
      oe(() => {
        g.value && s({ message: g.value.message, color: 'danger' })
      })
      const u = async (a) => {
          n.value = !0
          try {
            if (
              ((a.avatar = ''),
              v.value
                ? (await $.update(a),
                  g.value || s({ message: r('users.userUpdated', { name: a.fullname }), color: 'success' }))
                : (await $.add(a),
                  g.value || s({ message: r('users.userCreated', { name: a.fullname }), color: 'success' })),
              g.value)
            )
              throw g.value
          } finally {
            n.value = !1
          }
        },
        h = async (a) => {
          await $.remove(a), s({ message: r('users.userDeleted', { name: a.fullname }), color: 'success' })
        },
        V = k(),
        { confirm: S } = E(),
        P = async (a) => {
          V.value.isFormHasUnsavedChanges
            ? (await S({ maxWidth: '380px', message: r('users.formUnsavedChanges'), size: 'small' })) && a()
            : a()
        }
      return (a, l) => {
        const I = m('VaIcon'),
          H = m('VaInput'),
          L = m('VaButton'),
          W = m('VaCardContent'),
          G = m('VaCard'),
          J = m('VaModal')
        return (
          M(),
          F(
            D,
            null,
            [
              i('h1', he, f(e(r)('users.title')), 1),
              o(G, null, {
                default: p(() => [
                  o(W, null, {
                    default: p(() => [
                      i('div', Ce, [
                        i('div', ke, [
                          o(
                            H,
                            {
                              modelValue: e(x).search,
                              'onUpdate:modelValue': l[0] || (l[0] = (y) => (e(x).search = y)),
                              placeholder: e(r)('users.search'),
                            },
                            {
                              prependInner: p(() => [o(I, { name: 'search', color: 'secondary', size: 'small' })]),
                              _: 1,
                            },
                            8,
                            ['modelValue', 'placeholder'],
                          ),
                        ]),
                        o(L, { onClick: b }, { default: p(() => [j(f(e(r)('users.addUser')), 1)]), _: 1 }),
                      ]),
                      o(
                        ve,
                        {
                          'sort-by': e(t).sortBy,
                          'onUpdate:sortBy': l[1] || (l[1] = (y) => (e(t).sortBy = y)),
                          'sorting-order': e(t).sortingOrder,
                          'onUpdate:sortingOrder': l[2] || (l[2] = (y) => (e(t).sortingOrder = y)),
                          users: e(c),
                          loading: e(d),
                          pagination: e(U),
                          onEditUser: B,
                          onDeleteUser: h,
                        },
                        null,
                        8,
                        ['sort-by', 'sorting-order', 'users', 'loading', 'pagination'],
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
              o(
                J,
                {
                  modelValue: _.value,
                  'onUpdate:modelValue': l[3] || (l[3] = (y) => (_.value = y)),
                  size: 'small',
                  'mobile-fullscreen': '',
                  'close-button': '',
                  'hide-default-actions': '',
                  'before-cancel': P,
                },
                {
                  default: p(({ cancel: y, ok: K }) => [
                    i('h1', Be, f(v.value ? e(r)('users.editUser') : e(r)('users.addUser')), 1),
                    o(
                      $e,
                      {
                        ref_key: 'editFormRef',
                        ref: V,
                        user: v.value,
                        loading: n.value,
                        'save-button-label': v.value ? e(r)('users.save') : e(r)('users.addUser'),
                        onClose: y,
                        onSave: async (Q) => {
                          try {
                            await u(Q), K()
                          } catch (X) {
                            console.error('Save failed:', X)
                          }
                        },
                      },
                      null,
                      8,
                      ['user', 'loading', 'save-button-label', 'onClose', 'onSave'],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
            ],
            64,
          )
        )
      }
    },
  })
export { Te as default }
//# sourceMappingURL=UsersPage-BM4tyEGw.js.map
