'use client'
import * as S from './style'
import Header from '@/components/Organisms/Header'
import { Post } from '@/components/Organisms/PostCard'
import Avatar from '@/components/atoms/Avatar'
import Card from '@/components/atoms/Card'
import PostComment from '@/components/Organisms/PostComment'

interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface PostDetailsProps {
  post: Post
  comments: Comment[]
}

export const PostDetails = ({ post, comments }: PostDetailsProps) => {
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <S.Container>
      <Card>
        <div className="container">
          <Header />
          <S.PostContent>
            <S.PostHeader>
              <S.Title>{post.title}</S.Title>
            </S.PostHeader>
            <S.PostBody>{post.body}</S.PostBody>
            <S.PostDate>2 min</S.PostDate>
            <S.AvatarContainer>
              Autor:
              <Avatar name={post.user.name} userName={post.user.username} />
            </S.AvatarContainer>
          </S.PostContent>

          <S.CommentsTitle>Seção de Comentários</S.CommentsTitle>

          <S.Comments>
            {comments.length > 0 &&
              comments?.map((comment) => {
                return (
                  <PostComment
                    key={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                  />
                )
              })}
          </S.Comments>
        </div>
      </Card>
    </S.Container>
  )
}

export default PostDetails
