import { products } from "../../data";

const initialState = {
  products: products,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
