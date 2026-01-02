import { useState,useEffect } from "react";
import { Navbar } from "../Navbar";

export function MeetingPages(){

    return(
        <section className='overallBackground'>
            <Navbar />
            <h1>You want to take part in Wangara?</h1>
            <p>We meet at the Langara's Library</p>
            <p>In room ... at flexible time</p>
            <p>More information, please contact: <a href="mailto:alam77@mylangara.ca">alam77@mylangara.ca</a></p>
        </section>
    )
}