import { useState, useEffect } from "react";
import '../App.css'
import { Navbar } from "../Navbar";
import august1 from '../assets/august_blue.png'
import august2 from '../assets/august_white.png'
import tree from '../assets/tree_image.jpeg'
import mark from '../assets/Ee8XpU490hia5FM3JBACm17DbxgrqjHR.webp'
import jane from '../assets/7216643a-0ef4-440f-a639-29857d053aaf.jpg'
import dyl from '../assets/CATS.png'
import { FooterHere } from "../FooterUse"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons';

export function MemberList({mode, setMode}){
    const [blueOne, changeIt] = useState(false)
    
    const changePic = ()=>{
        changeIt(!blueOne)
    }
    return(
        <section className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            <h1>Active Members / Previous Members</h1>
            <div className="block">
                {/* < /*img alt="Data not av"></img >*/}
                <div>
                    <h2>Our team on CTFTime</h2>
                    <span><a href="https://ctftime.org/team/407537/">CTFTime</a><br/><br/>
                        CTFtime.org, an essential platform for the cybersecurity community, serves as a central hub for Capture The Flag (CTF) competitions, listing upcoming events, tracking team rankings, 
                        and archiving past CTFs, making it the go-to resource for participants and organizers to find, join, and stay updated on hacking challenges.<br/><br/>

                        Competition results or team accomplishments will be posted on LinkedIn, so please make sure to join!
                    </span>
                </div>
            </div>
            <div className="profileDiv">
                <div onMouseEnter={changePic} onMouseLeave={changePic} className="pfpMar">
                    <img src={(blueOne)?august2:august1} alt="Data not av"></img>
                </div>
                <div className="restrict">
                    <h3>August</h3>
                    <p className="role">Role: <b>Team Manager | HR</b></p>
                    <p className="role">Specialties: <b>Forensics</b></p>
                    <p className="desc">----------------------------------------</p>
                    <span>August is an otaku and enjoy the noise of the overclustered decoration of stickers, 
                        posters and other artworks in my life. She is an artist, reader, macromanager and 
                        CTFer. </span>
                    <ul>
                        <li><a href="https://medium.com/@auggieldoggie"><FontAwesomeIcon icon={faMedium}></FontAwesomeIcon></a></li>
                        <li><a href="https://github.com/Auggie0w0"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                        <li><a href="https://auggiepage.vercel.app/"><FontAwesomeIcon icon={faCube}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
            </div>
            <div className="profileDiv">
                <div className="pfpMar">
                    <img src={mark} alt="Data not av"></img>
                </div>
                <div className="restrict">
                    <h3>Scrape/Mark</h3>
                    <p className="role">Role: <b>Web developer</b></p>
                    <p className="role">Specialties: <b>Web exploitation</b></p>
                    <p className="desc">----------------------------------------</p>
                    <span>Scrape/Mark wanna learn something cool.</span>
                    <ul>
                        <li><a href="https://github.com/Longisrealll"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
            </div>
            <div className="profileDiv">
                <div className = "pfpMar">
                    <img src={dyl} alt="Data not av"></img>
                </div>
                <div className="restrict">
                    <h3>Dyson</h3>
                    <p className="role">Role: <b>Wangara team leader</b></p>
                    <p className="role">Specialties: <b>Cryptography</b></p>
                    <p className="desc">----------------------------------------</p>
                    <span>Standing on the shoulder of giants.</span>
                    <p>N/A</p>
                </div>
            </div>
            <div className="profileDiv">
                <div className="pfpMar">
                    <img src={jane} alt="Data not av"></img>
                </div>
                <div className="restrict">
                    <h3>Jane</h3>
                    <p className="role">Role: <b>Social Media | Transcriber</b></p>
                    <p className="role">Specialties: <b>Web exploitation | Cryptography</b></p>
                    <p className="desc">----------------------------------------</p>
                    <span>Jane loves sleep and definitely has very healthy schedule</span>
                    <p>N/A</p>
                </div>
            </div>
            <h2>Retired Members</h2><p class="quote"><i>"The beautiful journey of today can only begin when we learn to let go of yesterday."-Steve Maraboli</i></p>
            <div className="profileDiv">
                <div className="pfpMar">
                    <img src={tree} alt="Data not av"></img>
                </div>
                <div className="restrict">
                    <h3>Tree</h3>
                    <p className="role">Role: <b>Former Leader</b></p>
                    <p className="role">Specialties: <b>Reverse Engineering | Binary Exploitation</b></p>
                    <p className="desc">----------------------------------------</p>
                    <span>Crafting useful biomass since Devonian period </span>
                    <ul>
                        <li><a href='https://www.treeblog.io/'><FontAwesomeIcon icon={faCube}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
            </div>
            <FooterHere />
        </section>
    )
}
