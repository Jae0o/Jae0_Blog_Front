"use client";

import { useRouter } from "next/navigation";

import Lottie from "react-lottie-player";

import { Button } from "@/lib/components/client";

import { LOTTIE_ANIMATION_404 } from "@/lib/assets";

import { useError } from "@/lib/hooks";

import { ROUTE_PATH } from "@/lib/constants";

import { GlobalErrorPageProps } from "./error.type";

import { twMerge } from "tailwind-merge";

const GlobalErrorPage = ({ error, reset }: GlobalErrorPageProps) => {
  const { message } = useError({ error });

  const router = useRouter();

  const buttonStyle =
    "w-[90%] rounded-[10rem] text-[1.8rem] font-bold text-white_500";

  return (
    <section className="w-full h-full flex flex-col bg-yellow_500 items-center justify-center select-none">
      <div className="w-full max-w-[44rem] p-[2rem] bg-white_500 border-2 flex flex-col gap-[1.8rem] items-center rounded-[2rem] border-yellow_500 break-keep text-center">
        <Lottie
          animationData={LOTTIE_ANIMATION_404}
          className="w-full"
          play
          loop
        />

        <p className="text-[3rem] font-semibold bg-[#ffffff90] px-[2rem] py-[0.2rem] rounded-[5rem]">
          {message}
        </p>

        <p className="text-[1.8rem] text-gray_400 bg-[#ffffff90] px-[1.2rem] py-[0.2rem] rounded-[5rem]">
          잠시 후에 다시 시도해주세요.
        </p>

        <Button
          onClick={reset}
          className={twMerge(buttonStyle, "bg-yellow_500")}
        >
          다시 시도
        </Button>

        <Button
          onClick={() => router.push(ROUTE_PATH.HOME)}
          className={twMerge(buttonStyle, "bg-gray_500")}
        >
          홈으로 이동
        </Button>
      </div>
    </section>
  );
};

export default GlobalErrorPage;
