import React from "react";
import "../styles/sidebarMenuItem.scss";
import "../styles/rightSidebar.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
export default function RightSidebar() {
  const users = [
    { name: "Abhishek", active: true, activeTime: null },
    {
      name: "Manoj",
      active: false,
      activeTime: 59,
    },
    {
      name: "Ayush Adhikari",
      active: true,
    },
  ];

  return (
    <div className="rightSidebar px-3">
      <div className="title py-2 pt-3 h3 text-center">Chats</div>

      {users.map((user) => {
        return (
          <RightSidebarChatMenuItem
            user={{
              name: user.name,
              active: user.active,
              activeTime: user.activeTime,
            }}
          />
        );
      })}
    </div>
  );
}

const RightSidebarChatMenuItem = ({ user }) => {
  const { name, active, activeTime } = user;
  return (
    <Link
      to="/"
      className="links text-dark my-3  bg-light text-start shadow-sm"
    >
      <img
        src="https://ui-avatars.com/api/?background=random"
        alt=""
        className="avatar rounded-circle"
      />{" "}
      <div className="userStatus">
        <span>{name}</span>
        <small className="active-status ">
          {active ? "Online" : `Active ${activeTime} min ago`}
        </small>
      </div>
      <span className={clsx("active-dot", active ? "online" : null)}></span>
    </Link>
  );
};
