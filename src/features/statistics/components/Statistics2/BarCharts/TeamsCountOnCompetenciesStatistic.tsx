import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useTeamsCountOnCompetenciesStatistic } from 'src/features/statistics/components/Statistics2/hooks'
import { PRIMARY_COLOR, HEIGHT } from 'src/features/statistics/components/Statistics2/ChartConstants'

import { AppLoadingSpinner } from '../../AppLoadingSpinner'

import { BarTheme, GetTooltip } from './BarConfig'

interface Props {
  eventId: number
}

export const TeamsCountOnCompetenciesStatistic: React.FC<Props> = ({
  eventId,
}) => {
  const { data, loading } = useTeamsCountOnCompetenciesStatistic(eventId)

  if (loading) {
    return (
      <div style={{ height: HEIGHT }}>
        <AppLoadingSpinner />
      </div>
    )
  }

  const preparedData = data
    .sort((a, b) => a.value > b.value ? -1 : 1)
    .slice(0, 10)

  return (
    <div style={{ height: HEIGHT }}>
      <ResponsiveBar
        data={preparedData}
        keys={['value']}
        indexBy='competency'
        margin={{ top: 0, right: 160, bottom: 0, left: 160 }}
        padding={0.3}
        layout='horizontal'
        colors={PRIMARY_COLOR}
        axisLeft={{
          tickSize: 0,
        }}
        enableGridX={true}
        enableGridY={false}
        labelTextColor={{ theme: 'labels.text.fill' }}
        tooltip={GetTooltip('команд')}
        animate={true}
        theme={BarTheme}
      />
    </div>
  )
}
