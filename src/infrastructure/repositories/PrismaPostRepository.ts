import { PrismaClient } from "@prisma/client";

export class PrismaPostRepository {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findById(id: string) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async create(data: { title: string; description: string; imageUrl: string; categoryId?: string }) {
    return this.prisma.post.create({ data });
  }
}
