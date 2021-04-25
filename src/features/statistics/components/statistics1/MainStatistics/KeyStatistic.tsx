import React from 'react'

import { AppLoadingSpinner } from '../../AppLoadingSpinner'
import { useKeyStatistic } from '../hooks'
import style from '../style.module.scss'

interface Props {
  eventId: number
}

export const KeyStatistic : React.FC<Props> = ({
  eventId,
}) => {
  const { data, loading } = useKeyStatistic(eventId)

  if (loading) return <AppLoadingSpinner />

  return (
    <div className={style.keyWrapper}>
      <div className={style.keyStatistic}>
        <p>Студентов</p>
        <h2>{data.studentsCount}</h2>
      </div>
      <div className={style.keyStatistic}>
        <p>Проектов</p>
        <h2>{data.projectsCount}</h2>
      </div>
      <div className={style.keyStatistic}>
        <p>Заказчиков</p>
        <h2>{data.customersCount}</h2>
      </div>
    </div>
  )
}
