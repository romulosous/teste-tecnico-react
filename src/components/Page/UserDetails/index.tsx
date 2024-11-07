'use client'
import Header from '@/components/Organisms/Header'
import PostCard, { Post, User } from '@/components/Organisms/PostCard'
import UserInfoCard from '@/components/Organisms/UserInfoCard'
import * as S from './style'

interface UserDetailsProps {
  posts: Post[]
  user: User
}

export const UserDetails = ({ posts, user }: UserDetailsProps) => {
  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <S.Container>
      <div className="container">
        <Header />
        <UserInfoCard user={user} />

        <S.UserPostsContainer>
          <S.PostTitle>Posts</S.PostTitle>
          <S.PostContent>
            {posts?.map((post: Post) => {
              return <PostCard key={post.id} post={post} />
            })}
          </S.PostContent>
        </S.UserPostsContainer>
      </div>
    </S.Container>
  )
}

export default UserDetails
