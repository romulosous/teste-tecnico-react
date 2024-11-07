import { IUser } from './user.interface'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
  user: IUser
}

export interface IPostResponse {
  posts: IPost[]
  total: number
}

export interface IPostWithUser {
  posts: IPost[]
  total: number
}
