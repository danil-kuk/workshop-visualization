import { TypicalTeamModel } from 'src/models'

import { DashboardDto } from '../dtos/DashboardDto'

import { DtoToModelMapper } from './Mappers'

export const typicalTeamMapper: DtoToModelMapper<TypicalTeamModel[], DashboardDto> = {
  fromDto: (dto) => dto.typical_team.map((item) => ({
    role: item.role,
    studentsCount: item.students_count,
  })),
}
