<template>
  <ad-card
    v-if="displayCharts[props.entity as keyof NucDisplayChartsStateInterface]"
    class="nuc-card-base entity-chart-card"
  >
    <template #content>
      <nuc-entity-chart
        :data="props.loading ? undefined : props.data"
        :chart-method-type="props.chartMethodType"
        :type="props.type"
        :direction="props.direction"
        :chart-class="
          [props.chartClass, props.loading ? 'chart-loading' : 'chart-loaded']
            .filter(Boolean)
            .join(' ')
        "
      />
    </template>
  </ad-card>
</template>

<script setup lang="ts">
import type { NucDisplayChartsStateInterface } from 'nucleify'
import { useDisplayChartsStore } from 'nucleify'

import type { NucEntityChartCardInterface } from 'nucleify'

const props = defineProps<NucEntityChartCardInterface>()

const displayCharts = useDisplayChartsStore()
</script>

<style lang="scss">  
@import 'index';
</style>
