import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useProjectCompetenciesStatistic } from 'src/features/statistics/components/Statistics2/hooks'

import { PRIMARY_COLOR, SECONDARY_COLOR, HEIGHT } from '../ChartConstants'
import { AppLoadingSpinner } from '../../../../../components/AppLoadingSpinner'

import { BarTheme, GetTooltip } from './BarConfig'

interface Props {
  eventId: number
}

export const ProjectCompetenciesStatistic: React.FC<Props> = ({ eventId }) => {
  const { data, loading } = useProjectCompetenciesStatistic(eventId)

  if (loading) {
    return (
      <div style={{ height: HEIGHT }}>
        <AppLoadingSpinner />
      </div>
    )
  }

  const preparedData = data.sort((a, b) => a.value > b.value ? -1 : 1)
    .slice(0, 10)
    .map((item: any) => {
      if (item.competencyType === 'SoftSkill') {
        item.valueColor = SECONDARY_COLOR
      } else {
        item.valueColor = PRIMARY_COLOR
      }
      return item
    })

  return (
    <div style={{ height: HEIGHT }}>
      <ResponsiveBar
        data={preparedData}
        keys={['value']}
        indexBy='competency'
        margin={{
          top: 0,
          right: 160,
          bottom: 0,
          left: 0,
        }}
        padding={0.3}
        layout='horizontal'
        reverse={true}
        colors={({ id, data }: { id: string, data: any }) => data[`${id}Color`]}
        axisRight={{ tickSize: 0 }}
        enableGridX={true}
        enableGridY={false}
        labelTextColor={{ theme: 'labels.text.fill' }}
        tooltip={GetTooltip('проектов')}
        animate={true}
        theme={BarTheme}
      />
    </div>
  )
}
