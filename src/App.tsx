import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'

import { database } from './api/services/DatabaseService'
import { AppHeader } from './components/AppHeader'
import { AppLoadingSpinner } from './components/AppLoadingSpinner'
import { RootRouter } from './routes'
import { AppBaseLayout } from './components/AppBaseLayout'

export const App: React.FC = () => {
  const routes = useRoutes(RootRouter, process.env.PUBLIC_URL)

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    database.login()
      .then(() => setAuth(true))
      .catch((error) => console.error('Database connection error', error))
  }, [])

  if (!auth) {
    return (
      <>
        <AppHeader />
        <AppLoadingSpinner fullHeight />
      </>)
  }

  return (
    <>
      <AppHeader />
      <AppBaseLayout>
        {routes}
      </AppBaseLayout>
    </>
  )
}
