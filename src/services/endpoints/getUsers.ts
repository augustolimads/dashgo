import { User } from 'src/types/User'
import { api } from '../axios'

type Props = {
  totalCount: number
  users: User[]
}

export async function getUsers(page: number): Promise<Props> {
  const { data, headers } = await api('users', {
    params: {
      page
    }
  })

  const totalCount = +headers['x-total-count']

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return { users, totalCount }
}
