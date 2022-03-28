import { User } from '../users/IUserInterface'

export interface Post {
  _id: string
  description: string
  mediaUrl: string
  postOwner: User
}
