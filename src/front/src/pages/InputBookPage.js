import React from "react";

import Layout from "../components/Layout";
import AddBookForm from "../components/AddBookForm";
import { Footer } from "../components/Footer";

export const InputBookPage = () => {
  return (
    <div className="InputBookPage">
      <Layout />
      <AddBookForm />
      <Footer />
    </div>
  );
}