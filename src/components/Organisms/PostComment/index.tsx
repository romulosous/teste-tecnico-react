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
  postId?: number
}

const PostComment = ({ name, email, body }: PostCommentProps) => {
  const router = useRouter()

  const navigateToUserDetails = () => {
    // Nesse trecho de código, o id é gerado de forma aleatória, pois no endpoint de comentarios não temos o id do usuário
    // Tentei o uso do email, mas o email do endpoint user é diferente do email do endpoint comments
    const id = Math.floor(Math.random() * 10) + 1
    router.push(`/users/${id}`)
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
