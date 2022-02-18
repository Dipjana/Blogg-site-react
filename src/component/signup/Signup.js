import React, { useState } from 'react'
import './Signup.css';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'
import { Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


 // password 
 const [passwordEye, setPasswordEye] = useState(false);
 const handlePassowrdClick = () => {
     setPasswordEye(!passwordEye)
 }
 // confirm password 
const [confirmpasswordEye, setconfirmpasswordEye] = useState(false);
const handleConfirmPassowrdClick = () => {
    setconfirmpasswordEye(!confirmpasswordEye)
}

const handleSubmit = async(e) =>{
  e.preventDefault();
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password
});
await fetch("http://localhost:3000/users",
  {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  navigate("/"); 
}

const validate = (value) => {
  
  if (validator.isStrongPassword(value, {
    minLength: 8, minLowercase: 1,
    minUppercase: 1, minNumbers: 1, minSymbols: 1
  })) {
    setPassword(value)
    setErrorMessage('Is Strong Password')
  } else {
    setErrorMessage('Is Not Strong Password')
  }
}
const [matchpassword, setMatchpassword] = useState("")
const validatetwo = (value) =>{
  if(password === value){
    setMatchpassword("password Matched")
  }else{
    setMatchpassword("password notmatch")
  }
}
  
 
  return (
    <div className="signup-wrapper"><span>Sign up</span>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    
      <input 
      className="form-control" 
      type="text" 
      placeholder="firstname" 
      aria-label="default input example"
      onChange={(e) => setFirstName(e.target.value)}

      />
    </div>
    <div className="mb-3">
    
      <input
      className="form-control" 
      type="text" 
      placeholder="lastname" 
      aria-label="default input example"
      onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="mb-3">
     
      <input 
      className="form-control" 
      type="Email" placeholder="Email" 
      aria-label="default input example"
      onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className='mb-3'>
      <div className="input-group">
  <input 
  type={(passwordEye === false) ? 'password' : 'text'}
  className="form-control" 
  placeholder="password" 
  aria-label="Recipient's username" 
  aria-describedby="basic-addon2"
  onChange={(e) => validate(e.target.value)}
  />
   {
                                (passwordEye === false) ? <span className="input-group-text" ><Visibility onClick={handlePassowrdClick} /></span> : <span className="input-group-text" > <VisibilityOff onClick={handlePassowrdClick} /></span>
                            }
    </div>
    <span style={{
         fontWeight: 'bold',
         color: 'red',
       }}>{errorMessage}</span>
 </div>
    <div className="input-group">
  <input 
  type={(confirmpasswordEye === false) ? 'password' : 'text'}
  className="form-control" 
  placeholder="confirm password" 
  aria-label="Recipient's username" 
  aria-describedby="basic-addon2"
  onChange={(e) => validatetwo(e.target.value)}
  />
    {
                                (confirmpasswordEye === false) ? <span className="input-group-text" ><Visibility onClick={handleConfirmPassowrdClick} /></span> : <span className="input-group-text" > <VisibilityOff onClick={handleConfirmPassowrdClick} /></span>
                            }
</div>
<span style={{
         fontWeight: 'bold',
         color: 'red',
       }}>{matchpassword}</span>
       
       <br/>
    <button type="submit" className="btn btn-primary">Submit</button>
    <span> or </span>
    <Link to="/">Login</Link>
  </form>
  </div>
  )
}
