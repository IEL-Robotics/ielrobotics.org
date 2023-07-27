import {BrowserRouter as BR, Route, Routes} from "react-router-dom"

import { useRef } from "react"

import { Navbar } from './Components/Navbar/Navbar.jsx'

import { Home } from "./Pages/Home/Home.jsx"
import { Sponsors } from "./Pages/Sponsors"
import { Achievements } from "./Pages/Achievements/Achievements.jsx"
import { Team } from "./Pages/Team/Team.jsx"
import { News } from "./Pages/News.jsx"
import { Footer } from "./Components/Footer/Footer.jsx"

import './App.css'
import NewAchievement from "./Pages/Achievements/NewAchievement.jsx"

function App() {

  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='App'>
      <BR>
        <Navbar handleScroll={handleScroll}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sponsors' element={<Sponsors/>}></Route>
          <Route path='/achievements' element={<Achievements/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/new-achievements' element={<NewAchievement />} />
          <Route></Route>
        </Routes>
        <div style={{height: "500px"}}></div>
        <Footer scrollRef={scrollRef}/>
      </BR>
    </div>
  )
}

export default App
