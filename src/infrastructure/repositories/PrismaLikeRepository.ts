import { PrismaClient } from "@prisma/client";

export class PrismaLikeRepository {
  private prisma = new PrismaClient();

  async findAllByPost(postId: string) {
    return this.prisma.like.findMany({ where: { postId } });
  }

  async create(data: { postId: string; reactionType: string; weight: number; source: string }) {
    return this.prisma.like.create({ data });
  }

  async countByPost(postId: string) {
    return this.prisma.like.count({ where: { postId } });
  }
}
