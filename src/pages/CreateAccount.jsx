import React from 'react'
import "../pages/Create.css"
import Headers from '../Components/Headers'
import Footer from "../Components/Footer"
import FormImg from "../assets/Double_Astro.png"
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
const CreateAccount = () => {
  return (
    <div>
        <Headers/>

       <div className="flexForm">
         <img src={FormImg } alt=""  className='formImg'/>
         <div className="formDiv">
              <h3 className="create">create account</h3>
              <p className="welcome">Welcome! enter your details and start  
            </p>
            <p className="welcome">creating, collecting and selling NFTs.</p>
              <form action="" className='fromPArent'>
                <div className="Form1">
                 <span>  <FaUser className='fromIcon'/> </span> <input type="text" placeholder='username'  className='RegForm'/>
                </div>
                <div className="Form1">
                  <FaEnvelope className='fromIcon'/>  <input type="email" placeholder='email' className='RegForm' />
                </div>
                <div className="Form1">
                  <FaLock className='fromIcon'/>  <input type="Password" placeholder=' password' className='RegForm' />
                </div>
                <div className="Form1">
                  <FaLock className='fromIcon'/>  <input type="password" placeholder='confirm password'  className='RegForm'/>
                </div>
                <button className="formBTnREg"> create account</button> 
              </form>
         </div>
       </div>
       <Footer/>
    </div>
  )
}

export default CreateAccount