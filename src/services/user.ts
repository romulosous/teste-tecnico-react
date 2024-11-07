import { IUser } from '@/interfaces/user.interface'
import { backendUrl } from '.'

export async function fetchAllUsers(): Promise<IUser[]> {
  const response = await fetch(`${backendUrl}/users`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch users data')
  }
  return response.json()
}

export async function fetchUserById(id: string | number): Promise<IUser> {
  const response = await fetch(`${backendUrl}/users/${id}`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch user data')
  }
  return response.json()
}
