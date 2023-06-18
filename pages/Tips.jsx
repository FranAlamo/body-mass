import React from "react";
import "../styles/tips.css";
import Healthy from "../src/assets/icons/healthy.svg";
import Excercise from "../src/assets/icons/excercise.svg";
import Sleep from "../src/assets/icons/sleep.svg";
const Tips = () => {
  return (
    <div class="container-tips">
      <div class="box-one">
        <img src={Healthy} alt="Healthy" className="icon-tips" />
        <h3 className="box-title">Healthy eating</h3>
        <p className="description-box">
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood
        </p>
      </div>

      <div class="box-two">
        <img src={Excercise} alt="Healthy" className="icon-tips" />
        <h3 className="box-title">Regular excercise</h3>
        <p className="description-box">
          Exercise improves fitness, aids weight control, elevates mood, and
          reduce disease risk, fostering weilness and longevity
        </p>
      </div>

      <div class="box-three">
        <img src={Sleep} alt="Healthy" className="icon-tips" />
        <h3 className="box-title">Adequate sleep</h3>
        <p className="description-box">
          Sleep enhances mental clarity, emotional stability, and physical
          weliness, promoting overall restoration and rejuvenation
        </p>
      </div>
    </div>
  );
};

export default Tips;
