import { Injectable, NotFoundException } from "@nestjs/common";
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
    try {
      await this.prisma.prohibitedWord.delete({ where: { id } });
    } catch (err: unknown) {
      if (
        err instanceof Error &&
        "code" in err &&
        (err as { code: string }).code === "P2025"
      ) {
        throw new NotFoundException("Palabra prohibida no encontrada");
      }
      throw err;
    }
  }
}
