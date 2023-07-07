import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="fixed top-0 space-x-10 z-50 bg-white h-[100vh] w-full flex justify-center items-center ">
        <p className="h-[100px] w-3 bg-green-400 transition-all duration-200 rounded-md loading1"></p>
        <p className="h-[100px] w-3 bg-green-400 transition-all duration-200 rounded-md loading2"></p>
        <p className="h-[100px] w-3 bg-green-400 transition-all duration-200 rounded-md loading3"></p>
        <p className="h-[100px] w-3 bg-green-400 transition-all duration-200 rounded-md loading4"></p>
        <p className="h-[100px] w-3 bg-green-400 transition-all duration-200 rounded-md loading5"></p>
      </div>
    );
  }
}
