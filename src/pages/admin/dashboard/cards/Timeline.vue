<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import VaTimelineItem from '../../../../components/va-timeline-item.vue'

const { t } = useI18n()
</script>

<template>
  <VaCard>
    <VaCardTitle class="flex justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">{{ t('dashboard.cards.timeline') }}</h1>
    </VaCardTitle>
    <VaCardContent>
      <table class="mt-4">
        <tbody>
          <VaTimelineItem date="25m ago">
            <RouterLink class="va-link font-semibold" to="/users">Donald</RouterLink>
            {{ t('dashboard.timeline.updatedStatus') }}
            <RouterLink class="va-link font-semibold" to="/users">Refund #1234</RouterLink>
            {{ t('dashboard.timeline.awaitingResponse') }}
          </VaTimelineItem>
          <VaTimelineItem date="1h ago">
            <RouterLink class="va-link font-semibold" to="/users">Lycy Peterson</RouterLink>
            {{ t('dashboard.timeline.addedToGroup') }}, {{ t('dashboard.timeline.groupName') }} Overtake
          </VaTimelineItem>
          <VaTimelineItem date="2h ago">
            <RouterLink class="va-link font-semibold" to="/users">Joseph Rust</RouterLink>
            {{ t('dashboard.timeline.openedShowcase') }}
            <RouterLink class="va-link font-semibold" to="/users">Mannat #112233</RouterLink>
            {{ t('dashboard.timeline.withTheme') }}
          </VaTimelineItem>
          <VaTimelineItem date="3d ago">
            <RouterLink class="va-link font-semibold" to="/users">Donald</RouterLink>
            {{ t('dashboard.timeline.updatedStatusTo') }} {{ t('dashboard.timeline.awaitingResponse') }}
          </VaTimelineItem>
          <VaTimelineItem date="Nov 14, 2023">
            <RouterLink class="va-link font-semibold" to="/users">Lycy Peterson</RouterLink>
            {{ t('dashboard.timeline.addedToGroup') }}
          </VaTimelineItem>
          <VaTimelineItem date="Nov 14, 2023">
            <RouterLink class="va-link font-semibold" to="/users">Dan Rya</RouterLink>
            {{ t('dashboard.timeline.addedToGroup') }}
          </VaTimelineItem>
          <VaTimelineItem date="Nov 15, 2023">
            {{ t('dashboard.timeline.projectCreated') }}
            <RouterLink class="va-link font-semibold" to="/projects">Vuestic 2023</RouterLink>
            {{ t('dashboard.timeline.wasCreated') }}
          </VaTimelineItem>
        </tbody>
      </table>
    </VaCardContent>
  </VaCard>
</template>
