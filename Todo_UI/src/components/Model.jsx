import { createPortal } from "react-dom";

function Model({ children, modelClose }) {
  return createPortal(
    <>
      <div
        className="fixed w-screen h-screen bg-black/90 z-10"
        onClick={modelClose}
      ></div>
      <div className="fixed min-w-xs w-3/4 sm:w-lg bg-white z-20 top-1/2 left-1/2 -translate-1/2 rounded-lg">
        {children}
      </div>
    </>,
    document.getElementById("model")
  );
}

export default Model;
