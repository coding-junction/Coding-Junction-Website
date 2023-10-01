import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-form'>
            <p className='footer-form-head'>Let's connect!</p>
            <p className='footer-form-line'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione iure fuga aut illum cum expedita minima, excepturi magni molestias iusto!</p>
            <form>
                <input className='input-email' type="email" name="email" placeholder="Type your e-mail here..." />
                <input className='input-submit' type="submit" name="submit" />
            </form>

            <div className='footer-socials'>
                <span>FB</span>
                <span>IG</span>
                <span>GH</span>
                <span>YT</span>
                <span>LI</span>
            </div>
        </div>
    </div>
  )
}
