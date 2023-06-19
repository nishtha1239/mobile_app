import React from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { SlPeople } from "react-icons/sl";
import { AiOutlineSetting } from "react-icons/ai";
import CircleItem from "./CircleItem";
import { useState, useEffect } from "react";
export default function Sidebar() {
  return (
    <div className="">
      <aside
        id="separator-sidebar"
        className="relative top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full w-250 px-3 py-4 overflow-y-auto bg-white border-r-2 dark:bg-gray-800">
          <ul className="font-medium space-y-2 font-medium border-b border-gray-200 dark:border-gray-700">
            <li>
              <h1 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  version="1.1"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <title>647</title>

                  <defs></defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g fill="#434343">
                      <path
                        d="M4.518,7.071 C2.046,7.071 0.04,9.066 0.04,11.529 C0.04,13.99 2.046,15.985 4.518,15.985 C6.99,15.985 8.994,13.99 8.994,11.529 C8.993,9.066 6.989,7.071 4.518,7.071 L4.518,7.071 Z M5.082,8.454 C3.076,8.454 1.449,10.086 1.449,12.096 C1.449,12.918 0.732,12.566 0.732,11.377 C0.732,9.365 2.359,7.736 4.367,7.736 C5.553,7.736 5.902,8.454 5.082,8.454 L5.082,8.454 Z"
                        className="si-glyph-fill"
                      ></path>
                      <path
                        d="M11.518,7.071 C10.48,7.071 9.536,7.437 8.776,8.028 C8.907,8.185 9.026,8.35 9.137,8.521 C9.754,8.037 10.522,7.736 11.367,7.736 C12.553,7.736 12.902,8.454 12.082,8.454 C11.129,8.454 10.27,8.83 9.621,9.432 C9.889,10.078 10.039,10.786 10.039,11.53 C10.039,12.859 9.564,14.078 8.775,15.029 C9.535,15.62 10.479,15.986 11.517,15.986 C13.989,15.986 15.993,13.991 15.993,11.53 C15.993,9.066 13.989,7.071 11.518,7.071 L11.518,7.071 Z"
                        className="si-glyph-fill"
                      ></path>
                      <path
                        d="M8.018,7.197 C8.976,6.428 10.192,5.967 11.518,5.967 C11.922,5.967 12.315,6.012 12.696,6.093 C12.88,5.605 12.994,5.082 12.994,4.53 C12.994,2.067 10.99,0.072 8.518,0.072 C6.046,0.072 4.04,2.067 4.04,4.53 C4.04,5.04 4.144,5.522 4.303,5.978 C4.375,5.975 4.446,5.967 4.518,5.967 C5.844,5.967 7.06,6.429 8.018,7.197 L8.018,7.197 Z M8.367,0.736 C9.553,0.736 9.902,1.454 9.082,1.454 C7.076,1.454 5.449,3.086 5.449,5.096 C5.449,5.918 4.732,5.566 4.732,4.377 C4.732,2.365 6.359,0.736 8.367,0.736 L8.367,0.736 Z"
                        className="si-glyph-fill"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-3">Project M.</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-6 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                </svg>
              </h1>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BiMessageSquareDots />
              <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <GrTask />
              <span className="flex-1 ml-3 whitespace-nowrap">Tasks</span>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <SlPeople />
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <AiOutlineSetting />
              <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
            </li>
          </ul>
          <div className="pt-2 mt-2 space-y-2 font-medium border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-row items-center ">
              <input
                className="placeholder-black"
                type="text"
                placeholder="My-Projects"
              />
              <button>+</button>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-row items-center">
                <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                <CircleItem title="Mobile App" />
              </div>
              <div className="flex flex-row items-center">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <CircleItem title="Website Redesign" />
              </div>
              <div className="flex flex-row items-center">
                <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                <CircleItem title="Design System" />
              </div>
              <div className="flex flex-row items-center">
                <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                <CircleItem title="Wireframes" />
              </div>
            </div>
          </div>
          <ul className="flex flex-col border bg-gray-100 mt-5 w-166 h-40">
            <h2 className="text-center text-black">Thoughts Time</h2>
            <p className="text-center text-gray-500">
              We don't have any notice for yoy,till then you can share your
              thoughts with your peers
            </p>
            <textarea
              className="ml-2 mr-2 border border-black h-10 mt-2"
              placeholder="Write a Message"
            ></textarea>
          </ul>
        </div>
      </aside>
    </div>
  );
}
