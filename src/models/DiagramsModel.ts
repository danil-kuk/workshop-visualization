import { LifeScenarioModel, CompetenciesModel, KeyTechnologyModel } from './diagrams'

export interface DiagramsModel {
  lifeScenarioProjects: LifeScenarioModel[]
  lifeScenarioStudents: LifeScenarioModel[]
  projectCompetencies: CompetenciesModel[]
  studentCompetencies: CompetenciesModel[]
  keyTechnologyCustomers: KeyTechnologyModel
  keyTechnologyCurators: KeyTechnologyModel
}
