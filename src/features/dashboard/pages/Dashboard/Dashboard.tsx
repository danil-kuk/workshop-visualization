import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exportComponentAsPNG } from 'react-component-export-image'
import { fetchDashboard, selectLoading, selectDashboardData } from 'src/store/slices/dashboard'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'
import { AppButton } from 'src/components/AppButton'
import { DeveloperBoardRounded } from '@material-ui/icons'

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
  const componentRef = useRef(null)
  const events = useAppSelector(selectEventsList)
  const event = events.find(item => item.id === eventId)
  const dashboardData = useAppSelector(selectDashboardData(eventId))
  const loading = useAppSelector(selectLoading)
  const [exportVisibility, setExportVisibility] = useState(true)

  useEffect(() => {
    if (!dashboardData && event) {
      dispatch(fetchDashboard(eventId))
    }
  }, [eventId, dashboardData])

  useEffect(() => {
    if (!exportVisibility) {
      exportComponentAsPNG(
        componentRef,
        { fileName: `dashboard_${eventId}` },
      ).then(() => setExportVisibility(true))
    }
  }, [exportVisibility])

  const exportDashboard = () => {
    setExportVisibility(false)
  }

  if (loading || !dashboardData) return <AppLoadingSpinner fullHeight />

  return (
    <div
      className={styles.container}
      ref={componentRef}
    >
      {!exportVisibility && <h1 className={styles.title}>{event === undefined ? '' : event.name}</h1>}
      <div className={styles.row}>
        <div className={styles.col6}>
          <h2 className={styles.underlineTitle}>Распределение студентов по направлениям</h2>
          {dashboardData.keyTechnologyStudents && <KeyTechnologyStudents data={dashboardData.keyTechnologyStudents} />}
        </div>

        <div className={styles.col3}>
          <h2>Ключевые показатели</h2>
          {dashboardData.keyStatistic && <KeyStatistic data={dashboardData.keyStatistic} />}
          <h2 className={styles.underlineTitle_s}>Топ заказчиков</h2>
          {dashboardData.customersTop && <CustomersTop data={dashboardData.customersTop} />}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col3}>
          <h2 className={styles.underlineTitle}>Компетенции участников</h2>
          {dashboardData.studentCompetencies && <StudentCompetencies data={dashboardData.studentCompetencies} />}
        </div>

        <div className={styles.col3}>
          <h2>Желаемые компетенции участников</h2>
          {dashboardData.desiredStudentCompetencies && <StudentCompetencies data={dashboardData.desiredStudentCompetencies} />}
        </div>

        <div className={styles.col3}>
          <h2>Заказчики по сфере деятельности</h2>
          {dashboardData.customersByActivity && <CustomersByActivity data={dashboardData.customersByActivity} />}
          {dashboardData.customersByArea && <CustomersByArea data={dashboardData.customersByArea} />}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col3}>
          <h2 className={styles.underlineTitle}>Распределение студентов по курсам</h2>
          {dashboardData.studentsByCourse && <StudentsByCourse data={dashboardData.studentsByCourse} />}
        </div>

        {exportVisibility &&
            <div className={styles.col3}>
              <h2 className={styles.underlineTitle}>Экспорт диаграмм</h2>
              <AppButton
                className={styles.exportBtn}
                onClick={exportDashboard}
                buttonType="secondary"
                icon={<DeveloperBoardRounded />}
              >
                Экспорт как PNG
              </AppButton>
            </div>
        }

        <div className={styles.col3}>
          <h2>Типовая команда</h2>
          {dashboardData.typicalTeam && <TypicalTeam data={dashboardData.typicalTeam} />}
        </div>
      </div>
    </div>
  )
}
