import { lazy } from 'react'
import { PartialRouteObject } from 'react-router'

const Welcome = lazy(() => import('./pages/Welcome'))

export const welcomeRoutes: PartialRouteObject[] = [
  {
    path: '',
    element: <Welcome />,
  },
]
