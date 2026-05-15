import { useState, useEffect } from 'react'
import { Navbar } from '../Navbar.jsx'
import { FooterHere } from '../FooterUse.jsx'

export function EventPage({mode, setMode}){
    // this will soon be change, using list instead of hardcode
    return(
        <section className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            <h1>BIG EVENT!!!</h1>
            <div classname="block-reverse">
                {/* < /*img alt="data not av"></img >*/}
                <div>
                    <h2 classname="promotionnohov"><i><strong>langaractf!!!</strong></i></h2>
                    {/* <h3>langaractf will be held soon!!!</p> */}
                    <h4>duration: 48 hours, 20-21 febuary</h4>
                    <p>for more detail, please visit: <a href="#" >2026.langaractf.org</a> <i>expired</i></p>
                    <p>langaractf on langara page: <a href="https://langara.ca/news-events/events/cybersecurity-capture-flag-competition">langaractf</a></p>
                </div>
            </div>
            <div classname="block-reverse">
                {/* < /*img alt="data not av"></img >*/}
                <div>
                    <h2 classname="promotionnohov"><i><strong>Summer Social</strong></i></h2>
                    {/* <h3>langaractf will be held soon!!!</p> */}
                    <h4>duration: 10am-2pm, 13rd may 2026</h4>
                    <p>for more detail, please visit: <a href="https://langara.ca/news-events/events/summer-social-2026" >here</a></p>
                </div>
            </div>
            <FooterHere />
        </section>
    )
}