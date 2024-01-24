import { useState, createContext, useEffect } from "react";
import { getOptions } from "../API/FirebaseDB";
import { ContextProps, TagListContext, UpdateContext } from "./Context.Types";

export const ContextTagList = createContext<TagListContext>({
  tagList: [],
  updateTagList: () => {},
});

export const ContextTagListProvider = ({
  children,
}: ContextProps): React.ReactNode => {
  const [tagList, setTagList] = useState<string[]>([]);

  const updateTagList: UpdateContext = async () => {
    const newOptions = await getOptions("tag");

    if (!newOptions) {
      // 실패에 대한 알림
      return;
    }

    setTagList(newOptions);
  };

  useEffect(() => {
    updateTagList();
  }, []);

  return (
    <ContextTagList.Provider value={{ tagList, updateTagList }}>
      {children}
    </ContextTagList.Provider>
  );
};
