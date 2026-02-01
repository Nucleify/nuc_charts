<template>
	<ad-chart 
		:data="chartData" 
		:options="chartOptions" 
		:type="props.type" 
		:chart-method-type="props.chartMethodType"
		:direction="props.direction" 
		:class="props.chartClass" 
		:example="props.example"
	/>
</template>

<script setup lang="ts">
import type { NucEntityChartInterface } from './types'
import { useChart } from './utils'

const props = defineProps<NucEntityChartInterface>()
const { chartData, setChartData, setChartOptions } = useChart()

const chartOptions = ref(setChartOptions(props.type, props.direction))

onMounted(() => {
  const initialData = setChartData(
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
  )
  if (initialData) chartData.value = initialData

  if (props.example) {
    const randomizedData = setChartData(
      props.chartMethodType,
      props.data?.activity,
      props.data?.article,
      props.data?.contact,
      props.data?.file,
      props.data?.money,
      props.data?.question,
      props.data?.technology,
      props.data?.user,
      true
    )
    if (randomizedData) chartData.value = randomizedData
  }
})

watch(
  () => ({
    method: props.chartMethodType,
    example: props.example,
    data: props.data,
  }),
  () => {
    const watchedData = setChartData(
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
    )
    if (watchedData) chartData.value = watchedData
  },
  { immediate: true, deep: true }
)
</script>