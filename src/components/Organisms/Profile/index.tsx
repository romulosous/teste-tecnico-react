import * as S from './style'

interface ProfileProps {
  name?: string
}

const Profile = ({ name }: ProfileProps) => {
  return (
    <S.Profile>
      <S.ProfileName>{name || 'User'}</S.ProfileName>
      <S.ProfileImage src="/img/user.svg" alt="Profile" />
    </S.Profile>
  )
}

export default Profile
