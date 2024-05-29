import React from 'react'
import Header from "../Components/Headers"
import "../pages/Ranking.css"
const Ranking = () => {
  return (
    <div>
      <Header/>

       <div className="Creator">
         <h3 className="topCrt"> top creator</h3>
         <p className="chekOut"> Check out top ranking NFT artists on the NFT Marketplace.</p>
       </div>
    </div>
  )
}

export default Ranking