import * as S from './style'
import { HeartIcon, MessageCircleIcon } from 'lucide-react'

interface BadgeProps {
  likes?: number
  comments?: number
}

const Badge = ({ likes = 0, comments = 0 }: BadgeProps) => {
  return (
    <S.Badge>
      <S.Likes>
        <HeartIcon size={18} />
        {likes}
      </S.Likes>
      <S.Comments>
        <MessageCircleIcon size={18} />
        {comments}
      </S.Comments>
    </S.Badge>
  )
}

export default Badge
