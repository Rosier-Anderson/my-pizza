import React from "react";
import '../styles/About.scss';
import Footer from "../component/AboutFooter";

const images = require.context("../assets/menu", false, /\.(jpeg|jpg|png)$/);

export default function About() {
  return (
    <div className="about">
      <figure className="img img__box">
        <img src={images("./multiplePizzas.jpeg")} className=" img__header" alt="Multiple Pizzas" />
      </figure>
      <div className="about__content">
        <figure className=" img img__content">
          <img src={images("./makingpizza.jpeg")} className=" img__making" alt="Making Pizza" />
        </figure>
        <div className="text">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
            consequuntur tempore dolore corporis consequatur architecto pariatur
            illum fuga aperiam, unde ipsum repellendus vitae molestias sunt,
            ratione aliquid veniam cum.
          </p>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
