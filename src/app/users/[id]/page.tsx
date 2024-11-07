import UserDetails from '@/components/Page/UserDetails'
import { fetchPostsByUserId } from '@/services/post'
import { fetchAllUsers, fetchUserById } from '@/services/user'

interface PostsPageProps {
  params: {
    id?: string
  }
}

export default async function PostsPage({ params }: PostsPageProps) {
  if (!params.id) {
    return null
  }

  const user = await fetchUserById(params.id)
  const userPosts = await fetchPostsByUserId(user.id)
  const allUsers = await fetchAllUsers()

  return <UserDetails user={user} posts={userPosts} users={allUsers} />
}
