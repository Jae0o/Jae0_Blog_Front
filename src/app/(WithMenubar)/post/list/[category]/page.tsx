import { PostListProps } from "./PostListPage.type";
import { PostListBanner } from "./_components";
import { PostList } from "./_containers";

const PostListPage = async ({ params }: PostListProps) => {
  const { category } = await params;

  return (
    <div>
      <PostListBanner category={category} />

      <PostList />
    </div>
  );
};

export default PostListPage;
