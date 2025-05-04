import { Division } from "@/lib/components/server";

import { getPost } from "@/lib/services";

import { PostDetailPageProps } from "./PostDetailPage.type";
import { PostDetailBanner, PostInfo } from "./_components";

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { postId } = await params;

  const post = await getPost({ postId });

  return (
    <div className="w-full h-full flex flex-col gap-[1rem]">
      <PostDetailBanner
        thumbnail={post.thumbnail}
        title={post.title}
      />

      <div className="w-full px-[2rem] flex flex-col gap-[1rem]">
        <Division />

        <PostInfo
          category={post.category}
          tags={post.tag}
          createAt={post.createAt}
          updateAt={post.updateAt}
        />

        <Division />
      </div>
    </div>
  );
};

export default PostDetailPage;
