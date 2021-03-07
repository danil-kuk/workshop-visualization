import { lazy } from 'react'
import { PartialRouteObject } from 'react-router'

const Welcome = lazy(() => import('./pages/Welcome'))

export const welcomeRoutes: PartialRouteObject[] = [
  {
    path: '/welcome',
    element: <Welcome />,
    children: [
      {
        path: ':id',
        element: <div>Test child route content</div>,
      },
    ],
  },
]
