import { statistic } from 'src/features/statistics/provider'
import { useEffect, useState } from 'react'

export const useStatistic = <ModelT>(statisticMethod : () => Promise<any>, initialData: ModelT) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ModelT>(initialData)

  useEffect(() => {
    setLoading(true)
    statisticMethod()
      .then((res) => {
        setLoading(false)
        setData(res.data)
      })
  }, [setLoading, setData, statistic])

  return {
    data,
    loading,
  }
}
