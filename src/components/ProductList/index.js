// Product list

import { useEffect } from "react";

// Fetch helper
// import { useFetchJsonAbort } from "@ivbrajkovic/react-hooks";

// State context
import { useStoreState } from "../../context";

import Product from "../Product";

const ProductList = () => {
  const { products, error, loading } = useStoreState();
  useEffect(() => {}, []);

  return (
    <div>
      <Product />
      Product List
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {Array.isArray(products) &&
        products.map(({ title }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{title || "no title"}</div>
        ))}
    </div>
  );
};

export default ProductList;
