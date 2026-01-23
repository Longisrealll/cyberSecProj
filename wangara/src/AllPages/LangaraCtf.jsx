import { useState, useEffect } from 'react'
import { Navbar } from '../Navbar.jsx'
import { FooterHere } from '../FooterUse.jsx'

export function EventPage({mode, setMode}){
    // this will soon be change, using list instead of hardcode
    return(
        <section className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            <h1>NEXT BIG EVENT!!!</h1>
            <div className="block-reverse">
                {/* < /*img alt="Data not av"></img >*/}
                <div>
                    <h2 className="promotionNoHov"><i><strong>LangaraCTF Event!!!</strong></i></h2>
                    {/* <h3>LangaraCTF will be held soon!!!</p> */}
                    <h4>Duration: 24 hours (TBD), 20-21 Febuary</h4>
                    <p>For more detail, please visit: <a href="#" >2026.langractf.org</a></p>
                </div>
            </div>
            <FooterHere />
        </section>
    )
}