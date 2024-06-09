import React from 'react'
import "../pages/Create.css"
import Headers from '../Components/Headers'
import Footer from "../Components/Footer"
import FormImg from "../assets/Double_Astro.png"
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import validation from '../Components/validation'
const CreateAccount = () => {
  const [values , setValues] = useState({
    username: "",
    mail:"",
    password:"",
    confirmpassword:" "
  })
  const handleClick=(event)=>{
    event.preventDefault();
    setErrors(validation(values))
  }
  const [errors , setErrors]= useState({})
  const handleChange = (event)=>{
   setValues({
    ...values , [event.target.name]:event.target.value
   })
   console.log(setValues)
  }
  return (
    <div>
        <Headers/>

       <div className="flexForm">
         <img src={FormImg } alt=""  className='formImg'/>
         <div className="formDiv">
              <h3 className="create">create account</h3>
              <p className="welcome">Welcome! enter your details and start creating, collecting and selling NFTs.  </p>
              <form action="" className='fromPArent'>
               
                 <div>
                 <div className="Form1">
                 <span>  <FaUser className='fromIcon'/> </span> 
                 <input type="text"
                 placeholder='username' 
                 className='RegForm' 
                 name='username' 
                 value={values.username}
                  onChange={handleChange}/>
                </div>
                {errors.username && <p  className='error'>{errors.username}</p>}
                 </div>
                
                
               <div>
               <div className="Form1">
                  <FaEnvelope className='fromIcon'/> 
                  <input type="mail"
                   placeholder='mail' 
                   className='RegForm' 
                   name='mail'
                   onChange={handleChange} 
                   value={values.mail}  />
               </div>
                {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                
                <div className="Form1">
                  <FaLock className='fromIcon'/>  
                  <input type="Password" 
                  placeholder=' password' 
                  className='RegForm' 
                  name='password' 
                  values={values.password}  
                  onChange={handleChange} />
                </div>
                {errors.password && <p className='error'>{errors.password}</p>}
               
                <div>
                <div className="Form1">
                  <FaLock className='fromIcon'/>
                  <input type="password" 
                  placeholder='confirm password'  
                  className='RegForm' 
                  values={values.password}  
                  onChange={handleChange} />
                </div>
                {errors.password && <p className='error'>{errors.password}</p>}
                </div>
               
                <button className="formBTnREg" onClick={handleClick}> create account</button> 
              </form>
         
         </div>
       </div>
       <Footer/>
    </div>
  )
}

export default CreateAccount