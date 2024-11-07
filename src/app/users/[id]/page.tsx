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

  const responsePost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      cache: 'force-cache'
    }
  )
  const dataPost = await responsePost.json()

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${dataPost.userId}`,
    {
      cache: 'force-cache'
    }
  )
  const data = await response.json()

  // https://jsonplaceholder.typicode.com/posts?_limit=10&_page=3?userId=3
  const responsePosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`,
    {
      cache: 'force-cache'
    }
  )
  const posts = await responsePosts.json()

  return <UserDetails user={data} posts={posts} />
}
