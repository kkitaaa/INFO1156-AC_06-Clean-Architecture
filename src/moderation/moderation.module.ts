import { Module } from "@nestjs/common"
import { ModerationController } from "./moderation.controller"
import { PrismaModerationRepository } from "@/infrastructure/repositories/PrismaModerationRepository"
import { FindAllProhibitedWordsUseCase } from "@/application/use-cases/moderation/find-all-prohibited-words.use-case"
import { CreateProhibitedWordUseCase } from "@/application/use-cases/moderation/create-prohibited-word.use-case"
import { DeleteProhibitedWordUseCase } from "@/application/use-cases/moderation/delete-prohibited-word.use-case"
import { ModerationService } from "./moderation.service" 

@Module({
    controllers: [ModerationController],
    providers: [
        {
            provide: "ModerationRepository",
            useClass: PrismaModerationRepository,
        },
        FindAllProhibitedWordsUseCase,
        CreateProhibitedWordUseCase,
        DeleteProhibitedWordUseCase,
        ModerationService, 
    ],
    exports: [
        ModerationService, 
    ]
})
export class ModerationModule {}