import React, { Component } from "react";
import axios from "axios";
import Card from "./card";
import Loading from "./Loading";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [],
    };
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((Response) =>
      this.setState(
        {
          Products: Response.data,
        },
        () => {}
      )
    );
  }
  render() {
    const { Products } = this.state;
    return (
      <div className="w-[95%] px-2 py-2 my-12 mx-auto  flex justify-center items-center flex-wrap mt-[10%] h-full rounded-sm min-h-[100vh]  bg-blue-50">
        {Products.length > 0 ? (
          Products.map((Product) => (
            <Card
              key={Product.id}
              name={Product.title}
              price={`${Product.price}$`}
              image={Product.image}
              id={Product.id}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
