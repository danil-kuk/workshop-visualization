import React from 'react'
import { getWordForm } from 'src/features/statistics/utils/stringUtils'

import { AppLoadingSpinner } from 'src/components/AppLoadingSpinner'
import { useTopCostumersStatistic } from '../hooks'
import style from '../style.module.scss'

interface Props {
  eventId: number
}

export const TopCustomers : React.FC<Props> = ({ eventId }) => {
  const { data, loading } = useTopCostumersStatistic(eventId)

  if (loading) return <AppLoadingSpinner />

  const customers = data.map((customer, index) => (
    <div
      key={index}
      className={style.customerItem}
    >
      <p>{customer.name}</p>
      <p>
        <strong>{customer.projectsCount}&nbsp;{getWordForm(customer.projectsCount, 'проект', 'проекта', 'проектов')}</strong>
      </p>
    </div>
  ))

  return (
    <div className={style.customers}>
      {customers}
    </div>
  )
}
