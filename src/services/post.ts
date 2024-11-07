import { IPost } from '@/interfaces/post.interface'
import { backendUrl } from '.'

interface IFetchParams {
  limit?: number
  page?: number
}

export async function fetchTotalPosts() {
  const response = await fetch(`${backendUrl}/posts`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch posts data')
  }
  const json = await response.json()
  return json.length
}

export async function fetchAllPosts({
  limit = 10,
  page = 1
}: IFetchParams): Promise<IPost[]> {
  const response = await fetch(
    `${backendUrl}/posts?_limit=${limit}&_page=${page}`,
    {
      cache: 'no-store'
    }
  )
  if (!response.ok) {
    throw new Error('Failed to fetch posts data')
  }
  return response.json()
}

export async function fetchPostById(id: string | number): Promise<IPost> {
  const response = await fetch(`${backendUrl}/posts/${id}`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch post data')
  }
  return response.json()
}

export async function fetchPostsByUserId(
  id: string | number
): Promise<IPost[]> {
  const response = await fetch(`${backendUrl}/posts?userId=${id}`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch posts data')
  }
  return response.json()
}
