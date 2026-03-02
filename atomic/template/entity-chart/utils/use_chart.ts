/* eslint-disable */
// @ts-nocheck

import { ChartOptions } from 'chart.js'
import { Ref, ref } from 'vue'

import {
  allEntitiesKeys,
  allEntitiesLabels,
  ChartInterface,
  ChartMethodType,
  ChartType,
  LabelItemType,
  months,
  NucActivityObjectInterface,
  NucArticleObjectInterface,
  NucCardObjectInterface,
  NucContactObjectInterface,
  NucFeatureObjectInterface,
  NucFileObjectInterface,
  NucLinkObjectInterface,
  NucMoneyObjectInterface,
  NucQuestionObjectInterface,
  NucTaskObjectInterface,
  NucTechnologyObjectInterface,
  NucUserObjectInterface,
  ObjectType,
  UseColorsInterface,
  useColors,
} from 'atomic'

import {
  cartesianChart,
  circularChart,
  pointerChart,
  prepareAnnualData,
  prepareCountData,
  radialChart,
  stackedBarChart,
} from './prepare'

export function useChart() {
  const { colors }: UseColorsInterface = useColors()

  const chartData: Ref<ChartInterface | undefined> = ref<ChartInterface>()

  const exampleColors = Object.fromEntries(
    [
      ['activity', '#FFB600'],
      ['user', '#64748B'],
      ['article', '#1187C7'],
      ['contact', '#10B981'],
      ['file', '#6DB910'],
      ['money', '#11C73B'],
      ['question', '#8CB910'],
      ['technology', '#B95910'],
      ['user', '#64748B'],
    ].map(([key, primary]) => [key, { primary, secondary: `${primary}35` }])
  )

  const chartLabels: { label: LabelItemType }[] = allEntitiesLabels.map(
    (label) => ({
      label,
    })
  )

  function generateExampleDataByMonth() {
    const dataByMonth = Object.fromEntries(
      [...allEntitiesKeys].map((key) => [`${key}`, new Array(12).fill(0)])
    )

    for (let i = 0; i < 12; i++) {
      dataByMonth.article[i] = Math.floor(Math.random() * 100)
      dataByMonth.contact[i] = Math.floor(Math.random() * 100)
    }

    return dataByMonth
  }

  function setChartData(
    chartMethodType: ChartMethodType,
    activityLogData?: NucActivityObjectInterface[],
    articleData?: NucArticleObjectInterface[],
    contactData?: NucContactObjectInterface[],
    fileData?: NucFileObjectInterface[],
    moneyData?: NucMoneyObjectInterface[],
    questionData?: NucQuestionObjectInterface[],
    technologyData?: NucTechnologyObjectInterface[],
    userData?: NucUserObjectInterface[],
    example?: boolean
  ) {
    try {
      const entitiesData = {
        activityLogData,
        articleData,
        contactData,
        fileData,
        moneyData,
        questionData,
        technologyData,
        userData,
      } as Record<string, ObjectType[]>

      let labels: string[] = []

      const chartColors = example ? exampleColors : colors
      const exampleDataByMonth = example
        ? generateExampleDataByMonth()
        : undefined

      let stacked = true

      switch (chartMethodType) {
        case 'annual': {
          return prepareAnnualData(
            entitiesData,
            chartColors,
            undefined,
            undefined,
            undefined,
            exampleDataByMonth
          )
        }
        case 'annual-stacked': {
          return prepareAnnualData(
            entitiesData,
            chartColors,
            stacked,
            undefined,
            undefined,
            exampleDataByMonth
          )
        }
        case 'count': {
          return prepareCountData(entitiesData, chartColors, exampleDataByMonth)
        }
        default:
          return null
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  function setChartOptions(
    chartType: ChartType,
    direction?: string
  ): ChartOptions {
    let options: ChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: '#cce4dd',
          },
        },
      },
    }

    switch (chartType) {
      case 'bar':
      case 'line': {
        return cartesianChart(
          options,
          direction === 'horizontal' ? 'horizontal' : undefined
        )
      }
      case 'bubble': {
        return pointerChart(options, { withRadius: true })
      }
      case 'doughnut':
      case 'pie': {
        return circularChart(options)
      }
      case 'polarArea': {
        return radialChart(options, { gridColor: '#cce4dd' })
      }
      case 'radar': {
        return radialChart(options, {
          angleLinesDisplay: false,
          gridColor: '#39404a50',
          tickColor: '#e6e6e6',
        })
      }
      case 'scatter': {
        return pointerChart(options)
      }
      default:
        return options
    }
  }

  return { chartData, setChartData, setChartOptions }
}
