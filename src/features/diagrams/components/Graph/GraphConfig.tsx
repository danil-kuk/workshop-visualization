import { FONT_FAMILY } from '../ChartConstants'

const GetGraphConfig = () => ({
  layout: { hierarchical: false },
  autoResize: false,

  edges: {
    arrows: {
      from: false,
      middle: false,
      to: false,
    },
    smooth: {
      enabled: true,
      type: 'continuous',
    },
    color: {
      inherit: 'to',
      opacity: 0.5,
    },
    chosen: {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      edge: function(values : any) {
        values.opacity = 1
        values.width += 3
      },
    },
  },

  interaction: {
    hover: true,
    zoomView: true,
    dragView: true,
    tooltipDelay: 0,
  },

  nodes: {
    scaling: {
      label: {
        enabled: true,
        min: 12,
        max: 18,
      },
    },
    borderWidth: 0,
    chosen: {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      node: function(values: any) {
        values.borderColor = values.color
        values.borderWidth = 5
      },
    },
  },

  physics: {
    enabled: true,
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springConstant: 0.005,
      springLength: 100,
      damping: 0.7,
      avoidOverlap: 1,
    },
    solver: 'forceAtlas2Based',
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true,
    },
  },
  groups: {
    keyTech: {
      color: {
        background: '#177ddc',
        border: '#177ddc',
      },
      font: {
        color: '#fff',
        face: FONT_FAMILY,
      },
      heightConstraint: 20,
      widthConstraint: 180,
      shape: 'box',
    },
    curator: {
      color: {
        background: '#fa8c16',
        border: '#fa8c16',
      },
      font: {
        color: '#000',
        face: FONT_FAMILY,
      },
      shape: 'dot',
    },
    consumer: {
      color: {
        background: '#fa8c16',
        border: '#fa8c16',
      },
      font: {
        color: '#000',
        face: FONT_FAMILY,
      },
      shape: 'dot',
    },
  },
})

export default GetGraphConfig
