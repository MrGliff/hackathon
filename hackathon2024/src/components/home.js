import React from "react"
import Progressbar from "./Progressbar"
import "./home.css"
export default function Home(){
    return(
    <>
        <div className="PrgsDiv">
            <div className="stat-1 stats">
                <div><h1>Stat-1</h1></div>
                <Progressbar Progress_Number = "10"/>
            </div>

            <div className="stat-2 stats">
                <div><h1>Stat-1</h1></div>
                <Progressbar Progress_Number = "80"/>
            </div>

            <div className="stat-3 stats">
                <div><h1>Stat-1</h1></div>
                <Progressbar Progress_Number = "90"/>
            </div>
        </div>
    </>
    )
}