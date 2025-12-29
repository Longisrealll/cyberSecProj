import { useState, useEffect } from "react";
import '../App.css'
import { Navbar } from "../Navbar";

export function MemberList(){
    return(
        <section className='overallBackground'>
            <Navbar />
            <h1>Active Members / Previous Members</h1>
            <div className="profileDiv">
                <img alt="Data not av"></img>
                <div>
                    <h3>Data1</h3>
                    <p>Desc</p>
                </div>
            </div>
            <div className="profileDiv">
                <img alt="Data not av"></img>
                <div>
                    <h3>Data2</h3>
                    <p>Desc</p>
                </div>
            </div>
            <div className="profileDiv">
                <img alt="Data not av"></img>
                <div>
                    <h3>Data3</h3>
                    <p>Desc</p>
                </div>
            </div>
            <div className="profileDiv">
                <img alt="Data not av"></img>
                <div>
                    <h3>Data4</h3>
                    <p>Desc</p>
                </div>
            </div>
            <footer>Lang-era</footer>
        </section>
    )
}