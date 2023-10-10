import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import backgroundImage from './webperson.jpg';
import logo from '../weblogo.jpg'
import axios from "axios"


const Login = () => {
  const history=useNavigate();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const handleLogin = () => {
    // Perform your login logic here if needed
    // Then, navigate to the desired route (e.g., "/community")
    navigate('/Afterlogin');
  };


  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:3001/login",{
            email,password
        })
        .then(res=>{
            if(res.data=="exist"){
                history("/home",{state:{id:email}})
            }
            else if(res.data=="notexist"){
                alert("User have not sign up")
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
    <div className="login-container"  >
      <img src={backgroundImage} alt="Main_Image" className="image" />
      <div className="logoverlay">
      <div className="login-box">

        <h1 className="login-heading"><img src={logo} alt="App Logo" className="navbar-logo" /></h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="placeholder-color"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="placeholder-color"
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="login-options">
            <p>
              Don't have an account?{' '}
              <span className="signup-link" onClick={() => navigate('/signup')}>
                Signup
              </span>
            </p>
            <p>
              <span className="forgot-password-link">Forgot password?</span>
            </p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Login;

