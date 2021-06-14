import { DashboardModel, KeyStatisticModel, CustomersTopModel, TypicalTeamModel, StudentCompetenciesModel, KeyTechnologyStudentsModel,StudentsByCourseModel, CustomersByActivityModel, CustomersByAreaModel } from 'src/models'

import { DashboardDto } from '../dtos/dashboardDtos/DashboardDto'

import { DtoToModelMapper } from './Mappers'

const keyStatisticMapper: DtoToModelMapper<KeyStatisticModel, DashboardDto> = {
  fromDto: (dto: DashboardDto) => ({
    studentsCount: dto.key_statistic.students_count,
    projectsCount: dto.key_statistic.projects_count,
    teamsCount: dto.key_statistic.teams_count,
    curatorsCount: dto.key_statistic.curators_count,
    customersCount: dto.key_statistic.customers_count,
  }),
}

const customersTopMapper: DtoToModelMapper<CustomersTopModel[], DashboardDto> = {
  fromDto: (dto) => dto.customers_top
    .map((item) => ({
      name: item.name,
      projectsCount: item.projects_count,
    }))
    .sort((a, b) => a.projectsCount < b.projectsCount ? 1 : -1)
    .slice(0, 5),
}


const typicalTeamMapper: DtoToModelMapper<TypicalTeamModel[], DashboardDto> = {
  fromDto: (dto) => dto.typical_team.map((item) => ({
    role: item.role,
    studentsCount: item.students_count,
  })),
}

const studentCompetenciesMapper: DtoToModelMapper<StudentCompetenciesModel[], DashboardDto> = {
  fromDto:  (dto) => dto.student_competencies
    .map((item) => ({
      competence: item.competence,
      value: item.value,
    }))
    .sort((a, b) => a.value < b.value ? 1 : -1)
    .slice(0, 8),
}

const desiredStudentCompetenciesMapper: DtoToModelMapper<StudentCompetenciesModel[], DashboardDto> = {
  fromDto: (dto: DashboardDto) => dto.desired_student_competencies
    .map((item) => ({
      competence: item.competence,
      value: item.value,
    }))
    .sort((a, b) => a.value < b.value ? 1 : -1)
    .slice(0, 8),
}

const keyTechnologyStudentsMapper: DtoToModelMapper<KeyTechnologyStudentsModel[], DashboardDto> = {
  fromDto: (dto: DashboardDto) => dto.key_technology_students.map((item) => ({
    keyTechnology: item.key_technology,
    value: item.value,
  })),
}

const studentsByCourseMapper: DtoToModelMapper<StudentsByCourseModel[], DashboardDto> = {
  fromDto: (dto: DashboardDto) => dto.students_by_course.map((item) => ({
    course: item.course,
    count: item.count,
  })),
}

const customersByActivityMapper: DtoToModelMapper<CustomersByActivityModel[], DashboardDto> = {
  fromDto: (dto: DashboardDto) => dto.customers_by_activity.map((item) => ({
    activity: item.activity,
    count: item.count,
  })),
}

const customersByAreaMapper:DtoToModelMapper<CustomersByAreaModel[], DashboardDto> = {
  fromDto: (dto: DashboardDto) => dto.customers_by_area.map((item) => ({
    area: item.area,
    count: item.count,
  })),
}

export const dashboardMapper: DtoToModelMapper<DashboardModel, DashboardDto> = {
  fromDto: (dto) => ({
    keyStatistic: keyStatisticMapper.fromDto(dto),
    customersTop: customersTopMapper.fromDto(dto),
    typicalTeam: typicalTeamMapper.fromDto(dto),
    studentCompetencies: studentCompetenciesMapper.fromDto(dto),
    desiredStudentCompetencies: desiredStudentCompetenciesMapper.fromDto(dto),
    keyTechnologyStudents: keyTechnologyStudentsMapper.fromDto(dto),
    studentsByCourse: studentsByCourseMapper.fromDto(dto),
    customersByActivity: customersByActivityMapper.fromDto(dto),
    customersByArea: customersByAreaMapper.fromDto(dto),
  }),
}
