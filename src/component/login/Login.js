import React, { useState}from 'react'
import {Visibility, VisibilityOff} from '@material-ui/icons';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
 
  const [showPassword, setShowPassWord] = useState(false)
const [visibility, setVisibility] = useState(false)

const [password, setPassword] = useState("");
const [email, setEmail] = useState("")
const [passwordData, setPasswordData] = useState("");
const [errorMessage, setErrorMessage] = useState("")

const handleSubmit = async(e) =>{ 
  e.preventDefault();
 await fetch(`http://localhost:3000/users?email=${email}`, 
 {method: 'GET'})
  .then(response => response.json())
  .then(result => result.map((e)=>setPasswordData(e.password)))
  .catch(error => console.log('error', error));
 
  if(passwordData === password){
    sessionStorage.setItem('password',passwordData)
    navigate("/blogs");
  }else{
setErrorMessage("Password is wrong")
  }
}



const changeVisibilty = ()=>{
setShowPassWord(!showPassword)
setVisibility(!visibility)
}

const changeInVisibilty = () =>{
  setShowPassWord(true)
  setVisibility(true)
}



  return (
    <div className="login-wrapper"><span>Login</span>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <input className="form-control" 
      type="email" 
      placeholder="Email" 
      aria-label="default input example"
      onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-3">
     <div className='mb-3'>
      <div className="input-group ">
  <input type={showPassword ? "text" : "password"}
   className="form-control" 
  placeholder="password" 
  aria-label="Recipient's username" 
  aria-describedby="basic-addon2"
  onChange={(e) => setPassword(e.target.value)}
  
  />
 { visibility ?
  <span className="input-group-text" onClick={()=>{changeVisibilty()}} ><Visibility/></span> :
  <span className="input-group-text"  onClick={()=>{changeInVisibilty()}}><VisibilityOff /></span>}
  
</div>
<span style={{
         fontWeight: 'bold',
         color: 'red',
       }}>{errorMessage}</span>
       </div>
    </div>
                            
    <button type="submit" className="btn btn-primary">Submit</button>
    <span> or </span>
    <Link to="/signup">Sign up</Link>
  </form>
  </div>
  )
}
