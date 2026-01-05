import { useState, useEffect } from "react";
import '../App.css'
import { Navbar } from "../Navbar";
import august1 from '../assets/august_blue.png'
import august2 from '../assets/august_white.png'
import tree from '../assets/tree_image.jpeg'
import mark from '../assets/Ee8XpU490hia5FM3JBACm17DbxgrqjHR.webp'
import jane from '../assets/7216643a-0ef4-440f-a639-29857d053aaf.jpg'
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
            <div className="profileDiv">
                <div onMouseEnter={changePic} onMouseLeave={changePic} className="pfpAugust">
                    <img src={(blueOne)?august2:august1} alt="Data not av"></img>
                </div>
                <div>
                    <h3>August</h3>
                    <p className="role">Role: <b>Team Manager</b></p>
                    <p className="role">Specialties: <b>Forensics</b></p>
                    <p className="desc">Description</p>
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
                <div className="pfp">
                    <img src={tree} alt="Data not av"></img>
                </div>
                <div>
                    <h3>Tree</h3>
                    <p className="role">Role: <b>Coach | Former Leader</b></p>
                    <p className="role">Specialties: <b>Reverse Engineering | Binary Exploitation</b></p>
                    <p className="desc">Description</p>
                    <span>Crafting useful biomass since Devonian period </span>
                    <ul>
                        <li><a href='https://www.treeblog.io/'><FontAwesomeIcon icon={faCube}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
            </div>
            <div className="profileDiv">
                <div className="pfp">
                    <img src={mark} alt="Data not av"></img>
                </div>
                <div>
                    <h3>Scrape/Mark</h3>
                    <p className="role">Role: <b>Web developer</b></p>
                    <p className="role">Specialties <b>Web exploitation</b></p>
                    <p className="desc">Description</p>
                    <span>Scrape/Mark wanna learn something cool.</span>
                    <ul>
                        <li><a href="https://github.com/Longisrealll"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
            </div>
            <div className="profileDiv">
                <div className = "pfp">
                    <img alt="Data not av"></img>
                </div>
                <div>
                    <h3>Dysonsphere</h3>
                    <p className="role">Specialties: <b>Cryptography</b></p>
                    <p className="desc">Description</p>
                    <span>Dysonsphere is an Arch god</span>
                    <p>N/A</p>
                </div>
            </div>
            <div className="profileDiv">
                <div className="pfp">
                    <img src={jane} alt="Data not av"></img>
                </div>
                <div>
                    <h3>Jane</h3>
                    <p className="role">Role: <b>Web developer</b></p>
                    <p className="role">Specialties <b>Web exploitation | Cryptography</b></p>
                    <p className="desc">Description</p>
                    <span>Jane loves sleep and definitely has very healthy schedule</span>
                    <p>Bet you can't find my social media</p>
                </div>
            </div>
            <FooterHere />
        </section>
    )
}
