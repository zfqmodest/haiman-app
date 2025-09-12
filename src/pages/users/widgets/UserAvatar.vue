<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { type User } from '../types'

const avatarColor = (userName: string) => {
  const colors = ['primary', '#FFD43A', '#ADFF00', '#262824', 'danger']
  const index = userName.charCodeAt(0) % colors.length
  return colors[index]
}

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
  },
})

// 获取用户显示名称
const userDisplayName = computed(() => {
  const user = props.user
  if (!user) return '用户'

  // 优先显示全名
  if (user.fullName && user.fullName.trim()) {
    return user.fullName.trim()
  }

  // 如果没有全名，显示用户名
  if (user.username && user.username.trim()) {
    return user.username.trim()
  }

  // 默认返回'用户'
  return '用户'
})

// 根据用户名长度和传入的size属性自适应头像大小
const avatarSize = computed(() => {
  const nameLength = userDisplayName.value.length

  // 如果传入了具体的size，保持原有逻辑
  if (props.size === 'small') {
    if (nameLength <= 2) return '24px'
    else if (nameLength === 3) return '28px'
    else if (nameLength === 4) return '32px'
    else return '36px'
  } else if (props.size === 'large') {
    if (nameLength <= 2) return '48px'
    else if (nameLength === 3) return '54px'
    else if (nameLength === 4) return '60px'
    else return '66px'
  } else {
    // medium 或其他
    if (nameLength <= 2) return '32px'
    else if (nameLength === 3) return '38px'
    else if (nameLength === 4) return '44px'
    else return '50px'
  }
})

// 根据头像大小自适应字体大小
const fontSize = computed(() => {
  const nameLength = userDisplayName.value.length

  if (props.size === 'small') {
    if (nameLength <= 2) return '8px'
    else if (nameLength === 3) return '7px'
    else if (nameLength === 4) return '6px'
    else return '5px'
  } else if (props.size === 'large') {
    if (nameLength <= 2) return '16px'
    else if (nameLength === 3) return '14px'
    else if (nameLength === 4) return '12px'
    else return '10px'
  } else {
    // medium
    if (nameLength <= 2) return '11px'
    else if (nameLength === 3) return '10px'
    else if (nameLength === 4) return '9px'
    else return '8px'
  }
})
</script>

<template>
  <VaAvatar
    :key="userDisplayName"
    :size="avatarSize"
    :color="avatarColor(userDisplayName)"
    class="adaptive-user-avatar"
    :style="{ minWidth: avatarSize, fontSize: fontSize }"
  >
    <span :style="{ fontSize: fontSize, fontWeight: '500' }">{{ userDisplayName }}</span>
  </VaAvatar>
</template>

<style lang="scss" scoped>
.adaptive-user-avatar {
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
</style>
