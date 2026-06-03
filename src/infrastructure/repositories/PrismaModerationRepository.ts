import { PrismaClient } from "@prisma/client";

export class PrismaModerationRepository {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.prohibitedWord.findMany();
  }

  async findByWord(word: string) {
    return this.prisma.prohibitedWord.findUnique({ where: { word } });
  }

  async create(data: { word: string; category: string }) {
    return this.prisma.prohibitedWord.create({ data });
  }
}
