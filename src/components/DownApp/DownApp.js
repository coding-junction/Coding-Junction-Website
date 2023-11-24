import React from 'react'
import './DownApp.css'
import Features from './Features/Features'

export default function DownApp() {

    window.scrollTo(0,0);
    const featuresArr = [
        {
            key: 1,
            title: "Explore the club community in your hands",
            img: require("../../Assets/Images/features/1.png")
        },
        {
            key: 2,
            title: "Engage with club members",
            img: require("../../Assets/Images/features/2.png")
        },
        {
            key: 3,
            title: "Showcase your creations on the Wall",
            img: require("../../Assets/Images/features/3.png")
        },
        {
            key: 4,
            title: "Stay updated and get notified for upcoming events",
            img: require("../../Assets/Images/features/4.png")
        },
        {
            key: 5,
            title: "Attend the polls and express your views",
            img: require("../../Assets/Images/features/5.png")
        },
        {
            key: 6,
            title: "Interact easily with club leaders",
            img: require("../../Assets/Images/features/6.png")
        },
        
    ]
    return (
        <div className="DownApp">
            <div className="da-title">
                <h1>
                    Download App
                </h1>
            </div>

            <div className="da-banner">
                <div className="phone-da-title">
                    <h3>The</h3>
                    <h3>Coding Junction</h3>
                    <h3>App</h3>
                </div>
                <h3>
                    The Coding Junction App
                </h3>
                <img src={require("../../Assets/Images/App mockup.png")} alt="" />
                <p>Welcome to The Coding Junction community.</p>
                <p>We welcome you all onboard...</p>
                <p> &nbsp; </p>
                <p>To participate in the ongoing and the upcoming events download our Coding Junction app!!!</p>
            </div>

            <div className="da-features">
                <h3>Features</h3>
                <div className='da-features-list'>
                    {
                        featuresArr.map((featuresArr) => (
                            <Features key = {featuresArr.key}
                                        title = {featuresArr.title}
                                        img = {featuresArr.img}/>
                        ))
                    }
                </div>
            </div>

            <div className="da-download">
                <a href="https://dl.dropboxusercontent.com/s/0zeznf2a5rvrs7x/release_coding_junction_VC_6.apk?dl=1">
                    <button>
                        Download
                    </button>
                </a>
            </div>
        </div>
    )
}
