import Image from "next/image";

import { POST_LIST_BANNER } from "../../_constants";
import { PostListBannerProps } from "./PostListBanner.type";

const PostListBanner = ({ category }: PostListBannerProps) => {
  return (
    <article className="w-full h-[30rem]">
      <Image
        className="w-full h-full object-cover"
        src={POST_LIST_BANNER[category]}
        alt="Post List Banner"
      />
    </article>
  );
};

export default PostListBanner;
