import React from "react";
import cart from "/assets/icons/cart.svg";
import available from "/assets/icons/available.svg";
import secure from "/assets/icons/secure.svg";
import payment from "/assets/icons/payment.svg";
import logistics from "/assets/icons/logistics.svg";
import Container from "../../container/Container";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="flex justify-between items-center py-10 ">
          <div className="space-y-1">
            <h3 className="font-semibold border-b-4 border-blue-500">
              Best Choices
            </h3>
            <h3 className="font-semibold border-b-4 border-yellow-400">
              Better Prices
            </h3>
            <h3 className="font-semibold border-b-4 border-black">
              Good Deals
            </h3>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-20- h-20">
              <img src={cart} alt="cart-logo" className="w-full h-full" />
            </div>
            <p className="font-semibold">Affordable Goods</p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-20- h-20">
              <img src={payment} alt="payment-logo" className="w-full h-full" />
            </div>
            <p className="font-semibold">Easy/Safe Payment Goods</p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-20- h-20">
              <img
                src={logistics}
                alt="logistics-logo"
                className="w-full h-full"
              />
            </div>
            <p className="font-semibold">Effective logistics</p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-20- h-20">
              <img src={secure} alt="secure-logo" className="w-full h-full" />
            </div>
            <p className="font-semibold">Secure </p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="w-20- h-20">
              <img
                src={available}
                alt="available-logo"
                className="w-full h-full"
              />
            </div>
            <p className="font-semibold">Available/24/7 </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
