import { Module } from "@nestjs/common"
import { CommentsController } from "@/comments/comments.controller"
import { CommentsService } from "@/comments/comments.service"
import { ModerationModule } from "@/moderation/moderation.module"
import { PostsModule } from "@/posts/posts.module"
import { CreateCommentUseCase } from "@/application/use-cases/comments/create-comment.use-case"
import { ListCommentsUseCase } from "@/application/use-cases/comments/list-comments.use-case"

@Module({
    imports: [PostsModule, ModerationModule],
    controllers: [CommentsController],
    providers: [CommentsService, CreateCommentUseCase, ListCommentsUseCase],
})
export class CommentsModule {}
