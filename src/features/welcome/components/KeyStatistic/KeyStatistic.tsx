import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/store'
import { fetchKeyStatistic, selectKeyStatistic } from 'src/store/slices/dashboard'

import styles from './styles.module.scss'

export const KeyStatistic: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const keyStatistic = useAppSelector(selectKeyStatistic)

  useEffect(() => {
    if (id) {
      dispatch(fetchKeyStatistic(Number(id)))
    }
  }, [id])

  return keyStatistic && (
    <div className={styles.stats}>
      <p>Студенты: {keyStatistic.studentsCount}</p>
      <p>Проекты: {keyStatistic.projectsCount}</p>
      <p>Команды: {keyStatistic.teamsCount}</p>
      <p>Кураторы: {keyStatistic.curatorsCount}</p>
      <p>Заказчики: {keyStatistic.customersCount}</p>
    </div>
  )
}
