// App - application

import { BrowserRouter as Router } from "react-router-dom";

// Material-UI
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

// State provider
import { StoreProvider } from "../../context";

// Pages
import Routes from "../../routes";

// Components
import Appbar from "../../components/Appbar";

const App = () => (
  <Router>
    <Appbar />
    <Container>
      <Box position="relative">
        <StoreProvider>
          <Routes />
        </StoreProvider>
      </Box>
    </Container>
  </Router>
);

export default App;
