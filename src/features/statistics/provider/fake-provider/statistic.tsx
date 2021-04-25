import {
  fakeProjectCompetenciesStatistic,
  fakeKeyTechnologyStudentsStatistic,
  fakeStudentCompetenciesStatistic,
  fakeKeyTechnologyCuratorsStatistic,
  fakeKeyTechnologyConsumersStatistic,
  fakeProjectDistributionStatistic,
  fakeKeyStatistic,
  fakeTopCustomersStatistic,
  fakeProjectRolesTopStatistic,
  fakeTeamsCountOnCompetenciesStatistic,
} from '../fake-data/fakeStatistic'

export const statistic = {
  getProjectCompetenciesStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getProjectCompetenciesStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeProjectCompetenciesStatistic,
      }), 1000)
    })
  },

  getStudentCompetenciesStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getStudentCompetenciesStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeStudentCompetenciesStatistic,
      }), 1000)
    })
  },

  getKeyTechnologyStudentsStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getKeyTechnologyStudentsStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeKeyTechnologyStudentsStatistic,
      }), 1000)
    })
  },

  getKeyTechnologyCuratorsStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getKeyTechnologyCuratorsStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeKeyTechnologyCuratorsStatistic,
      }), 1000)
    })
  },

  getKeyTechnologyConsumersStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getKeyTechnologyConsumersStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeKeyTechnologyConsumersStatistic,
      }), 1000)
    })
  },

  getProjectDistributionStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getProjectDistributionStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeProjectDistributionStatistic,
      }), 1000)
    })
  },

  getKeyStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getKeyStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeKeyStatistic,
      }), 1000)
    })
  },

  getTopCostumersStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getTopCostumersStatistic', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeTopCustomersStatistic,
      }), 1000)
    })
  },

  getProjectRolesTopStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getProjectRolesTop', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeProjectRolesTopStatistic,
      }), 1000)
    })
  },

  getTeamsCountOnCompetenciesStatistic: (eventId: number): Promise<any> => {
    console.log('[GET] getTeamsCountOnCompetencies', eventId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        status: 200,
        data: fakeTeamsCountOnCompetenciesStatistic,
      }), 1000)
    })
  },
}
