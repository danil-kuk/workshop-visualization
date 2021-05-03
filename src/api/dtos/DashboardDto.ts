import { DatabaseItemBase } from './DatabaseItemBase'
import { CustomersTopDto } from './CustomersTopDto'
import { KeyStatisticDto } from './KeyStatisticDto'
import { TypicalTeamDto } from './TypicalTeamDto'
import { StudentCompetenciesDto } from './StudentCompetenciesDto'
import { KeyTechnologyStudentsDto } from './KeyTechnologyStudentsDto'
import { StudentsByCourseDto } from './StudentsByCourseDto'
import { CustomersByActivityDto } from './CustomersByActivityDto'
import { CustomersByAreaDto } from './CustomersByAreaDto'

export interface DashboardDto extends DatabaseItemBase {
  key_statistic: KeyStatisticDto
  customers_top: CustomersTopDto[]
  typical_team: TypicalTeamDto[]
  student_competencies: StudentCompetenciesDto[]
  desired_student_competencies: StudentCompetenciesDto[]
  key_technology_students: KeyTechnologyStudentsDto[]
  students_by_course: StudentsByCourseDto[]
  customers_by_activity: CustomersByActivityDto[]
  customers_by_area: CustomersByAreaDto[]
}
