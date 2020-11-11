// Store reducer

import {
  INIT_STATE,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_ERROR,
  SET_LOADING,
} from "./types";

export const defaultState = {
  products: [],
  length: 0,
  error: "",
  loading: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case INIT_STATE: {
      const { products, length } = payload;
      return { ...defaultState, products, length };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        error: "",
        loading: payload,
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        error: "",
        loading: false,
        products: [...state.products, payload],
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        error: "",
        loading: false,
        products: state.products.filter((product) => product.title === payload),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
