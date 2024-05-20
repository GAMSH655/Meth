import React from 'react'
import "./Discover.css"
import { FaEye } from 'react-icons/fa'
import Lonely from "../assets/Lonely.png"
import Sky from "../assets/Sky.png"
import Astronaut from "../assets/Astronaut.png"
import Moon from "../assets/Moon.png"
import Nebula from "../assets/Nebula.png"
import SpaceOne from "../assets/SpaceOne.png"
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
        </div>
  )
}

export default Discover