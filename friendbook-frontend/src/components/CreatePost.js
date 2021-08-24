import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import "../styles/createPost.scss";
export default function CreatePost() {
  return (
    <>
      <div className="create-post bg-light mx-0  my-3">
        <h2 className="h2 pb-0">Create Post</h2>
        <hr />
        <form action="#">
          <textarea
            type="text"
            className="w-100 mb-3 p-2"
            placeholder="What's on your mind?"
            rows="5"
          ></textarea>

          <div className="action-buttons">
            <div className="attachments">
              <button className="btn add-image-btn">
                <ImageIcon /> &nbsp; Add image
              </button>
            </div>
            <button
              className="submit-btn btn  text-light fw-bold"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
      <hr />
    </>
  );
}
