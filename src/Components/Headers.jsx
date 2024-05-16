import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import "../Components/Headers.css"
import { FaRegUser   , FaBars , FaTimes} from "react-icons/fa";
import { CiShop } from "react-icons/ci";
export const Headers = () => {
  const [open , setOpen] = useState(false)
  function HandleOpenMenu(){
    setOpen(!open)
  }
  return (
    <div>
        <div className="header">
        <h3 className="logoText"> 
           < CiShop  className='headerIcon'/> nft marketplace
        </h3>
            <div className="LinkContainer">
                 <a href="#" className='links'>marketplace</a>
                 <a href="#"  className='links'>Ranking</a>
                 <a href="#"  className='links'>connect  wallet</a>
                 <button className="signUpBtn"> < FaRegUser /> sign up</button>
            </div>
            <button className="OpenBtn" onClick={HandleOpenMenu}>{open ?   <FaTimes/>:<FaBars/> }</button>
        </div>
      
       {/* mobile header  */}
           {
            open && (
               <div className="mobileHeader">
                <div className="Mobile_Link_Container">
              <a href="#" className='Moblinks'>marketplace</a>
              <a href="#"  className='Moblinks'>Ranking</a>
              <a href="#"  className='Moblinks'>connect  wallet</a>
              <button className="MobsignUpBtn"> < FaRegUser /> sign up</button>
             </div>
               </div>
            )
           }
    </div>
  )
}
export default Headers
