import type { LoadingType, NucEntityChartInterface } from 'nucleify'

export interface NucEntityChartCardInterface extends NucEntityChartInterface {
  loading?: LoadingType
  chartClass?: string
  entity: string
}
