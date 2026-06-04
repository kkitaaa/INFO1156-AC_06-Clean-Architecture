import { Injectable } from "@nestjs/common"
import { PrismaService } from "@/infrastructure/prisma.service"

@Injectable()
export class FindPostsUseCase {
    constructor(private readonly prisma: PrismaService) {}

    execute() {
        return this.prisma.post.findMany({
            orderBy: { createdAt: "desc" },
        })
    }

    findById(id: string) {
        return this.prisma.post.findUnique({ where: { id } })
    }
}
