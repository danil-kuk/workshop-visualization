import flashlight from 'src/features/dashboard/images/flashlight.svg'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import StudentCompetencies from '../../components/StudentCompetencies'
import KeyStatistic from '../../components/KeyStatistic'
import CustomersTop from '../../components/CustomersTop'
import TypicalTeam from '../../components/TypicalTeam'
import { fetchDashboard } from '../../../../store/slices/dashboard'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { selectEventsList } from '../../../../store/slices/events'

import styles from './styles.module.scss'


export const Dashboard: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const events = useAppSelector(selectEventsList)

  useEffect(() => {
    const eventId = Number(id)

    if (events.find(item => item.id === eventId)) {
      dispatch(fetchDashboard(eventId))
    }
  }, [id])
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Проектный&nbsp;практикум&nbsp;Весна&nbsp;2021&nbsp;ИРИТ-РТФ</h1>

        <div className={styles.row}>
          <div className={styles.col6}>
            <h2>Распределение&nbsp;студентов&nbsp;по&nbsp;направлениям</h2>
          </div>

          <div className={styles.col3}>
            <h2>Ключевые&nbsp;показатели</h2>
            <KeyStatistic />

            <h2>Топ&nbsp;заказчиков</h2>
            <CustomersTop />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col3}>
            <h2>Компетенции&nbsp;участников</h2>
            <StudentCompetencies />
          </div>

          <div className={styles.col3}>
            <h2>Желаемые&nbsp;компетенции&nbsp;участников</h2>
            <StudentCompetencies />
          </div>

          <div className={styles.col3}>
            <h2>Заказчики&nbsp;по&nbsp;сфере&nbsp;деятельности</h2>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col6}>
            <h2>Распределение&nbsp;студентов&nbsp;по&nbsp;курсам</h2>
          </div>

          <div className={styles.col3}>
            <h2>Типовая&nbsp;команда</h2>
            <TypicalTeam />
          </div>
        </div>
      </div>
      <img
        className={styles.flashlight}
        src={flashlight}
        alt="flashlight"
      />
    </>
  )
}
