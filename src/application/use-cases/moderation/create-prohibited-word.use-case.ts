import { Inject, Injectable } from "@nestjs/common"
import { ModerationRepository } from "@/domain/repositories/moderation.repository"
import { ProhibitedWord } from "@/domain/entities/prohibited-word.entity"

@Injectable()
export class CreateProhibitedWordUseCase {
    constructor(
        @Inject("ModerationRepository")
        private readonly moderationRepository: ModerationRepository
    ) {}

    async execute(word: string, category: string): Promise<ProhibitedWord> {
        // Adaptar esto según cómo esté definida tu entidad ProhibitedWord
        const newWord = { word, category } as ProhibitedWord; 
        return this.moderationRepository.addWord(newWord)
    }
}