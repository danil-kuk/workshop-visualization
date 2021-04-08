import React from 'react'
import Graph from 'react-graph-vis'
import { useKeyTechnologyCuratorsStatistic } from 'src/features/statistics/components/statistics1/hooks'
import { GraphModel } from 'src/features/statistics/models/statistic'
import { truncate } from 'src/features/statistics/utils/stringUtils'
import useDarkMode from 'use-dark-mode'

import { AppLoadingSpinner } from '../../AppLoadingSpinner'
import { HEIGHT } from '../ChartConstants'
import style from '../style.scss'

import GetGraphConfig from './GraphConfig'

import './graph.css'

interface Props {
  eventId: number
}

export const CuratorsGraph : React.FC<Props> = ({
  eventId,
}) => {
  const { data, loading } = useKeyTechnologyCuratorsStatistic(eventId)
  const { value } = useDarkMode()

  if (loading) {
    return (
      <div style={{ height: HEIGHT }}>
        <AppLoadingSpinner />
      </div>
    )
  }

  const preparedData : GraphModel = {
    nodes: data.nodes.map(node =>
      ({ id: node.id, label: truncate(node.label, 40), title: `${node.label}, Проектов: ${node.value}`, group: node.group, value: node.value })),
    edges: data.edges.map(edge =>
      ({ from: edge.from, to: edge.to, value: edge.value, title: `Проектов: ${edge.value}` })),
  }

  const description = `Граф отображает, к каким направлениям относятся кураторы. Вершины
    прямоугольной формы соответствуют ключевым технологиям проектов,
    круглой — кураторам. Размер круглых вершин и ширина ребер
    характеризуют количество проектов у того или иного куратора: чем крупнее
    вершина и шире ребро графа, тем больше у куратора проектов.`

  return (
    <>
      <p className={style.description}>{description}</p>
      <Graph
        graph={preparedData}
        options={GetGraphConfig(value)}
        style={{ height: HEIGHT }}
      />
    </>
  )
}
