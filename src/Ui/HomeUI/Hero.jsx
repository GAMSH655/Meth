import React from 'react'
import NftSpace from "../../assets/SpaceN.png" 
import SkyLone from "../../assets/Lonely.png"
import Shrm from "../../assets/Fox.png"
import "../HomeUI/Hero.css"
import Header from "../../Components/Headers"
import { FaRocket } from 'react-icons/fa'
const Hero = () => {
  return (
    <div>
         <Header/>
      <div className="textBox">
      <div className='HeroDiv'>
      <h3 className="discover">discover</h3>
         <h3 className="dig">digital arts and </h3>
         <h3 className="collect"> collect Nfts </h3>
         <p className="heroText">
         NFT marketplace UI created with Anima
         for Figma. Collect, buy and sell art from
         more than 20k NFT artists.
         </p>
           <div className="buttonCont">
           <button className="get_Started_Btn"> <FaRocket className='Rocket'/> get started </button>
           </div>
         <div className="timeBox">
           <p className="underTExt"> 240k
            <span className='spn'>Total space</span>
           </p>
           <p className="underTExt"> 100k
            <span className='spn'>auctions</span>
           </p>
           <p className="underTExt"> 240k
            <span className='spn'>artist</span>
           </p>
         </div>
      </div>
        {/* <img src={NftSpace} alt="" className='HeroImg' draggable='false'/> */}
         <div className='HeroInfoBox11'>
           <img src={SkyLone} alt="" className='DiscoverIMg'draggable='false' downloadable="false" />
           <div className="NAAme">
             <img src={Shrm} alt="" />
             <p className="DiscoverName">Moon Dancer</p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Hero