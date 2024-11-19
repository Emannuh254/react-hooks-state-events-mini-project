import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* Display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task
          key={`${task.text}-${index}`} // Ensure unique keys
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
