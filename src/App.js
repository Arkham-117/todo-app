import { useState } from "react";
import uuid from "react-uuid";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";

function App() {

  // Sets the initial state.
  const [tasks, setTasks] = useState(
    [
      {
        id: uuid(),
        description: "Walk the dog",
        done: true
      },
      {
        id: uuid(),
        description: "Wash the car",
        done: false
      },
      {
        id: uuid(),
        description: "Finish the lab",
        done: false
      }
    ]
  );

  // Removes all tasks form the list.
  const handleClearTasks = () => {
    setTasks([]);
  }

  // Toggles a task status.
  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  }

  // Removes a task from the list.
  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(filteredTasks);
  }

  // Adds a task.
  const handleAddTask = (description, status) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        description: description,
        done: status
      }
    ]);
  }

  return (
    <>
      <Header />

      <Form
        onAddTask={handleAddTask}
      />

      <Tasks
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onTaskRemove={handleTaskRemove}
        onClearTasks={handleClearTasks}
      />

      
    </>
  );
}

export default App;
