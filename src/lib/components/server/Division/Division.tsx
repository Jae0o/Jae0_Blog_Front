import { DivisionProps, DivisionType } from "./Division.type";

import { twMerge } from "tailwind-merge";

const Division = ({ type = "horizontal", className }: DivisionProps) => {
  const style: Record<DivisionType, string> = {
    horizontal: "w-full h-[0.4rem] rounded-[1rem] bg-yellow_500",
    vertical: "w-[0.4rem] h-full rounded-[1rem] bg-yellow_500",
  };

  return <hr className={twMerge(style[type], className)} />;
};

export default Division;
