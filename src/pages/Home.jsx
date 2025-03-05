import React from "react";
import "../styles/Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home_inner">
          <h1 className="home_title " id="title">Anderson's Pizzeria</h1>
          <p className="home_description">PIZZA TO FIT ANY TASTE</p>
          <div className="try">
              <button className="home_order_button">
            <Link to="/menu" className="home_order_link">ORDER</Link>
            </button>
          </div>
        
        </div>
      </div>
    </>
  );
}
export default Home;
