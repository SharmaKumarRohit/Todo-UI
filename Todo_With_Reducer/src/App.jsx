import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { RiStairsFill } from "react-icons/ri";
import { Toaster } from "react-hot-toast";
import FilterTodo from "./components/FilterTodo";
import { useTodos } from "./contexts/TodosProvider";

function App() {
  const { todos } = useTodos();

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <div className="bg-zinc-100 min-h-screen">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 mt-2 flex items-center gap-4">
            <RiStairsFill className="rotate-90" />
            <span>To-Do List</span>
          </h1>
          <TodoForm />
          {todos.length !== 0 && <FilterTodo />}
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
