import { SECONDARY_COLOR, PRIMARY_COLOR, WHITE, BLACK, FONT_FAMILY } from '../ChartConstants'

const GetGraphConfig = (isDarkMode: boolean) => ({
  layout: { hierarchical: false },
  autoResize: true,

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
    tooltipDelay: 100,
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
        background: PRIMARY_COLOR,
        border: PRIMARY_COLOR,
      },
      font: {
        color: WHITE,
        face: FONT_FAMILY,
      },
      heightConstraint: 20,
      widthConstraint: 180,
      shape: 'box',
    },
    curator: {
      color: {
        background: SECONDARY_COLOR,
        border: SECONDARY_COLOR,
      },
      font: {
        color: isDarkMode ? WHITE : BLACK,
        face: FONT_FAMILY,
      },
      shape: 'dot',
    },
    consumer: {
      color: {
        background: SECONDARY_COLOR,
        border: SECONDARY_COLOR,
      },
      font: {
        color: isDarkMode ? WHITE : BLACK,
        face: FONT_FAMILY,
      },
      shape: 'dot',
    },
  },
})

export default GetGraphConfig
