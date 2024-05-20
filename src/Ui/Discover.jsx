import React from 'react'
import "./Discover.css"
import { FaEye } from 'react-icons/fa'
import Lonely from "../assets/Lonely.png"
import Sky from "../assets/Sky.png"
import Astronaut from "../assets/Astronaut.png"
import Moon from "../assets/Moon.png"
import Nebula from "../assets/Nebula.png"
import SpaceOne from "../assets/SpaceOne.png"
import Shroomie from "../assets/Shroomie.png"
const Discover = () => {
    const DiscoverCollections=[
        {
          DiscoverIMg:Lonely,
          DiscoverTitle : "Distant galaxy",
          DiscoverName: "Moondancer" ,
          DiscoverSmallImg:Moon
        },
        {
          DiscoverIMg:Sky,
          DiscoverTitle : "life on edena",
          DiscoverName: "Nebula kid" ,
          DiscoverSmallImg:Nebula
        },
        {
          DiscoverIMg:Astronaut ,
          DiscoverTitle : "Astro fiction",
          DiscoverName: "space one" ,
          DiscoverSmallImg:SpaceOne
        },
    ]
  return (
    <div>
         <div className="divOne">
         <h3 className="discover">discover more nfts</h3>

          <div className="flexdiv">
          <p className="exploreN">explore new nfts</p>
          <button className='buttonEYE'><FaEye className='eyeIcon'/>see all</button>
          </div>
         
         </div>
         <div className='DiscoverInfoBox'>
                    {
                        DiscoverCollections.map((DiscoverInfo, index)=>{
                          return <div  className='DiscoverInfoBox11' key={index}>
                              <img src={DiscoverInfo.DiscoverIMg} alt=""  className='DiscoverIMg' />
                              <h3 className='DiscoverTitle'>{DiscoverInfo.DiscoverTitle}</h3>
                              <div className="NAAme">
                              <img src={DiscoverInfo.DiscoverSmallImg} alt="" />
                              <p className='DiscoverName'> {DiscoverInfo.DiscoverName}</p>
                              </div>
                              <table >
                                      <tr>
                                          <th>price</th>
                                          <th>Higest bid</th>
                                      </tr>
                                      <tr>
                                          <td>163  ETH</td>
                                          <td>0.33 ETH</td>
                                         
                                      </tr>
                                      </table>
                          </div>
                        }) 
                       }
         </div>
         <button className='MObil_buttonEYE'><FaEye className='eyeIcon'/>see all</button>

         <section className='Mushroom'>
             
             <div className="MushroomTextBox">
                <div className="smallBox">
                    <img src={Nebula} alt="" />
                    <p className="shroomieTExt"> Shroomie</p>
                </div>
                 <h3 className="magic">magic Mushroom</h3>
                 <button className="see"> <FaEye/> see nfts</button>
             </div>
              <div className="BoxTime">
                 <h3 className="auction">Auction ends in :</h3>
                <div className="times">
                <p className="hr">59:<span className='rs'>hours</span></p>
                 <p className="hr">59:<span className='rs'>minutes</span></p>
                 <p className="hr">59 <span className='rs'>seconds</span></p>
                </div>
              </div>
         </section>
        </div>
  )
}

export default Discover