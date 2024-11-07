'use client'
import Badge from '@/components/atoms/Badge'
import * as S from './style'
import Card from '@/components/atoms/Card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Avatar from '@/components/atoms/Avatar'
import { IPost } from '@/interfaces/post.interface'

interface PostCardProps {
  post: IPost
}
const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter()

  const navigateToPostDetails = () => {
    router.push(`/posts/${post?.id}`)
  }

  return (
    <Card>
      <S.PostContent>
        <S.PostHeader onClick={navigateToPostDetails}>
          <S.Title>{post?.title}</S.Title>
        </S.PostHeader>
        <S.PostBody onClick={navigateToPostDetails}>
          {post?.body.slice(0, 100)}
          {post?.body.length > 100 ? ' ...' : ''} <br />{' '}
          <Link href={`/posts/${post?.id}`}>Ler mais</Link>
        </S.PostBody>
        <S.AuthorContainer>
          <Badge comments={20} likes={120} />
          {post?.user && (
            <Link href={`/users/${post.userId}`}>
              <Avatar name={post?.user?.name} userName={post?.user?.username} />
            </Link>
          )}
        </S.AuthorContainer>
      </S.PostContent>
    </Card>
  )
}

export default PostCard
