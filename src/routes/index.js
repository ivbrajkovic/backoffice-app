// Router

import { Route, Switch } from "react-router-dom";

// Framer motion
import { AnimatePresence } from "framer-motion";

// Application pages
import pages from "../pages";

// Transitions
import PageTransition from "../montion/PageTransition";

const Routes = () => (
  <Route>
    {({ location }) => (
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {pages.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <PageTransition>
                <Component />
              </PageTransition>
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
    )}
  </Route>
);

export default Routes;
