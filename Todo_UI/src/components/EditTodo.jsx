import toast from "react-hot-toast";

function EditTodo({
  editData: { id, todoData },
  handleChange,
  handleEdit,
  modelClose,
}) {
  const { title, description } = todoData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || description.trim().length === 0)
      return toast.error("Empty fields not allow");
    handleEdit(id, todoData);
    modelClose();
    toast.success("Changes Saved");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    modelClose();
  };
  return (
    <form
      className="rounded-lg flex flex-col gap-4 text-zinc-900 p-4"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-xl mb-2">Edit Task</h2>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="border-2 border-zinc-300 bg-zinc-100 placeholder:font-medium p-3 sm:p-2 rounded-lg outline-none"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        className="border-2 border-zinc-300 bg-zinc-100 placeholder:font-medium p-3 sm:p-2 rounded-lg outline-none"
        value={description}
        onChange={handleChange}
      />
      <div className="flex justify-end gap-4 mt-2">
        <button
          type="button"
          className="shrink-0 font-bold px-4 py-3 rounded-lg bg-teal-400 hover:bg-teal-500 transition-colors duration-200 cursor-pointer"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <input
          type="submit"
          value="Save Changes"
          className="shrink-0 font-bold px-4 py-3 rounded-lg bg-teal-400 hover:bg-teal-500 transition-colors duration-200 cursor-pointer"
        />
      </div>
    </form>
  );
}

export default EditTodo;
