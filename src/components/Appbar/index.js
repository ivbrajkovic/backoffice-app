// Topbar

import { NavLink as RouterLink } from "react-router-dom";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Styles
import useStyle from "./styles";

const Topbar = () => {
  const classes = useStyle();

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container>
          <Toolbar disableGutters>
            <RouterLink exact to="/" className={classes.navLink}>
              <Typography variant="h6">Home</Typography>
            </RouterLink>

            <RouterLink to="/chart" className={classes.navLink}>
              <Typography variant="h6">Chart</Typography>
            </RouterLink>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Topbar;
