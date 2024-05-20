import React from 'react'
import NftSpace from "../assets/SpaceN.png"
import "../Ui/Hero.css"
import Header from "../Components/Headers"
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
         <span className='heroText_span'> NFT marketplace UI created with Anima </span>
         <span  className='heroText_span'>for Figma. Collect, buy and sell art from</span>
         <span  className='heroText_span'>more than 20k NFT artists.</span>
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
        <img src={NftSpace} alt="" className='HeroImg'/>
      </div>
    </div>
  )
}

export default Hero