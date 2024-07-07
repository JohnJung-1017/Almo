import React from 'react'
import '../css/signUp.css';

const QuickSignup = () => {
  return (
    <div className='quick_signUp'>
        <p className='quick_signUp_title'>소셜 계정으로 간편 가입하기</p>
        <div className='quick_signUp_container'>
            <div className='quick_signUp_box'>
                <div className='quick_signUp_button'></div>
                <p className='quick_signUp_info'>네이버</p>
            </div>
            <div className='quick_signUp_box'>
                <div className='quick_signUp_button'></div>
                <p className='quick_signUp_info'>카카오</p>
            </div>
            <div className='quick_signUp_box'>
                <div className='quick_signUp_button'></div>
                <p className='quick_signUp_info'>구글</p>
            </div>
            <div className='quick_signUp_box'>
                <div className='quick_signUp_button'></div>
                <p className='quick_signUp_info'>페이스북</p>
            </div>
            <div className='quick_signUp_box'>
                <div className='quick_signUp_button'></div>
                <p className='quick_signUp_info'>애플</p>
            </div>
        </div>
    </div>
  )
}

export default QuickSignup