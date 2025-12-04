import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <Toaster toastOptions={{ duration: 800 }} />
      <div className="font-Inter">
        <Header />
        <Products />
      </div>
    </CartProvider>
  );
}

export default App;
