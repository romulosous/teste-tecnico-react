'use client'
import Avatar from '@/components/atoms/Avatar'
import Paragraph from '@/components/atoms/Paragraph'
import Badge from '@/components/atoms/Badge'
import Card from '@/components/atoms/Card'
import * as S from './style'
import { useRouter } from 'next/navigation'

interface PostCommentProps {
  name: string
  email: string
  body: string
  postId: number
}

const PostComment = ({ name, email, body, postId }: PostCommentProps) => {
  const router = useRouter()

  const navigateToUserDetails = () => {
    console.log('postId', postId)
    router.push(`/users/${postId}`)
  }

  return (
    <Card>
      <S.PostContent>
        <S.PostHeader>
          <S.AvatarContainer>
            <Avatar
              name={name}
              userName={email}
              title="Ver Detalhes de usuário"
              onClick={navigateToUserDetails}
            />
          </S.AvatarContainer>
        </S.PostHeader>
        <Paragraph>{body}</Paragraph>
        <Badge
          comments={Math.floor(Math.random() * 400)}
          likes={Math.floor(Math.random() * 400)}
        />
      </S.PostContent>
    </Card>
  )
}
export default PostComment
