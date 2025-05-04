import { convertDateFormat } from "@/lib/utils";

import { PostInfoProps } from "./PostInfo.type";

import { twMerge } from "tailwind-merge";

const PostInfo = ({ createAt, updateAt, category, tags }: PostInfoProps) => {
  const commonLabelStyle =
    "w-fit px-[1rem] py-[0.2rem] flex items-center rounded-[3rem] text-medium font-semiBold whitespace-nowrap";

  return (
    <article className="w-full flex justify-between">
      <span className="flex flex-col gap-[1rem] text-[1.4rem] font-semiBold">
        <p>{`Create At - ${convertDateFormat(createAt)}`}</p>
        <p>{`Update At - ${convertDateFormat(updateAt)}`}</p>

        <p className={twMerge(commonLabelStyle, "bg-yellow_500")}>{category}</p>

        <ul className="w-full h-fit flex items-center gap-[0.6rem]">
          {tags.map(tag => (
            <li
              key={tag}
              className={twMerge(commonLabelStyle, "bg-green_500")}
            >
              {tag}
            </li>
          ))}
        </ul>
      </span>
    </article>
  );
};

export default PostInfo;
