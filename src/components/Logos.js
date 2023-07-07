import React, { Component } from "react";
import Apple from "./../images/apple.jpg";
import Samsung from "./../images/samsung.jpg";
import Xiaomi from "./../images/xiaomi.png";

export default class Logos extends Component {
  render() {
    return (
      <div className="w-full flex justify-between items-center px-[5%] my-12">
        <img className="w-[300px] " src={Apple} alt="logo" />
        <img className="w-[300px] " src={Samsung} alt="logo" />
        <img className="w-[300px] " src={Xiaomi} alt="logo" />
      </div>
    );
  }
}
