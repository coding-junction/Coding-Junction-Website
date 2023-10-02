import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={ require("../../Assets/Images/club-logo.png") } alt="" />
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
          <Link to = '/'>
            <button>HOME</button>
          </Link>
          </li>
          <li>
            <Link to = '/underConstruction'>
              <button>APP</button>
            </Link>
          </li>
          <li>
            <Link to = '/underConstruction'>
              <button>OUR TEAM</button>
            </Link>
          </li>
          <li>
            <Link to = '/underConstruction'>
              <button>CONTACT US</button>
            </Link>
          </li>
          <li>
            <Link to = '/underConstruction'>
              <button className="register-btn">REGISTER</button>
            </Link>
          </li>
          <li>
            <Link to = '/underConstruction'>
              <button className="login-btn">LOGIN</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
