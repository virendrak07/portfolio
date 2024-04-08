import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/Home/About'
import Contact from './components/Contact'
import Certificates from './components/Certificates'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animation (in milliseconds)
      easing: 'ease-in-out', // Easing function for animation
      offset: 100, // Offset (in pixels) from the element's top before animation triggers
      delay: 100, // Delay (in milliseconds) before animation starts
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="certificates" element={<Certificates />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
