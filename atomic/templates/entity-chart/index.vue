<template>
  <ad-chart
    v-if="chartData && props.type"
    :data="chartData"
    :options="chartOptions"
    :type="props.type"
    :chart-class="props.chartClass"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { NucEntityChartInterface } from 'nucleify'
import { useChart } from 'nucleify'

const props = defineProps<NucEntityChartInterface>()
const { setChartData, setChartOptions } = useChart()

const chartOptions = computed(() =>
  props.type ? setChartOptions(props.type, props.direction) : undefined
)

const chartData = computed(
  () =>
    setChartData(
      props.chartMethodType,
      props.data?.activity,
      props.data?.article,
      props.data?.contact,
      props.data?.file,
      props.data?.money,
      props.data?.question,
      props.data?.technology,
      props.data?.user,
      props.example
    ) ?? undefined
)
</script>
