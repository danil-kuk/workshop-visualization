import React from 'react'

import styles from '../styles.module.scss'
import { getWordForm } from '../../../../utils/stringUtils'
import { useAppSelector } from '../../../../store'
import { selectCustomersTop } from '../../../../store/slices/dashboard'

export const CustomersTop: React.FC = () => {
  const CustomersTop = useAppSelector(selectCustomersTop)

  return CustomersTop && (
    <ol className={styles.topCustomerWrapper}>
      {
        CustomersTop.map((item, index) => (
          <div
            className={styles.underlineList}
            key={index}
          >
            <li>{item.name}</li>
            <h3>
              {item.projectsCount}&nbsp;
              {getWordForm(item.projectsCount, 'проект', 'проекта', 'проектов')}
            </h3>
          </div>
        ))
      }
    </ol>
  )
}
