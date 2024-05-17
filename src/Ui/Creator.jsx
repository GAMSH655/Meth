import "./Creator.css"
import React from 'react'
import { FaRocket } from "react-icons/fa"
const Creator = () => {
  return (
    <div>
       <h3 className="top">top Creator</h3>
        <div className="CreatorInnerDiv">
        <p className="chkt">Checkout Top Rated Creators on the NFT Marketplace</p>
        <button className="RocketBtn"> <FaRocket className="rkct"/>view ranking</button>
        </div>
    </div>
  )
}

export default Creator