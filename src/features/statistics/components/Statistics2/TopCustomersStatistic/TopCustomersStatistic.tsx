import React from 'react'
import { AppLoadingSpinner } from 'src/features/statistics/components/AppLoadingSpinner'
import { useTopCostumersStatistic } from 'src/features/statistics/components/Statistics2/hooks'

import styles from '../style.module.scss'

interface Props {
  eventId: number
}

export const TopCustomersStatistic: React.FC<Props> = ({ eventId }) => {
  const { data, loading } = useTopCostumersStatistic(eventId)

  if (loading) return <AppLoadingSpinner />

  const customers = data.slice(0, 5).map((customer, index) => (
    <div
      key={index}
      className={styles.customer}
    >
      <h2>
        {customer.projectsCount}
      </h2>
      <p>
        {customer.name}
      </p>
    </div>
  ))

  return (
    <>
      {customers}
    </>
  )
}
