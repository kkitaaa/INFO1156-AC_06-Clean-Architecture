import { Injectable } from "@nestjs/common";
import { CommentRepository } from "@/domain/repositories/comment.repository";
import { Comment } from "@/domain/entities/comment.entity";
import { PrismaService } from "@/infrastructure/prisma.service";

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Comment[]> {
    return this.prisma.comment.findMany();
  }

  async findById(id: string): Promise<Comment | null> {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  async findByPostId(postId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({ where: { postId } });
  }

  async create(comment: Comment): Promise<Comment> {
    return this.prisma.comment.create({ data: comment });
  }
}
