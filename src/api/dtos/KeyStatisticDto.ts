import { DatabaseItemBase } from './DatabaseItemBase'

export interface KeyStatisticDto extends DatabaseItemBase {
  students_count: number
  projects_count: number
  teams_count: number
  curators_count: number
  customers_count: number
}
