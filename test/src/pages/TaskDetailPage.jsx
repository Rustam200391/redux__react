import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskDetailPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Здесь вы можете выполнить запрос к API или получить данные из другого источника
    // Например, вы можете использовать taskId для получения подробных данных о задаче
    // Временно используем статические данные для примера

    // Предположим, что у вас есть массив задач, из которого вы хотите получить подробности о задаче
    const tasks = [
      { id: "1", name: "Задача 1", description: "Описание задачи 1" },
      { id: "2", name: "Задача 2", description: "Описание задачи 2" },
      { id: "3", name: "Задача 3", description: "Описание задачи 3" },
    ];

    // Ищем задачу по taskId
    const foundTask = tasks.find((task) => task.id === taskId);

    // Устанавливаем найденную задачу в состояние
    setTask(foundTask);
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>; // Можно добавить загрузочный индикатор
  }

  return (
    <div>
      <h2>Подробное описание задачи {taskId}</h2>
      <p>Название: {task.name}</p>
      <p>Описание: {task.description}</p>
    </div>
  );
};

export default TaskDetailPage;
