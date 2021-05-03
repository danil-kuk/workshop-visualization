import { DatabaseItemBase } from './DatabaseItemBase'


export interface CustomersByAreaDto extends DatabaseItemBase {
  area: string
  count: number
}
