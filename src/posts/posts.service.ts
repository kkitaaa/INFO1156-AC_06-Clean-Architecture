import { Injectable } from "@nestjs/common"
import { CreatePostDto } from "@/posts/posts.dtos"
import { CreatePostUseCase } from "@/application/use-cases/posts/create-post.use-case"
import { FindPostsUseCase } from "@/application/use-cases/posts/find-posts.use-case"
import { GetFeedUseCase } from "@/application/use-cases/posts/get-feed.use-case"

@Injectable()
export class PostsService {
    constructor(
        private readonly createPostUseCase: CreatePostUseCase,
        private readonly findPostsUseCase: FindPostsUseCase,
        private readonly getFeedUseCase: GetFeedUseCase,
    ) {}

    create(data: CreatePostDto) {
        return this.createPostUseCase.execute(data)
    }

    findAll() {
        return this.findPostsUseCase.execute()
    }

    findById(id: string) {
        return this.findPostsUseCase.findById(id)
    }

    getFeedPosts(categoryId?: string) {
        return this.getFeedUseCase.execute(categoryId)
    }
}
