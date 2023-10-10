import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import backgroundImage from './webperson.jpg';
import logo from '../weblogo.jpg'
import axios from "axios"


const Signup = () => {

  const history=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [repassword, setRePassword] = useState('');

{/*
  const handleSignup = () => {
    // Perform your Signup logic here if needed
    // Then, navigate to the desired route (e.g., "/community")
    navigate('/login');
  };
*/}

  async function handleSignup(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:3001/signup",{
            email,password,repassword
        })
        .then(res=>{
            if(res.data=="exist"){
                alert("User already exists")
            }
            else if(res.data=="notexist"){
                history("/Afterlogin",{state:{id:email}})
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

}


  return (
    <div className="login-container">
        <img src={backgroundImage} alt="Main_Image" className="image" />
      <div className="signoverlay">
      <div className="login-box">
        <h1 className="login-heading"><img src={logo} alt="App Logo" className="navbar-logo" /></h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
        type="re-enter password"
        placeholder="Re-enter Password"
        value={repassword}
        onChange={(e) => setRePassword(e.target.value)}
      />
      <button className="login-button" onClick={handleSignup}>Signup</button>
      <div className="login-options">
            <p>
              Already have an account?{' '}
              <span className="login-link" onClick={() => history('/login')}>
                Login
              </span>
            </p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Signup;

