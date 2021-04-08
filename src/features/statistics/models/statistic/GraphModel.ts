export interface GraphModel {
  nodes: Node[]
  edges: Edge[]
}

interface Node {
  id: number
  label: string
  title?: string
  group: string
  value: number
}

interface Edge {
  from: number
  to: number
  value: number
  title?: string
}
