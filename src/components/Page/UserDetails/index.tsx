'use client'
import Header from '@/components/Organisms/Header'
import PostCard, { Post, User } from '@/components/Organisms/PostCard'
import UserInfoCard from '@/components/Organisms/UserInfoCard'
import * as S from './style'
import UserList from '@/components/Organisms/UserList'

interface UserDetailsProps {
  posts: Post[]
  users: User[]
  user: User
}

export const UserDetails = ({ posts, users, user }: UserDetailsProps) => {
  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <S.Container>
      <div className="container">
        <Header />
        <UserInfoCard user={user} />

        <S.UserPostsContainer>
          <div style={{ flex: 2 }}>
            <S.PostTitle>Posts</S.PostTitle>
            <S.PostContent>
              {posts?.map((post: Post) => {
                return <PostCard key={post.id} post={post} />
              })}
            </S.PostContent>
          </div>
          <S.UserListContainer>
            <UserList users={users} />
          </S.UserListContainer>
        </S.UserPostsContainer>
      </div>
    </S.Container>
  )
}

export default UserDetails
