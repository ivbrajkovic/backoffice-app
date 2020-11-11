// Store reducer

import { GET_ALL_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "../types";

export const defaultState = {
  products: [],
  error: "",
  loading: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS: {
      return state;
    }
    case ADD_PRODUCT: {
      return { ...state, products: [...state.products, payload] };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((product) => product.title === payload),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
