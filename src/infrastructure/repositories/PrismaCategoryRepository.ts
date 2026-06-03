import { PrismaClient } from "@prisma/client";

export class PrismaCategoryRepository {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.category.findMany({ include: { posts: true } });
  }

  async findBySlug(slug: string) {
    return this.prisma.category.findUnique({ where: { slug } });
  }

  async create(data: { name: string; slug: string }) {
    return this.prisma.category.create({ data });
  }
}
