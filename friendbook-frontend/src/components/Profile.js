import React from "react";
import "../styles/profile.scss";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import WcIcon from "@material-ui/icons/Wc";
import EditIcon from "@material-ui/icons/Edit";
import CreatePost from "./CreatePost";
import Post from "./Post";
export default function Profile() {
  return (
    <div className="profile-container container  p-4">
      <div className="row">
        <div className="col-8 main-column">
          <div className="profile   p-0 ">
            <div className="row g-0">
              <div className="col cover-cont g-0">
                <img
                  src="https://via.placeholder.com/468x100?text=FriendBook"
                  alt=""
                  className="cover w-100"
                />
              </div>
            </div>
            <div className="row px-3 avatar-row">
              <div className="col-2 avatar-cont">
                <img
                  src="https://via.placeholder.com/150/0000FF"
                  className="avatar rounded img-thumbnail"
                  alt=""
                />
              </div>
              <div className="col-10"></div>
            </div>

            <div className="row px-3">
              <div className="col user-details">
                <div className="full-name h2 fw-bolder my-3">Abhishek Ram</div>
                <div className="bio my-3">
                  <span>
                    A self taught programmer who loves to make things work.
                  </span>
                  <EditIcon className="text-primary mx-2" />
                </div>
              </div>
            </div>
          </div>
          <CreatePost />
          <div className="container posts p-3">
            <h1>Posts</h1>
            <hr />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="col-4 others-column ">
          <AboutSection />
          <PhotosSection />
        </div>
      </div>
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="about  p-3">
      <h2>About</h2>
      <hr />
      <AboutItem info="Balkumari Lalitpur, Nepal" icon={HomeIcon} />
      <AboutItem info="+977 98000111222" icon={PhoneIcon} />
      <AboutItem info="abhishekram@gmail.com" icon={EmailIcon} />
      <AboutItem info="Male" icon={WcIcon} />
    </div>
  );
};

const AboutItem = ({ icon: Icon, info }) => {
  return (
    <div className=".about-item mt-3">
      <Icon className="me-3 about-icons" />
      <span>{info}</span>
    </div>
  );
};

const PhotosSection = () => {
  return (
    <div className="photos-section p-3">
      <h2>Photos</h2>
      <hr />
      <div className="photos">
        <img src="https://picsum.photos/200/300" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
    </div>
  );
};
