export class Comment {
  constructor(
    public readonly id: string,
    public readonly postId: string,
    public content: string,
    public source: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}