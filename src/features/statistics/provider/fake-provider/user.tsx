import { UserProfileModel, UserRegistrationModel } from 'src/features/statistics/models'

import { fakeStudentWithoutTeam, fakeStudentWithTeam, fakeExpert, fakeAdmin } from '../fake-data/fakeUsers'
import { fakeCompetitions } from '../fake-data/fakeCompetitions'
import { fakeEvents } from '../fake-data/fakeEvents'

enum TestRoles {
  StudentWithTeam = 'StudentWithTeam',
  StudentWithoutTeam = 'StudentWithoutTeam',
  Expert = 'Expert',
  Admin = 'Admin'
}

// Роль авторизованного пользователя
const role: TestRoles = TestRoles.Admin

let fakeUser: UserProfileModel

switch (role as TestRoles) {
  case TestRoles.Admin:
    fakeUser = fakeAdmin
    break
  case TestRoles.Expert:
    fakeUser = fakeExpert
    break
  case TestRoles.StudentWithTeam:
    fakeUser = fakeStudentWithTeam
    break
  case TestRoles.StudentWithoutTeam:
    fakeUser = fakeStudentWithoutTeam
    break
  default:
    break
}

export const user = {
  login(login: string, password: string, eventId: number): Promise<any> {
    console.log('[POST] login', login, password, eventId)
    return new Promise((resolve) => {
      resolve({ status: 204 })
    })
  },

  registration(userData: UserRegistrationModel): Promise<any> {
    console.log('[POST] registration', userData)
    return new Promise((resolve) => {
      resolve({ status: 204 })
    })
  },

  logout(): Promise<any> {
    console.log('[POST] logout')
    return new Promise((resolve) => {
      resolve({ status: 204 })
    })
  },

  getUserProfile(): Promise<any> {
    console.log('[GET] getCurrentUserProfile')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: fakeUser, status: 200 }), 1000)
    })
  },

  editUserProfile(user: UserProfileModel): Promise<any> {
    console.log('[POST] editUserProfile', user)
    return new Promise((resolve) => {
      resolve({ status: 204 })
    })
  },

  getCompetitions(): Promise<any> {
    console.log('[GET] getCompetitions')
    return new Promise((resolve) => {
      resolve({ status: 200, data: fakeCompetitions })
    })
  },

  getEvents(): Promise<any> {
    console.log('[GET] getEvents')
    return new Promise((resolve) => {
      resolve({
        status: 200,
        data: fakeEvents.filter(event => event.isActive),
      })
    })
  },

  completeTeam: (teamId: number): Promise<any> => {
    console.log('[POST] completeTeam', teamId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  openTeam: (teamId: number): Promise<any> => {
    console.log('[POST] openTeam', teamId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },
}
