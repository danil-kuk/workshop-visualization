import { useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { publicUrlPath } from 'src/utils/publicUrlPath'
import logo from 'src/assets/images/logo-for-light.svg'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { decrement, increment, selectCount } from 'src/store/counter/counterSlice'
import { fetchItem, fetchItems, selectItem, selectList } from 'src/store/database/databaseSlice'

import styles from './style.module.scss'

export const Welcome: React.FC = () => {
  const dispatch = useAppDispatch()
  const conter = useAppSelector(selectCount)
  const item = useAppSelector(selectItem)
  const list = useAppSelector(selectList)

  useEffect(() => {
    dispatch(fetchItem('10059872'))
    dispatch(fetchItems())
  }, [])

  const listSection = list?.map(item => (
    <div key={item.name}>
      {item.name}
    </div>
  ))

  return (
    <div>
      <h1>Welcome page</h1>
      <h2>Couter: {conter}</h2>
      <div className={styles.buttonRow}>
        <button
          type="button"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <div>
          Item name: {item?.name}
        </div>
        <button
          type="button"
          onClick={() => dispatch(fetchItem('1003530'))}
        >
          Another
        </button>
      </div>
      <div className={styles.block}>
        <NavLink
          to={publicUrlPath('/welcome/1')}
          activeClassName={styles.activeLink}
        >
          NavLink to child route
        </NavLink>
      </div>
      <div>
        <Link to={publicUrlPath('/empty')}>Link to empty url</Link>
      </div>
      <div className={styles.logoWrapper}>
        <img
          src={logo}
          alt="logo"
        />
      </div>
      {listSection}
      <h3>Router Outlet</h3>
      <Outlet />
    </div>
  )
}
