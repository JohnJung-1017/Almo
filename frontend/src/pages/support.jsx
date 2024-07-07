import React from 'react'
import NavBar from '../components/navBar.jsx';
import Copyright from '../components/copyright.jsx';

const Support = () => {
  return (
    <div className='main_background'>
        <NavBar/>
        <div className='main_content'>
            <div>고객지원 페이지</div>
            <Copyright/>
        </div>
    </div>
  )
}

export default Support