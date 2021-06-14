import { DatabaseItemBase } from '../DatabaseItemBase'

export interface LifeScenarioDto extends DatabaseItemBase {
  key_technology: string
  professional_value: number
  entrepreneurial_value: number
  scientific_value: number
}
