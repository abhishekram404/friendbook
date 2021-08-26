import React from "react";
import "../styles/post.scss";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import Skeleton from "react-loading-skeleton";
export default function Post() {
  return (
    // <>
    //   <div className="post card my-4 pb-0">
    //     <div className="card-body mb-0 pb-0">
    //       <div className="card-title">
    //         <img
    //           src="https://ui-avatars.com/api/?background=random"
    //           alt=""
    //           className="avatar rounded-circle "
    //         />
    //         <div className="user-details">
    //           <a href="/" className="user-name">
    //             Abhishek Ram
    //           </a>
    //           <div className="privacy">
    //             <PublicIcon className="privacy-icon  me-2" /> Public
    //           </div>
    //         </div>
    //         <button className="options-btn btn">
    //           <MoreHorizIcon />
    //         </button>
    //       </div>
    //       <p className="post-content card-text">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
    //         quasi cumque voluptatum dolorem, ipsa tenetur totam soluta
    //         dignissimos magni possimus pariatur exercitationem quisquam repellat
    //         doloremque obcaecati officia nemo? Sapiente, cumque?
    //       </p>
    //       <hr />
    //       <div className="engagement-buttons">
    //         <div className="buttons">
    //           <FavoriteBorderIcon />
    //         </div>
    //         <div className="buttons">
    //           <ChatBubbleOutlineIcon />
    //         </div>
    //         <div className="buttons">
    //           <ShareIcon />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <hr />
    // </>
    <>
      <div className="post card my-4 mx-auto pb-0 shadow-sm">
        <div className="card-body mb-0 pb-0">
          <div className="card-title">
            <img
              src="https://ui-avatars.com/api/?background=random"
              alt=""
              className="avatar rounded-circle "
            />
            <div className="user-details">
              <a href="/" className="user-name">
                Abhishek Ram
              </a>
              <div className="privacy">
                <PublicIcon className="privacy-icon  me-2" /> Public
              </div>
            </div>
            <button className="options-btn btn">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="post-content card-text">
            <p className="post-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              quasi cumque voluptatum dolorem, ipsa tenetur totam soluta
              dignissimos magni possimus pariatur exercitationem quisquam
              repellat doloremque obcaecati officia nemo? Sapiente, cumque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              impedit.
            </p>
            <div className="post-image">
              <img
                src="https://picsum.photos/200/300"
                className="my-1"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="engagement-buttons">
            <div className="buttons">
              <FavoriteBorderIcon />
            </div>
            <div className="buttons">
              <ChatBubbleOutlineIcon />
            </div>
            <div className="buttons">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
