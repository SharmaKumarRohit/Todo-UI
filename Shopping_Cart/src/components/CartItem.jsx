import { useCart } from "../contexts/CartProvider";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { ImCross } from "react-icons/im";

function CartItem({ id, title, price, image, quantity }) {
  const { increaseQty, decreaseQty, handleDelete } = useCart();
  return (
    <div className="p-4 sm:p-6 grid lg:grid-cols-2 border-b-2 border-b-neutral-300">
      <div className="flex items-center gap-6 mb-6 lg:mb-0">
        <div className="size-20 sm:size-24 rounded-full overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            className="size-full object-cover object-top"
          />
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="flex items-center lg:justify-end gap-6 sm:gap-25">
        <div className="flex items-center gap-1 sm:gap-4">
          <button
            className="text-xl font-bold cursor-pointer"
            onClick={() => {
              if (quantity <= 1) return;
              decreaseQty(id);
            }}
          >
            <RiSubtractFill />
          </button>
          <span className="text-lg font-semibold w-10 text-center">
            {quantity}
          </span>
          <button
            className="text-xl font-bold cursor-pointer"
            onClick={() => increaseQty(id)}
          >
            <IoMdAdd />
          </button>
        </div>
        <p className="w-25 text-center text-lg font-semibold">
          &#8377; {(quantity * price).toLocaleString("en-IN")}
        </p>
        <button className="cursor-pointer" onClick={() => handleDelete(id)}>
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
