'use client'
import * as S from './style'
import Card from '@/components/atoms/Card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}
interface PostCardProps {
  post: Post
}
const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter()

  const navigateToPostDetails = () => {
    router.push(`/posts/${post.id}`)
  }

  return (
    <Card onClick={navigateToPostDetails}>
      <S.PostContent>
        <S.PostHeader>
          <S.Title>{post.title}</S.Title>
        </S.PostHeader>
        <S.PostBody>
          {post.body.slice(0, 100)}
          {post.body.length > 100 ? ' ...' : ''} <br />{' '}
          <Link href={`/posts/${post.id}`}>Ler mais</Link>
        </S.PostBody>
        {/* <Badge comments={20} likes={120} /> */}
      </S.PostContent>
    </Card>
  )
}

export default PostCard
