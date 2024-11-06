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
  console.log('response detalhe', data)
  return <div>Post details</div>
}
