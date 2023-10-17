import React from "react";
import "./Login.css";

export default function Login(){
    return(
      <div className="login-container">
        <div className="login-bg">
        <div className="login">
        <h1>Login</h1>
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
      <div className="login-card"></div>
      </div>
      </div>
    )
}