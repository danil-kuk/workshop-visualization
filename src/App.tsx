import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'

import { database } from './api/services/DatabaseService'
import { AppLoadingSpinner } from './components/AppLoadingSpinner'
import { RootRouter } from './routes'
import { useAppDispatch } from './store'
import { fetchEventsList } from './store/slices/events'

export const App: React.FC = () => {
  const routes = useRoutes(RootRouter, process.env.PUBLIC_URL)

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    database.login()
      .then(() => setAuth(true))
      .catch((error) => console.error('Database connection error', error))
  }, [])

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (auth) {
      dispatch(fetchEventsList())
    }
  }, [auth])

  if (!auth) {
    return <AppLoadingSpinner fullHeight />
  }

  return (
    <>
      {routes}
    </>
  )
}
