import { Inject, Injectable } from "@nestjs/common"
import { ModerationRepository } from "@/domain/repositories/moderation.repository"
import { ProhibitedWord } from "@/domain/entities/prohibited-word.entity"

@Injectable()
export class FindAllProhibitedWordsUseCase {
    constructor(
        @Inject("ModerationRepository")
        private readonly moderationRepository: ModerationRepository
    ) {}

    async execute(): Promise<ProhibitedWord[]> {
        return this.moderationRepository.findAllWords()
    }
}