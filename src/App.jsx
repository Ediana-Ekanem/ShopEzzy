import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Account from "./pages/Account";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
