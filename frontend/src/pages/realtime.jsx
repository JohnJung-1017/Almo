import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar.jsx';
import Copyright from '../components/copyright.jsx';
import '../css/realtime.css';

const Realtime = () => {

  return (
    <div className='realtime_background'>
        <NavBar/>
          <div className='realtime_content'>
            <div className='realtime_container'>
              <div className = 'realtime_box1'>
                <div className='rbox1_content'>
                  <div className='rbox1_title1'>실시간 인기알바
                  <div className='rbox1_title2'>실시간 인기순위, 인기알바</div>
                  </div>
                </div>
              </div>
              </div>
              <div className='realtime_box2'>
                <div className='rbox2_content_container'>
                <div className='rbox2_title'>카테고리별
                  <div className='rbox2_content'>
                    </div>
                    </div>
                    <div className='rbox2_content_container'>
                    <div clssName= 'rbox2_title'>실시간인기알바순위
                    <div className='rbox2_content'></div>
                    </div>
                    
                  </div>
                  
                  
                </div>
              </div>
              <Copyright/>
        </div>
    </div>
  )
}

export default Realtime