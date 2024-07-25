import React, { useState } from "react";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import profileImage from "./images/profile.jpg";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (task) => {
    const newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(newTasks);
    setCurrentTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Gestor de Tareas</h1>
      <p>
        usted tiene {tasks.filter((task) => !task.completed).length} pendientes
        y {tasks.filter((task) => task.completed).length} terminadas
      </p>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        currentTask={currentTask}
      />
      <div>
        <label>Filtrar por: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="pending">Pendientes</option>
          <option value="completed">Completadas</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        setCurrentTask={setCurrentTask}
      />
    </div>
  );
};

export default App;
