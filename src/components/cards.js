import React, { Component } from "react";
import Card from "./card";
import Iphone10 from "./../images/iphone10.jpg";
import Iphone11 from "./../images/iphone11.jpg";
import Iphone12 from "./../images/iphone12.jpg";
import S21 from "./../images/s21.jpg";

export default class cards extends Component {
  render() {
    return (
      <div className="w-[95%] px-2 py-2 my-12 mx-auto  flex justify-center items-center flex-wrap">
        <Card image={Iphone12} price="1200 $" name="Iphone12 pro" id={1} />
        <Card image={S21} price="600 $" name="S21" id={2} />
        <Card image={Iphone11} price="900 $" name="Iphone11" id={3} />
        <Card image={Iphone10} price="800 $" name="Iphone10" id={4} />
        <Card image={Iphone11} price="1100 $" name="Iphone11 pro" id={5} />
        <Card image={Iphone12} price="1000 $" name="Iphone12" id={6} />
      </div>
    );
  }
}
