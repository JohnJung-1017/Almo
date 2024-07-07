import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../components/navBar.jsx';
import QuickSignUp from './quickSignup.jsx';
import '../css/signUp.css';

const SignUp = () => {
  return (
    <div className='main_background'>
        <NavBar/>
        <div className='main_content'>
            <div className='signUp_container'>
              <div className='signIn_title'>
                <div className='nav_logo'></div>
                  <div className='nav_name'>
                    <div className='nav_title_light'>모든알바 모든리뷰</div>
                    <div className='nav_title_bold'>ALMO 회원가입을 환영합니다</div>
                  </div>
                </div> 
                <QuickSignUp/>
                <Link className='signUp_link' to={'/signUpPage'}>회원가입 바로가기</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp