import type { NucDisplayChartsStateKeyType } from 'nucleify'

export interface NucDisplayChartsStateInterface
  extends Record<NucDisplayChartsStateKeyType, boolean> {}

export interface NucChartSettingsCardInterface {
  heading?: string
}
