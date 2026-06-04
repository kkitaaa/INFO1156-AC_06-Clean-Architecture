import { Module } from "@nestjs/common"
import { LikesController } from "@/likes/likes.controller"
import { LikesService } from "@/likes/likes.service"
import { PostsModule } from "@/posts/posts.module"
import { AddLikeUseCase } from "@/application/use-cases/likes/add-like.use-case"

@Module({
    imports: [PostsModule],
    controllers: [LikesController],
    providers: [LikesService, AddLikeUseCase],
})
export class LikesModule {}
