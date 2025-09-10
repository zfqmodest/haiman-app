import { d as v, c as y, o as U, e as E, O as g, s as A, r as d, I as k, p as P, i as m } from './index-0P5HgXYM.js'
import { v as j } from './v4-Ch9TGLTe.js'
const L = v({
    __name: 'UserAvatar',
    props: { user: { type: Object, required: !0 }, size: { type: String, default: 'medium' } },
    setup(a) {
      const e = (t) => {
          const c = ['primary', '#FFD43A', '#ADFF00', '#262824', 'danger'],
            o = t.charCodeAt(0) % c.length
          return c[o]
        },
        s = (t) => {
          try {
            const [c, o] = t.split(' ')
            return `${c[0]}${o[0]}`
          } catch {
            return t[0]
          }
        }
      return (t, c) => {
        const o = y('VaAvatar')
        return (
          U(),
          E(o, { size: a.size, 'fallback-text': s(a.user.fullname), color: e(a.user.fullname) }, null, 8, [
            'size',
            'fallback-text',
            'color',
          ])
        )
      }
    },
  }),
  B = async (a) => {
    try {
      const e = await g.getUsers()
      if (!e.ok) throw new Error('获取用户数据失败')
      const s = await e.json()
      if (!s.success) throw new Error(s.message || '获取用户数据失败')
      let c = s.data
      if (a.search) {
        const p = a.search.toLowerCase()
        c = c.filter(
          (n) =>
            n.fullname.toLowerCase().includes(p) ||
            n.username.toLowerCase().includes(p) ||
            (n.phone && n.phone.includes(p)),
        )
      }
      a.sortBy &&
        a.sortingOrder &&
        c.sort((p, n) => {
          const r = p[a.sortBy],
            u = n[a.sortBy]
          return r && u && r < u
            ? a.sortingOrder === 'asc'
              ? -1
              : 1
            : r && u && r > u
              ? a.sortingOrder === 'asc'
                ? 1
                : -1
              : 0
        })
      const o = ((a.page || 1) - 1) * (a.perPage || 10),
        i = o + (a.perPage || 10)
      return { data: c.slice(o, i), pagination: { page: a.page || 1, perPage: a.perPage || 10, total: c.length } }
    } catch (e) {
      return console.error('获取用户数据时出错:', e), { data: [], pagination: { page: 1, perPage: 10, total: 0 } }
    }
  },
  F = async (a) => {
    try {
      const e = await g.updateUser(Number(a.id), {
        fullName: a.fullname,
        email: a.email,
        phone: a.phone,
        password: a.password,
        role: a.role,
        active: a.active,
      })
      if (!e.ok) {
        if (e.status === 403) throw new Error('没有权限更新用户')
        const t = await e.json()
        throw new Error(t.message || `更新用户失败 (状态码: ${e.status})`)
      }
      const s = await e.json()
      if (!s.success) throw new Error(s.message || 'Failed to update user')
      return s.data
    } catch (e) {
      throw (console.error('Error updating user:', e), e)
    }
  },
  O = async (a) => {
    throw new Error('头像上传功能待实现')
  },
  b = A('users', {
    state: () => ({ items: [], pagination: { page: 1, perPage: 10, total: 0 } }),
    actions: {
      async getAll(a) {
        const { data: e, pagination: s } = await B({ ...a.filters, ...a.sorting, ...a.pagination })
        ;(this.items = e), (this.pagination = s)
      },
      async add(a) {
        try {
          const e = await g.createUser({
            username: a.username,
            password: a.password || '',
            fullName: a.fullname,
            email: a.email || '',
            phone: a.phone || '',
            role: a.role,
          })
          if (!e.ok) {
            const t = await e.json()
            throw new Error(t.message || 'Failed to create user')
          }
          return await e.json()
        } catch (e) {
          throw (console.error('Error creating user:', e), e)
        }
      },
      async update(a) {
        return await F(a)
      },
      async remove(a) {
        try {
          const e = await g.deleteUser(Number(a.id))
          if (!e.ok) {
            if (e.status === 403) throw new Error('没有权限删除用户')
            try {
              const t = await e.json()
              throw new Error(t.message || `删除用户失败 (状态码: ${e.status})`)
            } catch {
              throw new Error(`删除用户失败 (状态码: ${e.status})`)
            }
          }
          const s = await e.json()
          if (!s.success) throw new Error(s.message || 'Failed to delete user')
          return !0
        } catch (e) {
          throw (console.error('Error deleting user:', e), e)
        }
      },
      async uploadAvatar(a) {
        return O()
      },
    },
  }),
  D = () => d({ page: 1, perPage: 10, total: 0 }),
  x = () => d({ sortBy: 'fullname', sortingOrder: null }),
  C = () => d({ search: '' }),
  _ = (a) => {
    const e = d(!1),
      s = d(),
      t = b(),
      { filters: c = C(), sorting: o = x(), pagination: i = D() } = {},
      l = async () => {
        e.value = !0
        try {
          await t.getAll({ filters: m(c), sorting: m(o), pagination: m(i) }), (i.value = t.pagination)
        } finally {
          e.value = !1
        }
      }
    k(
      c,
      () => {
        ;(i.value.page = 1), l()
      },
      { deep: !0 },
    ),
      l()
    const p = P(() => {
      const n = (u, w) => u[w],
        r = t.items.slice((i.value.page - 1) * i.value.perPage, i.value.page * i.value.perPage)
      return (
        o.value.sortBy &&
          o.value.sortingOrder &&
          r.sort((u, w) => {
            const f = n(u, o.value.sortBy),
              h = n(w, o.value.sortBy)
            return f > h
              ? o.value.sortingOrder === 'asc'
                ? 1
                : -1
              : f < h
                ? o.value.sortingOrder === 'asc'
                  ? -1
                  : 1
                : 0
          }),
        r
      )
    })
    return {
      error: s,
      isLoading: e,
      filters: c,
      sorting: o,
      pagination: i,
      users: p,
      fetch: l,
      async add(n) {
        e.value = !0
        try {
          const r = await t.add(n)
          return await l(), r
        } catch (r) {
          s.value = r
        } finally {
          e.value = !1
        }
      },
      async update(n) {
        e.value = !0
        try {
          const r = await t.update(n)
          return await l(), r
        } catch (r) {
          s.value = r
        } finally {
          e.value = !1
        }
      },
      async remove(n) {
        e.value = !0
        try {
          const r = await t.remove(n)
          return await l(), r
        } catch (r) {
          s.value = r
        } finally {
          e.value = !1
        }
      },
      async uploadAvatar(n) {
        const r = new FormData()
        return r.append('avatar', n), r.append('id', j()), t.uploadAvatar(r)
      },
    }
  }
export { L as _, _ as u }
//# sourceMappingURL=useUsers-CVVRekrF.js.map
