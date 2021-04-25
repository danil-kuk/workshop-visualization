import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/store'
import { fetchEventsList, selectEventsList } from 'src/store/slices/events'
import { publicUrlPath } from 'src/utils/publicUrlPath'
import logo from 'src/assets/images/logo-for-light.svg'

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
    <div
      key={item.id}
      className={styles.block}
    >
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
      <div className={styles.block}>
        <NavLink
          end
          to={publicUrlPath('/welcome')}
          activeClassName={styles.activeLink}
        >
          Main page
        </NavLink>
      </div>
      {eventsLinks}
      <div className={styles.logoWrapper}>
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <h3>Router Outlet</h3>
      <Outlet />
    </div>
  )
}
