import React from 'react'
import Header from "../Components/Headers"
import "../pages/Ranking.css"
import Footer from "../Components/Footer"
import Jaydon  from "../assets/Glassnft.png"
import Ruben from "../assets/Guy.png"
import Alfredo from "../assets/GirlNft.png"
import Davis  from "../assets/Girl.png"
import Livia from "../assets/MarkFace.png" 
import Kiana from "../assets/Cat.png"
import Philip from "../assets/Shroomie.png"
import Maria from "../assets/RustyRobot.png"
import Rubin from "../assets/Art.png"
import Lindsey from "../assets/SmallDog.png"
import Randy from "../assets/Robot.png"

const Ranking = () => {
  const RankingCollection=[
    {   RankingDigit : 1,
        RankingImg:Jaydon,
        RankingName:"jaydon eskstrom bothman",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
       RankingDigit : 2,
        RankingImg:Ruben,
        RankingName:"Ruben",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit : 3,
        RankingImg:Alfredo,
        RankingName:"ALfredo",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit : 4,
        RankingImg:Davis,
        RankingName:"Davis",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit : 5,
        RankingImg:Livia,
        RankingName:"Livia",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit : 6,
        RankingImg:Kiana,
        RankingName:"Kiana",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit : 7,
        RankingImg:Philip,
        RankingName:"Philip",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit : 8,
        RankingImg:Maria,
        RankingName:"Maria",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit : 9,
        RankingImg:Rubin,
        RankingName:"Rubin",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit :10,
        RankingImg:Lindsey ,
        RankingName:"Lindseyss",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
    {
        RankingDigit :11,
        RankingImg:Randy,
        RankingName:"Randy",
        change:-1.4,
        Sold:602,
        Volume:12.4
    },
  ]
  return (
    <div>
      <Header/>

       <div className="Creator">
         <h3 className="topCrt"> top creator</h3>
         <p className="chekOut"> Check out top ranking NFT artists on the NFT Marketplace.</p>
       </div>
          <table className='First_Ranking_table'>
                <tr className='TR'>
                  <th >today</th>
                  <th>this week</th>
                  <th>this month</th>
                  <th>All time</th>
                </tr>
              </table>
          <table className='Second_Ranking_table'>
                <tr className='TR'>
                  <th  className='padded_TH'>Artist</th>
                  <th className='padded_TH'>change</th>
                  <th className='padded_TH' id='nftNone'>nfts sold</th>
                  <th className='padded_TH'>Volume</th>
                </tr>
                     {
                      RankingCollection.map((RankingInfo , index)=>{
                        return <tr key={index}  className='bordered_Radius'> 
                          <td><div className='tableDiv' >
                          <span className='RankingDigit'>{RankingInfo.RankingDigit}</span>
                          <img src={RankingInfo.RankingImg} alt=""  className='RankingImg'/>
                          <p className="RankingName">{RankingInfo.RankingName}</p>
                        </div></td>
                         <td>{RankingInfo.change}</td>
                         <td>{RankingInfo.Volume}</td>
                         <td id='nftNone'>{RankingInfo.Sold}</td>
                        </tr> 
                      })
                      }
                      
              </table>
              <Footer/>
    </div>
  )
}

export default Ranking