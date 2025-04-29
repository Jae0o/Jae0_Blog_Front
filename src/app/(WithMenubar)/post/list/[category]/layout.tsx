import { PropsWithChildren } from "react";

import { getStaticMeta } from "@/lib/utils";

import { PostListPageProps } from "./PostListPage.type";

export const generateMetadata = async ({ params }: PostListPageProps) => {
  const { category } = await params;

  return getStaticMeta(category);
};

const PostListLayout = ({ children }: PropsWithChildren) => {
  return children;
};

export default PostListLayout;
