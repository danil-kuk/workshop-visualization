import { CustomersTopModel } from './CustomersTopModel'
import { KeyStatisticModel } from './KeyStatisticModel'
import { TypicalTeamModel } from './TypicalTeamModel'

export interface DashboardModel {
  keyStatistic: KeyStatisticModel
  customersTop: CustomersTopModel[]
  typicalTeam: TypicalTeamModel[]
}
