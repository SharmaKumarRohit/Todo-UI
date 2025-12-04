import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload.newCartItem];
    }
    case "INCREASE_QTY": {
      return cart.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    case "DECREASE_QTY": {
      return cart.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
    case "DELETE_CART_ITEM": {
      return cart.filter((cartItem) => cartItem.id !== action.payload.id);
    }
  }
  return cart;
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addToCartItem = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: { newCartItem } });
  };
  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: { id } });
  };
  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: { id } });
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_CART_ITEM", payload: { id } });
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCartItem, increaseQty, decreaseQty, handleDelete }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
