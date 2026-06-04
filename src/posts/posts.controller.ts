import { Body, Controller, Get, Post, Query } from "@nestjs/common"

import { CreatePostUseCase } from "@/application/use-cases/posts/create-post.use-case"
import { FindPostsUseCase } from "@/application/use-cases/posts/find-posts.use-case"
import { GetFeedUseCase } from "@/application/use-cases/posts/get-feed.use-case"
import { FeedRankingStrategyFactory } from "@/application/feed-ranking.strategy"
import { CreatePostDto, FeedQueryDto } from "@/posts/posts.dtos"

@Controller("api/posts")
export class PostsController {
    constructor(
        private readonly createPostUseCase: CreatePostUseCase,
        private readonly findPostsUseCase: FindPostsUseCase,
        private readonly getFeedUseCase: GetFeedUseCase,
        private readonly feedRankingFactory: FeedRankingStrategyFactory,
    ) {}

    @Post()
    async create(@Body() body: CreatePostDto) {
        const created = await this.createPostUseCase.execute(body)

        return {
            ok: true,
            payload: created,
        }
    }

    @Get()
    async findAll() {
        const posts = await this.findPostsUseCase.execute()

        return {
            total: posts.length,
            items: posts,
        }
    }

    @Get("feed")
    async getFeed(@Query() query: FeedQueryDto) {
        const mode = query.mode ?? "latest"
        const feedPosts = await this.getFeedUseCase.execute(query.categoryId)
        const rankedPosts = this.feedRankingFactory
            .forMode(mode)
            .rank(feedPosts)

        return {
            mode,
            count: rankedPosts.length,
            rows: rankedPosts,
        }
    }
}
