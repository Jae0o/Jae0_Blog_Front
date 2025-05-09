import { fetchApi } from "@/lib/api";

import { GetPostRequest, GetPostResponse } from "./getPost.type";

const getPost = async ({ postId }: GetPostRequest) => {
  const result = await fetchApi.get<GetPostResponse>(`/post?postId=${postId}`);

  return result.post;
};

export default getPost;
