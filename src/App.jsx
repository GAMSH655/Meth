import { useState } from 'react'
import './App.css'
import Home from "../src/pages/Home"
import Footer from "../src/Components/Footer"
import MarketPlace from "../src/pages/MarketPlace"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}>
          <Route path="marketplace" element={<MarketPlace  />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      <Footer/>
      </>
    </>
  )
}

export default App
