import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {RiArrowDropDownLine} from "react-icons/ri"

const NavBar = ({ allCategoryName, clothesCategoryName, techCategoryName }) => {
  return (
    <header className="navbar-header">
      <nav className="navbar--nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="/">{allCategoryName}</a>
          </li>
          <li className="nav-li">
            <a href="/clothes">{clothesCategoryName}</a>
          </li>
          <li className="nav-li">
            <a href="/tech">{techCategoryName}</a>
          </li>
        </ul>
      </nav>
      <div className="navbar--logo">
        <img src="/" alt="" />
      </div>

      <div className="navbar--cart-sign">
        <span className="navbar--currency-sign">
          $
          <RiArrowDropDownLine />
          </span>
        <span className="navbar--cart-icon">
          <FaShoppingCart />
        </span>
      </div>
    </header>
  );
};

export default NavBar;
