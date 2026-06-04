import { Injectable } from "@nestjs/common";
import { LikeRepository } from "@/domain/repositories/like.repository";
import { Like } from "@/domain/entities/like.entity";
import { PrismaService } from "@/infrastructure/prisma.service";

@Injectable()
export class PrismaLikeRepository implements LikeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Like[]> {
    return this.prisma.like.findMany();
  }

  async findById(id: string): Promise<Like | null> {
    return this.prisma.like.findUnique({ where: { id } });
  }

  async findByPostId(postId: string): Promise<Like[]> {
    return this.prisma.like.findMany({ where: { postId } });
  }

  async create(like: Like): Promise<Like> {
    return this.prisma.like.create({ data: like });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.like.delete({ where: { id } });
  }
}
