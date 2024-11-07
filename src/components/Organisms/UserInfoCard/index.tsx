'use client'
import { IUser } from '@/interfaces/user.interface'
import * as S from './style'

interface UserInfoCardProps {
  user: IUser
}
const UserInfoCard = ({ user }: UserInfoCardProps) => {
  return (
    <S.ProfileContainer>
      <S.Avatar
        src={
          'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'
        }
        alt={`avatar`}
      />
      <S.Details>
        <S.Name>{user.name}</S.Name>
        <S.Username>@{user.username}</S.Username>
        <S.Username>{user.email}</S.Username>
        <S.Info>
          <strong>Endereço:</strong> {user.address.street} -{' '}
          {user.address.suite} - {user.address.city}, {user.address.zipcode}
        </S.Info>
        <S.Info>
          <strong>Telefone:</strong> {user.phone}
        </S.Info>
        <S.Bio>
          <strong>Website:</strong> {user.website}
        </S.Bio>
      </S.Details>
    </S.ProfileContainer>
  )
}

export default UserInfoCard
