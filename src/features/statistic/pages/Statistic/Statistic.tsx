import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { AppBaseLayout } from 'src/components/AppBaseLayout'
import { publicUrlPath } from 'src/utils/publicUrlPath'
import { useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'


import styles from './style.module.scss'

export const Statistic = () => {
  const { id } = useParams()
  const eventId = Number(id)
  const events = useAppSelector(selectEventsList)
  const event = events.find(item => item.id === eventId)

  return (
    <AppBaseLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>{event === undefined ? '' : event.name}</h1>
        <div className={styles.linkWrapper}>
          <NavLink
            to={publicUrlPath(`/event/${id}/dashboard`)}
            activeClassName={styles.active}
          >
            Кратко
          </NavLink>
          <NavLink
            to={publicUrlPath(`/event/${id}/diagrams`)}
            activeClassName={styles.active}
          >
            Подробно
          </NavLink>
        </div>
      </div>
      <Outlet />
    </AppBaseLayout>
  )
}
