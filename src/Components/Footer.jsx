import React from 'react'
import { CiShop } from "react-icons/ci";
import { FaDiscord , FaYoutube , FaTwitter, FaInstagram , FaEnvelope } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <div>
       <footer>
         <div className="footer1">
         <h3 className="FooterlogoText"> < CiShop  className='headerIcon'/> nft marketplace </h3>
         <p  className="NftP">NFT marketplace UI created with Anima for Figma.</p>
         <div className="joinCon">
            <h3 className="NftP">join our community</h3>
            <FaDiscord className="NftP"/>  <FaYoutube className="NftP"/>  <FaTwitter className="NftP"/>  <FaInstagram className="NftP" />
         </div>
         </div>
         <div className="footer2">
         <h3 className="FooterlogoText"> Explore </h3>
         <p className="NftP">marketplace</p>
         <p className="NftP">Rankings</p>
         <p className="NftP">connect wallet</p>
         </div>
         <div className="footer1">
         <h3 className="FooterlogoText">join our weekly</h3>
         <p className="NftP">Get exclusive promotions & updates straight to your inbox.</p>
         <form action="" className='formWork'>
             <input type="text"  placeholder='enter your mail here ' className='WorkInput'/>
             <button className="formBTnFooter"> <FaEnvelope className='envelope'/> suscribe</button>
             <br /><br />
              <div className="buttonFormWork">
              <button className="formBTnSNone"> <FaEnvelope className='envelope'/> suscribe</button>
              </div>
             </form>
         </div>
       </footer>
    </div>
  )
}

export default Footer