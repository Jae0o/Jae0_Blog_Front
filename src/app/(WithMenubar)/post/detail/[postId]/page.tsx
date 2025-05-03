import { getPost } from "@/lib/services";

import { PostDetailPageProps } from "./PostDetailPage.type";

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { postId } = await params;

  const res = await getPost({ postId });

  console.log("Post Detail Page", res);

  return <div className="w-full h-full"></div>;
};

export default PostDetailPage;
