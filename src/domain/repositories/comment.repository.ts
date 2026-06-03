import { Comment } from "../entities/comment.entity";

export interface CommentRepository {
  findAll(): Promise<Comment[]>;
  findById(id: string): Promise<Comment | null>;
  findByPostId(postId: string): Promise<Comment[]>;
  create(comment: Comment): Promise<Comment>;
}