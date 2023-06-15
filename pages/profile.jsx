import React from "react";
import Photo from "../src/assets/photo/man.jpg";
import "../styles/profile.css";

function Profile() {
  return (
    <section className="container">
      <div className="info-container">
        <div className="title">What your BMI result means</div>
        <p className="description">
          A BMI range of 18.5 to 24.9 is considered a "healthy weight".
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
      <div className="photo-container">
        <img src={Photo} alt="Profile" className="photo" />
      </div>
    </section>
  );
}

export default Profile;
