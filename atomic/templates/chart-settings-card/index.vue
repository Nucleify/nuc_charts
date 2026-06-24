<template>
  <ad-card class="settings-card">
    <template #header>
      <div class="settings-card-header-container">
        <ad-heading :tag="4" :text="props.heading || 'Settings'" />

        <ad-button
          icon="prime:refresh"
          ad-type="main"
          class="refresh-button"
          rounded
          text
          @click="displayChartsStore.setAllTo(true)"
        />
      </div>
    </template>
    <template #content>
      <div
        v-for="group in displayChartGroups"
        :key="group.name"
        class="settings-card-group"
      >
        <h4 class="settings-card-group-title">{{ group.name }}</h4>
        <ul class="settings-card-item-list">
          <li
            v-for="item in group.items"
            :key="item"
            class="settings-card-item"
          >
            <ad-label :label="item" :for="item" />

            <ad-select-button
              ad-type="main"
              :model-value="displayCharts[item].value ? 'On' : 'Off'"
              :options="options"
              @click="displayChartsStore.toggle(item)"
            />
          </li>
        </ul>
      </div>
    </template>
  </ad-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

import { displayChartGroups, useDisplayChartsStore } from 'nucleify'

const props = defineProps<{
  heading: string
}>()

const displayChartsStore = useDisplayChartsStore()
const displayCharts = storeToRefs(displayChartsStore)
const options = ref(['On', 'Off'])
</script>
