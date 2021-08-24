import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Newsfeed() {
  return (
    <div className="container w-75">
      <CreatePost />
      <Post />
      <Post />
    </div>
  );
}
