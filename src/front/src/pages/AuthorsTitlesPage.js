import { useEffect, React, useState } from "react";

import "./AuthorsTitlesPage.css";

import Layout from "../components/Layout";
import { Footer } from "../components/Footer";

export const AuthorsTitlesPage = () => {

  const [atitles, setATitles] = useState();

  useEffect(
    () => {
      const fetchTitles = async () => {
        const response = await fetch('http://localhost:8080/getAllBooks');
        const data = await response.json();
        console.log(data);
        setATitles(data);
      };
      fetchTitles();
    },
    [] // when to run useEffect (when the components loads)
  );

  if (!atitles) return null;

  return (
    <div className="AuthorsTitlesPage">
      <Layout />
      <div className="titles">
        <p>{atitles[0].author}, {atitles[0].title}</p>
        <p>{atitles[1].author}, {atitles[1].title}</p>
        <p>{atitles[2].author}, {atitles[2].title}</p>
        <p>{atitles[3].author}, {atitles[3].title}</p>
        <p>{atitles[4].author}, {atitles[4].title}</p>
      </div>
      <Footer />
    </div>
  );
}