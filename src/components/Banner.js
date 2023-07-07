import React, { Component } from "react";
import BannerImage from "./../images/banner.jpg";
export default class Banner extends Component {
  render() {
    return (
      <section className="relative -z-20">
        <img src={BannerImage} className=" w-full" alt="bannerimage" />
        <div className="absolute top-1/2 right-1/2 -translate-y-1/2 text-5xl space-y-6">
          <p>GreenDeveloper</p>
          <p className="text-2xl">im learning react.js</p>
        </div>
      </section>
    );
  }
}
