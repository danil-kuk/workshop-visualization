import React from 'react'

import styles from '../styles.module.scss'
import { useAppSelector } from '../../../../store'
import { selectTypicalTeam } from '../../../../store/slices/dashboard'

export const TypicalTeam: React.FC = () => {
  const TypicalTeam = useAppSelector(selectTypicalTeam)

  return TypicalTeam && (
    <div className={styles.typicalTeamWrapper}>
      {
        TypicalTeam.map((item, index) => (
          <div
            className={styles.underlineList}
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
