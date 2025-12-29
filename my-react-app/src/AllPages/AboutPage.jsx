import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";

export function AboutPage(){


    return(
        <section className='overallBackground'>
            <Navbar />
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
            <footer>Lang-era</footer>
        </section>
    )
}