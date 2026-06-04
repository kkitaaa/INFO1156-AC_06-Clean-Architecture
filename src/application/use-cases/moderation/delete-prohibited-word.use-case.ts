import { Inject, Injectable } from "@nestjs/common"
import { ModerationRepository } from "@/domain/repositories/moderation.repository"

@Injectable()
export class DeleteProhibitedWordUseCase {
    constructor(
        @Inject("ModerationRepository")
        private readonly moderationRepository: ModerationRepository
    ) {}

    async execute(id: string): Promise<void> {
        await this.moderationRepository.removeWord(id)
    }
}