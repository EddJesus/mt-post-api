import { Post } from '../posts/IPostInterface'

export interface User {
  _id: string
  name: string
  email: string
  password: string
  posts: Post[]
}
