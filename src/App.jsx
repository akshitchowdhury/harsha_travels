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
function App() {
  
  return (
    <>
    <div className='App'>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
