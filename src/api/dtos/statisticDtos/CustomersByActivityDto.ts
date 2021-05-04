import { DatabaseItemBase } from '../DatabaseItemBase'

export interface CustomersByActivityDto extends DatabaseItemBase {
  activity: string
  count: number
}
