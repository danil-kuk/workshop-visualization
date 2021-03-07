import { useRoutes } from 'react-router-dom'

import { RootRouter } from './routes'

export const App: React.FC = () => {
  const routes = useRoutes(RootRouter, process.env.PUBLIC_URL)

  return (
    <main>
      {routes}
    </main>
  )
}
