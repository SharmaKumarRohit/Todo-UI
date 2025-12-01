import { useState } from "react";
import { useTodos } from "../contexts/TodosProvider";
import toast from "react-hot-toast";

function TodoForm() {
  const { addNewTodo } = useTodos();
  const [formData, setFormData] = useState({ title: "", description: "" });
  const { title, description } = formData;
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || description.trim().length === 0) {
      toast.error("Empty fields not allow");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    addNewTodo(newTodo);
    setFormData({ title: "", description: "" });
  };

  return (
    <form
      className="bg-white p-4 rounded-lg flex flex-col gap-4 shadow-sm text-zinc-900"
      onSubmit={handleSubmit}
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
