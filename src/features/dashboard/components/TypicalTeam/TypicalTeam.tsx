import React from 'react'
import { useAppSelector } from 'src/store'
import { selectTypicalTeam } from 'src/store/slices/dashboard'

import styles from '../styles.module.scss'

export const TypicalTeam: React.FC = () => {
  const TypicalTeam = useAppSelector(selectTypicalTeam)

  return TypicalTeam && (
    <div className={styles.typicalTeamWrapper}>
      {
        TypicalTeam.map((item, index) => (
          <div
            className={styles.underlineListItem}
            key={index}
          >
            <h4>{item.studentsCount}x</h4>
            <p>{item.role}</p>
          </div>
        ))
      }
    </div>
  )
}
