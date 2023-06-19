import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile.jsx";
import Limitations from "../pages/Limitations.jsx";
import Tips from "../pages/Tips.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Home />

      <Profile />

      <Tips />

      <Limitations />
    </div>
  );
};

export default App;
