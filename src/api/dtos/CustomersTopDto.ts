import { DatabaseItemBase } from './DatabaseItemBase'

export interface CustomersTopDto extends DatabaseItemBase {
  name: string
  projects_count: number
}
