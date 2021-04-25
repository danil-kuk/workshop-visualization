import { NavLink, Outlet } from 'react-router-dom'
import { publicUrlPath } from 'src/utils/publicUrlPath'
import logo from 'src/assets/images/logo-for-light.svg'

import styles from './style.module.scss'

export const Welcome: React.FC = () => (
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
    <NavLink
      to={publicUrlPath('/welcome/event/1')}
      activeClassName={styles.activeLink}
      end
    >
      1
    </NavLink>
    <NavLink
      to={publicUrlPath('/welcome/event/2')}
      activeClassName={styles.activeLink}
      end
    >
      2
    </NavLink>
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
