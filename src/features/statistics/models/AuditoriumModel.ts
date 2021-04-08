export interface AuditoriumModel {
  id: number
  name: string
}

export interface ExpertAuditoriumModel {
  id: number
  auditorium: string
}

export interface AddAuditoriumModel {
  name: string
  capacity: number
  isDefault: boolean
}

export interface AddExpertAuditoriumModel {
  expertId: number
  auditoriumId: number
}
