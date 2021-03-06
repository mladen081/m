import { useEffect, React, useState } from "react";

import { Outlet, Link } from "react-router-dom";

import Layout from "../components/Layout";
import { Footer } from "../components/Footer";
import "./AuthorsPage.css";

export const AuthorsPage = () => {

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
    a.push(atitles[key].author);
  }

  let uniqueAuthors = [...new Set(a)].sort();

  if (!atitles) return null;

  return (
    <div className="AuthorsPage">
      <Layout />
      <div className="authors">
        <ul className="athors-list">
          {uniqueAuthors.map(author => (
            <li key="{author}">
              <Link to={`/atitles/${author}`}>{author}</Link>
              {/* <button onClick={() => console.log(author)}>A</button> */}

            </li>
          ))}
        </ul>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
}