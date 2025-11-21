import { useState } from "react";
import toast from "react-hot-toast";

function TodoForm({ addTodo }) {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = todoData;
  function handleChange(e) {
    setTodoData((prevTodoData) => ({
      ...prevTodoData,
      [e.target.id]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0 || description.trim().length === 0)
      return toast.error("Empty fields not allow");
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    addTodo(newTodo);
    setTodoData({ title: "", description: "" });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg flex flex-col gap-4 shadow-sm text-zinc-900"
    >
      <h2 className="font-medium text-lg leading-3 sm:leading-8">
        Drop Your Idea
      </h2>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="border-2 border-zinc-300 bg-zinc-100 placeholder:font-medium p-2.5 sm:p-3 rounded-lg outline-none"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        className="border-2 border-zinc-300 bg-zinc-100 placeholder:font-medium p-2.5 sm:p-3 rounded-lg outline-none"
        value={description}
        onChange={handleChange}
      />
      <div className="flex sm:justify-end">
        <input
          type="submit"
          value="Add..."
          className="font-bold px-4 py-2.5 sm:py-3 rounded-lg bg-teal-400 hover:bg-teal-500 transition-colors duration-200 cursor-pointer w-full sm:w-1/6"
        />
      </div>
    </form>
  );
}

export default TodoForm;
