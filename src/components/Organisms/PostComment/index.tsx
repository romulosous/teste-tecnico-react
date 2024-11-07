'use client'
import * as S from './style'
import Avatar from '@/components/atoms/Avatar'
import Paragraph from '@/components/atoms/Paragraph'
import Badge from '@/components/atoms/Badge'
import Card from '@/components/atoms/Card'

interface PostCommentProps {
  name: string
  email: string
  body: string
}
const PostComment = ({ name, email, body }: PostCommentProps) => (
  <Card>
    <S.PostContent>
      <S.PostHeader>
        <S.AvatarContainer>
          <Avatar name={name} userName={email} />
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

export default PostComment
