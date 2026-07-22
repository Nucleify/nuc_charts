import type { NucDisplayChartsStateKeyType } from 'nucleify'
import { getDisplayChartList, useBooleanStore } from 'nucleify'

const displayChartKeys = getDisplayChartList() as NucDisplayChartsStateKeyType[]

export const useDisplayChartsStore = useBooleanStore(displayChartKeys, true)
