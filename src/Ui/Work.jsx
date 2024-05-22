import React from 'react'
import "./Form.css"
import Cart from "../assets/Cart.png"
import Mus from "../assets/Mus.png"
import Wallet from "../assets/Wallet.png"
const Form = () => {
  return (
    <div className='workParent'>
        <h3 className="how">how it works</h3>
        <p className="findout"> find out how to get started</p>
        <div className="workFlexbOX">
           <div className="WorkBox">
            <img src={Wallet} alt=""  className='workImg'/>
             <div>
             <h3 className="workTitle">set up wallet</h3>
             <p className="workP">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
             </div>
           </div>
           <div className="WorkBox">
            <img src={Mus} alt=""  className='workImg' />
             <div>
             <h3 className="workTitle">Create collection</h3>
             <p className="workP">Upload your work and setup your collection. Add a description, social links and floor price.</p>
             </div>
           </div>
           <div className="WorkBox">
            <img src={Cart} alt=""  className='workImg' />
             <div>
             <h3 className="workTitle">Start Earning</h3>
             <p className="workP">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Form