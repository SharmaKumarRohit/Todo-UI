import { useTodos } from "../contexts/TodosProvider";

function FilterTodo() {
  const { filterOption, filterAll, filterActive, filterCompleted } = useTodos();
  return (
    <div className="bg-white sm:w-fit p-1 rounded-lg my-5 flex justify-between gap-2 shadow-sm">
      <button
        className={`px-6 sm:px-8 py-1 rounded-lg cursor-pointer ${
          filterOption === "All" && "bg-zinc-200 font-semibold"
        }`}
        onClick={filterAll}
      >
        All
      </button>
      <button
        className={`px-6 sm:px-8 py-1 rounded-lg cursor-pointer ${
          filterOption === "Active" && "bg-zinc-200 font-semibold"
        }`}
        onClick={filterActive}
      >
        Active
      </button>
      <button
        className={`px-6 sm:px-8 py-1 rounded-lg cursor-pointer ${
          filterOption === "Completed" && "bg-zinc-200 font-semibold"
        }`}
        onClick={filterCompleted}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterTodo;
