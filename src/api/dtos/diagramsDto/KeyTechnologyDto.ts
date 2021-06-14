import { DatabaseItemBase } from '../DatabaseItemBase'

export interface KeyTechnologyDto extends DatabaseItemBase {
  nodes: Node[]
  edges: Edge[]
}

interface Node {
  id: number
  label: string
  group: string
  value: number
}

interface Edge {
  from: number
  to: number
  value: number
}
