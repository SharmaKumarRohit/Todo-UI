import { createPortal } from "react-dom";
function Model({ children, modelClose }) {
  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/90 z-10 backdrop-blur-xs"
        onClick={modelClose}
      ></div>
      <div className="fixed bg-white z-20 max-w-7xl w-[90%] left-1/2 -translate-1/2 top-1/2 max-h-[700px] h-3/4 overflow-y-auto rounded-xl p-4">
        {children}
      </div>
    </>,
    document.getElementById("model")
  );
}

export default Model;
