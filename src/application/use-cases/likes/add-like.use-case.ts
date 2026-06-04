import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { AddLikeDto } from "@/posts/posts.dtos"
import { PostsService } from "@/posts/posts.service"
import { PrismaService } from "@/infrastructure/prisma.service"

@Injectable()
export class AddLikeUseCase {
    constructor(
        private readonly postsService: PostsService,
        private readonly prisma: PrismaService,
    ) {}

    async execute(postId: string, data: AddLikeDto) {
        const post = await this.postsService.findById(postId)
        if (!post) {
            throw new NotFoundException("Post no encontrado")
        }

        const weight = data.weight ?? 1
        if (weight < 1) {
            throw new BadRequestException("El peso debe ser al menos 1")
        }

        return this.prisma.like.create({
            data: {
                postId,
                reactionType: data.reactionType ?? "like",
                weight,
                source: "likes-module",
            },
        })
    }
}
