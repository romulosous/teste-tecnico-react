import PostDetails from '@/components/Page/PostDetails'
import { fetchCommentsByPostId } from '@/services/comment'
import { fetchPostById } from '@/services/post'
import { fetchUserById } from '@/services/user'

interface PostsPageProps {
  params: {
    id?: string
  }
}

export default async function PostsPage({ params }: PostsPageProps) {
  if (!params.id) {
    return null
  }

  const post = await fetchPostById(params.id)

  const user = await fetchUserById(post.userId)

  const comments = await fetchCommentsByPostId(params.id)

  const postData = {
    ...post,
    user
  }

  return <PostDetails post={postData} comments={comments} />
}
