import { DatabaseItemBase } from '../DatabaseItemBase'

import { CompetenciesDto } from './CompetenciesDto'
import { KeyTechnologyDto } from './KeyTechnologyDto'
import { LifeScenarioDto } from './LifeScenarioDto'

export interface DiagramsDto extends DatabaseItemBase {
  life_scenario_projects: LifeScenarioDto[]
  life_scenario_students: LifeScenarioDto[]
  project_competencies: CompetenciesDto[]
  student_competencies: CompetenciesDto[]
  key_technology_customers: KeyTechnologyDto
  key_technology_curators: KeyTechnologyDto
}
