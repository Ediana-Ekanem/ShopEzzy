import { atom, selector } from "recoil";

export const cartState = atom({
  key: cartState,
  default: [],
});

export const cartCoutState = selector({
  key: "cartCoutState",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  },
});
