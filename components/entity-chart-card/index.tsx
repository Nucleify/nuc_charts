'use client'

import React from 'react'

import type {
  NucDisplayChartsStateInterface,
  NucEntityChartCardInterface,
} from 'nucleify'
import { AdCard, NucEntityChart, useDisplayChartsStore } from 'nucleify'

import './_index.scss'

export const NucEntityChartCard: React.FC<NucEntityChartCardInterface> = (
  props
) => {
  const displayCharts = useDisplayChartsStore()

  const isVisible =
    displayCharts[props.entity as keyof NucDisplayChartsStateInterface]

  if (!isVisible) return null

  const chartClassName = `${props.chartClass || ''} ${props.loading ? 'chart-loading' : 'chart-loaded'}`

  return (
    <AdCard className="nuc-card-base entity-chart-card">
      <NucEntityChart
        data={props.loading ? undefined : props.data}
        chartMethodType={props.chartMethodType}
        type={props.type}
        direction={props.direction}
        className={chartClassName}
        example={props.example}
      />
    </AdCard>
  )
}
