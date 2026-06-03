import { PrismaClient } from "@prisma/client";

export class PrismaCategoryRepository {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findById(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async create(data: { name: string; slug: string }) {
    return this.prisma.category.create({ data });
  }
}
