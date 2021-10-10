import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import "../styles/createPost.scss";
import { useSelector } from "react-redux";
export default function CreatePost() {
  const { fullName } = useSelector(
    (state) => state.user.info || { fullName: "" }
  );
  return (
    <>
      <div className="create-post container mx-auto mx-0  my-3">
        <h2 className="h2 pb-0">Create Post</h2>
        {/* <hr /> */}
        <form action="#">
          <textarea
            type="text"
            className="w-100 mb-3 mt-2 p-3"
            placeholder={`What's on your mind, ${
              fullName && (fullName ? fullName?.split(" ")[0] : "")
            }?`}
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
      {/* <hr /> */}
    </>
  );
}
