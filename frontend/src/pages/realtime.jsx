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
                  <div className='rbox2_content'>
                    <div className='rbox2_content_left'>
                      <h1>카테고리</h1>
                    </div>
                    <div className='rbox2_content_right'></div>
                  </div>
                  <div className='rbox2_content'>
                    <div className='rbox2_content_left'>
                      <h1>실시간 인기알바 순위</h1>
                    </div>
                    <div className='rbox2_content_right'></div>
                  </div>
                </div>
              </div>
              <Copyright/>
        </div>
    </div>
  )
}

export default Realtime