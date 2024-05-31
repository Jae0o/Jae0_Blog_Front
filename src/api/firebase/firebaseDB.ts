import { get, ref, set } from "firebase/database";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { PostData } from "@/types/original";

import { database, fireStore } from "./firebase";

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

  await setDoc(doc(fireStore, "posts", post.id), post).catch(() => {
    throw new Error("set post Error");
  });
};

export const getPostsList = async ({ category }: { category: string }) => {
  const queryRef = query(
    collection(fireStore, "posts"),
    where("category", "==", category),
  );
  const res = await getDocs(queryRef);

  const result: PostData[] = [];

  res.forEach(doc => {
    if (doc.exists()) {
      result.push(doc.data() as PostData);
    }
  });

  return result;
};

export const getAllPostsList = async () => {
  const queryRef = query(collection(fireStore, "posts"));
  const res = await getDocs(queryRef).catch(() => {
    throw new Error("get all post list Error");
  });

  const result: PostData[] = [];

  res.forEach(doc => {
    if (doc.exists()) {
      result.push(doc.data() as PostData);
    }
  });

  return result;
};

export const getPost = async ({ postId }: { postId: string }) => {
  const storeRef = doc(fireStore, "posts", postId);
  const res = await getDoc(storeRef);

  if (res.exists()) {
    return res.data() as PostData;
  }

  throw new Error("get post Error");
};

export const deletePost = async ({ postId }: { postId: string }) => {
  await deleteDoc(doc(fireStore, "posts", postId));
};
