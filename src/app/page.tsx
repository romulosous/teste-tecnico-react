'use client'
import Loading from '@/components/atoms/Loading'
import HomePage from '@/components/Page/HomePage'
import { IPost, IPostWithUser } from '@/interfaces/post.interface'
import { IUser } from '@/interfaces/user.interface'
import { fetchAllPosts, fetchTotalPosts } from '@/services/post'
import { fetchAllUsers } from '@/services/user'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const searchParams = useSearchParams()
  const limit = searchParams.get('limit')
  const page = searchParams.get('page')

  const [postsWithUsers, setPostsWithUsers] = useState<IPostWithUser>({
    posts: [],
    total: 0
  })

  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPostsWithUsers = async () => {
    try {
      const posts = await fetchAllPosts({})
      const totalPosts = await fetchTotalPosts()
      const users = await fetchAllUsers()

      setUsers(users)

      const usersMap: { [key: number]: IUser } = {}
      users.forEach((user: IUser) => {
        usersMap[user.id] = user
      })

      const postsWithUsers = posts.map((post: IPost) => ({
        ...post,
        user: usersMap[post.userId]
      }))

      setPostsWithUsers({ posts: postsWithUsers, total: totalPosts })
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPostsWithUsers()
  }, [limit, page])

  if (loading) {
    return <Loading />
  }

  return <HomePage data={postsWithUsers} users={users} />
}
