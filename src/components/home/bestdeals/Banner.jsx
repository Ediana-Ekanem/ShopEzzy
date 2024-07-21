import React from "react";
import cart from "/assets/icons/cart.svg";
import available from "/assets/icons/available.svg";
import secure from "/assets/icons/secure.svg";
import payment from "/assets/icons/payment.svg";
import logistics from "/assets/icons/logistics.svg";
import Container from "../../container/Container";
import { FaPlusCircle } from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="flex justify-between items-center py-5  ">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center">
              <BiSolidMessageSquareAdd className="text-red-600 text-2xl md:text-5xl" />
              <p className="text-sm text-red-600 font-semibold mt-1">
                Post Ads
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaPlusCircle className="text-green-600 text-2xl md:text-5xl" />
              <p className="text-sm text-green-600 font-semibold mt-1">
                Post Items
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-8 md:w-20">
              <img src={cart} alt="cart-logo" className="w-full h-full" />
            </div>
            <p className="font-semibold hidden md:block">Affordable Goods</p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-8 md:w-20 ">
              <img src={payment} alt="payment-logo" className="w-full h-full" />
            </div>
            <p className="font-semibold hidden md:block ">
              Easy/Safe Payment Goods
            </p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-8 md:w-20">
              <img
                src={logistics}
                alt="logistics-logo"
                className="w-full h-full"
              />
            </div>
            <p className="font-semibold hidden md:block">Effective logistics</p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-8 md:w-20">
              <img src={secure} alt="secure-logo" className="w-full h-full" />
            </div>
            <p className="font-semibold hidden md:block">Secure </p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-8 md:w-20">
              <img
                src={available}
                alt="available-logo"
                className="w-full h-full"
              />
            </div>
            <p className="font-semibold hidden md:block">Available/24/7 </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
