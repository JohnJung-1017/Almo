import React from 'react'
import NavBar from '../components/navBar.jsx';
import Copyright from '../components/copyright.jsx';

const Review = () => {
  return (
    <div className='main_background'>
        <NavBar/>
        <div className='main_content'>
            <div>알바 리뷰 페이지</div>
            <Copyright/>
        </div>
    </div>
  )
}

export default Review