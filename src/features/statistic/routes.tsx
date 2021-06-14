import { lazy } from 'react'
import { PartialRouteObject } from 'react-router'

const Statistic = lazy(() => import('./pages/Statistic'))
const Dashboard = lazy(() => import('../dashboard/pages/Dashboard'))
const Diagrams = lazy(() => import('../diagrams/pages/Diagrams'))

export const statisticRoutes: PartialRouteObject[] = [
  {
    path: 'event/:id',
    element: <Statistic />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/diagrams',
        element: <Diagrams />,
      },
    ],
  },
]
