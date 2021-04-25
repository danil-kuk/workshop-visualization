import * as fakeProvider from './fake-provider'
import * as apiProvider from './api-provider'

export interface Provider {
  admin: {
    getStatistics(): Promise<any>
  },
  statistic: {
    getProjectCompetenciesStatistic(eventId: number): Promise<any>
    getStudentCompetenciesStatistic(eventId: number): Promise<any>
    getKeyTechnologyStudentsStatistic(eventId: number): Promise<any>
    getKeyTechnologyCuratorsStatistic(eventId: number): Promise<any>
    getKeyTechnologyConsumersStatistic(eventId: number): Promise<any>
    getProjectDistributionStatistic(eventId: number): Promise<any>
    getKeyStatistic(eventId: number): Promise<any>
    getTopCostumersStatistic(eventId: number): Promise<any>
    getProjectRolesTopStatistic(eventId: number): Promise<any>
    getTeamsCountOnCompetenciesStatistic(eventId: number): Promise<any>
  }
}

let provider: Provider

if (process.env.ENABLE_FAKES === 'true') {
  provider = fakeProvider
}
else {
  provider = apiProvider
}

export const { admin, statistic } = provider
