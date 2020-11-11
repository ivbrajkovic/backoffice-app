// Product

import { useStoreDispatch } from "../../context";
import { ADD_PRODUCT } from "../../context/types";

const Product = () => {
  const dispatch = useStoreDispatch();
  const clickHandler = () =>
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        title: "test title",
      },
    });

  return (
    <div>
      <button onClick={clickHandler} type="button">
        Add Product
      </button>
    </div>
  );
};

export default Product;
