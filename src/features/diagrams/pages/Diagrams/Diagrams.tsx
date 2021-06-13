import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppTabs } from 'src/components/AppTabs'

import { BarChart } from '../../components/BarChart'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { selectEventsList } from '../../../../store/slices/events'
import { fetchDiagrams, selectDiagramsData, selectLoading } from '../../../../store/slices/diagrams'
import { AppLoadingSpinner } from '../../../../components/AppLoadingSpinner'
import { Cloud } from '../../components/Cloud'
import { KeyTechnologyGraph } from '../../components/Graph'

import styles from './style.module.scss'

export const Diagrams = () => {
  const { id } = useParams()
  const eventId = Number(id)
  const dispatch = useAppDispatch()
  const events = useAppSelector(selectEventsList)
  const event = events.find(item => item.id === eventId)
  const diagramsData = useAppSelector(selectDiagramsData(eventId))
  const loading = useAppSelector(selectLoading)

  useEffect(() => {
    if (!diagramsData && event) {
      dispatch(fetchDiagrams(eventId))
    }
  }, [eventId, diagramsData])

  if (loading || !diagramsData) return <AppLoadingSpinner fullHeight />

  return(
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2 className={styles.underlineTitle}>Студенты по жизненному сценарию и ключевой технологии</h2>
          {diagramsData.lifeScenarioStudents &&
          <BarChart
            data={ diagramsData.lifeScenarioStudents}
            tooltip={'студентов'}
          />}
          <div className={styles.barLegend}>
            <div>
              <p>Профессиональный сценарий</p>
            </div>
            <div>
              <p>Предпринимательский сценарий</p>
            </div>
            <div>
              <p>Научный сценарий</p>
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <h2 className={styles.underlineTitle}>Проекты по жизненному сценарию и ключевой технологии</h2>
          {diagramsData.lifeScenarioProjects && <BarChart
            data={ diagramsData.lifeScenarioProjects}
            tooltip={'проектов'}
          />}
        </div>
      </div>

      <AppTabs tabs={[{
        name: 'Компетенции студентов по популярности',
        component: (<>{diagramsData.studentCompetencies && <Cloud data={ diagramsData.studentCompetencies} />}</>),
        tabClassName: styles.tabs,
      },{
        name: 'Требования заказчиков по популярности',
        component: (<>{diagramsData.projectCompetencies && <Cloud data={ diagramsData.projectCompetencies} />}</>),
        tabClassName: styles.tabs,
      }]}
      />

      <AppTabs tabs={[{
        name: 'Граф заказчиков и ключевых технологий',
        component: (
          <>
            {diagramsData.keyTechnologyCustomers && <KeyTechnologyGraph
              data={ diagramsData.keyTechnologyCustomers}
              key={1}
            />}
          </>),
        tabClassName: styles.tabs,
      },{
        name: 'Граф кураторов и ключевых технологий',
        component: (
          <>{
            diagramsData.keyTechnologyCurators && <KeyTechnologyGraph
              data={ diagramsData.keyTechnologyCurators}
              key={2}
            />}
          </>),
        tabClassName: styles.tabs,
      }]}
      />
    </div>
  )
}
