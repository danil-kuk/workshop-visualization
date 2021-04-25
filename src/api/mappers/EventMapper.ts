import { EventModel } from 'src/models'

import { EventDto } from '../dtos/EventDto'

import { DtoToModelMapper } from './Mappers'

export const eventMapper: DtoToModelMapper<EventModel, EventDto> = {
  fromDto: (dto) => ({
    id: dto.id,
    name: dto.name,
    description: dto.description,
  }),
}
