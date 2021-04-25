import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap'
import { useAdminStatistics } from 'src/features/statistics/components/Statistics2/hooks'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'

import { HEATMAP_COLORS, FONT_FAMILY, FONT_COLOR, HEATMAP_HEIGHT } from '../ChartConstants'

interface Props {
  type: 'studentsCount' | 'projectsCount'
}

export const LifeScenariosAndKeyTechnologiesStatistic: React.FC<Props> = ({ type }) => {
  const { data, loading } = useAdminStatistics()

  if (loading) {
    return (
      <div style={{ height: HEATMAP_HEIGHT }}>
        <AppLoadingSpinner />
      </div>
    )
  }

  const reducedObject = data.reduce(
    (accum: any, item) => {
      if (item[type] > 0) {
        return {
          ...accum,
          [item.lifeScenario.name]: {
            ...accum[item.lifeScenario.name],
            [item.keyTechnology.name]: item[type],
          },
        }
      }
      return { ...accum }
    },
    {},
  )

  const preparedData = Object.keys(reducedObject).reduce(
    (accum: any, key) => [
      ...accum,
      {
        ...reducedObject[key],
        lifeScenario: key,
      },
    ],
    [],
  )

  const keys = Array.from(new Set(data.map((item: any) => item.keyTechnology.name)))

  const maxValue = Math.max(...data.map((item: any) => item[type]))

  return (
    <div style={{ height: HEATMAP_HEIGHT }}>
      <ResponsiveHeatMap
        data={preparedData}
        keys={keys}
        indexBy='lifeScenario'
        margin={{
          top: 250,
          right: 0,
          bottom: 0,
          left: 170,
        }}
        forceSquare={true}
        colors={HEATMAP_COLORS}
        nanColor='var(--bg-secondary)'
        minValue={0}
        maxValue={maxValue}
        axisTop={{
          orient: 'top',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        cellOpacity={1}
        labelTextColor={{ theme: 'labels.text.fill' }}
        animate={true}
        motionConfig='stiff'
        hoverTarget='column'
        cellHoverOthersOpacity={0.3}
        theme={{
          fontFamily: FONT_FAMILY,
          fontSize: 14,
          axis: { ticks: { text: { fill: FONT_COLOR } } },
          labels: { text: { fill: FONT_COLOR } },
        }}
      />
    </div>
  )
}
