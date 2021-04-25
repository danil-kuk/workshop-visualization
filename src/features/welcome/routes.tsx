import { lazy } from 'react'
import { PartialRouteObject } from 'react-router'

const Welcome = lazy(() => import('./pages/Welcome'))
const KeyStats = lazy(() => import('./components/KeyStatistic'))

export const welcomeRoutes: PartialRouteObject[] = [
  {
    path: 'welcome',
    element: <Welcome />,
    children: [
      {
        path: 'event/:id',
        element: <KeyStats />,
      },
    ],
  },
]
