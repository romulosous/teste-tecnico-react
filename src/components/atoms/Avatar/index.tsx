import * as S from './style'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  userName?: string
}

const Avatar = ({ name, userName, ...props }: AvatarProps) => (
  <S.Avatar {...props}>
    <S.AvatarImage src="/img/user.svg" alt="Avatar" />
    <S.AvatarName>
      {name} <S.AvatarUserName>@{userName}</S.AvatarUserName>
    </S.AvatarName>
  </S.Avatar>
)

export default Avatar
