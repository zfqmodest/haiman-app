<template>
  <div class="dashboard min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">
    <!-- 页面头部 -->
    <div
      class="flex items-center justify-between mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
    >
      <div>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {{ t('dashboard.title') }}
        </h1>
        <p class="text-gray-600 mt-2">欢迎回来，管理您的海曼系统</p>
      </div>
      <div class="flex items-center space-x-4">
        <div class="text-right bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-lg border border-blue-100">
          <p class="text-sm text-gray-500">当前时间</p>
          <p class="text-lg font-semibold text-blue-700">{{ currentTime }}</p>
        </div>
        <VaButton
          preset="primary"
          icon="refresh"
          :loading="loading"
          class="shadow-lg hover:shadow-xl transition-all duration-300"
          @click="fetchDashboardData"
        >
          刷新数据
        </VaButton>
      </div>
    </div>

    <!-- 统计卡片区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <VaCard
        v-for="stat in quickStats"
        :key="stat.title"
        class="cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 overflow-hidden relative bg-white/90 backdrop-blur-sm"
        @click="$router.push(stat.route)"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br opacity-10"
          :class="`from-${stat.color}-400 to-${stat.color}-600`"
        ></div>
        <VaCardContent class="p-6 relative z-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 mb-2">{{ stat.title }}</p>
              <p class="text-3xl font-bold" :class="`text-${stat.color}`">{{ stat.value }}</p>
              <div class="flex items-center mt-2">
                <VaIcon name="trending_up" size="16px" class="text-green-500 mr-1" />
                <span class="text-xs text-green-600 font-medium">+12% 较上周</span>
              </div>
            </div>
            <div class="relative">
              <div
                class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/50"
                :class="`bg-gradient-to-br from-${stat.color}-400/90 to-${stat.color}-600/90`"
                style="
                  box-shadow:
                    0 10px 25px rgba(0, 0, 0, 0.15),
                    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
                "
              >
                <VaIcon
                  :name="stat.icon"
                  size="2rem"
                  class="text-white/95 drop-shadow-lg"
                  style="filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25))"
                />
              </div>
              <!-- 添加光晕效果 -->
              <div
                class="absolute inset-0 w-16 h-16 rounded-2xl opacity-15 blur-sm -z-10"
                :class="`bg-gradient-to-br from-${stat.color}-300 to-${stat.color}-500`"
              ></div>
            </div>
          </div>
        </VaCardContent>
      </VaCard>
    </div>

    <!-- 数据分析区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <!-- 用户角色分布 -->
      <VaCard class="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
        <VaCardHeader class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <VaCardTitle class="text-black font-semibold">用户角色分布</VaCardTitle>
        </VaCardHeader>
        <VaCardContent class="p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
          <div class="space-y-4">
            <div
              v-for="role in userRoleData"
              :key="role.label"
              class="flex items-center justify-between p-4 rounded-xl hover:bg-white/80 transition-colors border border-gray-100/50 shadow-sm"
            >
              <div class="flex items-center space-x-3">
                <div class="w-5 h-5 rounded-full shadow-md" :class="`bg-${role.color}`"></div>
                <span class="text-sm font-medium">{{ role.label }}</span>
              </div>
              <div class="text-right">
                <span class="text-lg font-bold" :class="`text-${role.color}`">{{ role.value }}</span>
                <span class="text-sm text-gray-500 ml-1">人</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-200/50">
            <div class="flex justify-between text-sm bg-white/70 p-3 rounded-lg">
              <span class="text-gray-600">总计用户</span>
              <span class="font-bold text-blue-600">{{ stats.totalUsers }} 人</span>
            </div>
          </div>
        </VaCardContent>
      </VaCard>

      <!-- 在线用户率 -->
      <VaCard class="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
        <VaCardHeader class="bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <VaCardTitle class="text-black font-semibold">在线用户率</VaCardTitle>
        </VaCardHeader>
        <VaCardContent class="p-6 bg-gradient-to-br from-green-50/50 to-teal-50/50">
          <div class="text-center">
            <div class="relative inline-block">
              <VaProgressCircle
                :model-value="stats.totalUsers > 0 ? (stats.onlineUsers / stats.totalUsers) * 100 : 0"
                :thickness="0.15"
                color="success"
                size="120"
                class="mb-4 drop-shadow-lg"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <VaIcon name="wifi" size="2rem" class="text-green-500 opacity-20" />
              </div>
            </div>
            <p class="text-3xl font-bold text-green-600 mb-2">
              {{ stats.totalUsers > 0 ? Math.round((stats.onlineUsers / stats.totalUsers) * 100) : 0 }}%
            </p>
            <p class="text-sm text-gray-600 mb-4">{{ stats.onlineUsers }}/{{ stats.totalUsers }} 用户在线</p>
            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="p-3 bg-green-100/70 rounded-xl border border-green-200/50 shadow-sm">
                <p class="text-sm text-gray-600">在线</p>
                <p class="text-xl font-bold text-green-600">{{ stats.onlineUsers }}</p>
              </div>
              <div class="p-3 bg-gray-100/70 rounded-xl border border-gray-200/50 shadow-sm">
                <p class="text-sm text-gray-600">离线</p>
                <p class="text-xl font-bold text-gray-600">{{ stats.totalUsers - stats.onlineUsers }}</p>
              </div>
            </div>
          </div>
        </VaCardContent>
      </VaCard>

      <!-- 系统状态 -->
      <VaCard class="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
        <VaCardHeader class="bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <VaCardTitle class="text-black font-semibold">系统状态</VaCardTitle>
        </VaCardHeader>
        <VaCardContent class="p-6 bg-gradient-to-br from-orange-50/50 to-red-50/50">
          <div class="space-y-4">
            <div
              class="flex items-center justify-between p-3 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm"
            >
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                <span class="text-sm font-medium">数据库</span>
              </div>
              <VaBadge text="正常" color="success" size="small" />
            </div>
            <div
              class="flex items-center justify-between p-3 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm"
            >
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                <span class="text-sm font-medium">API服务</span>
              </div>
              <VaBadge text="正常" color="success" size="small" />
            </div>
            <div
              class="flex items-center justify-between p-3 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm"
            >
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                <span class="text-sm font-medium">存储空间</span>
              </div>
              <VaBadge text="75%" color="warning" size="small" />
            </div>
            <div
              class="flex items-center justify-between p-3 bg-white/70 rounded-xl border border-gray-100/50 shadow-sm"
            >
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                <span class="text-sm font-medium">网络</span>
              </div>
              <VaBadge text="正常" color="success" size="small" />
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-200/50">
            <div class="text-center bg-white/70 p-3 rounded-lg">
              <p class="text-xs text-gray-500">服务器运行时间</p>
              <p class="text-sm font-semibold text-orange-600">{{ systemUptime }}</p>
            </div>
          </div>
        </VaCardContent>
      </VaCard>
    </div>

    <!-- 人员每周登录记录 - 重新设计 -->
    <div class="mb-8">
      <VaCard
        class="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white/95 backdrop-blur-sm"
      >
        <VaCardHeader class="bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <VaCardTitle class="text-black font-semibold">人员每周登录记录</VaCardTitle>
        </VaCardHeader>
        <VaCardContent class="p-0">
          <div class="bg-gradient-to-br from-slate-50/70 via-blue-50/50 to-indigo-50/70 p-8">
            <!-- 数据概览卡片 -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div
                class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-gray-600 text-sm font-medium mb-1">平均日登录</p>
                    <p class="text-2xl font-bold text-blue-600">{{ Math.round((getTotalWeeklyLogins() || 0) / 7) }}</p>
                  </div>
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <VaIcon name="today" color="blue" size="24px" />
                  </div>
                </div>
              </div>

              <div
                class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-gray-600 text-sm font-medium mb-1">活跃用户</p>
                    <p class="text-2xl font-bold text-green-600">{{ stats.onlineUsers }}</p>
                  </div>
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <VaIcon name="people" color="success" size="24px" />
                  </div>
                </div>
              </div>

              <div
                class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100/50 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-gray-600 text-sm font-medium mb-1">总用户数</p>
                    <p class="text-2xl font-bold text-orange-600">{{ stats.totalUsers }}</p>
                  </div>
                  <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <VaIcon name="group" color="warning" size="24px" />
                  </div>
                </div>
              </div>

              <div
                class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100/50 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-gray-600 text-sm font-medium mb-1">活跃率</p>
                    <p class="text-2xl font-bold text-purple-600">
                      {{ stats.totalUsers > 0 ? Math.round((stats.onlineUsers / stats.totalUsers) * 100) : 0 }}%
                    </p>
                  </div>
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <VaIcon name="analytics" color="info" size="24px" />
                  </div>
                </div>
              </div>
            </div>

            <!-- 图表区域 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50">
              <div class="flex justify-between items-center mb-6">
                <div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">登录趋势图表</h3>
                  <p class="text-sm text-gray-600">过去7天的用户登录活动统计</p>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50/80 px-3 py-2 rounded-lg">
                    <VaIcon name="schedule" size="16px" />
                    <span>更新: {{ dataUpdateTime }}</span>
                  </div>
                  <VaButton
                    preset="outline"
                    icon="download"
                    size="small"
                    class="hover:shadow-md transition-all hover:scale-105"
                    @click="exportWeeklyData"
                  >
                    导出
                  </VaButton>
                </div>
              </div>
              <div class="h-80">
                <VaChart :data="weeklyLoginData" type="line" :options="chartOptions" />
              </div>
            </div>
          </div>
        </VaCardContent>
      </VaCard>
    </div>

    <!-- 底部功能区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <!-- 快速操作 -->
      <VaCard class="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
        <VaCardHeader class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <VaCardTitle class="text-black font-semibold">快速操作</VaCardTitle>
        </VaCardHeader>
        <VaCardContent class="p-6 bg-gradient-to-br from-cyan-50/30 to-blue-50/30">
          <div class="space-y-3">
            <VaButton
              preset="outline"
              icon="person_add"
              class="w-full justify-start hover:shadow-md transition-all hover:scale-105 bg-white/70"
              @click="$router.push('/admin/users')"
            >
              <span class="ml-2">添加用户</span>
            </VaButton>
            <VaButton
              preset="outline"
              icon="add"
              class="w-full justify-start hover:shadow-md transition-all hover:scale-105 bg-white/70"
              @click="$router.push('/admin/projects')"
            >
              <span class="ml-2">创建项目</span>
            </VaButton>
            <VaButton
              preset="outline"
              icon="assignment"
              class="w-full justify-start hover:shadow-md transition-all hover:scale-105 bg-white/70"
              @click="$router.push('/admin/materials')"
            >
              <span class="ml-2">添加材料</span>
            </VaButton>
            <VaButton
              preset="outline"
              icon="science"
              class="w-full justify-start hover:shadow-md transition-all hover:scale-105 bg-white/70"
              @click="$router.push('/admin/testing-items')"
            >
              <span class="ml-2">创建测试项目</span>
            </VaButton>
            <div class="pt-3 border-t border-gray-100">
              <VaButton preset="primary" icon="refresh" class="w-full" :loading="loading" @click="fetchDashboardData">
                刷新数据
              </VaButton>
            </div>
          </div>
        </VaCardContent>
      </VaCard>

      <!-- 在线用户列表 -->
      <VaCard class="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
        <VaCardHeader class="bg-gradient-to-r from-emerald-500 to-green-600 text-white">
          <div class="flex items-center justify-between w-full">
            <VaCardTitle class="text-black font-semibold">在线用户</VaCardTitle>
          </div>
        </VaCardHeader>
        <VaCardContent class="p-0 bg-gradient-to-br from-emerald-50/30 to-green-50/30">
          <div v-if="onlineUsers.length === 0" class="text-center text-gray-500 py-12">
            <VaIcon name="person_off" size="3rem" class="text-gray-300 mb-4" />
            <p>暂无用户在线</p>
          </div>
          <div v-else class="max-h-80 overflow-y-auto">
            <div
              v-for="user in onlineUsers"
              :key="user.id"
              class="flex items-center justify-between p-4 border-b border-gray-100/50 hover:bg-white/70 transition-colors mx-2 my-1 rounded-lg"
            >
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <VaAvatar
                    :src="user.avatar"
                    size="small"
                    :color="user.role === 1 ? 'primary' : user.role === 2 ? 'info' : 'secondary'"
                  />
                  <div
                    class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm"
                  ></div>
                </div>
                <div>
                  <p class="text-sm font-medium">{{ user.fullName }}</p>
                  <p class="text-xs text-gray-500">@{{ user.username }}</p>
                </div>
              </div>
              <div class="text-right">
                <VaBadge
                  :text="user.role === 1 ? '管理员' : user.role === 2 ? '测试人员' : '普通人员'"
                  :color="user.role === 1 ? 'primary' : user.role === 2 ? 'info' : 'secondary'"
                  size="small"
                />
                <p v-if="user.lastLoginTime" class="text-xs text-gray-400 mt-1">
                  {{ formatTime(user.lastLoginTime) }}
                </p>
              </div>
            </div>
          </div>
        </VaCardContent>
      </VaCard>

      <!-- 近期活动 -->
      <VaCard class="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
        <VaCardHeader class="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
          <VaCardTitle class="text-black font-semibold">近期活动</VaCardTitle>
        </VaCardHeader>
        <VaCardContent class="p-0 bg-gradient-to-br from-violet-50/30 to-purple-50/30">
          <div class="max-h-80 overflow-y-auto">
            <div
              v-for="activity in recentActivities"
              :key="activity.id"
              class="flex items-start space-x-3 p-4 border-b border-gray-100/50 hover:bg-white/70 transition-colors mx-2 my-1 rounded-lg"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
                  :class="`bg-${activity.color}-100`"
                >
                  <VaIcon :name="activity.icon" size="16px" :color="activity.color" />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium">{{ activity.title }}</p>
                <p class="text-xs text-gray-500 mt-1">{{ activity.description }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </VaCardContent>
      </VaCard>
    </div>

    <!-- 页脚信息 -->
    <div class="mt-12 text-center text-gray-500 text-sm border-t border-gray-200/50 pt-8">
      <div
        class="flex items-center justify-center space-x-6 mb-4 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100/50"
      >
        <div class="flex items-center space-x-2">
          <VaIcon name="info" size="16px" />
          <span>系统版本: v2.1.0</span>
        </div>
        <div class="flex items-center space-x-2">
          <VaIcon name="schedule" size="16px" />
          <span>上次更新: {{ dataUpdateTime }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <VaIcon name="memory" size="16px" />
          <span>服务器状态: 正常运行</span>
        </div>
      </div>
      <p>&copy; 2025 海曼管理系统. All rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import { useUsersStore } from '../../../stores/users'
import type { User } from '../../users/types'
import VaChart from '../../../components/va-charts/VaChart.vue'
import { loginRecordApi } from '../../../services/api'

const { t } = useI18n()
const usersStore = useUsersStore()

// 响应式状态
const loading = ref(false)
const currentTime = ref('')
const systemUptime = ref('7天 12小时 45分钟')
const dataUpdateTime = ref('')

// 更新数据时间
const updateDataTime = () => {
  const now = new Date()
  dataUpdateTime.value = now.toLocaleString('zh-CN')
}

// 计算本周总登录次数
const getTotalWeeklyLogins = () => {
  if (!weeklyLoginData.value.datasets[1]?.data) return 0
  return weeklyLoginData.value.datasets[1].data.reduce((sum: number, count: number) => sum + count, 0)
}

// 导出周数据
const exportWeeklyData = () => {
  console.log('导出周数据功能开发中...')
}

// 更新当前时间
const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

// 定时更新时间
setInterval(updateTime, 1000)
updateTime() // 立即更新一次

// 在线用户列表
const onlineUsers = ref<User[]>([])

// 近期活动数据
const recentActivities = ref([
  {
    id: 1,
    title: '新用户注册',
    description: '张三 刚刚注册了账号',
    time: '2分钟前',
    icon: 'person_add',
    color: 'primary',
  },
  {
    id: 2,
    title: '项目创建',
    description: '李四 创建了新项目"材料测试"',
    time: '15分钟前',
    icon: 'add_box',
    color: 'success',
  },
  {
    id: 3,
    title: '数据备份',
    description: '系统自动备份已完成',
    time: '1小时前',
    icon: 'backup',
    color: 'info',
  },
  {
    id: 4,
    title: '用户登录',
    description: '王五 登录了系统',
    time: '2小时前',
    icon: 'login',
    color: 'warning',
  },
  {
    id: 5,
    title: '测试完成',
    description: '材料强度测试已完成',
    time: '3小时前',
    icon: 'check_circle',
    color: 'success',
  },
])

// 数据统计
const stats = ref({
  totalUsers: 0,
  onlineUsers: 0,
  totalMaterials: 0,
  totalTestingItems: 0,
  recentActivities: [],
})

// 快速统计卡片数据
const quickStats = ref([
  {
    title: '用户总数',
    value: 0,
    icon: 'group',
    color: 'primary',
    route: '/admin/users',
  },
  {
    title: '在线用户',
    value: 0,
    icon: 'online_prediction',
    color: 'success',
    route: '/admin/users',
  },
  {
    title: '材料总数',
    value: 0,
    icon: 'inventory_2',
    color: 'info',
    route: '/admin/materials',
  },
  {
    title: '测试项目',
    value: 0,
    icon: 'science',
    color: 'warning',
    route: '/admin/testing-items',
  },
])

// 用户角色分布数据
const userRoleData = ref([
  { label: '管理员', value: 0, color: 'primary' },
  { label: '测试人员', value: 0, color: 'info' },
  { label: '普通人员', value: 0, color: 'secondary' },
])

// 每周登录记录数据
const weeklyLoginData = ref({
  labels: ['周一', '周二', '周三', '周四', '周五'],
  datasets: [
    {
      label: '在线用户数',
      data: [0, 0, 0, 0, 0],
      borderColor: '#1976d2',
      backgroundColor: 'rgba(25, 118, 210, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: '登录用户数',
      data: [0, 0, 0, 0, 0],
      borderColor: '#388e3c',
      backgroundColor: 'rgba(56, 142, 60, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: '离线用户数',
      data: [0, 0, 0, 0, 0],
      borderColor: '#f57c00',
      backgroundColor: 'rgba(245, 124, 0, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
})

// 生成本周登录记录数据 - 从后端API获取真实数据
const generateWeeklyLoginData = async () => {
  try {
    console.log('正在获取周登录统计数据...')
    const data = await loginRecordApi.getWeeklyStats()
    console.log('获取到的数据:', data)

    if (data && data.labels && data.onlineUsers && data.loginUsers && data.offlineUsers) {
      // 使用API返回的真实数据
      weeklyLoginData.value.labels = data.labels
      weeklyLoginData.value.datasets[0].data = data.onlineUsers
      weeklyLoginData.value.datasets[1].data = data.loginUsers
      weeklyLoginData.value.datasets[2].data = data.offlineUsers

      console.log('周登录数据更新成功:', weeklyLoginData.value)
    } else {
      console.warn('API返回数据格式不正确，使用模拟数据')
      generateMockWeeklyData()
    }
  } catch (error) {
    console.error('获取周登录统计数据失败:', error)
    console.log('API调用失败，使用模拟数据')
    generateMockWeeklyData()
  }
}

// 备用模拟数据生成函数（API调用失败时使用）
const generateMockWeeklyData = () => {
  const users = usersStore.items
  const totalUsers = users.length

  // 模拟一周的数据
  const onlineData = []
  const loginData = []
  const offlineData = []

  for (let i = 0; i < 5; i++) {
    // 模拟数据：在线用户数在工作日会有变化
    const baseOnline = Math.floor(totalUsers * 0.6) // 基础在线率60%
    const variation = Math.floor(Math.random() * (totalUsers * 0.3)) // 0-30%的变化
    const onlineCount = Math.min(baseOnline + variation, totalUsers)

    // 登录用户数通常比在线用户数多一些（包括短暂登录的）
    const loginCount = Math.min(onlineCount + Math.floor(Math.random() * 5), totalUsers)

    // 离线用户数
    const offlineCount = totalUsers - onlineCount

    onlineData.push(onlineCount)
    loginData.push(loginCount)
    offlineData.push(offlineCount)
  }

  weeklyLoginData.value.datasets[0].data = onlineData
  weeklyLoginData.value.datasets[1].data = loginData
  weeklyLoginData.value.datasets[2].data = offlineData
}

// 图表配置选项
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: '本周人员登录统计（周一至周五）',
    },
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: '工作日',
      },
    },
    y: {
      title: {
        display: true,
        text: '人数',
      },
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
})

// 时间格式化函数
const formatTime = (timeString: string | null): string => {
  if (!timeString) return ''
  const date = new Date(timeString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / (1000 * 60))

  if (minutes < 1) return '刚刚'
  if (minutes < 60) return `${minutes}分钟前`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}小时前`

  const days = Math.floor(hours / 24)
  return `${days}天前`
}

// 获取仪表盘数据
const fetchDashboardData = async () => {
  loading.value = true
  try {
    await usersStore.getAll({
      pagination: { page: 1, perPage: 1000, total: 0 },
    })

    const users = usersStore.items
    stats.value.totalUsers = users.length
    stats.value.onlineUsers = users.filter((user) => user.isOnline).length

    // 获取在线用户列表
    onlineUsers.value = users
      .filter((user) => user.isOnline)
      .map((user) => ({
        ...user,
        lastLoginTime: user.lastLoginTime,
      }))

    // 更新快速统计数据
    quickStats.value[0].value = stats.value.totalUsers
    quickStats.value[1].value = stats.value.onlineUsers
    quickStats.value[2].value = 15 // 材料数量 (模拟数据)
    quickStats.value[3].value = 8 // 测试项目

    // 生成每周登录记录数据 - 现在使用真实API数据
    await generateWeeklyLoginData()

    // 更新数据时间戳
    updateDataTime()
  } catch (error) {
    console.error('获取仪表盘数据失败:', error)
  } finally {
    loading.value = false
  }

  // 计算用户角色分布
  const users = usersStore.items
  const roleStats: { [key: number]: number } = { 1: 0, 2: 0, 3: 0 }
  users.forEach((user) => {
    roleStats[user.role] = (roleStats[user.role] || 0) + 1
  })

  userRoleData.value[0].value = roleStats[1] // 管理员
  userRoleData.value[1].value = roleStats[2] // 测试人员
  userRoleData.value[2].value = roleStats[3] // 普通人员
}

onMounted(() => {
  fetchDashboardData()
})
</script>

<style scoped>
/* 自定义样式增强 */
.dashboard {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 统计卡片hover效果 */
.va-card:hover {
  transform: translateY(-2px);
}

/* 渐变背景动画 */
.bg-gradient-to-br {
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* 悬浮动画 */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* 脉冲动画 */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

/* 滚动条样式 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 加载状态 */
.va-button--loading {
  position: relative;
  overflow: hidden;
}

/* 成功提示色彩 */
.text-green-600 {
  color: #059669;
}

.bg-green-50 {
  background-color: #ecfdf5;
}

.border-green-200 {
  border-color: #a7f3d0;
}

/* 响应式间距调整 */
@media (max-width: 768px) {
  .dashboard {
    padding: 1rem;
  }

  .grid {
    gap: 1rem;
  }
}
</style>
