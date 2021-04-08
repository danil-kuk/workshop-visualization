import { TeamModel, UserCompetencyModel } from 'src/features/statistics/models'

import { AuditoriumModel } from './AuditoriumModel'
import { TextDataProjectModel } from './ProjectModel'
import { RoleModel } from './RoleModel'
import { ShortTeamModel } from './TeamModel'

export interface UserProfileModel {
  id: number
  eventId: number
  lastName: string
  firstName: string
  middleName: string
  login: string
  phoneNumber: string
  about: string
  email: string
  academicGroup: string
  userType: UserTypes
  team?: TeamModel
  auditorium?: string
  profileFilled?: boolean
  competencies: UserCompetencyModel[]
  role?: RoleModel
}

export interface DetailedUserModel {
  id: number
  eventId: number
  lastName: string
  firstName: string
  middleName: string
  login: string
  phoneNumber: string
  about: string
  email: string
  academicGroup: string
  userType: UserTypes
  team?: ShortTeamModel
  project?: TextDataProjectModel
  profileFilled?: boolean
  competencies?: UserCompetencyModel[]
  role?: RoleModel
  registrationDate: string
}

export interface UserRegistrationModel {
  login: string
  password: string
  eventId: number
}

export interface UserModel {
  id: number
  lastName: string
  firstName: string
  middleName: string
  login: string
  phoneNumber: string
  about: string
  email: string
  academicGroup: string
  userType: UserTypes
  competencies: UserCompetencyModel[]
  role?: RoleModel
  auditorium?: AuditoriumModel
}

export interface ShortUserModel {
  id: number
  lastName: string
  firstName: string
  middleName: string
  academicGroup: string
  competencies: UserCompetencyModel[]
  role?: RoleModel
}

export interface UsersListItemModel {
  id: number
  login: string
  lastName: string
  firstName: string
  middleName: string
  academicGroup: string
  phoneNumber: string
  about: string
  email: string
  userType: UserTypes
}

export interface ExpertUserModel {
  id: number
  lastName: string
  firstName: string
  middleName: string
  auditoriumId?: number
}

export enum UserTypes {
  Student = 'Student',
  Expert = 'Expert',
  Admin = 'Admin'
}
