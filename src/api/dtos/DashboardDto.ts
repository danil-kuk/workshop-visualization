import { DatabaseItemBase } from './DatabaseItemBase'
import { CustomersTopDto } from './CustomersTopDto'
import { KeyStatisticDto } from './KeyStatisticDto'
import { TypicalTeamDto } from './TypicalTeamDto'

export interface DashboardDto extends DatabaseItemBase {
  key_statistic: KeyStatisticDto
  customers_top: CustomersTopDto[]
  typical_team: TypicalTeamDto[]
}
