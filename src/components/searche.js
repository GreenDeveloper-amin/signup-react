import React, { Component } from "react";

export default class searche extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  inputHandler = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div className="bg-slate-800 h-[400px] items-center my-24 flex justify-between space-x-10 px-[5%]">
        <div className="text-white text-5xl w-full text-center">
          <p>searche products for you</p>
        </div>
        <div className="w-2/3">
          <input
            type="text"
            value={this.state.text}
            onChange={this.inputHandler}
            placeholder="Searche . . ."
            className=" rounded-sm px-3 py-2 outline-none w-full"
          />
        </div>
      </div>
    );
  }
}
