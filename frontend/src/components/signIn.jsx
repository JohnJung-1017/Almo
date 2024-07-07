import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../components/navBar.jsx';
import '../css/signIn.css';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

  return (
    <div className='main_background'>
        <NavBar/>
        <div className='main_content'>
            <div className='signIn_container'>
                <div className='signIn_title'>
                    <div className='nav_logo'></div>
                    <div className='nav_name'>
                    <div className='nav_title_light'>모든알바 모든리뷰</div>
                    <div className='nav_title_bold'>ALMO</div>
                    </div>
                </div>
                <div className='logIn'>
                    <div className='logIn_box'>
                        <form onSubmit={onsubmit}>
                            <div className='form_group'>
                                <input
                                    className='logIn_box_input'
                                    name="email"
                                    type='text'
                                    placeholder='아이디'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='form_group'>
                                <input
                                    className='logIn_box_input'
                                    name="password"
                                    type='password'
                                    placeholder='비밀번호'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className='logIn_button'>
                        <input
                            className='logIn_box_button'
                            type='submit'
                            value="로그인"/>
                    </div>
                </div>
                <div className='logIn_find'>
                    <div className='logIn_find_box1'>
                        <Link className='sign_link' to={'/signUp'}>회원가입</Link>
                        <Link className='sign_link' to={'/signIn'}>아이디 찾기</Link>
                        <Link className='sign_link' to={'/signIn'}>비밀번호 찾기</Link>
                    </div>
                    <div className='logIn_find_box2'>
                        <div className='nav_logo'></div>
                        <div className='nav_logo'></div>
                        <div className='nav_logo'></div>
                        <div className='nav_logo'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn