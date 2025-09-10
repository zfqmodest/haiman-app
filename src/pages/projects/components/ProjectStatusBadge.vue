<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Project } from '../types'

const { t } = useI18n()

const props = defineProps<{
  status: Project['status']
}>()

const badgeColorMap: Record<Project['status'], string> = {
  'in progress': 'primary',
  archived: 'secondary',
  completed: 'success',
  important: 'warning',
}

const statusTextMap: Record<Project['status'], string> = {
  'in progress': 'inProgress',
  archived: 'archived',
  completed: 'completed',
  important: 'important',
}

const statusText = computed(() => {
  return t(`projects.status.${statusTextMap[props.status]}`)
})
</script>

<template>
  <VaBadge square :color="badgeColorMap[props.status]" :text="statusText.toUpperCase()" />
</template>
