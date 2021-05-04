import React from 'react'
import { useAppSelector } from 'src/store'
import { selectDesiredStudentCompetencies, selectStudentCompetencies } from 'src/store/slices/dashboard'

import styles from '../styles.module.scss'

interface Props {
  desired?: boolean
}

export const StudentCompetencies: React.FC<Props> = (props) => {
  const StudentCompetencies = useAppSelector(props.desired ? selectStudentCompetencies : selectDesiredStudentCompetencies)

  return StudentCompetencies && (
    <div className={styles.competenciesWrapper}>
      {
        StudentCompetencies.map((item, index) => (
          <div
            key={index}
          >
            <p>{item.competence}</p>
            <h3>{item.value}%</h3>
          </div>
        ))
      }
    </div>
  )
}
