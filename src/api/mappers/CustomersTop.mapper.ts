import { CustomersTopModel } from 'src/models'

import { DashboardDto } from '../dtos/DashboardDto'

import { DtoToModelMapper } from './Mappers'

export const customersTopMapper: DtoToModelMapper<CustomersTopModel[], DashboardDto> = {
  fromDto: (dto) => dto.customers_top.map((item) => ({
    name: item.name,
    projectsCount: item.projects_count,
  })),
}
