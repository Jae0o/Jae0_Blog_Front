import Image from "next/image";
import Link from "next/link";

import { convertDateFormat } from "@/lib/utils";

import { ROUTE_PATH } from "@/lib/constants";

import { PostItemProps } from "./PostItem.type";

import { twMerge } from "tailwind-merge";

const PostItem = ({ post }: PostItemProps) => {
  const commonLabelStyle =
    "w-fit px-[1rem] py-[0.2rem] flex items-center rounded-[3rem] text-medium font-semiBold whitespace-nowrap";

  return (
    <li
      className={twMerge(
        "w-full min-h-[14rem] flex overflow-hidden",
        "mobile:h-fit mobile:min-h-[30rem]",
      )}
    >
      <Link
        className={twMerge(
          "w-full h-full px-[2rem] py-[1rem] flex items-center gap-[1rem] rounded-[1.2rem] select-none overflow-hidden transition-transform",
          "mobile:flex-col mobile:items-center mobile:justify-center",
          "hover:scale-[1.02]",
        )}
        href={ROUTE_PATH.POST_DETAIL(post.id)}
      >
        <span
          className={twMerge(
            "w-[16rem] min-w-[16rem] h-[12rem] min-h-[12rem] relative rounded-[1.2rem] shadow-small bg-white",
            "mobile:w-[20rem] mobile:min-w-[]20rem] mobile:h-[15rem] mobile:min-h-[15rem]",
          )}
        >
          <Image
            src={post.thumbnail}
            sizes="100%"
            fill
            className="object-cover rounded-[1.2rem]"
            alt={`Post Thumbnail for ${post.title}`}
          />

          <p className="h-[1.6rem] px-[0.6rem] absolute top-[1rem] left-[-1rem] rounded-[1.2rem] flex items-center bg-yellow_500 text-semiSmall font-bold shadow-medium">
            {convertDateFormat(post.createAt)}
          </p>
        </span>

        <span
          className={twMerge(
            "grow-[1] h-full flex flex-col justify-center gap-[1.2rem] overflow-hidden",
            "mobile:w-full mobile:h-fit mobile:py-[1.4rem] mobile:px-0",
          )}
        >
          <h2 className="w-full h-[3.2rem] flex items-center text-semiBig font-semiBold overflow-scroll text-ellipsis scrollbar-hide whitespace-nowrap">
            {post.title}
          </h2>

          <p className={twMerge(commonLabelStyle, "bg-yellow_500")}>
            {post.category}
          </p>

          <ul className="w-full h-fit flex items-center gap-[0.6rem]">
            {post.tag.map(tag => (
              <li
                key={tag}
                className={twMerge(commonLabelStyle, "bg-green_500")}
              >
                {tag}
              </li>
            ))}
          </ul>
        </span>
      </Link>
    </li>
  );
};

export default PostItem;
