import { KeyStatisticModel } from 'src/models'

import { DashboardDto } from '../dtos/DashboardDto'

import { DtoToModelMapper } from './Mappers'

export const keyStatisticMapper: DtoToModelMapper<KeyStatisticModel, DashboardDto> = {
  fromDto: (dto) => ({
    studentsCount: dto.key_statistic.students_count,
    projectsCount: dto.key_statistic.projects_count,
    teamsCount: dto.key_statistic.teams_count,
    curatorsCount: dto.key_statistic.curators_count,
    customersCount: dto.key_statistic.customers_count,
  }),
}
