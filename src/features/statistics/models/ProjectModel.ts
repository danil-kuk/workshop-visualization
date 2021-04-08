import { TeamModel, CompetencyModel, ShortTeamModel } from 'src/features/statistics/models'

import { RoleModel } from './RoleModel'

export interface ProjectModel {
  id: number
  name: string
  curator: string
  organization: string
  contacts: string
  purpose: string
  result: string
  teamCapacity: number
  lifeScenario: LifeScenarioModel
  keyTechnology: KeyTechnologyModel
  competencies: CompetencyModel[]
  teams: TeamModel[] | ShortTeamModel[]
  matchedCompetenciesCount: number
  fillTeamsCount: number
  participantsCount: number
  roles: RoleModel[]
  description: string
  maxTeamCount: number
  isAvailable: boolean
  isPromoted?: boolean
  image?: string
}

export interface ShortProjectModel {
  id: number
  name: string
  curator: string
  organization: string
  contacts: string
  purpose: string
  result: string
  teamCapacity: number
  lifeScenario: LifeScenarioModel
  keyTechnology: KeyTechnologyModel
  competencies: CompetencyModel[]
  matchedCompetenciesCount: number
  fillTeamsCount: number
  participantsCount: number
  roles: RoleModel[]
  maxTeamCount: number
  description: string
  isAvailable: boolean
  isPromoted?: boolean
  image?: string
}

export interface TextDataProjectModel {
  id: number
  name: string
  curator: string
  organization: string
  contacts: string
  purpose: string
  result: string
  description: string
}

export interface LifeScenarioModel {
  id: number
  name: string
}

export interface KeyTechnologyModel {
  id: number
  name: string
}

export interface CuratorModel {
  id: number
  name: string
}

export interface CustomerModel {
  id: number
  name: string
}
