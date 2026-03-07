import { defineStore } from 'pinia'

import type {
  NucDisplayChartsStateInterface,
  NucDisplayChartsStateKeyType,
} from 'nucleify'
import {
  getDisplayChartList,
  initialStoreState,
  setAllStatesTo,
  toggleState,
} from 'nucleify'

export const useDisplayChartsStore = defineStore('displayCharts', {
  state: (): NucDisplayChartsStateInterface =>
    initialStoreState(getDisplayChartList(), true),
  actions: {
    toggle(key: NucDisplayChartsStateKeyType): void {
      this[key] = toggleState(this[key])
    },
    setAllTo(value: boolean): void {
      this.$state = setAllStatesTo(this, value)
    },
  },
  persist: true,
})
