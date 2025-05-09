import { PostData } from "@/lib/types";

export interface GetPostRequest {
  postId: string;
}

export interface GetPostResponse {
  post: PostData;
}
