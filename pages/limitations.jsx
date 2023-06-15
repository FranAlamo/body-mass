import React from "react";
import "../styles/limitations.css";
import Gender from "../src/assets/icons/gender.svg";
import Age from "../src/assets/icons/age.svg";
import Muscle from "../src/assets/icons/muscle.svg";
import Pregnancy from "../src/assets/icons/pregnancy.svg";
import Race from "../src/assets/icons/race.svg";
function Limitations() {
  return (
    <section className="limitations-container">
      <div className="limitation-text">
        <h2 className="title-limitations">Limitations of BMI</h2>
        <p className="info-limitations">
          Although BMI is often a practical indicator of healthy weight, it is
          not <br />
          suited for every person. Specific groups should carefully consider
          their <br /> BMI outcomes, and in certain cases, the measurement may
          not be <br />
          beneficial to use.
        </p>
      </div>
      <div className="factors-container">
        <div className="factors" id="gender">
          <div>
            <img src={Gender} alt="icon-gender" />
            <h3>Gender</h3>
          </div>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="factors" id="age">
          <div>
            <img src={Age} alt="icon-age" />
            <h3>Age</h3>
          </div>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className="factors" id="muscle">
          <div>
            <img src={Muscle} alt="icon-muscle" />
            <h3>Muscle</h3>
          </div>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className="factors" id="pregnancy">
          <div>
            <img src={Pregnancy} alt="icon-pregnancy" />
            <h3>Pregnancy</h3>
          </div>
          <p>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className="factors" id="race">
          <div>
            <img src={Race} alt="icon-race" />
            <h3>Race</h3>
          </div>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Limitations;
