import { CompetencyType } from 'src/features/statistics/models'
import { fakeFreeStudents } from 'src/features/statistics/provider/fake-data/fakeFreeStudents'
import { fakeMonitoring } from 'src/features/statistics/provider/fake-data/fakeMonitorind'

import { fakeAnyUsers, fakeDetailedUser } from '../fake-data/fakeAnyUsers'
import { fakeEvents } from '../fake-data/fakeEvents'

export const admin = {
  uploadProjects(data: FormData): Promise<any> {
    console.log('[POST] uploadProjects', data)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200 }), 1000)
    })
  },

  addNewEvent(data: string): Promise<any> {
    console.log('[POST] addNewEvent', data)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  deleteProject: (projectId: number): Promise<any> => {
    console.log('[DELETE] deleteProject', projectId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  updateProject: (data: any): Promise<any> => {
    console.log('[PUT] updateProject', data)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  downloadTemplateTable: (): Promise<any> => {
    console.log('[GET] downloadTemplateTable')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200 }), 1000)
    })
  },

  deleteCompetency: (id: number): Promise<any> => {
    console.log('[DELETE] deleteCompetency', id)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  createCompetency: (name: string, competencyType: CompetencyType): Promise<any> => {
    console.log('[POST] createCompetency', name, competencyType)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  updateCompetency: (id: number, name: string, competencyType: CompetencyType): Promise<any> => {
    console.log('[PUT] updateCompetency', id, name, competencyType)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  updateEvent: (data: any): Promise<any> => {
    console.log('[PUT] updateEvent', data)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  getEvents(): Promise<any> {
    console.log('[GET] getAllEvents')
    return new Promise((resolve) => {
      resolve({
        status: 200,
        data: fakeEvents,
      })
    })
  },

  getFreeStudents: (term: string): Promise<any> => {
    console.log('[GET] getFreeStudents', term)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200, data: fakeFreeStudents }), 1000)
    })
  },

  getUsers: (term: string): Promise<any> => {
    console.log('[GET] getUsers', term)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200, data: fakeAnyUsers }), 1000)
    })
  },

  getUser: (id: number): Promise<any> => {
    console.log('[GET] getUser', id)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200, data: fakeDetailedUser }), 1000)
    })
  },

  changeUserType: (id: number, type: string): Promise<any> => {
    console.log('[PUT] changeUserType', id, type)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  deleteTeam: (teamId: number): Promise<any> => {
    console.log('[DELETE] deleteTeam', teamId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  addNewTeam: (projectId: number): Promise<any> => {
    console.log('[POST] addNewTeam', projectId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  getEventData: (): Promise<any> => {
    console.log('[GET] getEventData')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200 }), 1000)
    })
  },

  getStatistics: (): Promise<any> => {
    console.log('[GET] getStatistics')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200, data: fakeMonitoring }), 1000)
    })
  },

  getEventResult: (): Promise<any> => {
    console.log('[GET] getEventResult')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 200 }), 1000)
    })
  },

  joinUserToProject: (userId: number, teamId: number, roleId: number): Promise<any> => {
    console.log('[POST] joinUserToProject', userId, teamId, roleId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  deleteUserFromTeam: (userId: number, teamId: number): Promise<any> => {
    console.log('[DELETE] deleteUserFromTeam', userId, teamId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  changeUserRole: (userId: number, roleId: number): Promise<any> => {
    console.log('[PUT] changeUserRole', userId, roleId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  openAllProjects: (): Promise<any> => {
    console.log('[POST] openAllProjects')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  closeAllProjects: (): Promise<any> => {
    console.log('[POST] closeAllProjects')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  deleteLifeScenario: (scenarioId: number): Promise<any> => {
    console.log('[DELETE] deleteLifeScenario', scenarioId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  deleteKeyTechnology: (technologyId: number): Promise<any> => {
    console.log('[DELETE] deleteKeyTechnology', technologyId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  updateProjectRole: (id: number, name: string): Promise<any> => {
    console.log('[PUT] updateProjectRole', id, name)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  addProjectRole: (roleName: string, projectId: number): Promise<any> => {
    console.log('[POST] addProjectRole', roleName, projectId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },

  deleteProjectRole: (roleId: number): Promise<any> => {
    console.log('[DELETE] deleteProjectRole', roleId)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 204 }), 1000)
    })
  },
}
