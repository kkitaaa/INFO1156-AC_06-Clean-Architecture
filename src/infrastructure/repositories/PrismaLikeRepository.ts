import { PrismaClient } from "@prisma/client";

export class PrismaLikeRepository {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.like.findMany();
  }

  async findById(id: string) {
    return this.prisma.like.findUnique({ where: { id } });
  }

  async create(data: { postId: string; reactionType: string; weight: number; source: string }) {
    return this.prisma.like.create({ data });
  }
}
