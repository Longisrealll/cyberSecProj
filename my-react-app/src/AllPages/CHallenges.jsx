import { useState, useEffect } from "react";
import "../App.css"
import { Navbar } from "../Navbar";

export function ChallengesPage(){


        return(
        <section className='overallBackground h1InChallenges'>
            <Navbar />
            <h1>Challenges</h1>
            <div className="nameSpce">
                <h2>Challenge name</h2>
                <h4>Author: </h4>
                <p>Description: </p>
            </div>
            <div className="nameSpce">
                <h2>Challenge name</h2>
                <h4>Author: </h4>
                <p>Description: </p>
            </div>
            <h1>Writeups</h1>
            <div className="nameSpce">
                <h2>Challenge name</h2>
                <h4>Author: </h4>
                <p>Description: </p>
            </div>
            <div className="nameSpce">
                <h2>Challenge name</h2>
                <h4>Author: </h4>
                <p>Description: </p>
            </div>
            <footer>Lang-era</footer>
        </section>
    )
}