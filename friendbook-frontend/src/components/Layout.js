import React, { useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import "../styles/layout.scss";
import RightSidebar from "./RightSidebar";
import Newsfeed from "./Newsfeed";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetch_user_info } from "../redux/actions/userInfoActions";
export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_user_info());
  }, []);

  return (
    <>
      <div className="layout">
        <div className="row">
          <div className="col-2">
            <LeftSidebar />
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-8 newsfeed-col">
            <Newsfeed />
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-2">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
