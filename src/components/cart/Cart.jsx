// src/components/cart/Cart.js

import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../atoms/cartState";
import { useCart } from "../cart/useCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
// import Container from "../../components/container";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const { incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.currentAmt * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div>
      <ToastContainer />

      <div className="md:flex my-10 bg-blue-400 rounded-t-md px-10 py-5">
        <h3 className="text-2xl text-white font-semibold">Cart</h3>
      </div>

      <Container>
        {cart.length === 0 ? (
          <p className="flex justify-center text-lg">Your cart is empty</p>
        ) : (
          <div className="flex flex-col">
            <ul className="mb-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between mb-4 p-4 bg-white shadow rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover mr-4 rounded"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        #{item.currentAmt} x {item.quantity}
                      </p>
                      <div className="flex items-center mt-2">
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents click event from triggering the item click
                            decrementQuantity(item.id);
                          }}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents click event from triggering the item click
                            incrementQuantity(item.id);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    #{item.currentAmt * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg mb-4">
              <h4 className="text-xl font-bold">Total:</h4>
              <p className="text-2xl font-semibold">#{calculateTotal()}</p>
            </div>
            <div className="flex justify-center">
              <button
                className="py-2 px-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 mb-5"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
