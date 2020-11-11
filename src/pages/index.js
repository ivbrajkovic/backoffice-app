// Pages

import HomePage from "./Home";
import ChartPage from "./Chart";

// Routes => Compoonents
export default [
  { name: "Home", path: "/", Component: HomePage },
  { name: "Chart", path: "/chart", Component: ChartPage },
];
