import React from 'react'
import "./Work.css"
import Cart from "../assets/Cart.png"
import Mus from "../assets/Mus.png"
import Wallet from "../assets/Wallet.png"
import Astro from "../assets/Astro.png"
import { FaEnvelope } from 'react-icons/fa'
const Form = () => {
  return (
    <div className='workParent'>
        <h3 className="how">how it works</h3>
        <p className="findout"> find out how to get started</p>
        <div className="workFlexbOX">
           <div className="WorkBox">
            <img src={Wallet} alt=""  className='workImgTop'/>
             <div>
             <h3 className="workTitle">set up wallet</h3>
             <p className="workP">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
             </div>
           </div>
           <div className="WorkBox">
            <img src={Mus} alt=""  className='workImgTop' draggable='false' />
             <div>
             <h3 className="workTitle">Create collection</h3>
             <p className="workP">Upload your work and setup your collection. Add a description, social links and floor price.</p>
             </div>
           </div>
           <div className="WorkBox">
            <img src={Cart} alt=""  className='workImgTop' />
             <div>
             <h3 className="workTitle">Start Earning</h3>
             <p className="workP">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
             </div>
           </div>
        </div>
        <div className="formCont">
           <img src={Astro} alt="" className='workImg' />
           <div className="FormAside">
             <h3 className="formTtile">join our weekly digest</h3>
             <p className="formP">Get exclusive promotions & updates <br />  straight to your inbox.</p>
             <form action="" className='formWork'>
             <input type="text"  placeholder='enter your mail here ' className='WorkInput'/>
             <button className="formBTnShow"> <FaEnvelope className='envelope'/> suscribe</button>
             <br /><br />
              <div className="buttonFormWork">
              <button className="formBTnSNone"> <FaEnvelope className='envelope'/> suscribe</button>
              </div>
             </form>
           </div>
        </div>
    </div>
  )
}

export default Form