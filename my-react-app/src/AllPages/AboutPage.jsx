import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import {FooterHere} from "../FooterUse"

export function AboutPage({mode, setMode}){


    return(
        <section className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            <h1>About</h1>
            <div className="block">
                <img alt="Data not av"></img>
                <div>
                    <p>Data1</p>
                </div>
            </div>
            <div className="block-reverse">
                <img alt="Data not av"></img>
                <div>
                    <p>Data2</p>
                </div>
            </div>
            <div className="block">
                <img alt="Data not av"></img>
                <div>
                    <p>Data3</p>
                </div>
            </div>
            <div className="block-reverse">
                <img alt="Data not av"></img>
                <div>
                    <p>Data4</p>
                </div>
            </div>
            <FooterHere />
        </section>
    )
}