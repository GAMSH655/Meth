import React from 'react'
import "../pages/ConnectWallet.css"
import Header from "../Components/Headers"
import ConnectImg from  "../assets/Double_Astro.png"
import MetaMask from "../assets/Metamask.png"
import Wallet from "../assets/WalletConnect.png"
import CoinBAse from "../assets/Coinbase.png"
import Footer from "../Components/Footer"
const ConnectWallet = () => {
  return (
    <div>
        <Header/>

        <div className="connectParentDiv">
         <img src={ConnectImg } alt=""  className='ConnectImg '/>
         <div className="ConnectTextContainer">
         <h3 className="create">connect wallet</h3>
        <p className="welcome">choose a wallet want to connect there are several wallet providers</p>
        <div className="CoinProvider">
            <img src={MetaMask} alt=""   className='coinImg' />
            <p className="providerName">metamask</p>
        </div>
        <div className="CoinProvider">
            <img src={Wallet} alt=""  className='coinImg'/>
            <p className="providerName">wallet connect</p>
        </div>
        <div className="CoinProvider">
            <img src={CoinBAse} alt=""   className='coinImg' />
            <p className="providerName">coin base</p>
        </div>
         </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ConnectWallet