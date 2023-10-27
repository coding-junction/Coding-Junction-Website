import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export default function Nav() {

  const [showMenu, setShowMenu] = useState(false);


  return (
    <>
    <div className="nav">
      <div className="logo">
        <img src={require("../../Assets/Logo/club-logo.png")} />
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
            <Link to='/'>
              <button>HOME</button>
            </Link>
          </li>
          <li>
            <Link to='/underConstruction'>
              <button>APP</button>
            </Link>
          </li>
          <li>
            <Link to='/underConstruction'>
              <button>OUR TEAM</button>
            </Link>
          </li>
          <li>
            <Link to='/underConstruction'>
              <button>CONTACT US</button>
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <button className="register-btn">REGISTER</button>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <button className="login-btn">LOGIN</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-burger">
        {showMenu ?
          <>
            <div>
              <button onClick={() => {
                setShowMenu(!showMenu)
              }}>&#8904;</button>
            </div>
            <div className="burger-menu">
              <ul>
                <li>
                  <Link to='/'>
                    <button>HOME</button>
                  </Link>
                </li>
                <li>
                  <Link to='/underConstruction'>
                    <button>APP</button>
                  </Link>
                </li>
                <li>
                  <Link to='/underConstruction'>
                    <button>OUR TEAM</button>
                  </Link>
                </li>
                <li>
                  <Link to='/underConstruction'>
                    <button>CONTACT US</button>
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <button className="register-btn">REGISTER</button>
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    <button className="login-btn">LOGIN</button>
                  </Link>
                </li>
              </ul>
            </div>
          </>
          :
          <button onClick={() => {
            setShowMenu(!showMenu)
          }}>&equiv;</button>
        }
    </div>
    </>
  );
}
