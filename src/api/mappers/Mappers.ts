export interface DtoToModelMapper<TModel, TDto> {
  fromDto(dto: TDto): TModel
}

export interface ModelToDtoMapper<TModel, TDto> {
  toDto(model: TModel): TDto
}

export interface FullMapper<TModel, TDto> extends
  DtoToModelMapper<TModel, TDto>,
  ModelToDtoMapper<TModel, TDto> { }
