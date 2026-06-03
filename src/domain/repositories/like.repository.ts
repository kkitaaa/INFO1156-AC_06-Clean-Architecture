import { Like } from "../entities/like.entity";

export interface LikeRepository {
  findAll(): Promise<Like[]>;
  findById(id: string): Promise<Like | null>;
  findByPostId(postId: string): Promise<Like[]>;

  create(like: Like): Promise<Like>;
  delete(id: string): Promise<void>;
}