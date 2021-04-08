import { useAppDispatch, useAppSelector } from 'src/store/store'
import { decrement, increment, selectCount } from 'src/store/slices/counterSlice'

import styles from './style.module.scss'

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const conter = useAppSelector(selectCount)

  return (
    <div>
      <h3>Couter: {conter}</h3>
      <div className={styles.buttonRow}>
        <button
          type="button"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
