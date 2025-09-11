<template>
  <img :src="src" alt="Vue Image" :height="height" :color="color" :width="width" />
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    src: string
    color?: string
    height?: string | number
    width?: string | number
  }>(),
  {
    color: 'primary',
    height: 'auto',
    width: 'auto',
  },
)
</script>
