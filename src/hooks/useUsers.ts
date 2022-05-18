import { useQuery } from 'react-query'
import { getUsers } from 'src/services/endpoints/getUsers'

export function useUsers(page: number) {
  return useQuery(['users', { page }], () => getUsers(page), {
    staleTime: 1000 * 5 // 5 seconds is fresh data
  })
}
