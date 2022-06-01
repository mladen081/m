import { useEffect, React, useState, useLayoutEffect } from "react";
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

  // useLayoutEffect(() => {
  //   let mounted = true;
  //   console.log(params);
  //   return () => (mounted = false);
  // }, []);


  let a = [];

  for (const key in atitles) {

    if (atitles[key].author === params.authors) {
      a.push(atitles[key].title);
    }
  }

  if (!atitles) return null;

  return (
    <div className="AuthorsTitlesPage">
      <Layout />
      <div className="titles">
        {a.map(title => (
          <p key="{title}">
            {title}
          </p>
        ))}
      </div>
      <Footer />
    </div>
  );
}