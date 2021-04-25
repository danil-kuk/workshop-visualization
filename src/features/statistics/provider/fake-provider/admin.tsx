import { fakeMonitoring } from 'src/features/statistics/provider/fake-data/fakeMonitoring'

export const admin = {

  getStatistics: (): Promise<any> => {
    console.log('[GET] getStatistics')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200, data: fakeMonitoring }), 1000)
    })
  },

}
