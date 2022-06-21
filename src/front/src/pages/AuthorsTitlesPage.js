import { useEffect, React, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
        setATitles(data);
      };
      fetchTitles();
    },
    [] // when to run useEffect (when the components loads)
  );

  let title = [];

  for (const key in atitles) {

    if (atitles[key].author === params.authors) {
      title.push([atitles[key].title, atitles[key].bookId]);
    }
  }

  if (!atitles) return null;

  return (
    <div className="AuthorsTitlesPage">
      <Layout />
      <div className="titles">
        <div className="section-header">
          <h1>{params.authors}</h1>
        </div>
        <div className="books">
          {title.map(title => (
            <div className="one-title">
              <p>
                {title[0]}
              </p>
              <p>
                {title[1]}
              </p>
            </div>
          ))}
        </div>
        <Link to={`/authors`} className="back">Back</Link>
      </div>
      <Footer />
    </div>
  );
}