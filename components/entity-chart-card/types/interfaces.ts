import type { LoadingRefType, NucEntityChartInterface } from 'nucleify'

export interface NucEntityChartCardInterface extends NucEntityChartInterface {
  loading: LoadingRefType | boolean
  chartClass?: string
  entity: string
}
