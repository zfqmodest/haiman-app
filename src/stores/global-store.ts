import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      isSidebarMinimized: false, // 确保侧边栏默认是显示的
    }
  },

  actions: {
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized
    },
    showSidebar() {
      this.isSidebarMinimized = false
    },
    hideSidebar() {
      this.isSidebarMinimized = true
    },
  },
})
