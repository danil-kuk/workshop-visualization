import { DatabaseItemBase } from '../DatabaseItemBase'

export interface TypicalTeamDto extends DatabaseItemBase {
  role: string
  students_count: number
}
