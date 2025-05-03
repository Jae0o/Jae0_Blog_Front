import { PostCategory, PostData } from "@/lib/types";

export interface GetAllPostsRequest {
  cursor?: string;
}
export interface GetAllPostsResponse {
  posts: PostData[];
}

export interface GetPostListRequest {
  category: PostCategory;
}
export interface GetPostListResponse {
  posts: PostData[];
}

export interface GetPostRequest {
  postId: string;
}

export interface GetPostResponse {
  post: PostData;
}
