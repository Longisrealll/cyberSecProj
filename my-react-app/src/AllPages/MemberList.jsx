import { useState, useEffect } from "react";
import '../App.css'
import { Navbar } from "../Navbar";
import august from '../assets/898d5063bcc093c1d4c064429e73e726.jpg'
import tree from '../assets/tree_image.jpeg'
import mark from '../assets/Ee8XpU490hia5FM3JBACm17DbxgrqjHR.webp'
import { FooterHere } from "../FooterUse"

export function MemberList({mode, setMode}){
    return(
        <section className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            <h1>Active Members / Previous Members</h1>
            <div className="profileDiv">
                <div className="pfpAugust">
                    <img src={august} alt="Data not av"></img>
                </div>
                <div>
                    <h3>August Lam</h3>
                    <p className="role">Role: <b>Team Manager</b></p>
                    <p className="role">Specialties: <b>Forensics</b></p>
                    <p className="desc">Description</p>
                    <span>August is an otaku and enjoy the noise of the overclustered decoration of stickers, 
                        posters and other artworks in my life. She is an artist, reader, macromanager and 
                        CTFer. </span>
                    <p>Websites:</p>
                    <ul>
                        <li><a href="https://medium.com/@auggieldoggie">Medium</a></li>
                        <li><a href="https://github.com/Auggie0w0">Github</a></li>
                        <li><a href="https://auggiepage.vercel.app/">Personal website</a></li>
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
                    <p>Websites:</p>
                    <ul>
                        <li><a href='https://www.treeblog.io/'>Personal blog</a></li>
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
                    <p>Websites:</p>
                    <ul>
                        <li><a href="https://github.com/Longisrealll">Github</a></li>
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
                    <p>Websites: N/A</p>
                </div>
            </div>
            <div className="profileDiv">
                <div className="pfp">
                    <img alt="Data not av"></img>
                </div>
                <div>
                    <h3>Jane</h3>
                    <p className="role">Role: <b>Web developer</b></p>
                    <p className="role">Specialties <b>Web exploitation</b></p>
                    <p className="desc">Description</p>
                    <span>Jane love sleep and definitely have very healthy schedule</span>
                    <p>Websites: N/A</p>
                </div>
            </div>
            <FooterHere />
        </section>
    )
}