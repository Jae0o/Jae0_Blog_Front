import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ContextAuthUserProvider } from "./Context/ContextAuthUser";
import { ContextCategoryListProvider } from "./Context/ContextCategory";
import { ContextIsLoadingProvider } from "./Context/ContextIsLoading";
import { ContextPostsProvider } from "./Context/ContextPosts";
import { ContextTagListProvider } from "./Context/ContextTagList";

const Edit = React.lazy(() => import("./Pages/Edit/Edit"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Post = React.lazy(() => import("./Pages/Post/Post"));
const PostDetail = React.lazy(
  () => import("./Pages/Post/components/PostDetail/PostDetail"),
);
const PostList = React.lazy(
  () => import("./Pages/Post/components/PostList/PostList"),
);
const Root = React.lazy(() => import("./Root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>임시 에러창</h1>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/editor/:category/:id",
        element: <Edit />,
      },
      {
        path: "/post",
        element: <Post />,
        children: [
          { path: "/post/list/:category", element: <PostList /> },
          { path: "/post/detail/:category/:id", element: <PostDetail /> },
        ],
      },
    ],
  },
]);

const App = (): React.ReactNode => {
  return (
    <ContextAuthUserProvider>
      <ContextIsLoadingProvider>
        <ContextPostsProvider>
          <ContextTagListProvider>
            <ContextCategoryListProvider>
              <RouterProvider router={router} />
              <div id="modal" />
            </ContextCategoryListProvider>
          </ContextTagListProvider>
        </ContextPostsProvider>
      </ContextIsLoadingProvider>
    </ContextAuthUserProvider>
  );
};

export default App;
