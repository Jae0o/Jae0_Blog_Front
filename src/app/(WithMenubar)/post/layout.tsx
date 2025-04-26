import { PropsWithChildren } from "react";

import { TopDecorator } from "./_components";

import { twMerge } from "tailwind-merge";

const PostLayout = ({ children }: PropsWithChildren) => {
  return (
    <section
      className={twMerge(
        "w-full h-full px-[4rem] py-[1rem] flex items-center justify-center",
        "tablet:p-[1rem]",
      )}
    >
      <div className="w-full max-w-[120rem] h-full flex flex-col border-2 rounded-[1.2rem] shadow-medium">
        <TopDecorator />
        {children}
      </div>
    </section>
  );
};

export default PostLayout;
