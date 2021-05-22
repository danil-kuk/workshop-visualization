import React from 'react'
import cls from 'classnames'

import styles from '../pages/Welcome/style.module.scss'
import { EventModel } from '../../../models'

import image from './event.png'

interface Props {
  eventsList: EventModel
}

export const EventCard: React.FC<Props> = ({ eventsList }) =>
  (
    <div className={styles.cardWrapper}>
      <div className={styles.eventCol}>
        <img
          className={styles.eventImage}
          src={image}
          alt="event"
        />
      </div>
      <div className={cls([styles.eventCol, styles.eventDescription])}>
        <h2>{eventsList.name}</h2>
        <p>{eventsList.description}</p>
      </div>
      <div className={cls([styles.eventCol, styles.eventDate])}>
        <div className={styles.eventDateContent}>
          <h2>{eventsList.startDate.slice(-7, -3)}</h2>
          <h3>{eventsList.startDate.slice(0, -8)}</h3>
        </div>
      </div>
    </div>
  )
