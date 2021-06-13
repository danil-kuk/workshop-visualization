import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { BAR_HEIGHT, BAR_COLORS } from 'src/features/diagrams/components/ChartConstants'
import { LifeScenarioModel } from 'src/models'

import { BarTheme, GetTooltip } from './BarConfig'

interface Props {
  data: LifeScenarioModel[]
  tooltip: string
}

export const BarChart: React.FC<Props> = ({ data, tooltip }) => (
  <div style={{ height: BAR_HEIGHT }}>
    <ResponsiveBar
      data={data}
      keys={['professionalValue', 'entrepreneurialValue', 'scientificValue']}
      indexBy='keyTechnology'
      margin={{
        top: 0,
        right: 0,
        bottom: 20,
        left: 130,
      }}
      padding={0.3}
      layout='horizontal'
      colors={BAR_COLORS}
      axisLeft={{ tickSize: 0 }}
      axisBottom={{ tickSize: 0 }}
      enableGridX={true}
      enableGridY={true}
      labelTextColor='#ffffff'
      labelSkipWidth = {1}
      tooltip={GetTooltip(tooltip)}
      animate={true}
      theme={BarTheme}
    />
  </div>
)
