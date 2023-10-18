import React from "react";
import "./Login.css";

export default function Login(){
    return(
      <div className="login-container">
        <div className="login-bg">
        <div className="login">
        <h1 className="log-txt">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button className="logButt" type="submit">Login</button>
        </form>
      </div>
      <div className="login-card">
        <h1 className="txt-1">Hello there.</h1>
          <p className="txt-2"><span>Welcome to Coding Juntion.</span></p>
        <div className="train-logo">
          <img src={require('../../Assets/Logo/vector.png')} alt="Photu" />
        </div>
        <p className="txt-3">
            <ul></ul>
            <li>Get.</li>
            <li>Set.</li>
            <li>Code.</li>
          </p>
      </div>
      </div>
      </div>
    )
}