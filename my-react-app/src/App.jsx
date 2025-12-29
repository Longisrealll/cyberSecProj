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
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/members' element={<MemberList />}></Route>
      <Route path='/challenges' element={<ChallengesPage />}></Route>
      <Route path='/posts' element={<MeetingPages />}></Route>
    </Routes>
    </>
  )
}

export default App
