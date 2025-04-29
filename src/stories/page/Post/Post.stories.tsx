import PostLayout from "@/app/(WithMenubar)/post/layout";
import { TanstackProvider } from "@/app/_components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Post Page
 *
 * Post Route에서 사용되어지는 페이지입니다. <br>
 *
 * Post 관련 페이지(PostList, PostDetail)는 기본적으로 PostLayout을 사용하여 디자인을 통일합니다. <br>
 *
 * PostLayout 내부에서 <br>
 *
 * - TopDecorator
 *
 * 각 컴포넌트를 사용합니다. <br>
 *
 * */
const meta = {
  title: "Page/Post",
  component: PostLayout,
  parameters: {
    layout: "centered",
  },

  decorators: [
    Storybook => (
      <TanstackProvider>
        <div className="w-[100rem] h-[60rem]">
          <Storybook />
        </div>
      </TanstackProvider>
    ),
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof PostLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Post_Layout: Story = {};
