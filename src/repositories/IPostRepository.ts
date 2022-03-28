import { Post } from '../entities/posts/IPostInterface'

export interface IUserRepository {
  getPost(id: string): Promise<Post>
  createPost(post: Post): Promise<Post>
}
