import * as S from './style'
import Avatar from '@/components/atoms/Avatar'
import Paragraph from '@/components/atoms/Paragraph'
import Badge from '@/components/atoms/Badge'
import Card from '@/components/atoms/Card'

interface PostCardProps {
  likes: number
  comments: number
  content: string
}
const PostCard = ({ comments, content, likes }: PostCardProps) => (
  <Card>
    <S.PostContent>
      <S.PostHeader>
        <Avatar name="John Doe" userName="johndoe" />
        <S.PostDate>2 min</S.PostDate>
      </S.PostHeader>
      <Paragraph>{content}</Paragraph>
      <Badge comments={comments} likes={likes} />
    </S.PostContent>
  </Card>
)

export default PostCard
