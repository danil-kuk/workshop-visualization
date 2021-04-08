import React from 'react'
import { useProjectCompetenciesStatistic } from 'src/features/statistics/components/statistics1/hooks'
import { WordCloud } from '@ant-design/charts'

import style from '../style.scss'
import { AppLoadingSpinner } from '../../AppLoadingSpinner'
import { HEIGHT } from '../ChartConstants'

import { configBuilder } from './CloudConfig'

interface Props {
  eventId: number
}

export const ProjectCompetenciesWordCloud: React.FC<Props> = ({
  eventId,
}) => {
  const { data, loading } = useProjectCompetenciesStatistic(eventId)

  if (loading) {
    return (
      <div style={{ height: HEIGHT }}>
        <AppLoadingSpinner />
      </div>
    )
  }

  const config = configBuilder(data)

  const description = `Диаграмма отображает, какими компетенциями должны владеть студенты
    согласно требованиям заказчиков. Желтым обозначены soft skills, синим —
    hard skills. Размер названия характеризует частоту повторений определенного
    навыка в описании проектов: чем крупнее надпись, тем более
    востребованной является та или иная компетенция.`

  return (
    <>
      <p className={style.description}>{description}</p>
      <WordCloud {...config}/>
    </>
  )
}
