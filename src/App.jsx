import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile.jsx";
import Limitations from "../pages/Limitations.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Profile />
      <Limitations />
    </div>
  );
};

export default App;
