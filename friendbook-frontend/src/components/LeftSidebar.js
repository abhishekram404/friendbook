import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import "../styles/leftSidebar.scss";
import "../styles/sidebarMenuItem.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function LeftSidebar() {
  const { fullName } = useSelector((state) => state.user.info);

  return (
    <div className="leftSidebar px-3">
      <div className="title py-2 pt-3 h3 text-center">Shortcuts</div>

      <LeftSidebarMenuItem to="/profile">
        {" "}
        <AccountCircleIcon className="icon" />{" "}
        <span>{fullName ? fullName : "Profile"}</span>
      </LeftSidebarMenuItem>
      <LeftSidebarMenuItem to="/friends">
        <PeopleIcon className="icon" /> <span>Friends</span>
      </LeftSidebarMenuItem>
      <LeftSidebarMenuItem to="/photos">
        <PhotoLibraryIcon className="icon" />
        <span>Photos</span>
      </LeftSidebarMenuItem>
    </div>
  );
}

export const LeftSidebarMenuItem = ({ children, to, ...rest }) => {
  return (
    <Link
      to={to}
      rest
      className="links text-dark my-3  bg-light w-100 text-start shadow-sm"
    >
      {children}
    </Link>
  );
};
