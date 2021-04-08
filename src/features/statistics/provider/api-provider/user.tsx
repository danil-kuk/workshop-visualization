import axios, { AxiosResponse } from 'axios'
import { UserProfileModel, UserRegistrationModel } from 'src/features/statistics/models'

const apiUrl = process.env.APP_API

export const user = {
  login: (login: string, password: string, eventId: number): Promise<AxiosResponse<any>> => axios.post(`${apiUrl}/Security/Login`, { login, password, eventId }),

  registration(userData: UserRegistrationModel): Promise<any> {
    return axios.post(`${apiUrl}/Security/Registration`, userData)
  },

  logout: (): Promise<AxiosResponse<any>> => axios.post(`${apiUrl}/Security/Logout`),

  getUserProfile: (): Promise<AxiosResponse<any>> => axios.get(`${apiUrl}/User`),

  editUserProfile(user: UserProfileModel): Promise<AxiosResponse<any>> {
    return axios.post(`${apiUrl}/User`, user)
  },

  getCompetitions(): Promise<AxiosResponse<any>> {
    return axios.get(`${apiUrl}/Competency`)
  },

  getEvents(): Promise<any> {
    return axios.get(`${apiUrl}/Event`)
  },

  completeTeam: (teamId: number): Promise<AxiosResponse<any>> =>
    axios.post(`${apiUrl}/Team/StartTesting`, { teamId }),

  openTeam: (teamId: number): Promise<AxiosResponse<any>> =>
    axios.post(`${apiUrl}/Team/OpenTeam`, { teamId }),
}
