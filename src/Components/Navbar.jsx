import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section id="navSection">
      <article>
        <div className="logoBlock">
          <Link to="#">Students app</Link>
        </div>
        <div className="menuBlock">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/createstudent">CreateStudent</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
