import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'

import { FONT_FAMILY, BUBBLE_COLORS, HEIGHT } from '../ChartConstants'
import { useProjectDistributionStatistic } from '../hooks'
import style from '../style.module.scss'

interface Props {
  eventId: number
}

export const ProjectsBubble : React.FC<Props> = ({ eventId }) => {
  const { data, loading } = useProjectDistributionStatistic(eventId)

  if (loading) {
    return (
      <div style={{ height: HEIGHT }}>
        <AppLoadingSpinner />
      </div>
    )
  }

  const description = `Диаграмма отображает распределение проектов по направлениям. Внешний
    круг соответствует событию («Проектный практикум»); круги чуть меньшего
    размера относятся к жизненным сценариям проектов; в каждом из
    жизненных сценариев количество кругов совпадает с количеством ключевых
    технологий определенного сценария; в ключевых технологиях количество
    кругов соответствует количеству проектов в рамках этой технологии; в
    каждом проекте количество кругов равняется количеству команд,
    работающих над данным проектом; круг каждой команды содержит число
    участников в ней.`

  return (
    <>
      <p className={style.description}>{description}</p>
      <div style={{
        height: HEIGHT,
        color: '#000',
      }}
      >
        <ResponsiveBubble
          root={data}
          margin={{
            top: 10,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          identity='name'
          value='value'
          colors={BUBBLE_COLORS}
          padding={6}
          labelSkipRadius={4}
          label='value'
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          borderWidth={2}
          borderColor={{ from: 'color' }}
          fill={[{
            match: { depth: 1 },
            id: 'lines',
          }]}
          animate={true}
          motionStiffness={300}
          motionDamping={40}
          theme={{
            labels: {
              text: {
                fontSize: 14,
                fontFamily: FONT_FAMILY,
              },
            },
          }}
        />
      </div>
    </>
  )
}
