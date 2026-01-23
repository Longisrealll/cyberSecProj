import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './AllPages/MainPage.jsx'
import { AboutPage } from './AllPages/AboutPage.jsx'
import { MemberList } from './AllPages/MemberList.jsx'
import { ChallengesPage } from './AllPages/CHallenges.jsx'
import { MeetingPages } from './AllPages/MeetingPage.jsx'
import { EventPage } from './AllPages/LangaraCtf.jsx'

function App() {
  const [mode, setMode] = useState(false)

  useEffect(()=>{
    const root = document.documentElement;

    root.setAttribute(
      "theme-tracker",
      mode ? "dark" : "light"
    )
  }, [mode])

  //Everything is currently hardcoded, need improvement later on
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage  mode={mode} setMode={setMode}/>}></Route>
      <Route path='/about' element={<AboutPage  mode={mode} setMode={setMode}/>}></Route>
      <Route path='/members' element={<MemberList  mode={mode} setMode={setMode}/>}></Route>
      <Route path='/challenges' element={<ChallengesPage  mode={mode} setMode={setMode}/>}></Route>
      <Route path='/posts' element={<MeetingPages  mode={mode} setMode={setMode}/>}></Route>
      <Route path='/event' element={<EventPage  mode={mode} setMode={setMode}/>}></Route>
    </Routes>
    </>
  )
}

export default App
