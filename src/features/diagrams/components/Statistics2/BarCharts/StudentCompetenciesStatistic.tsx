import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useStudentCompetenciesStatistic } from 'src/features/diagrams/components/Statistics2/hooks'
import { PRIMARY_COLOR, SECONDARY_COLOR, HEIGHT } from 'src/features/diagrams/components/Statistics2/ChartConstants'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'

import { BarTheme, GetTooltip } from './BarConfig'

interface Props {
  eventId: number
}

export const StudentCompetenciesStatistic: React.FC<Props> = ({ eventId }) => {
  const { data, loading } = useStudentCompetenciesStatistic(eventId)

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
          right: 0,
          bottom: 0,
          left: 160,
        }}
        padding={0.3}
        layout='horizontal'
        colors={({ id, data }: { id: string, data: any }) => data[`${id}Color`]}
        axisLeft={{ tickSize: 0 }}
        enableGridX={true}
        enableGridY={false}
        labelTextColor={{ theme: 'labels.text.fill' }}
        tooltip={GetTooltip('студентов')}
        animate={true}
        theme={BarTheme}
      />
    </div>
  )
}
