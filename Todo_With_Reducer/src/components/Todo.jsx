import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTodos } from "../contexts/TodosProvider";
import { motion } from "motion/react";

function Todo({ id, title, description, completed }) {
  const { handleDelete, handleToggle, openModel, setEditTodo, filterOption } =
    useTodos();
  const handleEditClick = () => {
    setEditTodo({ id, title, description });
    openModel();
  };
  return (
    <>
      {(filterOption === "All" ||
        (filterOption === "Active" && !completed) ||
        (filterOption === "Completed" && completed)) && (
        <motion.div
          layoutId={id}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className={`shadow-sm border-zinc-400 rounded-lg flex justify-between items-center p-4 ${
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
                onClick={handleEditClick}
              />
            )}
            <RiDeleteBin6Line
              size={20}
              className="text-red-400 cursor-pointer"
              onClick={() => handleDelete(id)}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Todo;
