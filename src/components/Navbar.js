import React, { Component } from "react";
import Logo from "./../images/Logo.png";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="absolute top-0 right-0 w-full">
        <div className="flex justify-between items-center py-2 px-[2%] z-50 backdrop-blur-lg ">
          <article>
            <ul className="flex text-xl ">
              <Link to="/">
                <li className="hover:text-white hover:bg-green-300 transition-all duration-300 px-8 py-3 rounded ">
                  Home
                </li>
              </Link>
              <Link to="/Products">
                <li className="hover:text-white hover:bg-green-300 transition-all duration-300 px-8 py-3 rounded ">
                  Products
                </li>
              </Link>
              <Link to="/aboutus">
                <li className="hover:text-white hover:bg-green-300 transition-all duration-300 px-8 py-3 rounded ">
                  About Us
                </li>
              </Link>
            </ul>
          </article>
          <article>
            <img src={Logo} alt="logo" className="rounded-[50%] w-[80px]" />
          </article>
        </div>
      </div>
    );
  }
}
