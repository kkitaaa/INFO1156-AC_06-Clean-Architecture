import { Inject, Injectable } from "@nestjs/common"
import { CategoryRepository } from "@/domain/repositories/category.repository"
import { Category } from "@/domain/entities/category.entity"

@Injectable()
export class FindAllCategoriesUseCase {
    constructor(
        @Inject("CategoryRepository")
        private readonly categoryRepository: CategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        return this.categoryRepository.findAll()
    }
}