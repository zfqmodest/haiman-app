<template>
  <canvas ref="canvas" style="max-width: 100%" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, ChartOptions } from 'chart.js'
import { ChoroplethController, ProjectionScale, ColorScale, GeoFeature } from 'chartjs-chart-geo'
import { watchEffect } from 'vue'
import { ChartData } from 'chart.js'

const { t } = useI18n()

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  ChoroplethController,
  ProjectionScale,
  ColorScale,
  GeoFeature,
)

const canvas = ref<HTMLCanvasElement | null>(null)

function getColor(revenue: number) {
  return revenue >= 0.9 ? '#63A6F8' : revenue > 0.4 ? '#8FC0FA' : '#EDF0F1'
}

const props = defineProps<{
  options?: ChartOptions<'choropleth'>
  data: ChartData<'choropleth', { feature: any; value: number }[], string>
}>()

watchEffect(() => {
  if (canvas.value === null) {
    return
  }

  new ChartJS(canvas.value.getContext('2d')!, {
    type: 'choropleth',
    data: props.data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: function (context: any) {
              const countryName = context[0].label
              return countryName
            },
            label: function (context: any) {
              return `${t('dashboard.table.revenue')}: $${(context.raw?.value || 0).toFixed(2)}K`
            },
          },
        },
      },
      scales: {
        projection: {
          axis: 'x',
          projection: 'mercator',
          projectionScale: 1.6,
        },
        color: {
          axis: 'x',
          quantize: 5,
          display: false,
          interpolate: getColor,
        },
      },
      animation: false,
    },
  })
})
</script>
