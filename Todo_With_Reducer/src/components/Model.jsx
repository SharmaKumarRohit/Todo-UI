import { createPortal } from "react-dom";
import { useTodos } from "../contexts/TodosProvider";

function Model({ children }) {
  const { closeModel } = useTodos();
  return createPortal(
    <>
      <div
        className="fixed w-screen h-screen bg-black/90 z-10 backdrop-blur-xs"
        onClick={closeModel}
      ></div>
      <div className="fixed min-w-xs w-3/4 sm:w-lg bg-white z-20 top-1/2 left-1/2 -translate-1/2 rounded-lg">
        {children}
      </div>
    </>,
    document.getElementById("model")
  );
}

export default Model;
