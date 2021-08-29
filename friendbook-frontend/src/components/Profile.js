import React from "react";
import "../styles/profile.scss";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import WcIcon from "@material-ui/icons/Wc";
import EditIcon from "@material-ui/icons/Edit";
import InfoIcon from "@material-ui/icons/Info";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PeopleIcon from "@material-ui/icons/People";
import CakeIcon from "@material-ui/icons/Cake";
import CreatePost from "./CreatePost";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
export default function Profile() {
  const { info } = useSelector((state) => state.user);

  const { fullName, usename, gender, dob, email } = info;

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
                  src="https://i.pravatar.cc/300"
                  className="avatar rounded img-thumbnail"
                  alt=""
                />
              </div>
              <div className="col-10"></div>
            </div>

            <div className="row px-3">
              <div className="col user-details">
                <div className="full-name h2 fw-bolder my-3">{fullName}</div>
                <div className="bio my-3">
                  <span>
                    A self taught programmer who loves to make things work.
                  </span>
                </div>
                <button className="btn btn-light shadow-sm mb-3 ">
                  <EditIcon className="text-primary mx-2" />
                  Edit profile
                </button>
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
          <FriendsSection />
        </div>
      </div>
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="about p-3">
      <h2>
        About <InfoIcon className="icon" />{" "}
      </h2>
      <hr />
      <AboutItem info="Balkumari Lalitpur, Nepal" icon={HomeIcon} />
      <AboutItem info="+977 98000111222" icon={PhoneIcon} />
      <AboutItem info="abhishekram@gmail.com" icon={EmailIcon} />
      <AboutItem info="Male" icon={WcIcon} />
      <AboutItem info="26 Oct 1967" icon={CakeIcon} />
    </div>
  );
};

const AboutItem = ({ icon: Icon, info }) => {
  return (
    <div className="about-item mt-3">
      <Icon className="me-3 about-icons icon" />
      <span>{info}</span>
    </div>
  );
};

const PhotosSection = () => {
  return (
    <div className="photos-section p-3">
      <h2>
        Photos <PhotoLibraryIcon className="icon" />{" "}
      </h2>
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

const FriendsSection = () => {
  return (
    <div className="friends-section p-3">
      <h2>
        Friends <PeopleIcon className="icon" />{" "}
      </h2>
      <hr />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
};

const Friend = () => {
  return (
    <div className="friend my-3 shadow-sm p-2 rounded">
      <img className="me-3 friend-avatar" src="https://i.pravatar.cc/300" />
      <span className=" fs-5">Manoj Bastakoti</span>
    </div>
  );
};
