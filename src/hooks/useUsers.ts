import { useQuery } from 'react-query'
import { getUser } from 'src/services/endpoints/getUser'
import { getUsers } from 'src/services/endpoints/getUsers'
import { queryClient } from 'src/services/queryClient'

export function useUsers(page: number) {
  return useQuery(['users', { page }], () => getUsers(page), {
    staleTime: 1000 * 60 * 10 // 10 min is fresh data
  })
}

export async function handlePrefetchUser(userId: string) {
  await queryClient.prefetchQuery(['users', userId], () => getUser(userId))
}
