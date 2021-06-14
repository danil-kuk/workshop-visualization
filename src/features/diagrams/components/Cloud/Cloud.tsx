import React from 'react'
import { WordCloud } from '@ant-design/charts'
import { CompetenciesModel } from 'src/models'

import { configBuilder } from './CloudConfig'

interface Props {
  data: CompetenciesModel[]
}

export const Cloud: React.FC<Props> = ({ data }) => {
  const config = configBuilder(data)

  return (
    <WordCloud {...config}/>
  )
}
