import React from 'react'
import "./Trending.css"
import Dog from "../assets/DogNft.png"
import Mushroom from "../assets/Mushroom.png"
import Numbers from "../assets/Numbers.png"
const Trending = () => {
    const NftCollections=[
      {
        nftImg:Dog ,
        Amount :Numbers
      },
      {
        nftImg:Mushroom,
        Amount:Numbers
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
                  </div>
                
          })
       }
         </div>
    </div>
  )
}

export default Trending