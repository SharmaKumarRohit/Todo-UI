import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import useFetchLocalTodos from "./components/hooks/useFetchLocalTodos";
import { RiStairsFill } from "react-icons/ri";
import FilterTodo from "./components/FilterTodo";
import { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState(useFetchLocalTodos);
  const [filterOption, setFilterOption] = useState("All");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (newTodo) => {
    setTodos((prevTodo) => [newTodo, ...prevTodo]);
  };
  const handleToggle = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const handleEdit = (id, { title, description }) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  };
  const handleAll = () => {
    setFilterOption("All");
  };
  const handleActive = () => {
    setFilterOption("Active");
  };
  const handleCompleted = () => {
    setFilterOption("Completed");
  };
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <div className="bg-zinc-100 min-h-screen">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 mt-2 flex items-center gap-4">
            <RiStairsFill className="rotate-90" />
            <span>To-Do List</span>
          </h1>
          <TodoForm addTodo={addTodo} />
          {todos.length !== 0 && (
            <FilterTodo
              filterOption={filterOption}
              handleAll={handleAll}
              handleActive={handleActive}
              handleCompleted={handleCompleted}
            />
          )}
          <Todos
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            filterOption={filterOption}
          />
        </div>
      </div>
    </>
  );
}

export default App;
