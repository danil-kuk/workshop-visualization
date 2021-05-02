import { DashboardModel } from 'src/models'

import { DashboardDto } from '../dtos/DashboardDto'

import { DtoToModelMapper } from './Mappers'

export const dashboardMapper: DtoToModelMapper<DashboardModel, DashboardDto> = {
  fromDto: (dto) => ({
    keyStatistic: {
      studentsCount: dto.key_statistic.students_count,
      projectsCount: dto.key_statistic.projects_count,
      teamsCount: dto.key_statistic.teams_count,
      curatorsCount: dto.key_statistic.curators_count,
      customersCount: dto.key_statistic.customers_count,
    },
    customersTop: dto.customers_top.map((item) => ({
      name: item.name,
      projectsCount: item.projects_count,
    })),
    typicalTeam: dto.typical_team.map((item) => ({
      role: item.role,
      studentsCount: item.students_count,
    })),
  }),
}
