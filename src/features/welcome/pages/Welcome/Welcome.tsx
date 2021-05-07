import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/store'
import { selectEventsList } from 'src/store/slices/events'
import { publicUrlPath } from 'src/utils/publicUrlPath'

import styles from './style.module.scss'

export const Welcome: React.FC = () => {
  const eventsList = useAppSelector(selectEventsList)

  const eventsLinks = eventsList.map(item => (
    <div key={item.id}>
      <Link to={publicUrlPath(`/dashboard/event/${item.id}`)}>
        {item.name}
      </Link>
    </div>
  ))

  return (
    <>
      <div className={styles.main}>
        <div className={styles.col6}>
          <h1>Визуализации</h1>
          <div>
            <h2>С точностью до промилле.</h2>
            <span />
            <p>
              Узнайте информацию об участниках, заказчиках, компетенциях и командах по каждому сезону.
            </p>
          </div>
        </div>
        <div className={styles.col3}>
          <div>
            <h2>Статичные и гибкие.</h2>
            <span />
            <p>
              Сводная статистика для краткого обзора, интерактивные визуализации для полного погружения.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {eventsLinks}
      </div>
    </>
  )
}
