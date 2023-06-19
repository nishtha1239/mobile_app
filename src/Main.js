import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import Screen from "./Screen";
export default function Main() {
  return (
    <div>
      <div className="relative flex mt-5 ml-10 mr-5 justify-between">
        <div className="flex space-x-10">
          <h1 className="text-5xl font-bold">Mobile App</h1>
          <div className="flex space-x-2 items-center">
            <div className="border-2 bg-blue-200 ">
              <EditOutlinedIcon />
            </div>
            <div className="border-2 bg-blue-200">
              <AttachmentOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="flex space-x-10 items-center">
          <div className="flex space-x-2">
            <button className="w-8 h-8 p-1 relative rounded-full bg-blue-200 items-center text-center">
              +
            </button>
            <h3>Invite</h3>
          </div>
          <div className="flex space-x-[-20px] items-center">
            <span className="w-12 h-12 rounded-full border-4 border-white -ml-6 bg-lime-300">
              N
            </span>
            <span className="w-12 h-12 rounded-full border-4 border-white -ml-6 bg-amber-300">
              M
            </span>
            <span className="w-12 h-12 rounded-full border-4 border-white -ml-6 bg-cyan-300">
              R
            </span>
            <span className="w-12 h-12 rounded-full border-4 border-white -ml-6 bg-fuchsia-300">
              K
            </span>
            <span className="w-12 h-12 rounded-full border-4 border-white -ml-6 bg-rose-300">
              +2
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-10 ml-5 justify-around rounded-md bg-color-gray md-flex-col">
        <div className="w-1/4 border-2 flex flex-col space-y-4">
          <Screen title="To Do" />
        </div>
        <div className="w-1/4 border-2 flex flex-col space-y-4">
          <Screen title="On Progress" />
        </div>
        <div className="w-1/4 border-2 flex flex-col space-y-4">
          <Screen title="Done" />
        </div>
      </div>
    </div>
  );
}
