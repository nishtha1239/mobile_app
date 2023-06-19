import React from "react";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
export default function Card(props) {
  return (
    <div className="border-md">
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.heading}
        </h5>
        {props.content != "" && (
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {props.content}
          </p>
        )}
        <div className="flex flex-row space-x-2">
          {props.images && props.images.length !== 0 && (
            <img
              src={props.images[0]}
              alt="Image"
              className="overflow-hidden"
            />
          )}
          {props.images.length > 1 && (
            <img
              src={props.images[1]}
              alt="Image"
              className="overflow-hidden"
            />
          )}
        </div>
        <div className="flex flex-row justify-between mt-5">
          <div className="w-6 h-6 bg-rose-200 relative rounded-full flex items-center">
            <div className="text-center w-full opacity-70">N</div>
          </div>
          <div className="w-6 h-6 bg-cyan-200 relative rounded-full flex items-center">
            <div className="text-center w-full opacity-70">S</div>
          </div>
          <div className="flex space-x-1">
            <div className="flex space-x-1 overflow-hidden">
              <SmsOutlinedIcon />
              <h3> {props.comments} </h3>
              <h3>comments</h3>
            </div>
            <div className="flex space-x-1 overflow-hidden">
              <InsertDriveFileOutlinedIcon />
              <h3>{props.file}</h3>
              <h3>files</h3>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
