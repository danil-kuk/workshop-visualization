import React from 'react'
import { Bar } from '@ant-design/charts'
import { BarConfig } from '@ant-design/charts/es/bar'
import { useKeyTechnologyStudentsStatistic } from 'src/features/statistics/components/statistics1/hooks'
import { AppCard } from 'src/features/statistics/components/AppCard'
import cls from 'classnames'

import { PRIMARY_COLOR, WHITE, FONT_FAMILY } from '../ChartConstants'
import { AppLoadingSpinner } from '../../AppLoadingSpinner'
import style from '../style.module.scss'

interface Props {
  eventId: number
}

export const KeyTechnologyStudentsBarChart : React.FC<Props> = ({
  eventId,
}) => {
  const { data, loading } = useKeyTechnologyStudentsStatistic(eventId)

  if (loading) return <AppLoadingSpinner />

  const config : BarConfig = {
    data: data || [],
    autoFit: false,
    height: 589,
    xField: 'value',
    yField: 'keyTechnology',
    meta: { value: { alias: 'Количество студентов' } },
    color: PRIMARY_COLOR,
    style: {
      fontFamily: FONT_FAMILY,
    },
    label: {
      position: 'left',
      style: {
        fill: WHITE,
        fontFamily: FONT_FAMILY,
      },
    },
  }

  const classNames = cls([style.card, style.barChart])

  return (
    <AppCard
      header='Распределение студентов по направлениям'
      className={classNames}
    >
      <Bar {...config} />
    </AppCard>
  )
}
