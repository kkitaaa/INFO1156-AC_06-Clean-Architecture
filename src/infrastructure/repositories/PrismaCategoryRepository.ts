import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "@/domain/repositories/category.repository";
import { Category } from "@/domain/entities/category.entity";
import { PrismaService } from "@/infrastructure/prisma.service";

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findById(id: string): Promise<Category | null> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async findBySlug(slug: string): Promise<Category | null> {
    return this.prisma.category.findUnique({ where: { slug } });
  }

  async create(category: Category): Promise<Category> {
    return this.prisma.category.create({ data: category });
  }
}
