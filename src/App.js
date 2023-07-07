import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Route, Routes, Navigate } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import Notfound from "./components/Notfound";
import Aboutus from "./components/Aboutus";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<DetailsPage />} />
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
