import React from "react";
import "../styles/home.css";
import Circle from "../src/assets/icons/circle.svg";

const Home = () => {
  return (
    <section className="main-container">
      <div className="one-main">
        <img src={Circle} alt="Circle" className="circle" />
        <h1 className="title-body">Body Mass</h1>
        <h1 className="title-body">Index Calculator</h1>
        <p className="description-calculator">
          Better understand your weight in relation to your height using <br />{" "}
          our body mass index (BM) calculator. While BMI is not the <br /> sole
          determinant to healthy weight, it offers a valuable <br /> starting
          point evaluate your overall health and well-being.
        </p>
      </div>
      <div className="two-main">Calculadora</div>
    </section>
  );
};

export default Home;
