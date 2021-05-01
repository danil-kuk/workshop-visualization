import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/store'
import { fetchEventsList, selectEventsList } from 'src/store/slices/events'
import { publicUrlPath } from 'src/utils/publicUrlPath'

export const Welcome: React.FC = () => {
  const dispatch = useAppDispatch()
  const eventsList = useAppSelector(selectEventsList)

  useEffect(() => {
    if (!eventsList.length) {
      dispatch(fetchEventsList())
    }
  })

  const eventsLinks = eventsList.map(item => (
    <div key={item.id}>
      <Link to={publicUrlPath(`/dashboard/event/${item.id}`)}>
        {item.name}
      </Link>
    </div>
  ))

  return (
    <div>
      <h1>Welcome page</h1>
      {eventsLinks}
      <Outlet />
    </div>
  )
}
