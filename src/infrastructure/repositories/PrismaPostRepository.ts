import { Injectable } from "@nestjs/common";
import { PostRepository } from "@/domain/repositories/post.repository";
import { Post } from "@/domain/entities/post.entity";
import { CreatePostData } from "@/domain/dtos/create-post-data";
import { PrismaService } from "@/infrastructure/prisma.service";

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async findById(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async create(data: CreatePostData): Promise<Post> {
    return this.prisma.post.create({ data });
  }
}
