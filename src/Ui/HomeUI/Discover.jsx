import React from 'react'
import "../HomeUI/Discover.css"
import { FaEye } from 'react-icons/fa'
import Avatar from "../../assets/Avatar.png"
import  Astronaut from "../../assets/Astronaut.png"
import Lonely from "../../assets/Lonely.png"
import  Sky from  "../../assets/Sky.png"
import MoonDAncer from "../../assets/Moon.png"
import Nebula from "../../assets/Nebula.png"
import SpaceOne from "../../assets/SpaceOne.png"
const Discover = () => {
  return (
    <div>
    <h3 className="exploreN"> Explore NFTs</h3>
    <div className="flexdiv">
      <p className="exploreN">explore new trending nfts</p>
      <button className="buttonEYE"> <FaEye className='eyeIcon'/> see all </button>
    </div>
    <div className="DiscoverInfoBox">
      <div className="DiscoverInfoBox11">
         <img src={Lonely} alt="" className='DiscoverIMg'/>
         <h3 className="DiscoverTitle"> Distant galaxy</h3>
         <div className="NAAme">
         <img src={MoonDAncer} alt="" />
         <p className="DiscoverName">Moon Dancer</p>
         </div>
                <table>
          <tr>
            <th>Price</th>
            <th>Highest bid</th>
          </tr>
          <tr>
            <td>1.63 Eth</td>
            <td>0.33wEth</td>
          </tr>
        </table>
      </div>
      <div className="DiscoverInfoBox11">
         <img src={Sky} alt="" className='DiscoverIMg'/>
         <h3 className="DiscoverTitle"> life on edena</h3>
         <div className="NAAme">
         <img src={Nebula} alt="" />
         <p className="DiscoverName">Nebula kid</p>
         </div>
                <table>
          <tr>
            <th>Price</th>
            <th>Highest bid</th>
          </tr>
          <tr>
            <td>1.63 Eth</td>
            <td>0.33wEth</td>
          </tr>
        </table>
      </div>

      <div className="DiscoverInfoBox11">
         <img src={Astronaut} alt="" className='DiscoverIMg'/>
         <h3 className="DiscoverTitle"> AStrofiction</h3>
         <div className="NAAme">
         <img src={ SpaceOne} alt="" />
         <p className="DiscoverName">Space one</p>
         </div>
                <table>
          <tr>
            <th>Price</th>
            <th>Highest bid</th>
          </tr>
          <tr>
            <td>1.63 Eth</td>
            <td>0.33wEth</td>
          </tr>
        </table>
      </div>
    </div>
      
        <div className="sect">

        <div className="Mushroom">

            <div className='MushroomTextBox'>
            <div className="smallBox">
               <img src={Avatar} alt="" />
               <p className="shroomieTExt">Shroomie</p>
            </div>
            <h3 className="magic"> magic mushrooms</h3>
           <button className="see"> <FaEye/> see</button>
           </div>
           <div className="BoxTime">
            <p className="auction">auction starts in</p>
             <div className="innerTimeBox">
             <p className="time">00 <span className='time_Parameter'>hours</span></p> <span className="dot">:</span>
             <p className="time">00 <span className='time_Parameter'>minutes</span></p> <span className="dot">:</span>
            <p className="time">00 <span className='time_Parameter'>seconds</span></p>
             </div>
           </div>
       </div>
        </div>
        <button className="MObil_buttonEYE"> <FaEye className='eyeIcon'/> see all </button>
    </div>
  )
}

export default Discover