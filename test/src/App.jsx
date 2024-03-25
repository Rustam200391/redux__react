import "./App.css";
import { TaskList } from "./pages/TaskList";
import { EditTaskPage } from "./pages/EditTaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";
// import { HomePage } from "./pages/HomePage";
// import { NotFoundPage } from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
// import TaskListContainer from "./pages/TaskListContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/task/:taskId/edit" element={<EditTaskPage />} />
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:taskId" element={<TaskDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
