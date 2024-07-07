import React from 'react'
import NavBar from '../components/navBar.jsx';
import Copyright from '../components/copyright.jsx';

const Recruit = () => {
  return (
    <div className='main_background'>
        <NavBar/>
        <div className='main_content'>
            <div>채용정보 페이지</div>
            <Copyright/>
        </div>
    </div>
  )
}

export default Recruit