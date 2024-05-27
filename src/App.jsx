import { useState } from 'react'
import './App.css'
import Home from "../src/pages/Home"
import Footer from "../src/Components/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <Home/>
      <Footer/>
      </>
    </>
  )
}

export default App
