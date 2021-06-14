import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'
import { publicUrlPath } from 'src/utils/publicUrlPath'

import { EventCard } from '../../components/EventCard'

import styles from './style.module.scss'

export const Welcome: React.FC = () => {
  const eventsList = useAppSelector(selectEventsList)

  const eventsLinks = eventsList.map((item) => (
    <Link
      key={item.id}
      to={publicUrlPath(`/event/${item.id}/dashboard`)}
      className={styles.eventLink}
    >
      <EventCard eventsList={item} />
    </Link>
  ))

  return (
    <>
      <div className={styles.main}>
        <div className={styles.col6}>
          <h1>Визуализации</h1>
          <div className={styles.mainContainer}>
            <h2>С точностью до промилле.</h2>
            <hr />
            <p>
              Узнайте информацию об участниках, заказчиках, компетенциях и
              командах по каждому сезону.
            </p>
          </div>
        </div>
        <div className={styles.col3}>
          <div className={styles.mainContainer}>
            <h2>Статичные и гибкие.</h2>
            <hr />
            <p>
              Сводная статистика для краткого обзора, интерактивные визуализации
              для полного погружения.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>{eventsLinks}</div>
    </>
  )
}
