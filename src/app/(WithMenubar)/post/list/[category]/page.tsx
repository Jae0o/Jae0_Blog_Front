import { PostListProps } from "./PostList.type";
import { PostListBanner } from "./_components";

const PostListPage = async ({ params }: PostListProps) => {
  const { category } = await params;

  return (
    <div>
      <PostListBanner category={category} />
    </div>
  );
};

export default PostListPage;
