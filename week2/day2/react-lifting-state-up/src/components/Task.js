import { useState } from 'react';

function Task(props) {
  // const [taskCompleted, setTaskCompleted] = useState(false);

  // const toggleTask = () => setTaskCompleted(!taskCompleted); // set it to the opposite

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{props.task.name}</h1>
        {props.task.isDone ? <span>DONE </span> : <span>PENDING ⌛</span>}
        {/* {taskCompleted ? 'taskCompleted is: True' : 'taskCompleted is: False'} */}
        <h2>Task Description</h2>
        <p>{props.task.description}</p>

        <button
          className="add"
          onClick={() => props.toggleTaskDone(props.task._id)}
        >
          {props.task.isDone ? <span>UNDO </span> : <span>✔️</span>}
        </button>
      </div>
    </div>
  );
}

export default Task;
