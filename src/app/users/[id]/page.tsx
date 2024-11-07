import UserDetails from '@/components/Page/UserDetails'

interface PostsPageProps {
  params: {
    id?: string
  }
}

export default async function PostsPage({ params }: PostsPageProps) {
  if (!params.id) {
    return null
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    {
      cache: 'force-cache'
    }
  )
  const data = await response.json()

  const responsePosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${data.id}`,
    {
      cache: 'force-cache'
    }
  )
  const posts = await responsePosts.json()

  const responseAllUsers = await fetch(
    `https://jsonplaceholder.typicode.com/users/`,
    {
      cache: 'force-cache'
    }
  )
  const allUsers = await responseAllUsers.json()

  return <UserDetails user={data} posts={posts} users={allUsers} />
}
