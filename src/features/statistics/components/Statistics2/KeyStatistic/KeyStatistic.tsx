import React from 'react'
import { getWordForm } from 'src/utils/stringUtils'
import { useKeyStatistic } from 'src/features/statistics/components/Statistics2/hooks'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'

import styles from '../style.module.scss'

interface Props {
  eventId: number
}

export const KeyStatistic: React.FC<Props> = ({ eventId }) => {
  const { data, loading } = useKeyStatistic(eventId)

  if (loading) return <AppLoadingSpinner />

  return (
    <div className={styles.keyWrapper}>
      <div>
        <h2>
          {data.studentsCount}
        </h2>
        <p>
          {getWordForm(data.studentsCount, 'Студент', 'Студента', 'Студентов')}
        </p>
      </div>
      <div>
        <h2>
          {data.teamsCount}
        </h2>
        <p>
          {getWordForm(data.teamsCount, 'Команда', 'Команды', 'Команд')}
        </p>
      </div>
      <div>
        <h2>
          {data.projectsCount}
        </h2>
        <p>
          {getWordForm(data.projectsCount, 'Проект', 'Проекта', 'Проектов')}
        </p>
      </div>
      <div>
        <h2>
          {data.curatorsCount}
        </h2>
        <p>
          {getWordForm(data.curatorsCount, 'Куратор', 'Куратора', 'Кураторов')}
        </p>
      </div>
      <div>
        <h2>
          {data.customersCount}
        </h2>
        <p>
          {getWordForm(data.customersCount, 'Заказчик', 'Заказчика', 'Заказчиков')}
        </p>
      </div>
    </div>
  )
}
