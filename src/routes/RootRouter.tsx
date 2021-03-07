import { PartialRouteObject } from 'react-router'
import { Navigate } from 'react-router-dom'
import { welcomeRoutes } from 'src/features/welcome/routes'
import { publicUrlPath } from 'src/utils/publicUrlPath'


export const RootRouter: PartialRouteObject[] = [
  ...welcomeRoutes,
  {
    path: '/',
    element: <Navigate to={publicUrlPath('/welcome')} />,
  },
  {
    path: '*',
    element: <div>404 page</div>,
  },
]
