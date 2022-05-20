import { api } from '../axios'

export async function getUser(userId: string) {
  const response = await api.get(`/users/${userId}`)

  return response.data
}
