import React from "react";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import "milligram";

function App() {
  const { pathname } = window.location;

  return (
    <>
      {pathname === "/" && <CreatePost />}
      {pathname.startsWith("/post") && <Post />}
    </>
  );
}

export default App;
