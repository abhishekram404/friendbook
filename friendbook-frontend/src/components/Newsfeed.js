import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import "../styles/newsfeed.scss";

export default function Newsfeed() {
  return (
    <div className="container w-75">
      <CreatePost />
      <Post />
      <Post />
    </div>
  );
}
