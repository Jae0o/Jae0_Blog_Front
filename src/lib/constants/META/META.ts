const META_SITE_NAME = "Jae0's Blog";

const META_COMMON_IMAGE = new URL(
  "https://res.cloudinary.com/dya70nmfp/image/upload/v1720707563/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.13.25_lc13ib.png",
);
const META_COMMON_KEYWORDS = [
  "frontend",
  "프론트엔드",
  "dev",
  "developer",
  "개발자",
  "develop",
  "개발",
  "react",
  "리액트",
  "javascript",
  "자바스크립트",
  "typescript",
  "타입스크립트",
  "next",
  "next.js",
  "넥스트",
  "css",
  "masilgasil",
  "마실가실",
  "Project",
  "프로젝트",
  "개인프로젝트",
  "blog",
  "블로그",
];

const CREATOR = "Jae0";
const BASE_URL = new URL("https://www.jae0.co.kr/");

export const STATIC_META_DATA = {
  HOME: {
    title: META_SITE_NAME,
    description:
      "FrontEnd 개발자의 나만의 도화지 Blog! 프론트엔드 개발자 이재영",
    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
    creator: CREATOR,
    url: BASE_URL,
  },

  BLOG: {
    title: `나만의 도화지 Blog 제작기 - ${META_SITE_NAME}`,

    description: "나만의 도화지 Jae0's Blog 제작 과정을 공유하는 공간",
    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
    creator: CREATOR,
    url: BASE_URL,
  },

  MASILGASIL: {
    title: `새로운 산책하러 마실가실? - ${META_SITE_NAME}`,

    description:
      "산택 경로 공유 서비스 '마실가실 MasilGasil의 제작과정에 대한 기록을 공유하는 공간",

    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
    creator: CREATOR,
    url: BASE_URL,
  },

  YAP: {
    title: `나만의 도화지 Blog 제작기 - ${META_SITE_NAME}`,

    description:
      "음악 공유 서비스 `Yap`의 제작과정에 대한 기록을 공유하는 공간",
    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
    creator: CREATOR,
    url: BASE_URL,
  },

  DIARY: {
    title: `나만의 도화지 Blog 제작기 - ${META_SITE_NAME}`,

    description: "프로젝트 과정에서 느낀 나의 감정을 공유하는 회고 창고",
    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
    creator: CREATOR,
    url: BASE_URL,
  },

  FRONTEND: {
    title: `나만의 도화지 Blog 제작기 - ${META_SITE_NAME}`,

    description: "Frontend 개발자로서의 나의 경험과 지식을 공유하는 공간",
    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
    creator: CREATOR,
    url: BASE_URL,
  },
};

export type StaticMetaKey = keyof typeof STATIC_META_DATA;
