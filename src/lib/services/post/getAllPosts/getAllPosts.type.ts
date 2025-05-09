import { PostData } from "@/lib/types";

export interface GetAllPostsRequest {
  cursor: string;
}
export interface GetAllPostsResponse {
  posts: PostData[];
}
