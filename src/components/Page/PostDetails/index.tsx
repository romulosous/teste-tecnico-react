import * as S from './style'
import Header from '@/components/Organisms/Header'
import PostCard, { Post } from '@/components/Organisms/PostCard'

interface PostDetailsProps {
  post: Post
}

export const PostDetails = ({ post }: PostDetailsProps) => {
  console.log('post>>>', post)
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <S.Container>
      <div className="container">
        <Header />
        <S.PostContent>
          <PostCard post={post} />
        </S.PostContent>
        {/* Comentarios */}
      </div>
    </S.Container>
  )
}

export default PostDetails
