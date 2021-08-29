import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

export default function Navbar() {
  const dispatch = useDispatch();
  // const { error } = useSelector((state) => state.user);
  const { isUserLoggedIn } = useSelector((state) => state.user);

  const [isOpen, setOpen] = useState(false);
  const toggleOptionsDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex  px-4 shadow-sm">
        <Link to="/" className="navbar-brand fw-bold ">
          FriendBook
        </Link>
        <div className="navbarNav navbar-nav ms-auto">
          {isUserLoggedIn ? (
            <>
              <Link to="/" className="nav-link mx-3">
                <HomeIcon />
              </Link>
              <Link to="/profile" className="nav-link mx-3">
                <AccountCircleIcon />
              </Link>
              <button
                href="/"
                className="nav-link btn mx-3"
                onClick={toggleOptionsDropdown}
              >
                <ArrowDropDownIcon />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link mx-2">
                Login
              </Link>
              <Link
                to="/register"
                className="nav-link mx-3 btn text-light fw-bold"
                id="register-btn"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      {isOpen && (
        <ul className="options-dropdown list-group  shadow">
          <div
            className="list-group-item py-3"
            onClick={() => {
              setOpen(false);
            }}
          >
            <SettingsIcon /> &nbsp; &nbsp; Settings
          </div>
          <div
            className="list-group-item py-3"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Brightness2Icon /> &nbsp; &nbsp; Toggle Dark Mode
          </div>
          <div
            className="list-group-item py-3"
            role="button"
            onClick={() => {
              dispatch(logout());
              setOpen(false);
            }}
          >
            <ExitToAppIcon /> &nbsp; &nbsp; Logout
          </div>
        </ul>
      )}
    </>
  );
}
