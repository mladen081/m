import { useEffect, React, useState } from "react";
import { useParams } from "react-router-dom";

import "./AuthorsTitlesPage.css";

import Layout from "../components/Layout";
import { Footer } from "../components/Footer";

export const AuthorsTitlesPage = (props) => {

  const [atitles, setATitles] = useState();

  const params = useParams();

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

  let bookId = [];
  let title = [];
  let country = [];

  for (const key in atitles) {

    if (atitles[key].author === params.authors) {
      bookId.push(atitles[key].bookId);
      title.push(atitles[key].title);
      country.push(atitles[key].country);
    }
  }

  if (!atitles) return null;

  return (
    <div className="AuthorsTitlesPage">
      <Layout />
      <div className="titles">
        {title.map(title => (
          <p>
            {title}
          </p>
        ))}
      </div>
      <Footer />
    </div>
  );
}