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
      <h2>Titulo de la tarea</h2>
      <input
        type="text"
        placeholder="Ej Aseo Ambiente"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>Descripción de la tarea</h2>
      <input
        type="text"
        placeholder="Ej Realizar aseo del ambiente"
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
