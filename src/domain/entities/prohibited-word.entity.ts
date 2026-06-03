export class ProhibitedWord {
  constructor(
    public readonly id: string,
    public word: string,
    public category: string,
    public readonly createdAt: Date,
  ) {}
}