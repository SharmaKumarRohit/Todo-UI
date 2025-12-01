import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import initialTodos from "../hooks/initialTodos";

const TodosContext = createContext();

function reducer(todos, action) {
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  }
  if (action.type === "ADD_TODO") {
    return [action.payload.newTodo, ...todos];
  }
  if (action.type === "EDIT_TODO") {
    const { id, title, description } = action.payload;
    return todos.map((todo) =>
      todo.id === id ? { ...todo, title, description } : todo
    );
  }

  return todos;
}

function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos());
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };
  const addNewTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: { newTodo } });
  };
  const handleEdit = (id, title, description) => {
    dispatch({ type: "EDIT_TODO", payload: { id, title, description } });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => setIsOpen(true);
  const closeModel = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  }, [isOpen]);

  const [filterOption, setFilterOption] = useState("All");
  const filterAll = () => setFilterOption("All");
  const filterActive = () => setFilterOption("Active");
  const filterCompleted = () => setFilterOption("Completed");

  const [editTodo, setEditTodo] = useState({
    id: "",
    title: "",
    description: "",
  });

  return (
    <TodosContext
      value={{
        todos,
        handleDelete,
        handleToggle,
        addNewTodo,
        isOpen,
        openModel,
        closeModel,
        filterOption,
        filterAll,
        filterActive,
        filterCompleted,
        editTodo,
        setEditTodo,
        handleEdit,
      }}
    >
      {children}
    </TodosContext>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export default TodosProvider;
