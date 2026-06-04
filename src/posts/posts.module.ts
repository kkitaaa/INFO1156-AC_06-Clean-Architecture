import { Module } from "@nestjs/common"
import { ModerationModule } from "@/moderation/moderation.module"
import { PostsController } from "@/posts/posts.controller"
import { PostsService } from "@/posts/posts.service"
import { CreatePostUseCase } from "@/application/use-cases/posts/create-post.use-case"
import { FindPostsUseCase } from "@/application/use-cases/posts/find-posts.use-case"
import { GetFeedUseCase } from "@/application/use-cases/posts/get-feed.use-case"
import { FeedRankingStrategyFactory } from "@/application/feed-ranking.strategy"

@Module({
    imports: [ModerationModule],
    controllers: [PostsController],
    providers: [
        PostsService,
        CreatePostUseCase,
        FindPostsUseCase,
        GetFeedUseCase,
        FeedRankingStrategyFactory,
    ],
    exports: [PostsService],
})
export class PostsModule {}
