import { Injectable } from "@nestjs/common"
import { CreateCommentDto } from "@/posts/posts.dtos"
import { CreateCommentUseCase } from "@/application/use-cases/comments/create-comment.use-case"
import { ListCommentsUseCase } from "@/application/use-cases/comments/list-comments.use-case"

@Injectable()
export class CommentsService {
    constructor(
        private readonly createCommentUseCase: CreateCommentUseCase,
        private readonly listCommentsUseCase: ListCommentsUseCase,
    ) {}

    listByPostId(postId: string) {
        return this.listCommentsUseCase.execute(postId)
    }

    create(postId: string, data: CreateCommentDto) {
        return this.createCommentUseCase.execute(postId, data)
    }
}
