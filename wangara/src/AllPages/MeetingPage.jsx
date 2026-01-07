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
            <figcaption>(Create taglines, weekly competitions, discussions, strats,...)</figcaption>
            <p><strong>TIME: </strong>SATURDAY | 11:30 am - 4:00 pm</p>
            <p><strong>LOCATION: </strong>Langara Library | L126</p>
            ---------------------------
            <h2>Online</h2>
            <figcaption>(Grind CTF/writeups, keeping up with <a href="https://www.google.com/url?q=https://leaderboarded.com/board/zvgdqhzpvfdbr/?public%3Dtrue&sa=D&source=docs&ust=1767816372199823&usg=AOvVaw3Q-XSn3I7wqz6PcJ5yb6ND">leader board</a>)</figcaption>
            <p><strong>TIME: </strong>DAILY | 9:30 pm - 10:00 pm</p>
            <p><strong>LOCATION: </strong>Discord #Grind Chamber</p>
            ---------------------------
            <p>More information, please contact us through: </p>
            <div className="allIcons">
                <a href="mailto:alam77@mylangara.ca"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                <a href="https://discord.gg/tKGMpMjhtm"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/wangaractf/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            </div>
        </section>
    )
}