import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function NoTodo() {
  return (
    <div className="mt-6 flex flex-col gap-2 items-center border-2 border-dashed border-zinc-300 rounded-lg py-12">
      <IoMdCheckmarkCircleOutline className="font-bold text-4xl text-zinc-500" />
      <h2 className="text-sm font-bold text-zinc-900">All clear!</h2>
      <p className="text-sm font-medium text-zinc-500">
        Time to relax or add a new task.
      </p>
    </div>
  );
}

export default NoTodo;
