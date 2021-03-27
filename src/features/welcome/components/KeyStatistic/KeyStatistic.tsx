import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/store'
import { fetchKeyStatistic, selectKeyStatistic } from 'src/store/slices/dashboard'

export const KeyStatistic: React.FC = () => {
  const dispatch = useAppDispatch()
  const keyStatistic = useAppSelector(selectKeyStatistic)

  useEffect(() => {
    if (!keyStatistic) {
      dispatch(fetchKeyStatistic())
    }
  }, [])


  return keyStatistic && (
    <div>
      <p>Студенты: {keyStatistic.studentsCount}</p>
      <p>Проекты: {keyStatistic.projectsCount}</p>
    </div>
  )
}
