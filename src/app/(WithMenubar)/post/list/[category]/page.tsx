import { PostListPageProps } from "./PostListPage.type";
import { PostListBanner } from "./_components";
import { PostList } from "./_containers";

const PostListPage = async ({ params }: PostListPageProps) => {
  const { category } = await params;

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <PostListBanner category={category} />

      <PostList category={category} />
    </div>
  );
};

export default PostListPage;
