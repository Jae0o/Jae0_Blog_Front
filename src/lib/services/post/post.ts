import { fetchApi } from "@/lib/api";

import {
  GetAllPostsRequest,
  GetAllPostsResponse,
  GetPostListRequest,
  GetPostListResponse,
} from "./post.type";

export const getAllPosts = async ({ cursor }: GetAllPostsRequest) => {
  const res = await fetchApi(`/post/all?cursor=${cursor ?? ""}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const result: GetAllPostsResponse = await res.json();

  return result.posts;
};

export const getPostList = async ({ category }: GetPostListRequest) => {
  const res = await fetchApi(`/post/list?category=${category}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const result: GetPostListResponse = await res.json();

  return result.posts;
};
