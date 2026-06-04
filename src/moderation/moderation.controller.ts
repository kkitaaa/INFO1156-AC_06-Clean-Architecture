import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { CreateProhibitedWordDto } from "@/moderation/moderation.dtos"
import { FindAllProhibitedWordsUseCase } from "@/application/use-cases/moderation/find-all-prohibited-words.use-case"
import { CreateProhibitedWordUseCase } from "@/application/use-cases/moderation/create-prohibited-word.use-case"
import { DeleteProhibitedWordUseCase } from "@/application/use-cases/moderation/delete-prohibited-word.use-case"

@Controller("api/admin/prohibited-words")
export class ModerationController {
    constructor(
        private readonly findAllProhibitedWordsUseCase: FindAllProhibitedWordsUseCase,
        private readonly createProhibitedWordUseCase: CreateProhibitedWordUseCase,
        private readonly deleteProhibitedWordUseCase: DeleteProhibitedWordUseCase
    ) {}

    @Get()
    findAll() {
        return this.findAllProhibitedWordsUseCase.execute()
    }

    @Post()
    create(@Body() body: CreateProhibitedWordDto) {
        return this.createProhibitedWordUseCase.execute(body.word, body.category)
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.deleteProhibitedWordUseCase.execute(id)
    }
}