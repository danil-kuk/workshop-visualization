import flashlight from 'src/features/dashboard/images/flashlight.svg'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDashboard, selectLoading } from 'src/store/slices/dashboard'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'

import StudentCompetencies from '../../components/StudentCompetencies'
import KeyStatistic from '../../components/KeyStatistic'
import CustomersTop from '../../components/CustomersTop'
import TypicalTeam from '../../components/TypicalTeam'
import KeyTechnologyStudents from '../../components/KeyTechnologyStudents'
import { CustomersByActivity, CustomersByArea, StudentsByCourse } from '../../components/PieDiagram'

import styles from './styles.module.scss'

export const Dashboard: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const events = useAppSelector(selectEventsList)
  const loading = useAppSelector(selectLoading)

  useEffect(() => {
    const eventId = Number(id)

    if (events.find(item => item.id === eventId)) {
      dispatch(fetchDashboard(eventId))
    }
  }, [id])

  if (loading) return <AppLoadingSpinner fullHeight/>
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Проектный&nbsp;практикум&nbsp;Весна&nbsp;2021&nbsp;ИРИТ-РТФ</h1>

        <div className={styles.row}>
          <div className={styles.col6}>
            <h2 className={styles.underlineTitle}>Распределение&nbsp;студентов&nbsp;по&nbsp;направлениям</h2>
            <KeyTechnologyStudents />
          </div>

          <div className={styles.col3}>
            <h2>Ключевые&nbsp;показатели</h2>
            <KeyStatistic />
            <h2 className={styles.underlineTitle_s}>Топ&nbsp;заказчиков</h2>
            <CustomersTop />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col3}>
            <h2 className={styles.underlineTitle}>Компетенции&nbsp;участников</h2>
            <StudentCompetencies />
          </div>

          <div className={styles.col3}>
            <h2>Желаемые&nbsp;компетенции&nbsp;участников</h2>
            <StudentCompetencies  desired />
          </div>

          <div className={styles.col3}>
            <h2>Заказчики&nbsp;по&nbsp;сфере&nbsp;деятельности</h2>
            <CustomersByActivity />
            <CustomersByArea />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col6}>
            <h2  className={styles.underlineTitle}>Распределение&nbsp;студентов&nbsp;по&nbsp;курсам</h2>
            <StudentsByCourse />
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
