export interface CreatePostData {
  title: string;
  description: string;
  imageUrl: string;
  categoryId?: string | null;
}