import React from "react";
import "./Registration.css";
export default function Registration()
{
    return(
    
      <div className="register-container">
         <div className="register-bg">
          <div className="register">
        <h1 className="reg-txt">Registration Form</h1>
        <form action="#" className="form">
          <div className="input-box">
            <lable>Full Name</lable>
            <input type="text" placeholder="Enter full name" required/>
          </div>

           <div className="input-box">
            <lable>Email id</lable>
            <input type="text" placeholder="Enter Email id" required/>
          </div>
            <div className="input-box">
            <lable>Whatsapp No</lable>
            <input type="number" placeholder="Enter Whatsapp no" required/>
            </div> 

          <div className="column">
          <div className="select-box">
            <select>
              <option hidden>Year</option>
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
              <option>Forth</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option hidden>Stream</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EE</option>
              <option>CE</option>
              <option>CSE</option>
            </select>
          </div>
          </div>
          
            <div className="input-box">
            <lable>Roll no</lable>
            <input type="text" placeholder="Enter roll no" required/>
             </div>

          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" checked/>
                <label for="check-male">Male</label>
              </div>
               <div className="gender">
                <input type="radio" id="check-female" name="gender"/>
                <label for="check-female">Female</label>
              </div>
               <div className="gender">
                <input type="radio" id="check-other" name="gender"/>
                <label for="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="cr-className">
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
          </div>
            <div className="input-box">
            <lable>About you</lable>
            <input type="text"/>
             </div>
          <button>Register</button>
        </form>
          </div>
          </div>
      </div>
    )
}