import React from 'react'
import "./Trending.css"
import Dog from "../assets/DogNft.png"
import Mushroom from "../assets/Mushroom.png"
import Numbers from "../assets/Numbers.png"
import Robot from "../assets/RobotNft.png"
import Fox from "../assets/Fox.png"
import Bettle from "../assets/Bettle.png"
import Avatar from "../assets/Avatar.png"
const Trending = () => {
    const NftCollections=[
      { nftImg:Dog ,
        Amount :Numbers,
        NftArtist:Fox,
        Nftname:"dsgn animal",
        nftN:"mr fox"
},
      {
        nftImg:Mushroom,
        Amount:Numbers,
        NftArtist:Avatar,
        Nftname:"Magic mushrooms",
        nftN:"shroomie"
      },
      {
        nftImg:Robot,
        Amount:Numbers,
        NftArtist:Bettle,
        Nftname:"Disco machines",
        nftN:"BeKind2Robots"
      }
    ]
  return (
    <div className=''>
       <h3 className="trending"> trending collections</h3>
       <p className="checkout">Checkout our weekly updated trending collection.</p>
       <div className="GridContainer" >
      {
          NftCollections.map((nftInfo , index)=>{
                  return<div className="collectionBox" key={index}>
                  <img src={nftInfo.nftImg} alt="" className='topImg' />
                  <div className='underflex'>
                  <img src={nftInfo.nftImg} alt=""  className='underImg'/>
                  <img src={nftInfo.nftImg} alt=""  className='underImg'/>
                  <img src={nftInfo.Amount} alt=""  className='underImg'/>
                </div>
                <p className='nftNAme'>{nftInfo.Nftname}</p>
                   <div className="extraInfo">
                   <img src={nftInfo.NftArtist} alt=""  className='nftArtist'/>
                    <p className="nftN">{nftInfo.nftN}</p>
                   </div>
                  </div>
                
          })
       }
         </div>
    </div>
  )
}

export default Trending