import { KeyStatisticModel } from 'src/models'

import { KeyStatisticDto } from '../dtos/KeyStatisticDto'

import { DtoToModelMapper } from './Mappers'

export const keyStatisticMapper: DtoToModelMapper<KeyStatisticModel, KeyStatisticDto> = {
  fromDto: (dto) => ({
    studentsCount: dto.students_count,
    projectsCount: dto.projects_count,
    teamsCount: dto.students_count,
    curatorsCount: dto.curators_count,
    customersCount: dto.customers_count,
  }),
}
