import { Module } from "@nestjs/common"
import { CategoriesController } from "@/categories/categories.controller"
import { CategoriesService } from "@/categories/categories.service"
import { FindAllCategoriesUseCase } from "@/application/use-cases/categories/find-all-categories.use-case"
import { PrismaCategoryRepository } from "@/infrastructure/repositories/PrismaCategoryRepository"

@Module({
    controllers: [CategoriesController],
    providers: [
        CategoriesService,
        FindAllCategoriesUseCase, 
        {
            provide: "CategoryRepository", 
            useClass: PrismaCategoryRepository,
        }
    ],
})
export class CategoriesModule {}