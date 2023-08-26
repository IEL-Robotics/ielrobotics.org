import {BrowserRouter as BR, Route, Routes} from "react-router-dom"

import { useRef } from "react"

import { Navbar } from './Components/Navbar/Navbar.jsx'

import { Home } from "./Pages/Home/Home.jsx"
import { Sponsors } from "./Pages/Sponsors/Sponsors.jsx"
import { Achievements } from "./Pages/Achievements/Achievements.jsx"
import { Team } from "./Pages/Team/Team.jsx"
import { News } from "./Pages/News/News.jsx"
import { Footer } from "./Components/Footer/Footer.jsx"

import { Helmet, HelmetProvider } from "react-helmet-async"

import scrollIntoView from "scroll-into-view"

import './App.css'

function App() {

  const scrollRef = useRef(null);

  const handleScroll = () => {
    let wi = window.innerWidth
    let scrollConstant = 14 - (0.01 * wi) + (0.000002075 * wi * wi); //little bir of curve fitting
    if(wi > 2500){ scrollConstant = 1.5;}
    scrollIntoView(scrollRef.current, {
      time: 1750,
      align: {
        top: 0,
        topOffset: window.innerWidth > 700 ? ((scrollConstant * wi) / 100) : 60
      }
    })
  }

  return (
    <HelmetProvider>
    <div className='App'>
      <BR>
        <Navbar handleScroll={handleScroll}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sponsors' element={<Sponsors/>}></Route>
          <Route path='/achievements' element={<Achievements/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route></Route>
        </Routes>
        <Footer scrollRef={scrollRef}/>
      </BR>
    </div>
    </HelmetProvider>
  )
}

export default App
