import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Buyer from "./pages/Buyer";
import Seller from "./components/form/signup/Seller";
import HelpCenter from "./pages/HelpCenter";
import TrackOrder from "./pages/TrackOrder";
import Policy from "./pages/Policy";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/buyer" element={<Buyer />} />
          <Route path="/signup/seller" element={<Seller />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/order" element={<TrackOrder />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
