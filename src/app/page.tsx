'use client'
import HomePage from '@/components/Page/HomePage'
import { IPost, IPostWithUser } from '@/interfaces/post.interface'
import { IUser } from '@/interfaces/user.interface'

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

  const fetchPosts = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
      {
        cache: 'force-cache'
      }
    )
    const data = await response.json()
    return data
  }

  const fetchTotalPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      cache: 'force-cache'
    })
    const data = await response.json()
    return data.length
  }

  const fetchAllUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      cache: 'force-cache'
    })
    const data = await response.json()
    return data
  }

  const fetchPostsWithUsers = async () => {
    try {
      const posts = await fetchPosts()
      const totalPosts = await fetchTotalPosts()
      const users = await fetchAllUsers()

      setUsers(users)

      const usersMap: { [key: number]: unknown } = {}
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
    return <div>Loading...</div>
  }

  return <HomePage data={postsWithUsers} users={users} />
}
