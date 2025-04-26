import { PostListPageProps } from "./PostListPage.type";
import { PostListBanner } from "./_components";

const PostListPage = async ({ params }: PostListPageProps) => {
  const { category } = await params;

  return (
    <div>
      <PostListBanner category={category} />
    </div>
  );
};

export default PostListPage;
