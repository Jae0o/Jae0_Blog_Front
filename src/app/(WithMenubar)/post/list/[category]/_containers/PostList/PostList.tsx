import { getPostList } from "@/lib/services";

import { PostListProps } from "./PostList.type";
import { PostItem } from "./components";

const PostList = async ({ category }: PostListProps) => {
  const posts = await getPostList({ category });

  return (
    <article className="w-full grow-[1] overflow-auto">
      <ul className="w-full h-full py-[1rem] flex flex-col gap-[2rem] overflow-scroll">
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    </article>
  );
};

export default PostList;
