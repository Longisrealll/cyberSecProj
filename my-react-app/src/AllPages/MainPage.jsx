import { useState, useEffect, useRef } from 'react'
import '../App.css'
import { Navbar } from "../Navbar";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

const Dimentional = ({position, hovering})=>{
    const ref = useRef()
    const {scene} = useGLTF('/Wangara.glb')
    const velocity = useRef(0)
    const maxLocation = 1.3*Math.PI / 2
    const minLocation = 0.3*Math.PI / 2

    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)

    // scene.background = new THREE.Color(0xEB652D);

    useFrame((state, delta) => {

        if(!ref.current) return

        if(hovering){
            ref.current.rotation.x += 0.04
            if (ref.current.rotation.x > maxLocation){
                ref.current.rotation.x = maxLocation
            }
        }else{
            ref.current.rotation.x -= 0.04
            if (ref.current.rotation.x < minLocation){
                ref.current.rotation.x = minLocation
            }
        }
    })

    return(
        <group ref={ref} position={position} scale={[1.5,1.5,1.5]}>
            <primitive object={scene} />
        </group>
    )
}

export function MainPage(){

    const [stateHover, setHoverState] = useState(false)

    let handleMouseEnter = () =>{
        setHoverState(true)

    }

    let handleMouseLeave = ()=>{
        setHoverState(false)
    }

    //cool idea but scraped, since this will only work in specific screen with this equation
    useEffect(()=>{
        const box = document.getElementById("canvasDisplay")
        const text1 = document.getElementById("headerOne")
        const text2 = document.getElementById("textTwo")

        const testing = ()=>{
            let left = window.innerWidth*(25/96)
            box.style.left = `${left}px`
            text1.style.left = `${left}px`
            text2.style.left = `${left}px`
        }

        window.addEventListener('resize', testing)
        return ()=>{
            window.removeEventListener('resize', testing)
        }
    }, [])

    return(
        <div className='overallBackground'>
            <Navbar />
            {/* logo */}
            <div className='logoClass'>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div id="canvasDisplay">
                        <Canvas background={0xEB652D}> 
                            <directionalLight intensity={2} position={[2,3,5]}></directionalLight>  
                            <Dimentional position={[0,0,0]} hovering={stateHover}></Dimentional>
                        </Canvas>
                    </div>
                    {/* {console.log(window.screen.width)} */}
                    <h1 id="headerOne">angara.</h1>
                    <p id="textTwo">It's time for Lang-era</p>
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