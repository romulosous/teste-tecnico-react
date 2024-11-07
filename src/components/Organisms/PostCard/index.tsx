'use client'
import Badge from '@/components/atoms/Badge'
import * as S from './style'
import Card from '@/components/atoms/Card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Avatar from '@/components/atoms/Avatar'

interface Geo {
  lat: string
  lng: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
  user: User
}
interface PostCardProps {
  post: Post
}
const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter()

  const navigateToPostDetails = () => {
    router.push(`/posts/${post?.id}`)
  }

  return (
    <Card onClick={navigateToPostDetails}>
      <S.PostContent>
        <S.PostHeader>
          <S.Title>{post?.title}</S.Title>
        </S.PostHeader>
        <S.PostBody>
          {post?.body.slice(0, 100)}
          {post?.body.length > 100 ? ' ...' : ''} <br />{' '}
          <Link href={`/posts/${post?.id}`}>Ler mais</Link>
        </S.PostBody>
        <S.AuthorContainer>
          <Badge comments={20} likes={120} />
          {post?.user && (
            <Avatar name={post?.user?.name} userName={post?.user?.username} />
          )}
        </S.AuthorContainer>
      </S.PostContent>
    </Card>
  )
}

export default PostCard
