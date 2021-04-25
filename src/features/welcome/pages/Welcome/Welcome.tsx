import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/store'
import { fetchEventsList, selectEventsList } from 'src/store/slices/events'
import { publicUrlPath } from 'src/utils/publicUrlPath'

import styles from './style.module.scss'

export const Welcome: React.FC = () => {
  const dispatch = useAppDispatch()
  const eventsList = useAppSelector(selectEventsList)

  useEffect(() => {
    if (!eventsList.length) {
      dispatch(fetchEventsList())
    }
  })

  const eventsLinks = eventsList.map(item => (
    <div key={item.id}>
      <NavLink
        to={publicUrlPath(`/welcome/event/${item.id}`)}
        activeClassName={styles.activeLink}
        end
      >
        {item.name}
      </NavLink>
    </div>
  ))

  return (
    <div>
      <h1>Welcome page</h1>
      {eventsLinks}
      <Outlet />
    </div>
  )
}
