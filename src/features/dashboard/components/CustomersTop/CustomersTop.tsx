import React from 'react'
import { getWordForm } from 'src/utils/stringUtils'
import { useAppSelector } from 'src/store'
import { selectCustomersTop } from 'src/store/slices/dashboard'

import styles from '../styles.module.scss'
export const CustomersTop: React.FC = () => {
  const customersTop = useAppSelector(selectCustomersTop)

  return customersTop && (
    <ol className={styles.topCustomerWrapper}>
      {
        customersTop.map((item, index) => (
          <div
            className={styles.underlineListItem}
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
