import React from 'react'
import { KeyStatisticModel } from 'src/features/statistics/models'
import { getWordForm } from 'src/utils/stringUtils'

import styles from '../styles.module.scss'

interface Props {
  data: KeyStatisticModel
}

export const KeyStatistic: React.FC<Props> = ({ data }) => (
  <div className={styles.keyStatsWrapper}>
    <div>
      <p>
        {getWordForm(data.studentsCount, 'Студент', 'Студента', 'Студентов')}
      </p>
      <h3>
        {data.studentsCount}
      </h3>
    </div>
    <div>
      <p>
        {getWordForm(data.projectsCount, 'Проект', 'Проекта', 'Проектов')}
      </p>
      <h3>
        {data.projectsCount}
      </h3>
    </div>
    <div>
      <p>
        {getWordForm(data.customersCount, 'Заказчик', 'Заказчика', 'Заказчиков')}
      </p>
      <h3>
        {data.customersCount}
      </h3>
    </div>
    <div>
      <p>
        {getWordForm(data.curatorsCount, 'Куратор', 'Куратора', 'Кураторов')}
      </p>
      <h3>
        {data.curatorsCount}
      </h3>
    </div>
    <div>
      <p>
        {getWordForm(data.teamsCount, 'Команда', 'Команды', 'Команд')}
      </p>
      <h3>
        {data.teamsCount}
      </h3>
    </div>
  </div>
)
