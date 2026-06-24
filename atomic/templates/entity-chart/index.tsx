'use client'

import type { ChartData } from 'chart.js'
import React, { useMemo } from 'react'

import type { NucEntityChartInterface } from 'nucleify'
import { AdChart, type ChartType, useChart } from 'nucleify'

export const NucEntityChart: React.FC<NucEntityChartInterface> = (props) => {
  const { setChartData, setChartOptions } = useChart()

  const chartOptions = useMemo(() => {
    if (!props.type) return {}

    return setChartOptions(props.type as ChartType, props.direction)
  }, [props.type, props.direction, setChartOptions])

  const chartData: ChartData | undefined = useMemo(() => {
    const data = setChartData(
      props.chartMethodType,
      props.data?.activity,
      props.data?.article,
      props.data?.contact,
      props.data?.file,
      props.data?.money,
      props.data?.question,
      props.data?.technology,
      props.data?.user,
      props.example
    )
    if (!data) return undefined
    return {
      ...data,
      labels: data.labels ? [...data.labels] : data.labels,
    }
  }, [
    props.chartMethodType,
    props.data?.activity,
    props.data?.article,
    props.data?.contact,
    props.data?.file,
    props.data?.money,
    props.data?.question,
    props.data?.technology,
    props.data?.user,
    props.example,
    setChartData,
  ])

  return (
    <AdChart
      data={chartData}
      options={chartOptions}
      type={props.type}
      chartMethodType={props.chartMethodType}
      direction={props.direction}
      className={props.chartClass}
      example={props.example}
    />
  )
}
