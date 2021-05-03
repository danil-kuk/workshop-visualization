import { DatabaseItemBase } from './DatabaseItemBase'

export interface StudentCompetenciesDto extends DatabaseItemBase {
  competence: string
  value: number
}
