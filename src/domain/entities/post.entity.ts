export class Post {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public categoryId: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}