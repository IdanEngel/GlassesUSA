import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import { Route, BrowserRouter as Router } from "react-router-dom";

import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Sunglasses" component={Pricing} />
      </Router>
    </div>
  );
}

export default App;
