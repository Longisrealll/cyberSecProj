import { useState, useEffect } from 'react'
import '../App.css'
// import React from "react";
// import { Canvas, useFrame } from "@react-three/fiber"
// import { useRef } from "react";
// import * as THREE from 'three'
// import { useGLTF } from '@react-three/drei'

export function MainPage(){
    
    return(
        <div className='overallBackground'>
            <nav>
                <ul>
                    {/*       <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '10px', border: '1px solid black' }}
      > */}
                    <li></li>
                </ul>
            </nav>
            {/* logo */}
            <div className='logoClass'>
                <div>
                    This part should be centered
                    LOGO
                </div>
            </div>
            {/* Brief intro */}
            <div className='bodySectionForMain'>
                {/* flex box */}
                <div>
                    <h2>Brief intro</h2>
                    <h2>Schedule</h2>
                </div>
                <div className='checking'>data</div>
                {/* <img src={teamImage} alt="team image" /> */}
            </div>
            <footer>Lang-era</footer>
        </div>
    )
}