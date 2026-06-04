import { Injectable } from "@nestjs/common"
import { AddLikeDto } from "@/posts/posts.dtos"
import { AddLikeUseCase } from "@/application/use-cases/likes/add-like.use-case"

@Injectable()
export class LikesService {
    constructor(private readonly addLikeUseCase: AddLikeUseCase) {}

    create(postId: string, data: AddLikeDto) {
        return this.addLikeUseCase.execute(postId, data)
    }
}
