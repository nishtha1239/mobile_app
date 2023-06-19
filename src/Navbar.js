import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import Sidebar from "./Sidebar";
// import Card from "./Card.js";
import Main from "./Main.js";
export default function Navbar() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <button className="flex items-center space-x-2 ml-5 border-2 w-300">
            <div className="">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search for anything..."
                className="placeholder-black"
              />
            </div>
          </button>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-5">
              <CalendarMonthOutlinedIcon />
              <LiveHelpOutlinedIcon />
              <NotificationsOutlinedIcon />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center space-x-1">
                <p className="text-sm font-medium">Anima Aggarwal</p>
                <p className="text-xs text-black">U.P, India</p>
              </div>
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="./image.jpg"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Main />
      </div>
    </div>
  );
}
