'use client'
import Badge from '@/components/atoms/Badge'
import * as S from './style'
import Header from '@/components/Organisms/Header'
import { Post } from '@/components/Organisms/PostCard'

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
          {/* <PostCard post={post} /> */}
          <S.PostHeader>
            <S.Title>{post.title}</S.Title>
          </S.PostHeader>
          <S.PostBody>{post.body}</S.PostBody>
          <Badge comments={20} likes={120} />
        </S.PostContent>
        {/* Comentarios */}
      </div>
    </S.Container>
  )
}

export default PostDetails
