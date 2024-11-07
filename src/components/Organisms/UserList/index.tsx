'use client'
import { useState } from 'react'
import { User } from '../PostCard'
import * as S from './style'
import Link from 'next/link'

interface UserListProps {
  users: User[]
}
const UserList = ({ users }: UserListProps) => {
  const [showAll, setShowAll] = useState(false)
  const visibleUsers = showAll ? users : users.slice(0, 5)

  return (
    <S.Container>
      <S.Title>Usuários</S.Title>
      <S.UserListContainer>
        {visibleUsers.map((user, index) => (
          <S.UserItem key={index}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </S.UserItem>
        ))}
      </S.UserListContainer>
      {users.length > 5 && (
        <S.ShowMoreButton onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Mostrar menos' : 'Mostrar mais'}
        </S.ShowMoreButton>
      )}
    </S.Container>
  )
}

export default UserList
