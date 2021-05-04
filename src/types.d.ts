declare module 'react-graph-vis'
declare module '@nivo/circle-packing'
declare module '@nivo/bar'
declare module '@nivo/heatmap'
declare module '@nivo/pie'

type PartialNull<T> = {
  [P in keyof T]: T[P] | null;
};
