import { getPost } from "@/lib/services";

import { PostDetailPageProps } from "./PostDetailPage.type";
import { PostDetailBanner } from "./_components";

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { postId } = await params;

  const post = await getPost({ postId });

  return (
    <div className="w-full h-full">
      <PostDetailBanner
        thumbnail={post.thumbnail}
        title={post.title}
      />
    </div>
  );
};

export default PostDetailPage;
