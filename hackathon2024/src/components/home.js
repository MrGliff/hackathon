import React from "react"
import Progressbar from "./Progressbar"
import "./home.css"
import MotivationalQuote from "./motivation"
export default function Home() {
    return (
        <>
            <div className="PrgsDiv">
                <div className="stat-1 stats">
                    <div><h1>Days Completed</h1></div>
                    <Progressbar Progress_Number="10" />
                </div>


                <div className="stat-2 stats">
                    <div><h1>Total Working Hours</h1></div>
                    <Progressbar Progress_Number="80" />
                </div>

                <div className="stat-3 stats">
                    <div><h1>Habits Completed</h1></div>
                    <Progressbar Progress_Number="90" />
                </div>
            </div>

            <MotivationalQuote />
        </>
    )
}