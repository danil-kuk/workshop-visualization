import React from 'react'
import { useStudentCompetenciesStatistic } from 'src/features/statistics/components/statistics1/hooks'
import { WordCloud } from '@ant-design/charts'

import style from '../style.scss'
import { AppLoadingSpinner } from '../../AppLoadingSpinner'
import { HEIGHT } from '../ChartConstants'

import { configBuilder } from './CloudConfig'

interface Props {
  eventId: number
}

export const StudentCompetenciesWordCloud: React.FC<Props> = ({
  eventId,
}) => {
  const { data, loading } = useStudentCompetenciesStatistic(eventId)

  if (loading) {
    return (
      <div style={{ height: HEIGHT }}>
        <AppLoadingSpinner />
      </div>
    )
  }

  const config = configBuilder(data)

  const description = `Диаграмма отображает, какими компетенциями владеют студенты. Желтым
    обозначены soft skills, синим — hard skills. Размер характеризует
    частоту повторений определенного навыка у студентов: чем крупнее
    надпись, тем большее количество студентов обладают той или иной
    компетенцией.`

  return (
    <>
      <p className={style.description}>{description}</p>
      <WordCloud {...config}/>
    </>
  )
}
