import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDashboard, selectLoading, selectDashboardData } from 'src/store/slices/dashboard'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'

import { StudentCompetencies } from '../../components/StudentCompetencies'
import { KeyStatistic } from '../../components/KeyStatistic'
import { CustomersTop } from '../../components/CustomersTop'
import { TypicalTeam } from '../../components/TypicalTeam'
import { KeyTechnologyStudents } from '../../components/KeyTechnologyStudents'
import { CustomersByActivity, CustomersByArea, StudentsByCourse } from '../../components/PieDiagram'

import styles from './styles.module.scss'

export const Dashboard: React.FC = () => {
  const { id } = useParams()
  const eventId = Number(id)
  const dispatch = useAppDispatch()

  const events = useAppSelector(selectEventsList)
  const data = useAppSelector(selectDashboardData(eventId))
  const loading = useAppSelector(selectLoading)

  useEffect(() => {
    if (!data && events.find(item => item.id === eventId)) {
      dispatch(fetchDashboard(eventId))
    }
  }, [eventId, data])

  if (loading || !data) return <AppLoadingSpinner fullHeight />

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Проектный&nbsp;практикум&nbsp;Весна&nbsp;2021&nbsp;ИРИТ-РТФ</h1>

      <div className={styles.row}>
        <div className={styles.col6}>
          <h2 className={styles.underlineTitle}>Распределение&nbsp;студентов&nbsp;по&nbsp;направлениям</h2>
          {data.keyTechnologyStudents && <KeyTechnologyStudents data={data.keyTechnologyStudents} />}
        </div>

        <div className={styles.col3}>
          <h2>Ключевые&nbsp;показатели</h2>
          {data.keyStatistic && <KeyStatistic data={data.keyStatistic} />}
          <h2 className={styles.underlineTitle_s}>Топ&nbsp;заказчиков</h2>
          {data.customersTop && <CustomersTop data={data.customersTop} />}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col3}>
          <h2 className={styles.underlineTitle}>Компетенции&nbsp;участников</h2>
          {data.studentCompetencies && <StudentCompetencies data={data.studentCompetencies} />}
        </div>

        <div className={styles.col3}>
          <h2>Желаемые&nbsp;компетенции&nbsp;участников</h2>
          {data.desiredStudentCompetencies && <StudentCompetencies data={data.desiredStudentCompetencies} />}
        </div>

        <div className={styles.col3}>
          <h2>Заказчики&nbsp;по&nbsp;сфере&nbsp;деятельности</h2>
          {data.customersByActivity && <CustomersByActivity data={data.customersByActivity} />}
          {data.customersByArea && <CustomersByArea data={data.customersByArea} />}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col6}>
          <h2 className={styles.underlineTitle}>Распределение&nbsp;студентов&nbsp;по&nbsp;курсам</h2>
          {data.studentsByCourse && <StudentsByCourse data={data.studentsByCourse} />}
        </div>

        <div className={styles.col3}>
          <h2>Типовая&nbsp;команда</h2>
          {data.typicalTeam && <TypicalTeam data={data.typicalTeam} />}
        </div>
      </div>
    </div>
  )
}
