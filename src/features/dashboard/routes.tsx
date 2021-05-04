import { lazy } from 'react'
import { PartialRouteObject } from 'react-router'

const Dashboard = lazy(() => import('./pages/Dashboard'))

export const dashboardRoutes: PartialRouteObject[] = [
  {
    path: 'dashboard/event/:id',
    element: <Dashboard />,
  },
]
