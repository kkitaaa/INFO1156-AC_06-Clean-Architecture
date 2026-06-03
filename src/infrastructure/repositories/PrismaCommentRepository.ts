import { PrismaClient } from "@prisma/client";

export class PrismaCommentRepository {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.comment.findMany();
  }

  async findById(id: string) {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  async create(data: { postId: string; content: string; source: string }) {
    return this.prisma.comment.create({ data });
  }
}
