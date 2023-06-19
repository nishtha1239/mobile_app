import React from "react";

export default function CircleItem(props) {
  const circleStyle = `w-2 h-2 rounded-full bg-${props.color}-500`;

  return (
    <div className="flex flex-row items-center">
      <div className="w-2 h-2 rounded-full bg--500"></div>
      <div>
        <a href="#" className="">
          <span className="ml-2">{props.title}</span>
        </a>
      </div>
    </div>
  );
}
