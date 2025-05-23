const DEFAULT_ERROR_MESSAGE = "불러오는 과정에서 문제가 발생했어요!";

const INVALID_MESSAGE = "찾을 수 없는 정보였어요..";

export const ERROR_MESSAGE = (code: number) => {
  switch (code) {
    case 202002:
      return INVALID_MESSAGE;
    case 501002:
      return INVALID_MESSAGE;

    case 201001 | 202001 | 203001 | 501001:
      return DEFAULT_ERROR_MESSAGE;

    default:
      return DEFAULT_ERROR_MESSAGE;
  }
};
