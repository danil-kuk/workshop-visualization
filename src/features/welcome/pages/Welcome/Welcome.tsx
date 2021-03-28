import { Link, NavLink, Outlet } from 'react-router-dom'
import { publicUrlPath } from 'src/utils/publicUrlPath'
import logo from 'src/assets/images/logo-for-light.svg'

import { KeyStatistic } from '../../components/KeyStatistic'

import styles from './style.module.scss'

export const Welcome: React.FC = () => (
  <div>
    <h1>Welcome page</h1>
    <KeyStatistic />
    <div className={styles.block}>
      <NavLink
        to={publicUrlPath('/welcome/counter')}
        activeClassName={styles.activeLink}
      >
        Counter
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
    <h3>Router Outlet</h3>
    <Outlet />
  </div>
)
