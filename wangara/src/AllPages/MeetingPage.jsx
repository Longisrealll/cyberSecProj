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
            <h1>You want to take part in Wangara?</h1>
            <p>We meet at the Langara's Library</p>
            <p>In room ... at flexible time</p>
            <p>More information, please contact us through: </p>
            <div className="allIcons">
                <a href="mailto:alam77@mylangara.ca"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                <a href="https://discord.gg/tKGMpMjhtm"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/wangaractf/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            </div>
        </section>
    )
}