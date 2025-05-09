import { PostCategory } from "@/lib/types/Post/Post.type";

type PostListParams = Promise<{ category: PostCategory }>;

export interface PostListPageProps {
  params: PostListParams;
}
