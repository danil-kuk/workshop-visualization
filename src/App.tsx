import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'

import { database } from './api/services/DatabaseService'
import { RootRouter } from './routes'

export const App: React.FC = () => {
  const routes = useRoutes(RootRouter, process.env.PUBLIC_URL)

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    database.login()
      .then(() => setAuth(true))
      .catch((error) => console.error('Database connection error', error))
  }, [])

  return auth ? (
    <main>
      {routes}
    </main>
  ) : null // TODO: Add loading spinner.
}
