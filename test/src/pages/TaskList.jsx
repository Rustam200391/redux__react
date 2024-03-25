import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TaskList.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    const taskName = prompt("Введите название задачи:");
    if (taskName) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          name: taskName,
          description: "",
          completed: false,
        },
      ]);
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filterTasks = (filterType) => {
    setFilter(filterType);
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  return (
    <div className="container">
      <div>
        <h1>Список задач</h1>
        <button onClick={addTask}>Добавить задачу</button>
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <Link to={`/task/${task.id}`}>
                <span
                  style={{
                    marginLeft: "8px",
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                >
                  {task.name}
                </span>
              </Link>
              <Link to={`/task/${task.id}/edit`}>
                <button>Редактировать</button>
              </Link>
              <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>Фильтр:</h3>
          <button onClick={() => filterTasks("all")}>Показать все</button>
          <button onClick={() => filterTasks("completed")}>
            Показать проделанные
          </button>
          <button onClick={() => filterTasks("uncompleted")}>
            Показать несделанные
          </button>
        </div>
      </div>
    </div>
  );
};
