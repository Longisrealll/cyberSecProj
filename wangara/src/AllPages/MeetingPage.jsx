import { useState,useEffect } from "react";
import { Navbar } from "../Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'


export function MeetingPages({mode, setMode}){

    return(
        <section className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            <h1>Meeting time table</h1>
            ---------------------------
            <h2>In person</h2>
            <figcaption>(Create taglines, weekly competitions, tutorship, discussions, strats,...)</figcaption>
            <p><strong>TIME: </strong>FRIDAY | 10:00 am - 12:00 pm</p>
            <p><strong>LOCATION: </strong>TBD </p>
            ---------------------------
            <h2>Online</h2>
            {/* <figcaption>(Grind CTF/writeups, keeping up with leader board)</figcaption> */}
            <p><strong>TIME: </strong>WEEKDAYS ONLY | 8:00 pm - 10:00 pm <i>(Not strict hours, just hop on and off)</i></p>
            <p><strong>LOCATION: </strong>Discord #Grind Chamber</p>
            ---------------------------
            <p>More information, please contact us through: </p>
            <div className="allIcons">
                <a href="mailto:alam77@mylangara.ca"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/wangaractf/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            </div>
        </section>
    )
}
