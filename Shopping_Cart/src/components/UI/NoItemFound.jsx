import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function NoItemFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center border-2 border-dashed border-neutral-400 rounded-lg h-full">
      <IoMdCheckmarkCircleOutline className="font-bold text-5xl text-neutral-500" />
      <h2 className="text-lg font-bold text-neutral-900">All clear!</h2>
      <p className="text-lg font-bold text-neutral-500">
        Your Cart is <span className="text-cyan-600">Empty!</span>
      </p>
    </div>
  );
}

export default NoItemFound;
