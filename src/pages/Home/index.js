// Home page

// import { useFetchJsonAbort } from "@ivbrajkovic/react-hooks";

// Material-UI
// import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

// Product List
import ProductList from "../../components/ProductList";

// const storeId = process.env.REACT_APP_STORE_ID;
// const baseUrl = process.env.REACT_APP_BASE_URL_API;

const HomePage = () => {
  // const [{ data, error, loading }] = useFetchJsonAbort(
  //   `${baseUrl}/stores/${storeId}/products`,
  //   {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: "string",
  //       category: "string",
  //       price: 0,
  //       employee: "string",
  //       description: "string",
  //     }),
  //   }
  // );

  return (
    <Box p={2}>
      <h3>Home page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vitae
        cum nostrum obcaecati eligendi eos suscipit fugiat excepturi beatae,
        praesentium adipisci reiciendis tempore. Itaque ducimus sint non numquam
        illo iure.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vitae
        cum nostrum obcaecati eligendi eos suscipit fugiat excepturi beatae,
        praesentium adipisci reiciendis tempore. Itaque ducimus sint non numquam
        illo iure.
      </p>
      {/* {error && <h3>{error}</h3>} */}

      <ProductList />
    </Box>
  );
};

export default HomePage;
