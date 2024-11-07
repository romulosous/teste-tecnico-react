import PostDetails from '@/components/Page/PostDetails'

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
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      cache: 'force-cache'
    }
  )
  const data = await response.json()

  const responseUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${data?.userId}`,
    {
      cache: 'force-cache'
    }
  )

  const user = await responseUser.json()

  const responseCommentsPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`,
    {
      cache: 'force-cache'
    }
  )
  const comments = await responseCommentsPost.json()

  const postData = {
    ...data,
    user
  }

  return <PostDetails post={postData} comments={comments} />
}
