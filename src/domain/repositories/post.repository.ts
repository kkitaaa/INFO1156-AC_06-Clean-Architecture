import { Post } from "../entities/post.entity";
import { CreatePostData } from "../dtos/create-post-data";

export interface PostRepository {
  findAll(): Promise<Post[]>;
  findById(id: string): Promise<Post | null>;
  create(data: CreatePostData): Promise<Post>;
}