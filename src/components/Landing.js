import React, { Component } from "react";
import Banner from "./Banner";
import Cards from "./cards";
import Searche from "./searche";
import Logos from "./Logos";

export default class Landing extends Component {
  render() {
    return (
      <>
        <Banner />
        <Cards />
        <Searche />
        <Logos />
      </>
    );
  }
}
