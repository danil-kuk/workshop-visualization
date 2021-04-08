import axios, { AxiosResponse } from 'axios'
import { CompetencyType } from 'src/features/statistics/models'

const apiUrl = process.env.APP_API

export const admin = {
  uploadProjects(data: FormData): Promise<any> {
    return axios.post(`${apiUrl}/admin/AdminProject/UploadFile`, data)
  },

  addNewEvent(newEvent: string): Promise<any> {
    const data = {
      name: newEvent,
    }

    return axios.post(`${apiUrl}/admin/AddEvent`, data)
  },

  deleteProject: (projectId: number): Promise<any> =>
    axios.delete(`${apiUrl}/admin/AdminProject/${projectId}`),

  updateProject: (data: any): Promise<any> =>
    axios.put(`${apiUrl}/admin/AdminProject`, data),

  downloadTemplateTable: (): Promise<any> =>
    axios.get(`${apiUrl}/admin/AdminProject/GetProjectsTableTemplate`, { responseType: 'blob' }),

  deleteCompetency: (id: number): Promise<any> =>
    axios.delete(`${apiUrl}/admin/AdminCompetencies/${id}`),

  createCompetency: (name: string, competencyType: CompetencyType): Promise<any> => {
    const data = {
      name,
      competencyType,
    }

    return axios.post(`${apiUrl}/admin/AdminCompetencies`, data)
  },

  updateCompetency: (id: number, name: string, competencyType: CompetencyType): Promise<any> => {
    const data = {
      id,
      name,
      competencyType,
    }

    return axios.put(`${apiUrl}/admin/AdminCompetencies`, data)
  },

  getEvents: (): Promise<any> => axios.get(`${apiUrl}/admin/Events`),

  updateEvent: (data: any): Promise<any> =>
    axios.put(`${apiUrl}/admin/UpdateEvent`, data),

  getFreeStudents: (term: string): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/admin/AdminTeam/GetFreeUsers`, { params: { term } }),

  getUsers: (term: string): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/admin/GetUsers`, { params: { term } }),

  getUser: (id: number): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/admin/GetUser/${id}`),

  changeUserType: (id: number, type: string): Promise<AxiosResponse<any>> =>
    axios.put(`${apiUrl}/admin/ChangeUserType`, { id, type }),

  deleteTeam: (teamId: number): Promise<AxiosResponse<any>> =>
    axios.delete(`${apiUrl}/admin/AdminTeam/DeleteTeam`, { params: { teamId } }),

  addNewTeam: (projectId: number): Promise<AxiosResponse<any>> =>
    axios.post(`${apiUrl}/admin/AdminTeam/AddNewTeam`, null, { params: { projectId } }),

  getEventData: (): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/admin/AdminStatistic/GetEventData`, { responseType: 'blob' }),

  getStatistics: (): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/admin/AdminStatistic/GetStatistic`),

  getEventResult: (): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/admin/AdminStatistic/GetEventResult`, { responseType: 'blob' }),

  joinUserToProject: (userId: number, teamId: number, roleId: number): Promise<AxiosResponse<any>> =>
    axios.post(`${apiUrl}/admin/AdminTeam/AddUser`, { userId, teamId, roleId }),

  deleteUserFromTeam: (userId: number, teamId: number): Promise<AxiosResponse<any>> =>
    axios.delete(`${apiUrl}/admin/AdminTeam/RemoveUser`, { params: { userId, teamId } }),

  changeUserRole: (userId: number, roleId: number): Promise<AxiosResponse<any>> =>
    axios.put(`${apiUrl}/admin/AdminTeam/ChangeUserRole`, { userId, roleId }),

  openAllProjects: (): Promise<any> => axios.post(`${apiUrl}/admin/AdminProject/OpenAll`),

  closeAllProjects: (): Promise<any> => axios.post(`${apiUrl}/admin/AdminProject/CloseAll`),

  deleteLifeScenario: (scenarioId: number): Promise<any> =>
    axios.delete(`${apiUrl}/admin/AdminProject/DeleteLifeScenario`, { params: { id: scenarioId } }),

  deleteKeyTechnology: (technologyId: number): Promise<any> =>
    axios.delete(`${apiUrl}/admin/AdminProject/DeleteKeyTechnology`, { params: { id: technologyId } }),

  addProjectRole: (roleName: string, projectId: number): Promise<any> =>
    axios.post(`${apiUrl}/admin/AdminProject/AddProjectRole`, { roleName, projectId }),

  updateProjectRole: (id: number, name: string): Promise<AxiosResponse<any>> =>
    axios.put(`${apiUrl}/admin/AdminProject/UpdateProjectRole`, { id, name }),

  deleteProjectRole: (roleId: number): Promise<any> =>
    axios.delete(`${apiUrl}/admin/AdminProject/DeleteProjectRole/${roleId}`),
}
