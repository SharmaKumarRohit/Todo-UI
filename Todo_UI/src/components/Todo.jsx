import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function Todo({
  id,
  title,
  description,
  completed,
  handleToggle,
  handleDelete,
  modelOpen,
  setEditData,
  filterOption,
}) {
  const handleEditInitialData = () => {
    setEditData({ id, todoData: { title, description } });
    modelOpen();
  };
  return (
    <>
      {(filterOption === "All" ||
        (filterOption === "Active" && !completed) ||
        (filterOption === "Completed" && completed)) && (
        <div
          className={`shadow-sm border-zinc-400 my-4 rounded-lg flex justify-between items-center p-4 ${
            completed ? "bg-teal-100" : "bg-white"
          }`}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="appearance-none shrink-0 size-5 border-2 border-zinc-300 rounded-sm bg-white cursor-pointer relative transition-all duration-200 checked:bg-teal-400 checked:border-teal-400"
              checked={completed}
              onChange={() => handleToggle(id)}
            />
            <div className="text-zinc-700">
              <h2
                className={`font-medium text-lg ${
                  completed && "line-through text-zinc-500"
                }`}
              >
                {title}
              </h2>
              <p className={`${completed && "line-through text-zinc-500"}`}>
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {!completed && (
              <MdOutlineModeEdit
                size={22}
                className="text-zinc-500 cursor-pointer"
                onClick={handleEditInitialData}
              />
            )}
            <RiDeleteBin6Line
              size={20}
              className="text-red-400 cursor-pointer"
              onClick={() => handleDelete(id)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Todo;
