import axios, { AxiosResponse } from 'axios'

const apiUrl = process.env.APP_API

export const admin = {

  getStatistics: (): Promise<AxiosResponse<any>> =>
    axios.get(`${apiUrl}/admin/AdminStatistic/GetStatistic`),

}
