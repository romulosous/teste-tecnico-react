'use client'
import * as S from './style'
import Header from '@/components/Organisms/Header'
import PostCard, { Post, User } from '@/components/Organisms/PostCard'
import UserList from '@/components/Organisms/UserList'
// import { useRouter, useSearchParams } from 'next/navigation'

interface PostData {
  posts: Post[]
  total: number
}

interface HomePageProps {
  data: PostData
  users: User[]
}

export const HomePage = ({ data, users }: HomePageProps) => {
  // const router = useRouter()
  // const searchParams = useSearchParams()

  if (!data) {
    return <div>Loading...</div>
  }

  // const handlePageChange = (page: number) => {
  //   const params = new URLSearchParams(searchParams.toString())

  //   params.set('page', page.toString())

  //   router.push(`?${params.toString()}`)
  // }
  return (
    <S.Container>
      <div className="container">
        <Header />
        <S.PostsContainer>
          <S.PostContent>
            {data.posts?.map((post: Post) => {
              return <PostCard key={post.id} post={post} />
            })}
          </S.PostContent>

          <S.UserListContainer>
            <UserList users={users} />
          </S.UserListContainer>
        </S.PostsContainer>

        {/* <S.Pagination>
          {[1, 2, 3, 4, 5].map((page) => (
            <S.PaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </S.PaginationButton>
          ))}
        </S.Pagination> */}
      </div>
    </S.Container>
  )
}

export default HomePage
