<template>
  <VaLayout v-if="breakpoint.lgUp" class="h-screen layout-with-bg bg-[var(--va-background-secondary)]">
    <template #left>
      <RouterLink
        class="frosted-glass-panel h-full flex items-center justify-center"
        style="width: 35vw"
        to="/auth/login"
        aria-label="Visit homepage"
      >
        <!-- <VuesticLogo :height="28" start="#FFF" /> -->
        <VueImage src="http://www.heinzmann.cn/images/logo.png" alt="HaiMan Logo" height="18" width="220" />
      </RouterLink>
    </template>
    <template #content>
      <main class="h-full flex items-center justify-center mx-auto max-w-[420px]">
        <RouterView />
      </main>
    </template>
  </VaLayout>

  <VaLayout v-else class="h-screen bg-[var(--va-background-secondary)]">
    <template #content>
      <div class="p-4">
        <main class="h-full flex flex-row items-center justify-start mx-auto max-w-[420px]">
          <div class="flex flex-col items-start">
            <RouterLink class="py-4" to="/" aria-label="Visit homepage">
              <VueImage src="http://www.heinzmann.cn/images/logo.png" alt="HaiMan Logo" height="18" width="220" />
            </RouterLink>
            <RouterView />
          </div>
        </main>
      </div>
    </template>
  </VaLayout>
</template>

<script lang="ts" setup>
import { useBreakpoint } from 'vuestic-ui'
import VuesticLogo from '../components/VuesticLogo.vue'
import VueImage from '../components/VueImage.vue'

const breakpoint = useBreakpoint()
</script>

<style scoped>
.layout-with-bg {
  background-color: #fff;
}

.frosted-glass-panel {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  background-color: rgba(0, 0, 0, 0.2);
}
</style>
