import React, { useState } from 'react'
import cls from 'classnames'

import style from './style.module.scss'

interface Props {
  tabs: TabInfo[],
  activeComponentIndex?: number
}

interface TabInfo {
  name: string,
  component: React.ReactNode,
  tabClassName?: string,
}

export const AppTabs : React.FC<Props> = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeComponentIndex || 0)

  return (
    <>
      <div className={style.lineTabs__tabs}>
        {props.tabs.map((tab, index) => (
          <Tab
            isActive={index === activeTab}
            key={index}
            index={index}
            onTab={(index: number) => setActiveTab(index)}
            tabClassName={tab.tabClassName}
          >{tab.name}
          </Tab>),
        )}
      </div>
      <div className={style.lineTabs__content}>
        {props.tabs[activeTab].component}
      </div>
    </>
  )
}

interface TabProps {
  isActive: boolean
  onTab: (index: number) => void
  index: number
  tabClassName?: string
}

const Tab : React.FC<TabProps> = (props) => {
  const classNames = props.isActive ? cls([style.lineTabs__tab, style.lineTabs__tab_active, props.tabClassName]) : cls([style.lineTabs__tab, props.tabClassName])

  return (
    <div
      className={classNames}
      onClick={() => props.onTab(props.index)}
    >
      {props.children}
    </div>
  )
}
