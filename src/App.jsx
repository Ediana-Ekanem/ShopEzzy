import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Buyer from "./pages/Buyer";
import Seller from "./components/form/signup/Seller";
import HelpCenter from "./pages/HelpCenter";
import TrackOrder from "./pages/TrackOrder";
import Policy from "./pages/Policy";
import Cart from "./pages/Cart";
import Electronic from "./pages/category/Electronic";
import Fashion from "./pages/category/Fashion";
import Health from "./pages/category/Health";
import Sports from "./pages/category/Sports";
import Toy from "./pages/category/Toy";
import Books from "./pages/category/Books";
import Groceries from "./pages/category/Groceries";
import Babies from "./pages/category/Babies";
import Pet from "./pages/category/Pet";
import Office from "./pages/category/Office";
import Furniture from "./pages/deals/Furniture";
import Checkout from "./components/checkout/Checkout";
import PostAddForm from "./components/form/post/PostAddForm";
import PostItemForm from "./components/form/post/PostItemForm";
import MobileGadgets from "./components/home/bestdeals/mobilegadgets/MobileGadgets";
import MobileGadDetails from "./components/home/bestdeals/mobilegadgets/MobileGadDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/buyer" element={<Buyer />} />
          <Route path="/signup/seller" element={<Seller />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/order" element={<TrackOrder />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/health" element={<Health />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/toys" element={<Toy />} />
          <Route path="/books" element={<Books />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/babies" element={<Babies />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/office" element={<Office />} />
          <Route path="/furniture-deals" element={<Furniture />} />
          <Route path="/postAd" element={<PostAddForm />} />
          <Route path="/postItems" element={<PostItemForm />} />
          <Route path="/mobile-gadgets" element={<MobileGadgets />} />
          <Route path="/mobile-gadgets/:id" element={<MobileGadDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
