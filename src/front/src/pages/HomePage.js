import React from "react";

import './HomePage.css';

import Layout from "../components/Layout";
import { Footer } from "../components/Footer";

export const HomePage = () => {

  return (
    <div className="HomePage">
      <Layout />
      <div className="book-image"><h1>CAR</h1></div>
      <Footer />
    </div>
  );
}