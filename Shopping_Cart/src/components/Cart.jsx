import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
import NoItemFound from "./UI/NoItemFound";

function Cart() {
  const { cart } = useCart();
  let totalAmount = cart.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity,
    0
  );
  if (cart.length === 0) return <NoItemFound />;
  return (
    <>
      <h2 className="text-xl font-bold mb-6">Shopping Cart</h2>
      <div>
        {cart.map((carItem) => (
          <CartItem key={carItem.id} {...carItem} />
        ))}
      </div>
      <h2 className="text-xl font-bold mt-6 flex items-center justify-between sm:justify-start sm:gap-20">
        <span>Total Amount</span>
        <span>
          &#8377;
          {totalAmount.toLocaleString("en-IN")}
        </span>
      </h2>
    </>
  );
}

export default Cart;
