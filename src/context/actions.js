// Context actions

import { fetchJsonAbortCb } from "@ivbrajkovic/utils";

import {
  SET_LOADING,
  SET_ERROR,
  // GET_ONE_PRODUCT,
  // GET_ALL_PRODUCTS,
  // GET_NEXT_PRODUCTS,
  // ADD_PRODUCT,
  // DELETE_PRODUCT,
  INIT_STATE,
} from "./types";

const url = "https://api.chucknorris.io/jokes/random";

const setLoadingAction = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

const setErrorAction = (error) => ({
  type: SET_ERROR,
  payload: error,
});

// const addProductAction = (product) => ({
//   type: ADD_PRODUCT,
//   payload: product,
// });

// export const addProductAction = (dispatch) => async (count) => {
//   console.log("addProductAction -> count", count);

//   dispatch(setLoadingAction(true));

//   fetchJsonAbortCb(url, (error, data) => {
//     if (error) dispatch(setErrorAction(error));
//     else
//       dispatch({
//         type: ADD_NEXT_PRODUCT,
//         payload: data,
//       });
//   });
// };

// export const getNextProductsAction = (dispatch) => async (count) => {
//   console.log("getNextProductsAction -> count", count);

//   dispatch(setLoadingAction(true));

//   fetchJsonAbortCb(url, (error, data) => {
//     if (error) setErrorAction(error);
//     else addNextProductsAction(data);
//   });
// };

export const initStateAction = (dispatch) => async (count) => {
  console.log("initStateAction -> count", count);

  dispatch(setLoadingAction(true));

  fetchJsonAbortCb(url, (error, data) => {
    console.log("initStateAction -> data", data);
    if (error) setErrorAction(error);
    else dispatch({ type: INIT_STATE, payload: [JSON.parse(data).value] });
  });
};

export const deleteProductAction = () => {};
