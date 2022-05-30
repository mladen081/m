import { useEffect, React, useState } from "react";

import "./AuthorsTitlesPage.css";

import Layout from "../components/Layout";
import { Footer } from "../components/Footer";

export const AuthorsTitlesPage = (props) => {

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

  let a = [];

  for (const key in atitles) {

    if (atitles[key].author === "Lav Tolstoj ") {
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