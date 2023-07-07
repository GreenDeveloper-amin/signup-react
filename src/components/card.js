import React, { Component } from "react";
import Up from "./../images/up.svg";
import Down from "./../images/down.svg";
import { Link } from "react-router-dom";
export default class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumProduct: 0,
    };
  }

  up = () => {
    this.setState((prevState) => ({ NumProduct: prevState.NumProduct + 1 }));
  };
  down = () => {
    this.state.NumProduct >= 1 &&
      this.setState((prevState) => ({
        NumProduct: prevState.NumProduct - 1,
      }));
  };
  render() {
    const { name, image, price, id } = this.props;
    const { NumProduct } = this.state;
    const priceNumber = Math.floor(price.split("$")[0]);
    return (
      <div className="rounded hover:shadow-xl w-2/12 hover:shadow-green-300 shadow transition-all duration-300 overflow-hidden mx-4 my-4  ">
        <Link
          to={`/products/${id}`}
          className="flex justify-center items-center h-[300px]   relative bg-white">
          <img
            src={image}
            alt="iphone10"
            className="rounded-t 0 w-full h-full bg black transition-all  duration-300"
          />
        </Link>
        <div className="flex justify-between relative bg-white">
          <div>
            <p className="ml-4 mt-3 text-base font-semibold h-28">{name}</p>
            <p className="ml-4 my-2 text text-blue-400 ">{`${
              !NumProduct ? `${priceNumber}$` : priceNumber * NumProduct
            }${NumProduct ? "$" : ""}`}</p>
          </div>

          <div className="flex space-x-5 justify-end cursor-default  mr-2 items-end mb-1 ">
            <img
              src={Up}
              alt="arrowUp"
              onClick={this.up}
              className="h-8 hover:bg-blue-300 transition-all duration-200 cursor-pointer rounded-[50%]"
            />
            <span className="underline">{NumProduct}</span>
            <img
              src={Down}
              alt="arrowUp"
              onClick={this.down}
              className={`h-8 hover:bg-blue-300 transition-all duration-200 cursor-pointer rounded-[50%] 
              ${NumProduct < 1 && "opacity-[.4] cursor-not-allowed"}
              `}
            />
          </div>
        </div>
        <button className="border-t w-full h-[50px] hover:bg-green-300 hover:text-white transition-all duration-200 hover:text-xl bg-white">
          add to bag
        </button>
      </div>
    );
  }
}
