import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';
import data from '../data.json';

const initialTasks = [
  {
    _id: '1a',
    name: 'Test',
    description: 'Do something important',
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskCompleted, setTaskCompleted] = useState(0);

  const toggleTaskDone = (id) => {
    //console.log(id);
    const taskCopy = [...tasks];

    taskCopy.forEach((task) => {
      if (task._id === id) {
        task.isDone = !task.isDone;
        //console.log(task.isDone);

        // if (task.isDone) setTaskCompleted(taskCompleted + 1);
        // else if (!task.isDone) setTaskCompleted(taskCompleted - 1);

        // task.isDone
        //   ? setTaskCompleted(taskCompleted + 1)
        //   : setTaskCompleted(taskCompleted - 1);

        setTaskCompleted(task.isDone ? taskCompleted + 1 : taskCompleted - 1);
      }
    });
    //console.log(tasks);
    setTasks(taskCopy);
  };

  return (
    <div>
      <Summary taskCompleted={taskCompleted} />

      <div className="todo-container">
        {tasks.map((element) => (
          <Task
            key={element._id}
            task={element}
            toggleTaskDone={toggleTaskDone}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
