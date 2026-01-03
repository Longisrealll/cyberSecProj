import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './AllPages/MainPage.jsx'
import { AboutPage } from './AllPages/AboutPage.jsx'
import { MemberList } from './AllPages/MemberList.jsx'
import { ChallengesPage } from './AllPages/CHallenges.jsx'
import { MeetingPages } from './AllPages/MeetingPage.jsx'

function App() {
  const [mode, setMode] = useState(false)

  return (
    <>
    <Routes>
      <Route mode={mode} setMode={setMode} path='/' element={<MainPage />}></Route>
      <Route mode={mode} setMode={setMode} path='/about' element={<AboutPage />}></Route>
      <Route mode={mode} setMode={setMode} path='/members' element={<MemberList />}></Route>
      <Route mode={mode} setMode={setMode} path='/challenges' element={<ChallengesPage />}></Route>
      <Route mode={mode} setMode={setMode} path='/posts' element={<MeetingPages />}></Route>
    </Routes>
    </>
  )
}

export default App
