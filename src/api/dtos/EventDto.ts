import { DatabaseItemBase } from './DatabaseItemBase'

export interface EventDto extends DatabaseItemBase {
  id: number
  name: string
  description?: string
  date: string
}
