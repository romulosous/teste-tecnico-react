import * as S from './style'

interface AvatarProps {
  name?: string
  userName?: string
}

const Avatar = ({ name, userName }: AvatarProps) => (
  <S.Avatar>
    <S.AvatarImage src="/img/user.svg" alt="Avatar" />
    <S.AvatarName>
      {name} <S.AvatarUserName>@{userName}</S.AvatarUserName>
    </S.AvatarName>
  </S.Avatar>
)

export default Avatar
