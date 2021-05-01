import { CustomersTopModel } from './CustomersTopModel'
import { KeyStatisticModel } from './KeyStatisticModel'

export interface DashboardModel {
  keyStatistic: KeyStatisticModel
  customersTop: CustomersTopModel[]
}
