import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { CreateCommentDto } from "@/posts/posts.dtos"
import { CreateCommentUseCase } from "@/application/use-cases/comments/create-comment.use-case"
import { ListCommentsUseCase } from "@/application/use-cases/comments/list-comments.use-case"

@Controller("api/posts/:id/comments")
export class CommentsController {
    constructor(
        private readonly listCommentsUseCase: ListCommentsUseCase,
        private readonly createCommentUseCase: CreateCommentUseCase
    ) {}

    @Get()
    list(@Param("id") postId: string) {
        return this.listCommentsUseCase.execute(postId)
    }

    @Post()
    create(@Param("id") postId: string, @Body() body: CreateCommentDto) {
        return this.createCommentUseCase.execute(postId, body)
    }
}