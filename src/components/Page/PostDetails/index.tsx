'use client'
import Badge from '@/components/atoms/Badge'
import * as S from './style'
import Header from '@/components/Organisms/Header'
import { Post } from '@/components/Organisms/PostCard'
import Avatar from '@/components/atoms/Avatar'

interface PostDetailsProps {
  post: Post
}

export const PostDetails = ({ post }: PostDetailsProps) => {
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <S.Container>
      <div className="container">
        <Header />
        <S.PostContent>
          <S.PostHeader>
            <S.Title>{post.title}</S.Title>
          </S.PostHeader>
          <S.PostBody>{post.body}</S.PostBody>
          <Badge comments={20} likes={120} />
          <Avatar name={post.user.name} userName={post.user.username} />
        </S.PostContent>
        {/* Comentarios */}
      </div>
    </S.Container>
  )
}

export default PostDetails
