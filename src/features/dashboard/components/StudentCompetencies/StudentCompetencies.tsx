import React from 'react'

import styles from '../styles.module.scss'
import { useAppSelector } from '../../../../store'
import { selectDesiredStudentCompetencies, selectStudentCompetencies } from '../../../../store/slices/dashboard'

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
