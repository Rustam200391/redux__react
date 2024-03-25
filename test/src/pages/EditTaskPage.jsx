import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const EditTaskPage = () => {
  const { taskId } = useParams();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете добавить логику для обновления данных задачи
  };

  return (
    <div>
      <h1>Редактирование задачи {taskId}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Название задачи:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </div>
        <div>
          <label htmlFor="taskDescription">Описание задачи:</label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={handleTaskDescriptionChange}
          />
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};
