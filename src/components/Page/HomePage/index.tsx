import * as S from './style'
import Header from '@/components/Organisms/Header'
import PostCard, { Post } from '@/components/Organisms/PostCard'

interface HomePageProps {
  posts: Post[]
}

export const HomePage = ({ posts }: HomePageProps) => {
  if (!posts) {
    return <div>Loading...</div>
  }

  return (
    <S.Container>
      <div className="container">
        <Header />
        <S.PostContent>
          {posts.map((post: Post) => {
            return <PostCard key={post.id} post={post} />
          })}
        </S.PostContent>
      </div>
    </S.Container>
  )
}

export default HomePage
