import React from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Store from "./Redux/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchScreen from "./components/SearchScreen";

import VideoList from "./components/VideoList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "/search/:query",
        element: <SearchScreen />,
      },
      {
        path: "live",
        element: <VideoList category="live" />,
      },
      {
        path: "shorts",
        element: <VideoList category="shorts" />,
      },
      {
        path: "/music",
        element: <VideoList category="music" />,
      },
      {
        path: "/news",
        element: <VideoList category="news" />,
      },
      {
        path: "/games",
        element: <VideoList category="games" />,
      },
      {
        path: "/sports",
        element: <VideoList category="sports" />,
      },
      {
        path: "/movies",
        element: <VideoList category="movies" />,
      },
    ],
  },
]);

const AppContent = () => {
  // @ts-ignore
  const darkMode = useSelector((state) => state.mode.mode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-black dark:text-gray-200 min-h-screen">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={Store}>
      <AppContent />
    </Provider>
  );
}

export default App;
