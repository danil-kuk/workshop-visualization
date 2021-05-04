import { PartialRouteObject } from 'react-router'
import { Navigate } from 'react-router-dom'
import { welcomeRoutes } from 'src/features/welcome/routes'
import { dashboardRoutes } from 'src/features/dashboard/routes'
import { publicUrlPath } from 'src/utils/publicUrlPath'


export const RootRouter: PartialRouteObject[] = [
  ...welcomeRoutes,
  ...dashboardRoutes,
  {
    path: '/',
    element: <Navigate to={publicUrlPath('/welcome')} />,
  },
  {
    path: '*',
    element: <div>404 page</div>,
  },
]
