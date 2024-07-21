import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
// import Shop from "./pages/Shop";
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
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
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
        <Route path="/post" element={<Post />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
