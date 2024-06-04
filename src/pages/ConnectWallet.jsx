import React from 'react'
import "../pages/ConnectWallet.css"
import Header from "../Components/Headers"
import ConnectImg from  "../assets/Double_Astro.png"
import MetaMask from "../assets/MetaMask.png"
import Wallet from "../assets/WalletConnect.png"
import CoinBAse from "../assets/Coinbase.png"
const ConnectWallet = () => {
  return (
    <div>
        <Header/>

        <div className="connectParentDiv">
         <img src={ConnectImg } alt=""  className='ConnectImg '/>
         <div className="ConnectTextContainer">
         <h3 className="create">connect wallet</h3>
        <p className="welcome">choose a wallet want to connect  
        <span className='innerWEl'>there are several wallet providers </span></p>
         </div>
        </div>
    </div>
  )
}

export default ConnectWallet