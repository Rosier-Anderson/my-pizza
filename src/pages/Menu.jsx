import React from "react";
import "../styles/Menu.scss";
//  gets all images in the ../assets/menu folder.
const importAllImages = (context) =>
  context.keys().map((fileName, index) => ({
    src: fileName.replace("./", "").split(" ")[0], // Extracts the file name without "./"
    id: index + 1, // Uses the index for a unique ID starting from 1
  }));

const files = importAllImages(
  require.context("../assets/menu", false, /\.(png|jpe?g|svg)$/)
);

export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menu__header">Our Menu</h1>
      <div className="menu__grid">
        {products(files).map((card, index) => {
          return <ProductCard {...card} key={index} />;
        })}
      </div>
    </div>
  );
}
// This function maps over the images array and adds corresponding prices and product names
// It combines the images with their respective prices and titles into a product list
const products = (files) => {
  // Array of product prices
  const prices = [
    "15.99$",
    "18.99$",
    "20.99$",
    "$17.99",
    "$22.99",
    "$19.99",
    "$16.99",
    "$21.99",
    "$23.99",
  ];

  // Array of product names (pizza types)
  const productNames = [
    "Margherita Pizza",
    "Pepperoni Pizza",
    "BBQ Chicken Pizza",
    "Veggie Supreme",

    "Meat Lovers",
    "Hawaiian Pizza",
    "Cheese Pizza",
    "Buffalo Chicken Pizza",
    "Supreme Pizza",
  ];

  // Map over the images array, returning an object with id, img, price, and name for each product
  return files.map((image, index) => ({
    id: index, // Unique id for each product
    img: require(`../assets/menu/${image.src}`), // Dynamically require images
    price: prices[index], // Price fetched from the prices array
    name: productNames[index], // Product name fetched from the productNames array
  }));
};
console.log(products(files));
// Component to display individual product card with image, title, and price
const ProductCard = ({ img, price, name }) => (
  <article className="menu__card">
    <section className="menu__item">
      <figure className="menu__item__figure">
        {/* Displaying product image */}
        <img src={img} className="menu__item__image" alt="This a pizza" />
      </figure>
      {/* Displaying product title (name) */}
      <p className="menu__item__name">{name}</p>
      {/* Displaying product price */}
      <p className="menu__item__price">{price}</p>
    </section>
  </article>
);
