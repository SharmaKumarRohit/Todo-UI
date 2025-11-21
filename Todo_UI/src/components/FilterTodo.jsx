function FilterTodo({
  filterOption,
  handleAll,
  handleActive,
  handleCompleted,
}) {
  return (
    <div className="bg-white sm:w-fit p-1 rounded-lg my-6 flex justify-between gap-2 shadow-sm">
      <button
        className={`px-6 sm:px-8 py-1 rounded-lg cursor-pointer ${
          filterOption === "All" && "bg-zinc-200 font-semibold"
        }`}
        onClick={handleAll}
      >
        All
      </button>
      <button
        className={`px-6 sm:px-8 py-1 rounded-lg cursor-pointer ${
          filterOption === "Active" && "bg-zinc-200 font-semibold"
        }`}
        onClick={handleActive}
      >
        Active
      </button>
      <button
        className={`px-6 sm:px-8 py-1 rounded-lg cursor-pointer ${
          filterOption === "Completed" && "bg-zinc-200 font-semibold"
        }`}
        onClick={handleCompleted}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterTodo;
