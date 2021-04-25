import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Taplink from "./components/taplink"

export default function App() {
  return (
      <Router>
        <Taplink />
      </Router>
  );
}
