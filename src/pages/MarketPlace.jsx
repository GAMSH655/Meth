import React from 'react'
import "./Market.css"
import Header from "../Components/Headers"
import MagicMush from "../assets/Mushroom.png"
import HappyRobot from "../assets/Robot.png"
import HappyRob from "../assets/RobotNft.png"
import Rusty from "../assets/RustyRobot.png"
import Cat from "../assets/Cat.png"
import Bear from "../assets/Bear.png"
const MarketPlace = () => {
  
  const MarketNftCollections = [
    { MarketNftImg:MagicMush,
      MarketNftName : "magic mushroom o325",
      MarketNftArtist : Cat
    },
    { MarketNftImg:HappyRobot,
      MarketNftName : "Happy Robot 032",
      MarketNftArtist : Cat
    },
    { MarketNftImg:Rusty,
      MarketNftName : "Happy Robot 024",
      MarketNftArtist : Cat
    },
  ]
  return (
    <div>
      <Header/>
      <div className="mertktTextBox">
      <h3 className="browse">browse marketplace</h3>
       <p className="browseP">Browse through more than 50k NFTs on the NFT Marketplace.</p>
       <input type="search" placeholder='search your facvorites nfts'  className='market_search_Input'/>
      </div>
      <div className="flexNumber">
        <p  className='numP'>collections <span className='numspan'>302</span></p>
        <p className='numP2'>Nft <span className='numspan'>302</span></p>
      </div>
      <div className="GridContainer" >
       <div className="gridContainer">
        {
          MarketNftCollections.map((MarketNftCollectionInfo , index)=>{
            return <div key={index}>
               <img src={MarketNftCollectionInfo.MarketNftImg} alt="" />
               <h3 className="martketTitle">{MarketNftCollectionInfo.MarketNftName}</h3>
            </div>
          })
        }
       </div>
         </div>
    </div>
  )
}

export default MarketPlace