import type {
  AdChartInterface,
  AdChartMethodType,
  NucActivityObjectInterface,
  NucArticleObjectInterface,
  NucContactObjectInterface,
  NucFileObjectInterface,
  NucMoneyObjectInterface,
  NucQuestionObjectInterface,
  NucTechnologyObjectInterface,
  NucUserObjectInterface,
} from 'nucleify'

export interface NucEntityChartDataInterface {
  activity?: NucActivityObjectInterface[]
  article?: NucArticleObjectInterface[]
  contact?: NucContactObjectInterface[]
  file?: NucFileObjectInterface[]
  money?: NucMoneyObjectInterface[]
  question?: NucQuestionObjectInterface[]
  technology?: NucTechnologyObjectInterface[]
  user?: NucUserObjectInterface[]
}

export interface NucEntityChartInterface extends AdChartInterface {
  chartMethodType: AdChartMethodType
  data?: NucEntityChartDataInterface
  type?: string
}
