import { useState, useEffect, useRef } from 'react'
import '../App.css'
import { Navbar } from "../Navbar";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import {useGlitch} from 'react-powerglitch'
import { FooterHere } from '../FooterUse'


const Dimentional = ({position, hovering})=>{
    const ref = useRef()
    const {scene} = useGLTF('/Wangara.glb')
    const maxLocation = 1.3*Math.PI / 2
    const minLocation = 0.3*Math.PI / 2

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene)
        const center = box.getCenter(new THREE.Vector3())
        scene.position.sub(center)
    }, [scene])

    scene.traverse(function(node){
        if(node.isMesh)
            node.castShadow = true;
    })

    // scene.background = new THREE.Color(0xEB652D);

    useFrame((state, delta) => {

        if(!ref.current) return

        let target = hovering ? maxLocation : minLocation
        //i love lerp
        ref.current.rotation.x = THREE.MathUtils.lerp(
            ref.current.rotation.x,
            target,
            0.1
        )
    })

    return(
        <group ref={ref} position={position}>
            <primitive object={scene} scale={[2,2,2]} />
        </group>
    )
}

export function MainPage({mode, setMode}){

    const [stateHover, setHoverState] = useState(false)
    // const [mobile, toggleMobile] = useState(false)

    const glitch = useGlitch({
        "playMode": "hover",
        "optimizeSeo": true,
        "createContainers": true,
        "hideOverflow": false,
        "timing": {
            "duration": 250,
            "iterations": 1
        },
        "glitchTimeSpan": {
            "start": 0,
            "end": 1
        },
        "shake": {
            "velocity": 15,
            "amplitudeX": 0.2,
            "amplitudeY": 0.2
        },
        "slice": {
            "count": 6,
            "velocity": 15,
            "minHeight": 0.02,
            "maxHeight": 0.15,
            "hueRotate": true,
            "cssFilters": ""
        },
        "pulse": false
    });

    let handleMouseEnter = () =>{
        setHoverState(true)
    }

    let handleMouseLeave = ()=>{
        setHoverState(false)
    }

    // useEffect(()=>{
    //     const testing = ()=>{
    //         if(window.innerWidth<=700){
    //             toggleMobile(true)
    //         }else{
    //             toggleMobile(false)
    //         }
    //     }

    //     testing()

    //     window.addEventListener('resize', testing)
    //     return ()=>{
    //         window.removeEventListener('resize', testing)
    //     }
    // }, [])

    return(
        <div className='overallBackground'>
            <Navbar mode={mode} setMode={setMode} />
            {/* logo */}
            <div className='logoClass'>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div id="canvasDisplay">
                        <Canvas shadows> 
                            <directionalLight intensity={2} castShadow shadow-mapSize={[1024, 1024]} position={[2,3,5]}></directionalLight>  
                            <Dimentional position={[0,0,0]} hovering={stateHover}></Dimentional>
                        </Canvas>
                    </div>
                    {/* {console.log(window.screen.width)} */}
                    <div id="headerOne" ref={glitch.ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="glitchContainer">
                    <h1>angara.</h1> 
                    <p>{(stateHover)?("It's time for Lang-era"):("THE COLLEGE OF HIGHER LEARNING")}</p>
                    </div>
                </div>
            </div>
            {/* Brief intro */}
            <div className='bodySectionForMain'>
                {/* flex box */}
                <div>
                    <h2>Brief intro</h2>
                    <span>Wangara was known as Langara CTF team. The team was meant to gather students who are interested in 
                        Cyber Security or CTF challenges. No prior cyber security experience needed (you still need some CS skill ofc)
                        just show up, enjoy your time with the team and learn everything that you want (we have resources)
                        for your growth!!!<br/>
                        At the end of the year, we will compete in one of the biggest competition, CyberSci.
                    </span>
                    <h2>Schedule</h2>
                    <span>Uhh, we will meet at somewhere in the weekend, if you want you can show up to see how
                        we work / do CTF together. If you want to see more information, please click the 
                        <i>Meeting</i> hyperlink on the nav bar.
                    </span>
                </div>
                <img alt="team image" />
            </div>
            <FooterHere />
        </div>
    )
}