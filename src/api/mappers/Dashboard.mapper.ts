import { DashboardModel } from 'src/models'

import { DashboardDto } from '../dtos/DashboardDto'

import { DtoToModelMapper } from './Mappers'

export const dashboardMapper: DtoToModelMapper<DashboardModel, DashboardDto> = {
  fromDto: (dto) => ({
    keyStatistic: {
      studentsCount: dto.key_statistic.students_count,
      projectsCount: dto.key_statistic.projects_count,
      teamsCount: dto.key_statistic.teams_count,
      curatorsCount: dto.key_statistic.curators_count,
      customersCount: dto.key_statistic.customers_count,
    },
    customersTop: dto.customers_top.map((item) => ({
      name: item.name,
      projectsCount: item.projects_count,
    })),
    typicalTeam: dto.typical_team.map((item) => ({
      role: item.role,
      studentsCount: item.students_count,
    })),
    studentCompetencies: dto.student_competencies.map((item) => ({
      competence: item.competence,
      value: item.value,
    })),
    desiredStudentCompetencies: dto.desired_student_competencies.map((item) => ({
      competence: item.competence,
      value: item.value,
    })),
    keyTechnologyStudents: dto.key_technology_students.map((item) => ({
      keyTechnology: item.key_technology,
      value: item.value,
    })),
    studentsByCourse: dto.students_by_course.map((item) => ({
      course: item.course,
      count: item.count,
    })),
    customersByActivity: dto.customers_by_activity.map((item) => ({
      activity: item.activity,
      count: item.count,
    })),
    customersByArea: dto.customers_by_area.map((item) => ({
      area: item.area,
      count: item.count,
    })),
  }),
}
