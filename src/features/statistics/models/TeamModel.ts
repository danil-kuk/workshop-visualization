import { AuditoriumModel, ShortProjectModel, ShortUserModel, TeamCompetencyReviewModel, TeamReviewModel, UserModel } from 'src/features/statistics/models'

export interface TeamModel {
  id: number
  name: string
  teamStatus: TeamStatusses
  auditorium?: AuditoriumModel
  expert?: ExpertModel
  teamCompleteDate?: Date
  project: ShortProjectModel
  users: ShortUserModel[] | UserModel[]
  comment?: string
  mark?: number
  testLink?: string
  review?: TeamReviewModel
  competencyReview?: TeamCompetencyReviewModel[]
}

export interface ShortTeamModel {
  id: number
  name: string
  users: ShortUserModel[],
  teamStatus: TeamStatusses
}

export interface TeamListItem {
  id: number
  name?: string
  usersCount: number
  teamStatus: TeamStatusses
  projectName: string
  projectDescription: string
  mark?: string
  teamCapacity: number
  teamCompleteDate?: Date
}

export enum TeamStatusses {
  Incomplete = 'Incomplete',
  TestWork = 'TestWork',
  Completed = 'Complete',
  ExpertDiscussion = 'ExpertDiscussion',
  Finish = 'Finish'
}

export interface ExpertModel {
  id: number
  auditorium: string
}
