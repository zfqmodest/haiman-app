<template>
  <div class="profile-dropdown-wrapper">
    <VaDropdown v-model="isShown" :offset="[9, 0]" class="profile-dropdown" stick-to-edges>
      <template #anchor>
        <VaButton preset="secondary" color="textPrimary">
          <span class="profile-dropdown__anchor min-w-max">
            <slot />
            <VaAvatar :size="32" color="primary">
              {{ userInitials }}
            </VaAvatar>
          </span>
        </VaButton>
      </template>
      <VaDropdownContent
        class="profile-dropdown__content md:w-60 px-0 py-4 w-full"
        :style="{ '--hover-color': hoverColor }"
      >
        <VaList v-for="group in options" :key="group.name">
          <header v-if="group.name" class="uppercase text-[var(--va-secondary)] opacity-80 font-bold text-xs px-4">
            {{ t(`user.${group.name}`) }}
          </header>
          <VaListItem
            v-for="item in group.list"
            :key="item.name"
            class="menu-item px-4 text-base cursor-pointer h-8"
            v-bind="resolveLinkAttribute(item)"
          >
            <VaIcon :name="item.icon" class="pr-1" color="secondary" />
            {{ t(`user.${item.name}`) }}
          </VaListItem>
          <VaListSeparator v-if="group.separator" class="mx-3 my-2" />
        </VaList>
      </VaDropdownContent>
    </VaDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColors } from 'vuestic-ui'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../../../stores/user-store'

const { colors, setHSLAColor } = useColors()
const hoverColor = computed(() => setHSLAColor(colors.focus, { a: 0.1 }))

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()

// 计算用户姓名首字母
const userInitials = computed(() => {
  const user = userStore.user
  if (!user) return '用'

  // 如果有全名，优先使用全名的首字母
  if (user.fullName && user.fullName.trim()) {
    const fullName = user.fullName.trim()
    // 如果是中文名字，取第一个字符
    if (/[\u4e00-\u9fa5]/.test(fullName)) {
      return fullName.charAt(0)
    }
    // 如果是英文名字，取名和姓的首字母
    const nameParts = fullName.split(' ').filter((part) => part.length > 0)
    if (nameParts.length >= 2) {
      return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase()
    } else if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase()
    }
  }

  // 如果没有全名，使用用户名的首字母
  if (user.username && user.username.trim()) {
    return user.username.charAt(0).toUpperCase()
  }

  // 默认返回'用'
  return '用'
})

type ProfileListItem = {
  name: string
  to?: string
  href?: string
  icon: string
}

type ProfileOptions = {
  name: string
  separator: boolean
  list: ProfileListItem[]
}

withDefaults(
  defineProps<{
    options?: ProfileOptions[]
  }>(),
  {
    options: () => [
      {
        name: 'account',
        separator: true,
        list: [
          {
            name: 'settings',
            to: 'settings',
            icon: 'mso-settings',
          },
          {
            name: 'projects',
            to: 'projects',
            icon: 'mso-favorite',
          },
          {
            name: 'users',
            to: 'users',
            icon: 'mso-group',
          },
        ],
      },
      {
        name: '',
        separator: false,
        list: [
          {
            name: 'logout',
            icon: 'mso-logout',
          },
        ],
      },
    ],
  },
)

const isShown = ref(false)

const handleLogout = async () => {
  await userStore.logout()
  router.push({ name: 'login' })
}

const resolveLinkAttribute = (item: ProfileListItem) => {
  if (item.name === 'logout') {
    return { onClick: handleLogout }
  }
  return item.to ? { to: { name: item.to } } : item.href ? { href: item.href, target: '_blank' } : {}
}
</script>

<style lang="scss">
.profile-dropdown {
  cursor: pointer;

  &__content {
    .menu-item:hover {
      background: var(--hover-color);
    }
  }

  &__anchor {
    display: inline-block;
  }
}
</style>
