import { defineStore } from 'pinia'

import type {
  NucDisplayChartsStateInterface,
  NucDisplayChartsStateKeyType,
} from 'atomic'
import {
  getDisplayChartList,
  initialStoreState,
  setAllStatesTo,
  toggleState,
} from 'atomic'

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
