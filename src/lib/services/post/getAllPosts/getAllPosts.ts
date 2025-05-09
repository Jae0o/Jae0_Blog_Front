import { fetchApi } from "@/lib/api";

import { GetAllPostsRequest, GetAllPostsResponse } from "./getAllPosts.type";

const getAllPosts = async ({ cursor }: GetAllPostsRequest) => {
  const result = await fetchApi.get<GetAllPostsResponse>(
    `/post/all?cursor=${cursor ?? "first"}`,
  );

  return result.posts;
};

export default getAllPosts;
