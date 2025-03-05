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
          Welcome to our pizzeria, where passion for authentic flavors meets
            high-quality ingredients. Our journey began with a simple goal: to
            create the best handmade pizzas using fresh, locally sourced produce
            and traditional recipes. Every pizza is crafted with love, from the
            dough made fresh daily to the rich tomato sauce and perfectly melted
            cheese.
          </p>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
