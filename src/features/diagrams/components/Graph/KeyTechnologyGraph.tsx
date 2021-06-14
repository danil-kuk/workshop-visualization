import React from 'react'
import Graph from 'react-graph-vis'
import { truncate } from 'src/utils/stringUtils'
import { KeyTechnologyModel } from 'src/models'

import GetGraphConfig from './GraphConfig'

import './graph.css'

interface Props {
  data: KeyTechnologyModel
}

export const KeyTechnologyGraph : React.FC<Props> = ({ data }) => {
  const prepare = {
    nodes: data.nodes.map(node =>
      ({
        id: node.id,
        label: truncate(node.label, 40),
        title: `${node.label}: ${node.value}`,
        group: node.group,
        value: node.value,
      })),
    edges: data.edges.map(edge =>
      ({
        from: edge.from,
        to: edge.to,
        value: edge.value,
        title: `Проектов: ${edge.value}`,
      })),
  }

  return (
    <Graph
      graph={prepare}
      options={GetGraphConfig()}
      style={{
        flex: 2,
        height: 700,
      }}
    />
  )
}
