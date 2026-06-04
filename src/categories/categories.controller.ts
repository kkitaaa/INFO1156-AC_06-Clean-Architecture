import { Controller, Get } from "@nestjs/common"
import { FindAllCategoriesUseCase } from "@/application/use-cases/categories/find-all-categories.use-case"

@Controller("api/categories")
export class CategoriesController {
    constructor(private readonly findAllCategoriesUseCase: FindAllCategoriesUseCase) {}

    @Get()
    findAll() {
        return this.findAllCategoriesUseCase.execute()
    }
}