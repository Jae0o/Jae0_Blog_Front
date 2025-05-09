import { fetchApi } from "@/lib/api";

import { GetPostListRequest, GetPostListResponse } from "./getPostList.type";

const getPostList = async ({ category }: GetPostListRequest) => {
  const result = await fetchApi.get<GetPostListResponse>(
    `/post/list?category=${category}`,
  );

  return result.posts;
};

export default getPostList;
