import { DiagramsModel, CompetenciesModel, LifeScenarioModel, KeyTechnologyModel } from 'src/models'

import { DiagramsDto } from '../dtos/diagramsDto/DiagramsDto'

import { DtoToModelMapper } from './Mappers'

const lifeScenarioProjectsMapper: DtoToModelMapper<LifeScenarioModel[], DiagramsDto> = {
  fromDto: (dto) => dto.life_scenario_projects
    .map((item) => ({
      keyTechnology: item.key_technology,
      professionalValue: item.professional_value,
      entrepreneurialValue: item.entrepreneurial_value,
      scientificValue: item.scientific_value,
    })),
}

const lifeScenarioStudentsMapper: DtoToModelMapper<LifeScenarioModel[], DiagramsDto> = {
  fromDto: (dto) => dto.life_scenario_students
    .map((item) => ({
      keyTechnology: item.key_technology,
      professionalValue: item.professional_value,
      entrepreneurialValue: item.entrepreneurial_value,
      scientificValue: item.scientific_value,
    })),
}

const projectCompetenciesMapper: DtoToModelMapper<CompetenciesModel[], DiagramsDto> = {
  fromDto: (dto) => dto.project_competencies
    .map((item) => ({
      competency: item.competency,
      competencyType: item.competency_type,
      value: item.value,
    })),
}

const studentCompetenciesMapper: DtoToModelMapper<CompetenciesModel[], DiagramsDto> = {
  fromDto: (dto) => dto.student_competencies
    .map((item) => ({
      competency: item.competency,
      competencyType: item.competency_type,
      value: item.value,
    })),
}

const keyTechnologyCustomersMapper: DtoToModelMapper<KeyTechnologyModel, DiagramsDto> = {
  fromDto: (dto) => ({
    nodes: dto.key_technology_customers.nodes,
    edges: dto.key_technology_customers.edges,
  }),
}

const keyTechnologyCuratorsMapper: DtoToModelMapper<KeyTechnologyModel, DiagramsDto> = {
  fromDto: (dto) => ({
    nodes: dto.key_technology_curators.nodes,
    edges: dto.key_technology_curators.edges,
  }),
}

export const diagramsMapper: DtoToModelMapper<DiagramsModel, DiagramsDto> = {
  fromDto: (dto) => ({
    lifeScenarioProjects: lifeScenarioProjectsMapper.fromDto(dto),
    lifeScenarioStudents: lifeScenarioStudentsMapper.fromDto(dto),
    projectCompetencies: projectCompetenciesMapper.fromDto(dto),
    studentCompetencies: studentCompetenciesMapper.fromDto(dto),
    keyTechnologyCustomers: keyTechnologyCustomersMapper.fromDto(dto),
    keyTechnologyCurators: keyTechnologyCuratorsMapper.fromDto(dto),
  }),
}
