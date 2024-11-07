'use client'
import * as S from './style'
import Header from '@/components/Organisms/Header'
import PostCard, { Post } from '@/components/Organisms/PostCard'
import { useRouter, useSearchParams } from 'next/navigation'

interface PostData {
  posts: Post[]
  total: number
}

interface HomePageProps {
  data: PostData
}

export const HomePage = ({ data }: HomePageProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  if (!data) {
    return <div>Loading...</div>
  }

  console.log('posts', data)

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('page', page.toString())

    router.push(`?${params.toString()}`)
  }
  return (
    <S.Container>
      <div className="container">
        <Header />
        <S.PostContent>
          {data.posts?.map((post: Post) => {
            return <PostCard key={post.id} post={post} />
          })}
        </S.PostContent>

        <S.Pagination>
          {[1, 2, 3, 4, 5].map((page) => (
            <S.PaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </S.PaginationButton>
          ))}
        </S.Pagination>
      </div>
    </S.Container>
  )
}

export default HomePage
