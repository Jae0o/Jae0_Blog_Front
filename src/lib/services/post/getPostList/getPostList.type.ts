import { PostCategory, PostData } from "@/lib/types";

export interface GetPostListRequest {
  category: PostCategory;
}
export interface GetPostListResponse {
  posts: PostData[];
}
