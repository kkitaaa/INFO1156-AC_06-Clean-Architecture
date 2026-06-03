import { PrismaClient } from "@prisma/client";

export class PrismaCommentRepository {
  private prisma = new PrismaClient();

  async findAllByPost(postId: string) {
    return this.prisma.comment.findMany({ where: { postId } });
  }

  async findById(id: string) {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  async create(data: { postId: string; content: string; source: string }) {
    return this.prisma.comment.create({ data });
  }
}
