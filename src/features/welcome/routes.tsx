import { lazy } from 'react'
import { PartialRouteObject } from 'react-router'

const Welcome = lazy(() => import('./pages/Welcome'))
const Counter = lazy(() => import('./components/Counter'))

export const welcomeRoutes: PartialRouteObject[] = [
  {
    path: '/welcome',
    element: <Welcome />,
    children: [
      {
        path: 'counter',
        element: <Counter />,
      },
    ],
  },
]
