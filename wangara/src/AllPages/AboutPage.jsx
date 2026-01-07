import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import {FooterHere} from "../FooterUse"

export function AboutPage({mode, setMode}){


    return(
        <section className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            <h1>About</h1>
            <div className="block">
                < /*img alt="Data not av"></img */>
                <div>
                    <h2>Mottos</h2>
                    <ul>
                        <li>Have fun!</li>
                        <li>Make awesome taglines!</li>
                    </ul>
                </div>
            </div>
            <div className="block-reverse">
                < /*img alt="Data not av"></img */>
                <div>
                    <h2>Goals</h2>
                    <ul>
                        <li>Build a name for Lanagra starting by winning top 3 at CyberSci </li>
                        <li>Expanding Club scope for more than just the CTF team but a cybersecurity club with workshops and presentations! </li>
                        <li>Tutorship → specialization passed down or mutual assistance for when students leave Langara. </li>
                    </ul>
                </div>
            </div>
            <FooterHere />
        </section>
    )
}
