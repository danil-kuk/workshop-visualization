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
import { AppBaseLayout } from '../../../../components/AppBaseLayout'

import styles from './styles.module.scss'

export const Dashboard: React.FC = () => {
  const { id } = useParams()
  const eventId = Number(id)
  const dispatch = useAppDispatch()
  const componentRef = useRef(null)

  const events = useAppSelector(selectEventsList)
  const data = useAppSelector(selectDashboardData(eventId))
  const loading = useAppSelector(selectLoading)
  const [showExport, setShowExport] = useState(true)

  useEffect(() => {
    if (!data && events.find(item => item.id === eventId)) {
      dispatch(fetchDashboard(eventId))
    }
  }, [eventId, data])

  useEffect(() => {
    if (!showExport) {
      exportComponentAsPNG(
        componentRef,
        { fileName: `dashboard_${eventId}` },
      ).then(() => setShowExport(true))
    }
  }, [showExport])

  const exportDashboard = () => {
    setShowExport(false)
  }

  if (loading || !data) return <AppLoadingSpinner fullHeight />

  return (
    <AppBaseLayout>
      <div
        className={styles.container}
        ref={componentRef}
      >
        <h1 className={styles.title}>Проектный практикум Весна 2021 ИРИТ-РТФ</h1>

        <div className={styles.row}>
          <div className={styles.col6}>
            <h2 className={styles.underlineTitle}>Распределение студентов по направлениям</h2>
            {data.keyTechnologyStudents && <KeyTechnologyStudents data={data.keyTechnologyStudents} />}
          </div>

          <div className={styles.col3}>
            <h2>Ключевые показатели</h2>
            {data.keyStatistic && <KeyStatistic data={data.keyStatistic} />}
            <h2 className={styles.underlineTitle_s}>Топ заказчиков</h2>
            {data.customersTop && <CustomersTop data={data.customersTop} />}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col3}>
            <h2 className={styles.underlineTitle}>Компетенции участников</h2>
            {data.studentCompetencies && <StudentCompetencies data={data.studentCompetencies} />}
          </div>

          <div className={styles.col3}>
            <h2>Желаемые компетенции участников</h2>
            {data.desiredStudentCompetencies && <StudentCompetencies data={data.desiredStudentCompetencies} />}
          </div>

          <div className={styles.col3}>
            <h2>Заказчики по сфере деятельности</h2>
            {data.customersByActivity && <CustomersByActivity data={data.customersByActivity} />}
            {data.customersByArea && <CustomersByArea data={data.customersByArea} />}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col3}>
            <h2 className={styles.underlineTitle}>Распределение студентов по курсам</h2>
            {data.studentsByCourse && <StudentsByCourse data={data.studentsByCourse} />}
          </div>

          {showExport &&
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
            {data.typicalTeam && <TypicalTeam data={data.typicalTeam} />}
          </div>
        </div>
      </div>
    </AppBaseLayout>
  )
}
