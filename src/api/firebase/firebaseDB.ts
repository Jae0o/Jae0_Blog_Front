import { get, ref, set } from "firebase/database";

import { PostData } from "@/types/original";

import { database } from "./firebase";

/* ============== Options ============== */
export interface SetOptions {
  option: string;
  value: string;
}
export const setOptions = async ({ option, value }: SetOptions) => {
  await set(ref(database, `${option}/${value}`), value).catch(() => {
    throw Error(`set options ${option} Error`);
  });
};

type GetOptions = (optionsType: string) => Promise<string[]>;

export const getOptions: GetOptions = async optionsType => {
  return await get(ref(database, optionsType))
    .then(res => {
      if (res.exists()) {
        const fetchedOptions: string[] = Object.values(res.val());
        return fetchedOptions;
      }

      throw new Error("getOption Error");
    })
    .catch(() => {
      throw new Error("getOption Error");
    });
};

/* =============== POST =============== */

type SetPost = (post: PostData) => Promise<void>;

export const setPost: SetPost = async post => {
  const time = JSON.stringify(new Date());

  if (!post.createAt) {
    post.createAt = time;
  }

  post.updateAt = time;

  await set(ref(database, `Posts/${post.category}/${post.id}`), post).catch(
    () => {
      throw new Error("set post Error");
    },
  );
};

type GetPostsList = (category: string) => Promise<PostData[]>;

export const getPostsList: GetPostsList = async category => {
  return await get(ref(database, `Posts/${category}`))
    .then(res => {
      if (res.exists()) {
        const fetchedList: PostData[] = Object.values(res.val());
        return fetchedList;
      }
      throw new Error("get posts list Error");
    })
    .catch(() => {
      throw new Error("get posts list Error");
    });
};

export interface ResponsePostsList {
  [key: string]: { [key: string]: PostData };
}
type GetAllPostsList = () => Promise<ResponsePostsList>;

export const getAllPostsList: GetAllPostsList = async () => {
  return await get(ref(database, `Posts/`))
    .then(res => {
      if (res.exists()) {
        return res.val();
      }
      throw new Error("get all post list Error");
    })
    .catch(() => {
      throw new Error("get all post list Error");
    });
};

type GetPost = (category: string, postId: string) => Promise<PostData>;

export const getPost: GetPost = async (category, postId) => {
  return await get(ref(database, `Posts/${category}/${postId}`))
    .then(res => {
      if (res.exists()) {
        return res.val();
      }

      throw new Error("get post Error");
    })
    .catch(() => {
      throw new Error("get post Error");
    });
};

export interface DeletePost {
  postCategory: string;
  postId: string;
}
export const deletePost = async ({ postCategory, postId }: DeletePost) => {
  await set(ref(database, `Posts/${postCategory}/${postId}`), null).catch(
    () => {
      throw new Error("delete post Error");
    },
  );
};
