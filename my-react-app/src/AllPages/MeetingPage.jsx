import { useState,useEffect } from "react";
import { Navbar } from "../Navbar";

export function MeetingPages(){

    return(
        <section className='overallBackground'>
            <Navbar />
            <h1>Curious about syber security??</h1>
            <p>We meet at blah blah time</p>
            <p>In blah blah location</p>
        </section>
    )
}