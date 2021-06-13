import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { AppBaseLayout } from 'src/components/AppBaseLayout'
import { publicUrlPath } from 'src/utils/publicUrlPath'
import { useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'


import styles from './style.module.scss'

export const Statistic = () => {
  const { id } = useParams()
  const [activeLink, setActiveLink] = useState(true)
  const eventId = Number(id)
  const events = useAppSelector(selectEventsList)
  const event = events.find(item => item.id === eventId)

  return(
    <AppBaseLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>{event === undefined ? '' : event.name}</h1>
        <div className={styles.linkWrapper}>
          <Link
            to={publicUrlPath(`/event/${id}/dashboard`)}
            onClick={() => setActiveLink(true)}
            className={activeLink ? styles.active : ''}
          >Кратко
          </Link>
          <Link
            to={publicUrlPath(`/event/${id}/diagrams`)}
            onClick={() => setActiveLink(false)}
            className={!activeLink ? styles.active : ''}
          >Подробно
          </Link>
        </div>
      </div>
      <Outlet/>
    </AppBaseLayout>
  )}
