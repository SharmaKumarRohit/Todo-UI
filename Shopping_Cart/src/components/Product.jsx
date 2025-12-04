import { useCart } from "../contexts/CartProvider";
import toast from "react-hot-toast";

function Product({ id, title, price, image }) {
  const { addToCartItem, cart } = useCart();
  const handleAdd = () => {
    for (let carItem of cart) {
      if (carItem.id === id) {
        toast.error("Already added");
        return;
      }
    }
    const newCartItem = {
      id,
      title,
      price,
      image,
      quantity: 1,
    };
    addToCartItem(newCartItem);
    toast.success("Item added!");
  };
  return (
    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="max-w-full h-72 object-contain aspect-square mix-blend-darken mx-auto"
      />
      <p className="my-3 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </p>
      <p className="mb-3 font-semibold">
        &#8377;{price.toLocaleString("en-In")}
      </p>
      <button
        className="px-4 py-2 bg-cyan-600 rounded-lg text-white font-medium cursor-pointer hover:bg-cyan-500 transition-colors duration-300"
        onClick={handleAdd}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
