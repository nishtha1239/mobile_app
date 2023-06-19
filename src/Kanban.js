import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
export default function Kanban() {
  const [completed, setCompleted] = useState([]);
  const [incompleted, setIncompleted] = useState([]);
  return;
  <DragDropContext>
    <h2 className="text-center">
      hello
      <div className="flex flex-row justify-between items-center "></div>
    </h2>
  </DragDropContext>;
}
