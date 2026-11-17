import { useState } from "react";

import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">

      <Header />

      <TaskForm onAddTask={addTask} />

      <h2>Liste des tâches</h2>

      <TaskList tasks={tasks} />

    </div>
  );
}
export default App;