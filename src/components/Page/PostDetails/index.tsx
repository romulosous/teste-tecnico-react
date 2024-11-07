'use client'
import Header from '@/components/organisms/Header'
import Avatar from '@/components/atoms/Avatar'
import Card from '@/components/atoms/Card'
import PostComment from '@/components/organisms/PostComment'
import * as S from './style'
import Link from 'next/link'
import { IPost } from '@/interfaces/post.interface'
import { IComment } from '@/interfaces/comment.interface'
import Loading from '@/components/atoms/Loading'

interface PostDetailsProps {
  post: IPost
  comments: IComment[]
}

export const PostDetails = ({ post, comments }: PostDetailsProps) => {
  if (!post) {
    return <Loading />
  }

  return (
    <S.Container>
      <div className="container">
        <Header />
        <Card>
          <S.PostContent>
            <S.PostHeader>
              <S.Title>{post.title}</S.Title>
            </S.PostHeader>
            <S.PostBody>{post.body}</S.PostBody>
            <S.PostDate>2 min</S.PostDate>
            <S.AvatarContainer>
              Autor:
              <Link href={`/users/${post.userId}`}>
                <Avatar
                  name={post?.user?.name}
                  userName={post?.user?.username}
                />
              </Link>
            </S.AvatarContainer>
          </S.PostContent>
        </Card>

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
    </S.Container>
  )
}

export default PostDetails
