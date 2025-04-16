"use client";

import { useRouter } from "next/navigation";

import {
  CloseIcon,
  ExtendContentIcon,
  HorizontalRuleIcon,
} from "@/lib/components/server";

import { twMerge } from "tailwind-merge";

const BUTTON_STYLE =
  "w-[1.6rem] h-[1.6rem] rounded-full flex items-center justify-center bg-red_500";
const ICON_STYLE =
  "p-[0.2rem] fill-white_300 opacity-0 transition-opacity hover:opacity-100";

const TopDecorator = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[3.2rem] min-h-[3.2rem] px-[1.6rem] flex items-center gap-[0.8rem] bg-white_300">
      <button
        className={twMerge(BUTTON_STYLE, "bg-red_500")}
        onClick={() => router.back()}
      >
        <CloseIcon
          size="100%"
          className={ICON_STYLE}
        />
      </button>

      <button className={twMerge(BUTTON_STYLE, "bg-yellow_500")}>
        <HorizontalRuleIcon
          size="100%"
          className={ICON_STYLE}
        />
      </button>

      <button className={twMerge(BUTTON_STYLE, "bg-green_500")}>
        <ExtendContentIcon
          size="100%"
          className={ICON_STYLE}
        />
      </button>
    </div>
  );
};

export default TopDecorator;
