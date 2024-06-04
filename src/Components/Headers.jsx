import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
                 <NavLink to="/" className='links'>Home</NavLink>
                 <NavLink to="/Ranking"  className='links'>Ranking</NavLink>
                 <NavLink to="/MarketPlace"  className='links'>Marketplace</NavLink>
                 <NavLink to="/ConnectWallet"  className='links'>Connect Wallet</NavLink>
                 <button className="signUpBtn">
                   < FaRegUser />  <NavLink to="/CreateAccount"  className='links'>  sign up</NavLink>
                  </button>
            </div>
            <button className="OpenBtn" onClick={HandleOpenMenu}>{open ?   <FaTimes/>:<FaBars/> }</button>
        </div>
      
       {/* mobile header  */}
           {
            open && (
               <div className="mobileHeader">
                <div className="Mobile_Link_Container">
              <NavLink to="/" className='Moblinks'>Home</NavLink>
              <NavLink to="/Ranking" className='Moblinks'>Ranking</NavLink>
              <NavLink to="/marketplace"  className='Moblinks'>market place</NavLink>
              <NavLink to="/connectwallet"  className='Moblinks'>market place</NavLink>
              <a href="#"  className='Moblinks'>connect  wallet</a  >
             </div>
             <button className="MobsignUpBtn">
              < FaRegUser />  <NavLink to="/CreateAccount"  className='links'>  sign up</NavLink>
                  </button>
               </div>
            )
           }
    </div>
  )
}
export default Headers
