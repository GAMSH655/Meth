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
                 <NavLink to="/" className='links'>marketplace</NavLink>
                 <NavLink to="/Ranking"  className='links'>Ranking</NavLink>
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
