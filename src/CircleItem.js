import React from "react";

export default function CircleItem(props) {
  return (
    <div className="flex flex-row items-center">
      <div>
        <span className="ml-2">{props.title}</span>
      </div>
    </div>
  );
}
