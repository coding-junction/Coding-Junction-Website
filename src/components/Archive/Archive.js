import React from 'react'
import './Archive.css'
import ArchList from './ArchList/ArchList'

function Archive() {
    window.scrollTo(0,0);
    const archiveArr = [
        {
            key: 1,
            title: "Sparks Contest Leaderboards",
            date: "25-11-2022",
            link: "https://cj2022.coding-junction.in/leaderboard"
        },
        {
            key: 2,
            title: "Old Website (No framework)",
            date: "07-08-2022 to 23-09-2023",
            link: "https://cj2022.coding-junction.in/"
        }
    ]

    return (
        <div className="Archive">
            <div className="archive-title">
                <h1>Archives</h1>
            </div>

            <div className='archive-links'>
                {
                    archiveArr.map((archiveArr) => (
                        <ArchList key = {archiveArr.key}
                                    title = {archiveArr.title}
                                    link = {archiveArr.link}
                                    date = {archiveArr.date}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Archive
