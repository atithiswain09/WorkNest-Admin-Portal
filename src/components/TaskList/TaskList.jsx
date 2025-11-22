import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
function TaskList({data}) {
  console.log(data)
  return (
    <div
      id="tasklist"
      className="w-full h-auto cursor-pointer overflow-x-auto flex gap-6 py-6 px-4 mt-10"
    >
        {data.tasks.map((elem)=>{
           if(elem.active){
            return <AcceptTask/>
           }
           if(elem.newTask){
            return <NewTask/>
           }
           if(elem.failed){
            return <FailedTask/>
           }
           if(elem.completed){
            return <CompleteTask/>
           }


        })}
    </div>
  );
}

export default TaskList;
