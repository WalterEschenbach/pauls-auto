import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import GoogleApiWrapper from "./components/Location";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Nav />
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/location" component={GoogleApiWrapper}></Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
