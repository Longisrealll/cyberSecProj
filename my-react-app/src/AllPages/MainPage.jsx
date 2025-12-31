import { useState, useEffect } from 'react'
import '../App.css'
import { Navbar } from "../Navbar";
// import React from "react";
// import { Canvas, useFrame } from "@react-three/fiber"
// import { useRef } from "react";
// import * as THREE from 'three'
// import { useGLTF } from '@react-three/drei'

export function MainPage(){

    let handleMouseEnter = () =>{}
    
    return(
        <div className='overallBackground'>
            <Navbar />
            {/* logo */}
            <div className='logoClass'>
                <div>
                {/*<div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ padding: '10px', border: '1px solid black' }}
                > */}
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