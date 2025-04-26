import { StaticImageData } from "next/image";

import { PostCategory } from "@/lib/types";

import {
  BLOG_BANNER_IMAGE,
  DIARY_BANNER_IMAGE,
  FRONTEND_BANNER_IMAGE,
  MASILGASIL_BANNER_IMAGE,
  YAP_BANNER_IMAGE,
} from "../../_assets";

export const POST_LIST_BANNER: Record<PostCategory, StaticImageData> = {
  BLOG: BLOG_BANNER_IMAGE,
  YAP: YAP_BANNER_IMAGE,
  MASILGASIL: MASILGASIL_BANNER_IMAGE,
  DIARY: DIARY_BANNER_IMAGE,
  FRONTEND: FRONTEND_BANNER_IMAGE,
};
