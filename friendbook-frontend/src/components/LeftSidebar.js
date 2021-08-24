import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import "../styles/leftSidebar.scss";
import "../styles/sidebarMenuItem.scss";
export default function LeftSidebar() {
  return (
    <div className="leftSidebar px-3">
      <div className="title py-2 pt-3 h3 text-center">Shortcuts</div>

      <LeftSidebarMenuItem>
        {" "}
        <AccountCircleIcon className="icon" /> <span>Profile</span>
      </LeftSidebarMenuItem>
      <LeftSidebarMenuItem>
        <PeopleIcon className="icon" /> <span>Friends</span>
      </LeftSidebarMenuItem>
      <LeftSidebarMenuItem>
        <PhotoLibraryIcon className="icon" />
        <span>Photos</span>
      </LeftSidebarMenuItem>
    </div>
  );
}

export const LeftSidebarMenuItem = ({ children }) => {
  return (
    <a
      href="/"
      className="links text-dark my-3  bg-light w-100 text-start shadow-sm"
    >
      {children}
    </a>
  );
};
