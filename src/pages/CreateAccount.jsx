import React, { useEffect } from 'react'
import "../pages/Create.css"
import Headers from '../Components/Headers'
import Footer from "../Components/Footer"
import FormImg from "../assets/Double_Astro.png"
import { FaEnvelope, FaLock, FaUser , FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import Cancel from "../assets/Cancel.avif"
import validation from '../Components/validation'
const CreateAccount = () => {
  const [formValues,setFormValues] = useState({
    firstname:"",
    lastname:"",
    mail:"",
    password:""
   })
   const [formErrors,setformErrors] = useState({})
   const [isSubmitted , setisSubmitted ] = useState(false)
   const inputHandler =(e)=>{
    const {name , value} = e.target
    setFormValues({...formValues , [name]:value} )
    console.log(formValues);
   }
    const handleSumbit =(e)=>{
      e.preventDefault();
     setformErrors(Validate(formValues)); 
     setisSubmitted(true)
    }
    useEffect(()=>{
      console.log(formErrors)
      if(Object.keys(formErrors).length === 0  && isSubmitted){
        console.log(formValues)
      }
    },[formErrors])
    const Validate = (values) =>{
      let error ={}
      if(!values.username){
          error.username="first name required"
      }
      if(!values.mail){
          error.mail="mail ia required"
      }
      if(!values.password){
          error.password="passwords is required"
      }else if (values.password.length < 5){
          error.password="password  must be more than 5🩸 "
      }
      if(!values.confirmpasword){
          error.confirmpasword="passwords is required"
      }else if (values.confirmpasword.length < 5){
          error.confirmpasword="pass word confirmed ✔"
      }
      return error
    }
  return (
    <div>
        <Headers/>
      
       <div className="flexForm">
         <img src={FormImg } alt=""  className='formImg'/>
         <div className="formDiv">
              <h3 className="create">create account</h3>
              <p className="welcome">Welcome! enter your details and start creating, collecting and selling NFTs.  </p>
              <form action="" className='fromPArent' onSubmit={handleSumbit}>
               
                 <div>
                 <div className="Form1">
                 <span>  <FaUser className='fromIcon'/> </span> 
                 <input type="text"
                 placeholder='username' 
                 className='RegForm' 
                 name='username' 
                 value={formValues.username}
                 onChange={inputHandler }
                  />
                </div>
                <p className="error">{formErrors.username}  </p>

                 </div>
                
               <div className="Form1">
                  <FaEnvelope className='fromIcon'/> 
                  <input type="mail"
                   placeholder='mail' 
                   className='RegForm' 
                   name='mail'
                   value={formValues.mail} 
                   onChange={inputHandler } />
               </div>
               <p className="error">{formErrors.mail}  </p>
                
                <div className="Form1">
                  <FaLock className='fromIcon'/>  
                  <input type="Password" 
                  placeholder=' password' 
                  className='RegForm' 
                  name='password' 
                  onChange={inputHandler }
                  values={formValues.password} 
                  />
                </div>
                <p className="error">{formErrors.password}  </p>
              
                <div className="Form1">
                  <FaLock className='fromIcon'/>
                  <input type="password" 
                  placeholder='confirm password'  
                  name="confirmpasword"
                  className='RegForm'
                  values={formValues.confirmpasword}  
                  onChange={inputHandler }
                 />
                </div>
                <p className="error">{formErrors.confirmpasword}  </p>
               
               
                <button className="formBTnREg" > create account</button> 
              </form>
          { Object.keys(formErrors).length === 0  && isSubmitted ? (<div className='signInSucess'> sign in successfully</div>): (<div><p className="warningText"> please fill in the empty field</p></div>)
      }
         </div>
       </div>
       <Footer/>
       <img src={Cancel} alt="" className='cancel'/>
    </div>
  )
}

export default CreateAccount