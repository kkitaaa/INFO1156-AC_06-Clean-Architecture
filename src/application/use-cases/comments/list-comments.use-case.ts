import { Injectable, NotFoundException } from "@nestjs/common"
import { PostsService } from "@/posts/posts.service"
import { PrismaService } from "@/infrastructure/prisma.service"

@Injectable()
export class ListCommentsUseCase {
    constructor(
        private readonly postsService: PostsService,
        private readonly prisma: PrismaService,
    ) {}

    async execute(postId: string) {
        const post = await this.postsService.findById(postId)
        if (!post) {
            throw new NotFoundException("Post no encontrado")
        }

        const comments = await this.prisma.comment.findMany({
            where: { postId },
            orderBy: { createdAt: "desc" },
        })

        return {
            total_comments: comments.length,
            comments,
        }
    }
}
