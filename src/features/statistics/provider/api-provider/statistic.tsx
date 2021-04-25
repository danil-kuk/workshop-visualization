import axios, { AxiosResponse } from 'axios'

const apiUrl = process.env.APP_API

export const statistic = {
  getProjectCompetenciesStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/ProjectsCountOnCompetencies`, { params: { eventId } }),
  getStudentCompetenciesStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/StudentsCountOnCompetencies`, { params: { eventId } }),
  getKeyTechnologyStudentsStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/KeyTechnolodyStudents`, { params: { eventId } }),
  getKeyTechnologyCuratorsStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/KeyTechnologyCurators`, { params: { eventId } }),
  getKeyTechnologyConsumersStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/KeyTechnologyConsumers`, { params: { eventId } }),
  getProjectDistributionStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/ProjectDistributionStatistic`, { params: { eventId } }),
  getKeyStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/SummaryStatistics`, { params: { eventId } }),
  getTopCostumersStatistic: (eventId: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/GetCustomersTop`, { params: { eventId } }),
  getProjectRolesTopStatistic: (eventId: number) : Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/GetProjectRolesTop`, { params: { eventId } }),
  getTeamsCountOnCompetenciesStatistic: (eventId: number) : Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/Statistic/StudentsCountOnCompetencies`, { params: { eventId } }),
}
