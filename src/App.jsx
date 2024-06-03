import { useState } from 'react'
import './App.css'
import Home from "../src/pages/Home"
import Ranking from "../src/pages/Ranking"
import Market from "../src/pages/MarketPlace"
import CreateAccount from "../src/pages/CreateAccount"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {
  return (
    <>
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/Ranking" element={<Ranking/>} />
        <Route path="/marketplace" element={<Market/>} />
        <Route path="/createaccount" element={<CreateAccount/>} />
      </Routes>
    </BrowserRouter>
      </>
    </>
  )
}

export default App
