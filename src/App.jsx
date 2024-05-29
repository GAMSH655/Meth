import { useState } from 'react'
import './App.css'
import Home from "../src/pages/Home"
import Ranking from "../src/pages/Ranking"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {
  return (
    <>
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/Ranking" element={<Ranking/>} />
      </Routes>
    </BrowserRouter>
      </>
    </>
  )
}

export default App
