import React from 'react';
import NavBar from '../components/navBar.jsx';
import Copyright from '../components/copyright.jsx';

const TopicBest = () => {
  return (
    <div className='main_content'>
        <NavBar/>
        <div className='main_content'>
            <div>토픽 베스트 페이지</div>
            <Copyright/>
        </div>
    </div>
  )
}

export default TopicBest