import { backendUrl } from '.'

export async function fetchCommentsByPostId(postId: string) {
  const response = await fetch(`${backendUrl}/posts/${postId}/comments`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch comments data')
  }
  return response.json()
}
