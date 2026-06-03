export class Like {
  constructor(
    public readonly id: string,
    public readonly postId: string,
    public reactionType: string,
    public weight: number,
    public source: string,
    public readonly createdAt: Date,
  ) {}
}