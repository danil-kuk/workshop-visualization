import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from '../styles.module.scss'
import { getWordForm } from '../../../../utils/stringUtils'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { fetchCustomersTop, selectCustomersTop } from '../../../../store/slices/dashboard'
import { selectEventsList } from '../../../../store/slices/events'

export const CustomersTop: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const CustomersTop = useAppSelector(selectCustomersTop)
  const events = useAppSelector(selectEventsList)

  useEffect(() => {
    const eventId = Number(id)

    if (events.find(item => item.id === eventId)) {
      dispatch(fetchCustomersTop(eventId))
    }
  }, [id])

  return CustomersTop && (
    <ol className={styles.topCustomerWrapper}>
      {
        CustomersTop.map((item, index) => (
          <div
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
