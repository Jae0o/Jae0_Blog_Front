import { ERROR_MESSAGE } from "@/lib/constants";
import { BlogError } from "@/lib/types";

import { makeBlogErrorParams } from "./makeBlogError.type";

const makeBlogError = ({ code }: makeBlogErrorParams): BlogError => {
  return {
    timestamp: new Date(),
    code,
    message: ERROR_MESSAGE(code),
  };
};

export default makeBlogError;
