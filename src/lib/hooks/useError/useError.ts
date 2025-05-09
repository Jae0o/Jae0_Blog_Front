import { useMemo } from "react";

import { makeBlogError } from "@/lib/utils";

import { BlogError } from "@/lib/types";

import { useErrorParams } from "./useError.type";

const useError = ({ error }: useErrorParams) => {
  // TODO : Snackbar Error handle

  return useMemo(() => {
    const blogError: BlogError = JSON.parse(error.message);

    if (!error.message || !blogError.code) {
      return makeBlogError({ code: 404 });
    }

    console.error(
      `책풀에 문제가 발생했어요! 관리자에게 문의해주세요. (문의 코드 : ${blogError.code})`,
    );

    return blogError;
  }, [error.message]);
};

export default useError;
