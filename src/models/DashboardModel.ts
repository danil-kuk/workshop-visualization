import {
  CustomersTopModel,
  KeyStatisticModel,
  TypicalTeamModel,
  StudentCompetenciesModel,
  KeyTechnologyStudentsModel,
  StudentsByCourseModel,
  CustomersByActivityModel,
  CustomersByAreaModel,
} from './dashboard'

export interface DashboardModel {
  keyStatistic: KeyStatisticModel
  customersTop: CustomersTopModel[]
  typicalTeam: TypicalTeamModel[]
  studentCompetencies: StudentCompetenciesModel[]
  desiredStudentCompetencies: StudentCompetenciesModel[]
  keyTechnologyStudents: KeyTechnologyStudentsModel[]
  studentsByCourse: StudentsByCourseModel[]
  customersByActivity: CustomersByActivityModel[]
  customersByArea: CustomersByAreaModel[]
}
