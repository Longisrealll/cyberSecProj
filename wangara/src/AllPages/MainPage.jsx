import { useState, useEffect, useRef } from 'react'
import '../App.css'
import { Navbar } from "../Navbar";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import {useGlitch} from 'react-powerglitch'
import { FooterHere } from '../FooterUse'
import {Link, useNavigate} from 'react-router-dom';


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

    // const glitch = useGlitch({
    //     "playMode": "hover",
    //     "optimizeSeo": true,
    //     "createContainers": true,
    //     "hideOverflow": false,
    //     "timing": {
    //         "duration": 250,
    //         "iterations": 2
    //     },
    //     "glitchTimeSpan": {
    //         "start": 0,
    //         "end": 1
    //     },
    //     "shake": 
    //         // "velocity": 15,
    //         // "amplitudeX": 0.2,
    //         // "amplitudeY": 0.2
    //         false
    //     ,
    //     "slice": {
    //         "count": 6,
    //         "velocity": 15,
    //         "minHeight": 0.02,
    //         "maxHeight": 0.15,
    //         "hueRotate": true,
    //         "cssFilters": ""
    //     },
    //     "pulse": false
    // });

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
                    <div id="headerOne" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="glitchContainer">
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
                    <p>Wangara was known as Langara CTF team. If you are interested in Cybersecurity or CTF show up to our meetings! No prior experiences needed. 
                        Join us for some fun in competing and grow your skills!</p>
                    <p>At the end of each fall semester is our biggest yearly competition–CyberSci to which we build up our skills during the rest of the year. </p>
                    <p>Activities for the club revolve mainly around completing and growing personal CTF skills through sources such as weekly competitions and PicoCTF gymnasium grinds. </p>
                    <p>This semester we aim to host our first school wide CTF competition. The time will be set after the first midterms around the end of February. Details will be finalized mid January. </p>
                    <h2>Schedule</h2>
                    <p>We will be meeting in person every Saturday at the Langara Library until we secure a classroom. Please note the in-person location is subjected to change. 
                        Please make sure to check Discord and Instagram for more immediate updates! For more details, go to <Link to='/posts'>Meetings</Link>
                    </p>
                </div>
                {/* < /*img alt="team image" >*/}
            </div>
            <FooterHere />
        </div>
    )
}
