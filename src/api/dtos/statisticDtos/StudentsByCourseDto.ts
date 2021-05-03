import { DatabaseItemBase } from '../DatabaseItemBase'

export interface StudentsByCourseDto extends DatabaseItemBase {
  course: string
  count: number
}
