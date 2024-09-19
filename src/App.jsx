import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Nav from './component/Nav/Nav';
import Gallery from './component/Gallery/Gallery';
import Footer from './component/Footer/Footer';
function App() {
  
  return (
    <>
    <div className='App overflow-clip'>
      <Router>
        	
      <Nav/>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      <Footer/>
      </Router>
    </div>
    </>
  )
}

export default App
