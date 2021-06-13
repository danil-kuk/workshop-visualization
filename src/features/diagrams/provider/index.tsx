import * as fakeProvider from './fake-provider'

export interface Provider {
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

export const { statistic } = fakeProvider
