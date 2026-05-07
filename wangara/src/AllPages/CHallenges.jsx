import { useState, useEffect } from "react";
import "../App.css"
import { Navbar } from "../Navbar";
import {FooterHere} from "../FooterUse"

export function ChallengesPage({mode, setMode}){


        return(
        <section className='overallBackground h1InChallenges'>
            <Navbar mode={mode} setMode={setMode} />
            <p>LangaraCTF</p>
            <FooterHere />
        </section>
    )
}