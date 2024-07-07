import React from 'react'
import NavBar from '../components/navBar'
import Copyright from '../components/copyright.jsx';
import '../css/signUp.css';

const SignUpPage = () => {
  return (
    <div className='main_content'>
        <NavBar/>
        <div className='main_content'>
            
            <Copyright/>
        </div>
    </div>
  )
}

export default SignUpPage