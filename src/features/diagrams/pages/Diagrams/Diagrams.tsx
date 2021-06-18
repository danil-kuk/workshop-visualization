import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppTabs } from 'src/components/AppTabs'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'
import { fetchDiagrams, selectDiagramsData, selectLoading } from 'src/store/slices/diagrams'
import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'

import { BarChart } from '../../components/BarChart'
import dashes from '../../images/dashes.svg'
import dotes from '../../images/dotes.svg'
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
  }, [eventId, diagramsData, event])

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
          <div className={styles.row}>
            {diagramsData.keyTechnologyCustomers && <KeyTechnologyGraph
              data={ diagramsData.keyTechnologyCustomers}
              key={1}
            />}
            <div className={styles.graphDescription}>
              <p>
                Граф отображает к каким ключевым технологиям относятся проекты заказчиков. Круглые вершины соответствуют заказчикам, прямоугольные – ключевым технологиям проектов. Чем крупнее вершина и шире ребро графа, тем больше у заказчика проектов.
              </p>
              <div className={styles.graphLegend}>
                <img
                  src={dotes}
                  alt="dotes"
                />
                <p>Заказчики (от малых к крупным)</p>
              </div>
              <div className={styles.graphLegend}>
                <img
                  src={dashes}
                  alt="dashes"
                />
                <p>Кол-во проектов заказчика (от малых к крупным)</p>
              </div>
            </div>
          </div>),
        tabClassName: styles.tabs,
      },
      {
        name: 'Граф кураторов и ключевых технологий',
        component: (
          <div className={styles.row}>
            {diagramsData.keyTechnologyCurators && <KeyTechnologyGraph
              data={ diagramsData.keyTechnologyCurators}
              key={2}
            />}
            <div className={styles.graphDescription}>
              <p>
                  Граф отображает к каким кураторам относятся проекты. Круглые вершины соответствуют кураторам, прямоугольные – ключевым технологиям заказчика. Чем крупнее вершина и шире ребро графа, тем больше у куратора проектов.
              </p>
              <div className={styles.graphLegend}>
                <img
                  src={dotes}
                  alt="dotes"
                />
                <p>Кураторы (от малых к крупным)</p>
              </div>
              <div className={styles.graphLegend}>
                <img
                  src={dashes}
                  alt="dashes"
                />
                <p>Кол-во проектов куратора (от малых к крупным)</p>
              </div>
            </div>
          </div>
        ),
        tabClassName: styles.tabs,
      }]}
      />
    </div>
  )
}
