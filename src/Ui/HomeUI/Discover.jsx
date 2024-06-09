import React  , {useState , useEffect}from 'react'
import "../HomeUI/Discover.css"
import { FaEye } from 'react-icons/fa'
import Avatar from "../../assets/Avatar.png"
import  Astronaut from "../../assets/Astronaut.png"
import Lonely from "../../assets/Lonely.png"
import  Sky from  "../../assets/Sky.png"
import MoonDAncer from "../../assets/Moon.png"
import Nebula from "../../assets/Nebula.png"
import SpaceOne from "../../assets/SpaceOne.png"

const CountDown_Target = new Date("2026-06-31T23:59:59");
const getTimeLeft = () =>{
  const totalTimeLeft = CountDown_Target - new Date();
    const days =  Math.floor( totalTimeLeft/(1000 * 60 * 60 * 24));
    const hours =  Math.floor( totalTimeLeft/(1000 * 60 * 60 ) % 24);
    const minutes =  Math.floor( totalTimeLeft/(1000 * 60 * 60 ) % 60);
    const seconds =  Math.floor( totalTimeLeft/(1000) % 60)

    return{days , hours , minutes , seconds};
}
const Discover = () => {
  const [timeLeft , setTimeLetf] = useState(()=>getTimeLeft());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimeLetf(getTimeLeft())
    }, 1000) 
     return()=>{
      clearInterval(timer)
     }
  } , [])
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
      <div className="DiscoverInfoBox11">
         <img src={Sky} alt="" className='DiscoverIMg'/>
         <h3 className="DiscoverTitle"> life on edena</h3>
         <div className="NAAme">
         <img src={Nebula} alt="" />
         <p className="DiscoverName">Nebula kid</p>
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

      <div className="DiscoverInfoBox11">
         <img src={Astronaut} alt="" className='DiscoverIMg'/>
         <h3 className="DiscoverTitle"> AStrofiction</h3>
         <div className="NAAme">
         <img src={ SpaceOne} alt="" />
         <p className="DiscoverName">Space one</p>
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
           <div className="OuterTimerBox">
             <p className="auction">auction starts in</p>
           <div className="BoxTime">
              {Object.entries(timeLeft).map(el =>{
                const label = el [0];
                const value = el [1]
                return <div className="innerTimeBox2">
                <p className="time">{value}<span className='time_Parameter'>{label}</span> 
                </p> 
                </div>
              })}
           </div>

           </div>
       </div>
        </div>
        <button className="MObil_buttonEYE"> <FaEye className='eyeIcon'/> see all </button>
    </div>
  )
}

export default Discover