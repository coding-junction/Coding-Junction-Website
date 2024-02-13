import React from 'react'
import { useState } from 'react';
import './ViewUpcomingEve.css'

function ViewUpcomingEve() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    window.scrollTo(0,0);

    const handleSubmit = () => {
        setSubmitted(true)
        setIsLoading(true)
    }

    return (
        <div className='view-upcoming-eve'>
            <div className='vue-head'>
                <h1>
                    Annual Member Inclusion Program
                </h1>
            </div>
            <div className="vue-container">
                <div className="vue-info">
                    <p>The Coding Junction Club is excited to invite all 2nd-year students with a passion for coding to join our dynamic community as a Core Member. </p>
                    <p>&nbsp;</p>
                    <p>To express your interest and become a core member of the Coding Junction Club, please fill out the Inclusion Form below :</p>
                    <p>&nbsp;</p>
                </div>
                <div className="vue-form">
                    <iframe
                        name="altCnfm"
                        id="altCnfm"
                        style={{ display: 'none' }}
                        onLoad={() => {
                            if (submitted) {
                                window.location = '/thank-you-for-your-response';
                            }
                        }}
                    ></iframe>
                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSdUOeebVKHoFI9t8WJu5aqEVJFAcimgzO3X4-Yg9Iv0zKpyMA/formResponse"
                        method="post"
                        target="altCnfm"
                        onSubmit={handleSubmit}
                    >
                        <span className='vue-fields'>
                            <label htmlFor="entry.883168625" placeholder="Name">
                                Name:
                            </label>
                            <input type="text" placeholder='Enter your Full Name' name="entry.883168625" required/>
                        </span>
                        <span className='vue-fields'>
                            <label htmlFor="entry.50030841" placeholder="Roll Number">
                                Roll Number:
                            </label>
                            <input type="text" placeholder='Eg. 202XX0XX' name="entry.50030841" required/>
                        </span>
                        <span className='vue-fields'>
                            <label htmlFor="entry.1935876832" placeholder="Department" required>
                                Department:
                            </label>
                            <select name="entry.1935876832" id="Domain" required>
                                <option value="" selected disabled> Select your Stream</option>
                                <option value="CSE">CSE</option>
                                <option value="IT">IT</option>
                                <option value="ECE">ECE</option>
                                <option value="EE">EE</option>
                                <option value="AEIE">AEIE</option>
                                <option value="CE">CE</option>
                            </select>
                        </span>
                        <span className='vue-fields'>
                            <label htmlFor="entry.263134429" placeholder="Email">
                                Email:
                            </label>
                            <input type="email" placeholder='Enter your Email' name="entry.263134429" required/>
                        </span>
                        <span className='vue-fields'>
                            <label htmlFor="entry.1876691485" placeholder="Phone Number">
                                Phone Number:
                            </label>
                            <input type="number" placeholder='Enter your Whatsapp Number' name="entry.1876691485" required />
                        </span>
                        <span className='vue-fields'>
                            <label htmlFor="entry.1445722383" placeholder="Domain">
                                Domain:
                            </label>
                            <select name="entry.1445722383" id="Domain" required>
                                <option value="" selected disabled>Select the Domain</option>
                                <option value="C/C++">C/C++</option>
                                <option value="AI & ML">AI & ML</option>
                                <option value="Android">Android</option>
                                <option value="Web">Web</option>
                                <option value="Event Management">Event Management, Socials and Designing</option>
                            </select>
                        </span>
                        <button className='vue-form-submit' type="submit" disabled={isLoading}>Submit Form</button>
                    </form>
                </div>
            </div>
            {isLoading && 
                <div className="loading-screen">
                    <p>Please Wait...</p>
                    <div className='ls-ring'></div>
                </div>
            }
        </div>
    )
}

export default ViewUpcomingEve
