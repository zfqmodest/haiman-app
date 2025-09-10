<template>
  <img :src="src" alt="Vue Image" :height="height" :color="color" :width="width" />
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    src: string
    color?: string
    height?: string | number
    width?: string | number
  }>(),
  {
    height: 'auto',
  },
)
</script>
