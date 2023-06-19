import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import Card from "./Card";

export default function Screen(props) {
  const [messageList, setMessageList] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const updateList = () => {
    if (props.title === "To Do") {
      setMessageList([
        ...messageList,
        ...Messages.filter((msg) => msg.flag === "To Do"),
      ]);
    } else if (props.title === "On Progress") {
      setProgressList([
        ...progressList,
        ...Messages.filter((msg) => msg.flag === "On Progress"),
      ]);
    } else if (props.title === "Done") {
      setDoneList([
        ...doneList,
        ...Messages.filter((msg) => msg.flag === "Done"),
      ]);
    }
  };
  useEffect(() => {
    if (props.title === "To Do") {
      updateList();
    } else if (props.title === "On Progress") {
      updateList();
    } else if (props.title === "Done") {
      updateList();
    }
  }, [props.title]);
  return (
    <div>
      <div className="rounded-lg bg-gray-200 h-100">
        {props.title === "To Do" && (
          <div className="flex flex-row p-2 text-lg h-20 border-b-2 border-violet-800 justify-between items-center ">
            <div className="flex flex-row items-center">
              <div className="w-2 h-2 rounded-full bg-violet-500"></div>
              <h1 className="ml-2">{props.title}</h1>
            </div>
            <div>
              <button className="btn-primary">+</button>
            </div>
          </div>
        )}
        {props.title === "On Progress" && (
          <div className="flex flex -row p-2 text-lg h-20 border-b-2 border-yellow-800 items-center">
            <div className="flex flex-row items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <h1 className="ml-2">{props.title}</h1>
            </div>
          </div>
        )}
        {props.title === "Done" && (
          <div className=" flex flex-row p-2 text-lg h-20 border-b-2 border-sky-800 items-center">
            <div className="flex flex-row items-center">
              <div className="w-2 h-2 rounded-full bg-sky-500"></div>
              <h1 className="ml-2">{props.title}</h1>
            </div>
          </div>
        )}
        <div className="mt-2">
          <div className="flex flex-col space-y-5 m-2">
            {props.title === "To Do"
              ? messageList.map((val) => {
                  return (
                    <li className="list-none" key={val.id}>
                      <Card
                        heading={val.heading}
                        content={val.content}
                        images={val.images}
                        comments={val.comments}
                        file={val.files}
                      />
                    </li>
                  );
                })
              : props.title === "On Progress"
              ? progressList.map((val) => {
                  return (
                    <li className="list-none" key={val.id}>
                      <Card
                        heading={val.heading}
                        content={val.content}
                        images={val.images}
                        comments={val.comments}
                        file={val.files}
                      />
                    </li>
                  );
                })
              : doneList.map((val) => {
                  return (
                    <li className="list-none" key={val.id}>
                      <Card
                        heading={val.heading}
                        content={val.content}
                        images={val.images}
                        comments={val.comments}
                        file={val.files}
                      />
                    </li>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
