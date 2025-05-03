import Image from "next/image";

import { PostDetailBannerProps } from "./PostDetailBanner.type";

import { twMerge } from "tailwind-merge";

const PostDetailBanner = ({ thumbnail, title }: PostDetailBannerProps) => {
  return (
    <article
      className={twMerge(
        "w-full h-[50rem] flex items-center justify-center select-none overflow-hidden relative bg-white_500",
        "mobile:h-[20rem]",
      )}
    >
      <span
        className={twMerge(
          "w-[80%] h-[65%] min-w-[40rem] p-[4rem] rounded-[1.6rem] flex flex-col items-center justify-center bg-transparent_70 z-10",
          "mobile:w-full mobile:h-full mobile:p-[2rem] mobile:min-w-0 mobile:rounded-[0rem]",
        )}
      >
        <h2 className="text-semiBig font-semiBold text-white_500 break-keep">
          {title}
        </h2>
      </span>

      <Image
        sizes="100%"
        fill
        src={thumbnail}
        className="object-cover"
        alt={`Post thumbnail for ${title}`}
      />
    </article>
  );
};

export default PostDetailBanner;
