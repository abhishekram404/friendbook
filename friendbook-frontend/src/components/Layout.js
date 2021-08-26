import React from "react";
import LeftSidebar from "./LeftSidebar";
import "../styles/layout.scss";
import RightSidebar from "./RightSidebar";
import Newsfeed from "./Newsfeed";
export default function Layout() {
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
