import { useState, useEffect } from "react";
import Model from "./UI/Model";
import Cart from "./Cart";
import Container from "./UI/Container";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartProvider";

function Header() {
  const { cart } = useCart();
  const totalQty = cart.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );
  const [isOpen, setIsOpen] = useState(false);
  const modelClose = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isOpen]);
  return (
    <header className="bg-cyan-600">
      <Container>
        <nav className="flex justify-between items-center h-16">
          <h1 className="text-xl text-white font-semibold">ARC Shop</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 cursor-pointer text-white font-semibold"
          >
            <span className="block relative">
              <FaShoppingCart size={20} />
              {totalQty > 0 && (
                <span className="border size-5 rounded-full flex items-center justify-center text-xs bg-red-500 font-bold absolute -top-2.5 -right-3">
                  {totalQty}
                </span>
              )}
            </span>
            Cart
          </button>
        </nav>
      </Container>
      {isOpen && (
        <Model modelClose={modelClose}>
          <Cart />
        </Model>
      )}
    </header>
  );
}

export default Header;
