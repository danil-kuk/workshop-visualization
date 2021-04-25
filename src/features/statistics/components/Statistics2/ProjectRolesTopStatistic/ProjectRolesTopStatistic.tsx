import React from 'react'
import { CodeRounded } from '@material-ui/icons'
import { useProjectRolesTopStatistic } from 'src/features/statistics/components/Statistics2/hooks'
import { AppLoadingSpinner } from 'src/features/statistics/components/AppLoadingSpinner'

import styles from '../style.module.scss'

interface Props {
  eventId: number
}

export const ProjectRolesTopStatistic: React.FC<Props> = ({ eventId }) => {
  const { data, loading } = useProjectRolesTopStatistic(eventId)

  if (loading) return <AppLoadingSpinner />

  const listItems = data.slice(0, 4).map((item, index) =>
    <div
      key={index}
      className={styles.role}
    >
      <CodeRounded />
      <span>{item}</span>
    </div>,
  )

  return (
    <div className={styles.rolesWrapper}>
      {listItems}
    </div>
  )
}
