import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

export default function Registration()
{
    return(
    
      <div className="register-container">
         <div className="register-bg">
          <div className="register">
        <h1 className="reg-txt">Registration</h1>
        <form action="#" className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required/>
          </div>

           <div className="input-box">
            <label>Email id</label>
            <input type="email" placeholder="Enter Email id" required/>
          </div>
            <div className="input-box">
            <label>Whatsapp No</label>
            <input type="number" placeholder="Enter Whatsapp no" required/>
            </div> 

          <div className="column">
          <div className="select-box">
            <div className="sb-yr">
            <select className="op">
              <option hidden>Year</option>
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
              <option>Forth</option>
            </select>
            </div>
          </div>
          <div className="select-box">
            <div className="sb-br">
            <select className="op">
              <option hidden>Stream</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EE</option>
              <option>CE</option>
              <option>CSE</option>
            </select>
            </div>
          </div>
          </div>
          
            <div className="input-box">
            <label>Roll no</label>
            <input type="text" placeholder="Enter roll no" required/>
             </div>

          <div className="gender-box">
            <label>Gender</label>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" checked/>
                <label for="check-male">  Male</label>
              </div>
               <div className="gender">
                <input type="radio" id="check-female" name="gender"/>
                <label for="check-female">  Female</label>
              </div>
               <div className="gender">
                <input type="radio" id="check-other" name="gender"/>
                <label for="check-other">  Prefer not to say</label>
              </div>
            </div>
          </div>

          {/* <div className="cr-className">
            <h3>Are you CR of the class?</h3>
            <div className="option">
              <div className="cr">
                <input type="radio" id="check-yes" name="cr"/>
                  <label for="check-yes">Yes</label>
              </div>
               <div className="cr">
                <input type="radio" id="check-no" name="cr"/>
                  <label for="check-no">No</label>
              </div>
            </div>
          </div> */}

            {/* <div className="input-box">
              <div className="ip-abt">
                <label>About you</label>
                <input id="abt-u" type="text"/>
              </div>
             </div> */}

             
           <div className="input-box">
            <label>Set Password</label>
            <input type="text" placeholder="Enter password" required/>
          </div>

          
           <div className="input-box">
            <label>Confirm Password</label>
            <input type="text" placeholder="Re-enter password" required/>
          </div>
            <Link to='/underConstruction'><button className="reg-but" type="submit">Register</button></Link> 
        </form>
          </div>
          <p className="txt"> Already have account? <a href="/login">login</a> here</p>
          </div>
      </div>
    )
}