import "./Creator.css"
import React from 'react'
import { FaRocket} from "react-icons/fa"
import { FaEthereum } from "react-icons/fa";
import Man from "../../assets/Man.png"
import Girl from  "../../assets/GirlNft.png"
import SecondGirl from "../../assets/Girl.png"
import MarkFace from "../../assets/MarkFace.png"
import Cat from "../../assets/Cat.png"
import Shroomie from "../../assets/Shroomie.png"
import Robot from "../../assets/Robot.png"
import Rusty from "../../assets/RustyRobot.png"
import AnimaKid from "../../assets/Animakid.png"
import Woman from "../../assets/Woman.png"
import ChinaMan from "../../assets/ChinaMan.png"
const Creator = () => {
  const CreatorCOllection=[
    { 
       creatorImg:Woman,
       creatorName: "Keepitreal",
       sales: 34.63,
    },
    {
      creatorImg:Man,
      creatorName:"digilab",
      sales: 34.63,
    },
    {
      creatorImg:SecondGirl,
      creatorName: "Juanie",
      sales: 34.63,
    },
    {
      creatorImg:Girl,
      creatorName: "Gravityone",
      sales: 34.63,
    },
    {
      creatorImg:MarkFace,
      creatorName:"Bluewhale",
      sales: 34.63
    },
    {
      creatorImg:Cat,
      creatorName:"Mr fox",
      sales: 34.63
    },
    {
      creatorImg:Shroomie,
      creatorName:"Shroomie",
      sales: 34.63
    },
    {
        creatorImg:Robot,
        creatorName:"Robotica",
        sales: 34.63
    },
    {
      creatorImg:Rusty,
      creatorName:"Rusty Robot",
      sales: 34.63
     },
     {
        creatorImg:AnimaKid,
        creatorName:"Animakid",
        sales: 34.63
     },
     {
        creatorImg:Woman,
        creatorName:"Dotgu",
        sales: 34.63
     },
     {
        creatorImg:ChinaMan,
        creatorName:"Gihibla",
        sales: 34.63
     }
    
  ]
  return (
    <div>
       <h3 className="top">top Creator</h3>
        <div className="CreatorInnerDiv">
        <p className="chkt">Checkout Top Rated Creators on the NFT Marketplace</p>
        <button className="RocketBtn"> <FaRocket className="rkct"/>view ranking</button>
        </div>
         <div className="Grid">
          {
            CreatorCOllection.map((creatorInfo , index)=>{
              return <div className="creatorInfoBox" key={index}> 
                <img src={creatorInfo.creatorImg} alt=""  draggable="false" className="creatorImg"/>
               <div className="hn"> 
               <p className="creatorName">{creatorInfo.creatorName}</p>
                <p className="sales">total sales : {creatorInfo.sales} <span className="eth"><FaEthereum /></span></p>
               </div>
              </div>
            })
          }
            <button id="topHidden"> <FaRocket className="rkct"/>view ranking</button>
          </div>
    </div>
  )
}

export default Creator