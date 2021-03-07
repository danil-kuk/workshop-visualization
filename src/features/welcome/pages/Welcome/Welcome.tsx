import { Link, NavLink, Outlet } from "react-router-dom"
import { publicUrlPath } from "src/utils/publicUrlPath"

import styles from './style.module.css'

export const Welcome: React.FC = () => (
  <div>
    <h1>Welcome page</h1>

    <NavLink
      to={publicUrlPath('/welcome/1')}
      activeClassName={styles.activeLink}
    >
      NavLink to child route
    </NavLink>
    <br />
    <Link to={publicUrlPath('/empty')}>Link to empty url</Link>

    <h3>Router Outlet</h3>
    <Outlet />
  </div>
)
