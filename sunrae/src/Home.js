//this contains the Home(body) code

import React from "react";
import "./Home.css";
import Product from "./Product";

var banner = require("../src/images/banner1.jpg");

function Home() {
  return (
    <div className="home__background">
      <div className="home">
        <div className="home__container">
          {/* banner */}
          <img className="home__image" src={banner} />

          <div className="home__row">
            {/*products */}
            <Product />
            {/*products */}
            <Product />
            {/*products */}
            <Product />
          </div>

          <div className="home__row">
            {/*products */}
            <Product />
            {/*products */}
            <Product />
            {/*products */}
            <Product />
          </div>

          <div className="home__row">
            {/*products */}
            <Product />
            {/*products */}
            <Product />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
