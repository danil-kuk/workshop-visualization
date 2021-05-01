import { DatabaseItemBase } from './DatabaseItemBase'
import { CustomersTopDto } from './CustomersTopDto'
import { KeyStatisticDto } from './KeyStatisticDto'

export interface DashboardDto extends DatabaseItemBase {
  key_statistic: KeyStatisticDto
  customers_top: CustomersTopDto[]
}
