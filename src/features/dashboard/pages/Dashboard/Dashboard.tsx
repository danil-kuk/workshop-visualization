import { lazy } from 'react'
import flashlight from 'src/features/dashboard/images/flashlight.svg'


import StudentCompetencies from '../../components/StudentCompetencies'

import styles from './styles.module.scss'


const KeyStatistic = lazy(() => import('../../components/KeyStatistic'))
const TopCustomer  = lazy(() => import('../../components/CustomersTop'))
const TypicalTeam = lazy(() => import('../../components/TypicalTeam'))

export const Dashboard: React.FC = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.title}>Проектный практикум Весна 2021 ИРИТ-РТФ</h1>

      <div className={styles.row}>
        <div className={styles.col6}>
          <h2>Распределение студентов по направлениям</h2>
        </div>

        <div className={styles.col3}>
          <h2>Ключевые показатели</h2>
          <KeyStatistic />

          <h2>Топ заказчиков</h2>
          <TopCustomer />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col3}>
          <h2>Компетенции участников</h2>
          <StudentCompetencies />
        </div>

        <div className={styles.col3}>
          <h2>Желаемые компетенции участников</h2>
          <StudentCompetencies />
        </div>

        <div className={styles.col3}>
          <h2>Заказчики по сфере деятельности</h2>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col6}>
          <h2>Распределение студентов по курсам</h2>
        </div>

        <div className={styles.col3}>
          <h2>Типовая команда</h2>
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
