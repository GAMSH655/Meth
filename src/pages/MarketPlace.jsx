import React from 'react'
import "./Market.css"
import Header from "../Components/Headers"
import MagicMush from "../assets/Mush2.png"
import HappyRobot from "../assets/Rusty1.png"
import HappyRob from "../assets/Rusty2.png"
import Rob from "../assets/Rusty1.png"
import DancingRobot from "../assets/DancingRob.png"
import Cat from "../assets/Cat.png"
import Bear from "../assets/Bear.png"
import Dog from "../assets/Dog2.png"
import Flower from "../assets/FlowerGirl.png"
import MoonDancer from "../assets/Moon.png"
import Travel from "../assets/Travel.png"
import Neb from "../assets/Nebula.png"
import Sunset from "../assets/Sunset.png"
import Anim from "../assets/Guy.png"
import Skeleton from "../assets/Skeleton.png"
import Ape from "../assets/Ape.png"
import ColorDog from "../assets/ColorDog.png"
import Footer from "../Components/Footer"
const MarketPlace = () => {
  const MarketNftCollections = [
    { MarketNftImg:MagicMush,
      MarketNftName : "magic mushroom o325",
      MarketNftArtist : Cat,
      ArtistNAme: "Shroomie"
    },
    { MarketNftImg:HappyRobot,
      MarketNftName : "Happy Robot 032",
      MarketNftArtist : Cat,
      ArtistNAme: "Shroomie"
    },
    { MarketNftImg:HappyRob,
      MarketNftName : "Happy Robot 024",
      MarketNftArtist : Cat,
      ArtistNAme: "Shroomie"
    },
    { MarketNftImg:Bear,
      MarketNftName : "designer bear",
      MarketNftArtist : Cat,
      ArtistNAme: "Shroomie"
    },
    { MarketNftImg:Dog,
      MarketNftName : "colorful dog 0356",
      MarketNftArtist : Cat,
      ArtistNAme: "Shroomie"
    },
    { MarketNftImg:DancingRobot,
      MarketNftName : "Dancing Robot 0312",
      MarketNftArtist :Rob,
      ArtistNAme: "Robotica"
    },
    { MarketNftImg:Flower,
      MarketNftName : "cherry blossom girl",
      MarketNftArtist :MoonDancer,
      ArtistNAme: "MoonDancer"
    },
    { MarketNftImg:Travel,
      MarketNftName : "space travel",
      MarketNftArtist :Neb,
      ArtistNAme: "Nebula kid"
    },
    { MarketNftImg:Travel,
      MarketNftName : "space travel",
      MarketNftArtist :Neb,
      ArtistNAme: "Nebula kid"
    },
    { MarketNftImg:Skeleton,
      MarketNftName : "Catch 22",
      MarketNftArtist :Anim,
      ArtistNAme: "Nebula kid"
    },
    { MarketNftImg:Ape,
      MarketNftName : "iceCream Ape 024",
      MarketNftArtist :Ape,
      ArtistNAme: "ice ape club"
    },
    { MarketNftImg:ColorDog,
      MarketNftName : "colorful dog 0334",
      MarketNftArtist :ColorDog,
      ArtistNAme: "Puppy power"
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
       <div className="MarketGrid">
        {
          MarketNftCollections.map((MarketNftCollectionInfo , index)=>{
            return <div key={index} className='MarketNftCollectionInfo'>
               <img src={MarketNftCollectionInfo.MarketNftImg} alt="" className='MarketNftImg'/>
               <h3 className="martketTitle">{MarketNftCollectionInfo.MarketNftName}</h3>
               <div className="NAAme">
              <img src={MarketNftCollectionInfo.MarketNftArtist}  className='tinyImg'  alt="" />
              <p className="DiscoverTitle">{MarketNftCollectionInfo.ArtistNAme}</p>
               </div>
               <table className='tableDiscover'> 
                <tr>
                  <th className='thDiscover'>Price</th>
                  <th className='thDiscover'>Highest bid</th>
                </tr>
                <tr>
                  <td className='tdDiscover'>1.63 Eth</td>
                  <td className='tdDiscover'>0.33wEth</td>
                </tr>
             </table>
            </div>
          })
        }
       </div>
       <Footer/>
    </div>
  )
}

export default MarketPlace