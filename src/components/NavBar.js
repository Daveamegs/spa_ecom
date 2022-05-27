import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Tech</a>
          </li>
        </ul>
      </nav>
      <div>
        <img src="/" alt="" />
      </div>

      <div>
        <span>$</span>
        <span>
          <FaShoppingCart />
        </span>
      </div>
    </header>
  );
};

export default NavBar;
