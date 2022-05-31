import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ allCategoryName, clothesCategoryName, techCategoryName }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">{allCategoryName}</a>
          </li>
          <li>
            <a href="/clothes">{clothesCategoryName}</a>
          </li>
          <li>
            <a href="/tech">{techCategoryName}</a>
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
