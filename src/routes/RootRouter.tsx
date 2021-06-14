import { Outlet, PartialRouteObject } from 'react-router'
import { welcomeRoutes } from 'src/features/welcome/routes'
import { statisticRoutes } from 'src/features/statistic/routes'
import { Navigate } from 'react-router-dom'
import { publicUrlPath } from 'src/utils/publicUrlPath'

export const RootRouter: PartialRouteObject[] = [
  {
    path: '/',
    children: [
      ...welcomeRoutes,
      ...statisticRoutes,
    ],
    element: <Outlet />,
  },
  {
    path: '*',
    element: <Navigate to={publicUrlPath('/')} />,
  },
]
