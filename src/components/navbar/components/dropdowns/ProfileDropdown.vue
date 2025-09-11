<template>
  <div class="profile-dropdown-wrapper">
    <VaDropdown v-model="isShown" :offset="[9, 0]" class="profile-dropdown" stick-to-edges>
      <template #anchor>
        <VaButton preset="secondary" color="textPrimary">
          <span class="profile-dropdown__anchor min-w-max">
            <slot />
            <VaAvatar
              :key="userDisplayName"
              :size="avatarSize"
              class="ml-1 adaptive-avatar"
              :style="{ minWidth: avatarSize, fontSize: fontSize }"
            >
              <span :style="{ fontSize: fontSize, fontWeight: '500' }">{{ userDisplayName }}</span>
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

// 计算用户显示名称 - 显示完整全名
const userDisplayName = computed(() => {
  const user = userStore.user
  if (!user) return '用户'

  // 优先显示全名 - 处理两种不同的字段名
  const fullName = user.fullName || (user as any).fullname
  if (fullName && fullName.trim()) {
    return fullName.trim()
  }

  // 如果没有全名，显示用户名
  if (user.username && user.username.trim()) {
    return user.username.trim()
  }

  // 默认返回'用户'
  return '用户'
})

// 根据用户名长度自适应头像大小
const avatarSize = computed(() => {
  const nameLength = userDisplayName.value.length
  if (nameLength <= 2) {
    return '32px' // 小尺寸，适合2个字符
  } else if (nameLength === 3) {
    return '38px' // 中等尺寸，适合3个字符
  } else if (nameLength === 4) {
    return '44px' // 稍大尺寸，适合4个字符
  } else {
    return '50px' // 大尺寸，适合更长的名字
  }
})

// 根据头像大小自适应字体大小
const fontSize = computed(() => {
  const nameLength = userDisplayName.value.length
  if (nameLength <= 2) {
    return '11px'
  } else if (nameLength === 3) {
    return '10px'
  } else if (nameLength === 4) {
    return '9px'
  } else {
    return '8px'
  }
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

    .adaptive-avatar {
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        transition: font-size 0.3s ease;
      }
    }
  }
}
</style>
