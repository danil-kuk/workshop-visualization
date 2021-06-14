import { DatabaseItemBase } from '../DatabaseItemBase'

export interface CompetenciesDto extends DatabaseItemBase {
  competency: string
  competency_type: 'HardSkill' | 'SoftSkill'
  value: number
}
