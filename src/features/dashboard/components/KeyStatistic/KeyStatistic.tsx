import React from 'react'
import { useAppSelector } from 'src/store'
import { selectKeyStatistic } from 'src/store/slices/dashboard'

import styles from '../styles.module.scss'
import { getWordForm } from '../../../../utils/stringUtils'

export const KeyStatistic: React.FC = () => {
  const keyStatistic = useAppSelector(selectKeyStatistic)

  return keyStatistic && (
    <div className={styles.keyStatsWrapper}>
      <div>
        <p>
          {getWordForm(keyStatistic.studentsCount, 'Студент', 'Студента', 'Студентов')}
        </p>
        <h3>
          {keyStatistic.studentsCount}
        </h3>
      </div>
      <div>
        <p>
          {getWordForm(keyStatistic.projectsCount, 'Проект', 'Проекта', 'Проектов')}
        </p>
        <h3>
          {keyStatistic.projectsCount}
        </h3>
      </div>
      <div>
        <p>
          {getWordForm(keyStatistic.teamsCount, 'Команда', 'Команды', 'Команд')}
        </p>
        <h3>
          {keyStatistic.teamsCount}
        </h3>
      </div>
      <div>
        <p>
          {getWordForm(keyStatistic.curatorsCount, 'Куратор', 'Куратора', 'Кураторов')}
        </p>
        <h3>
          {keyStatistic.curatorsCount}
        </h3>
      </div>
      <div>
        <p>
          {getWordForm(keyStatistic.customersCount, 'Заказчик', 'Заказчика', 'Заказчиков')}
        </p>
        <h3>
          {keyStatistic.customersCount}
        </h3>
      </div>
    </div>
  )
}
