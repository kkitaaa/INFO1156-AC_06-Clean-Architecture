import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateCommentDto } from "@/posts/posts.dtos"
import { ModerationService } from "@/moderation/moderation.service"
import { PrismaService } from "@/infrastructure/prisma.service"
import { PostsService } from "@/posts/posts.service"

@Injectable()
export class CreateCommentUseCase {
    constructor(
        private readonly postsService: PostsService,
        private readonly prisma: PrismaService,
        private readonly moderationService: ModerationService,
    ) {}

    async execute(postId: string, data: CreateCommentDto) {
        const post = await this.postsService.findById(postId)
        if (!post) {
            throw new NotFoundException("Post no encontrado")
        }

        const moderation = await this.moderationService.moderate(data.content)
        if (!moderation.approved) {
            throw new BadRequestException(
                moderation.reason ?? "Comentario bloqueado por moderación",
            )
        }

        return this.prisma.comment.create({
            data: {
                postId,
                content: data.content,
                source: "comments-module",
            },
        })
    }
}
