import { Injectable } from "@nestjs/common";
import { ModerationRepository } from "@/domain/repositories/moderation.repository";
import { ProhibitedWord } from "@/domain/entities/prohibited-word.entity";
import { PrismaService } from "@/infrastructure/prisma.service";

@Injectable()
export class PrismaModerationRepository implements ModerationRepository {
  constructor(private prisma: PrismaService) {}

  async findAllWords(): Promise<ProhibitedWord[]> {
    return this.prisma.prohibitedWord.findMany();
  }

  async addWord(word: ProhibitedWord): Promise<ProhibitedWord> {
    return this.prisma.prohibitedWord.create({ data: word });
  }

  async removeWord(id: string): Promise<void> {
    await this.prisma.prohibitedWord.delete({ where: { id } });
  }
}
