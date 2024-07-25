import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, currentTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      if (currentTask) {
        editTask({ ...currentTask, title, description });
      } else {
        addTask({ id: Date.now(), title, description, completed: false });
      }
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">
        {currentTask ? "Editar Tarea" : "Crear nueva Tarea"}
      </button>
    </form>
  );
};

export default TaskForm;
