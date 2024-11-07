'use client'
import Header from '@/components/organisms/Header'
import PostCard from '@/components/organisms/PostCard'
import UserInfoCard from '@/components/organisms/UserInfoCard'
import * as S from './style'
import UserList from '@/components/organisms/UserList'
import { IUser } from '@/interfaces/user.interface'
import { IPost } from '@/interfaces/post.interface'

interface UserDetailsProps {
  posts: IPost[]
  users: IUser[]
  user: IUser
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
              {posts?.map((post: IPost) => {
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
