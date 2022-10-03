import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import TodoListPage from "./components/Todo/todoListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<TodoListPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
