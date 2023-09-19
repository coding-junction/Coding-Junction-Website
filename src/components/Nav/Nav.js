import React from "react";

import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        LOGO
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
            <button>HOME</button>
          </li>
          <li>
            <button>DOMAINS</button>
          </li>
          <li>
            <button>OUR TEAM</button>
          </li>
          <li>
            <button>CONTACT US</button>
          </li>
          <li>
            <button className="register-btn">REGISTER</button>
          </li>
          <li>
            <button className="login-btn">LOGIN</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
