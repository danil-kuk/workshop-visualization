import { DatabaseItemBase } from './DatabaseItemBase'

export interface EventDto extends DatabaseItemBase {
  id: number
  name: string
  description?: string
  start_date: Date
  end_date: Date
}
