import { Outlet, Link } from "react-router-dom";

import './Layout.css';

const Layout = () => {
  return (
    <div className="topnav-l">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/atitles/">Authors</Link>
          </li>
          <li>
            <Link to="/inputBook">Add Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;