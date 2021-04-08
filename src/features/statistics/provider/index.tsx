import { UserProfileModel, UserRegistrationModel, CompetencyType, AuditoriumModel, AddAuditoriumModel, AddExpertAuditoriumModel } from 'src/features/statistics/models'

import * as fakeProvider from './fake-provider'
import * as apiProvider from './api-provider'

export interface Provider {
  user: {
    login(login: string, password: string, eventId: number): Promise<any>
    logout(): Promise<any>
    getUserProfile(): Promise<any>
    editUserProfile(user: UserProfileModel): Promise<any>
    getCompetitions(): Promise<any>
    registration(userData: UserRegistrationModel): Promise<any>
    getEvents(): Promise<any>
    completeTeam(teamId: number): Promise<any>
    openTeam(teamId: number): Promise<any>
  },
  projects: {
    getLifeScenario(): Promise<any>
    getKeyTechnology(lifeScenario?: number): Promise<any>
    getProjects(filters?: { term?: string, lifeScenarioId?: number, keyTechnologyId?: number, curator?: string, customer?: string }): Promise<any>
    getCurators(): Promise<any>
    getCustomers(): Promise<any>
    getPromotedProjects(): Promise<any>
    getProject(projectId: number): Promise<any>
    joinTeam(teamId: number, roleId: number): Promise<any>
    leaveTeam(): Promise<any>
    renameTeam(teamId: number, name: string): Promise<any>
    endTest(): Promise<any>
  },
  expert: {
    getTeams(term: string): Promise<any>
    getTeamsForReview(term: string): Promise<any>
    getTeam(teamId: number): Promise<any>
    callTeam(teamId: number, auditoriumId: number): Promise<any>
    finishTeam(teamId: number, comment: string, mark: number): Promise<any>
    updateExpertAuditorium(data: AddExpertAuditoriumModel): Promise<any>
    getExperts(): Promise<any>
    getAuditoriums(): Promise<any>
    updateAuditorium(data: AuditoriumModel): Promise<any>
    addAuditorium(data: AddAuditoriumModel): Promise<any>
    deleteAuditorium(id: number): Promise<any>
    updateTeamReview(teamId: number, review: any): Promise<any>
    updateTeamCompetencyReview(teamId: number, review: any): Promise<any>
  }
  admin: {
    uploadProjects(data: FormData): Promise<any>
    addNewEvent(newEvent: string): Promise<any>
    deleteProject(projectId: number): Promise<any>
    updateProject(project: any): Promise<any>
    downloadTemplateTable(): Promise<any>
    deleteCompetency(id: any): Promise<any>
    createCompetency(name: string, competencyType: CompetencyType): Promise<any>
    updateCompetency(id: number, name: string, competencyType: CompetencyType): Promise<any>
    updateEvent(data: any): Promise<any>
    getEvents(): Promise<any>
    getFreeStudents(term: string): Promise<any>
    getUsers(term: string): Promise<any>
    getUser(id: number): Promise<any>
    changeUserType(id: number, type: string): Promise<any>
    deleteTeam(teamId: number): Promise<any>
    addNewTeam(projectId: any): Promise<any>
    getEventData(): Promise<any>
    getStatistics(): Promise<any>
    getEventResult(): Promise<any>
    openAllProjects(): Promise<any>
    closeAllProjects(): Promise<any>
    joinUserToProject(userId: number, teamId: number, roleId: number): Promise<any>
    deleteUserFromTeam(userId: number, teamId: number): Promise<any>
    changeUserRole(userId: number, roleId: number): Promise<any>
    deleteLifeScenario(scenarioId: number): Promise<any>
    deleteKeyTechnology(technologyId: number): Promise<any>
    addProjectRole(roleName: string, projectId: number): Promise<any>
    updateProjectRole(id: number, name: string): Promise<any>
    deleteProjectRole(roleId: number): Promise<any>
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

if (process.env.ENABLE_FAKES == 'true') { provider = fakeProvider } else { provider = apiProvider }

export const { user, projects, expert, admin, statistic } = provider
