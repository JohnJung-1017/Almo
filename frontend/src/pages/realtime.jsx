import React from 'react'
import NavBar from '../components/navBar.jsx';
import Copyright from '../components/copyright.jsx';  
import '../css/realtime.css';

const Realtime = () => {
  return (
    <div className='main_content'> 
        <NavBar/>
          <div className='main_content'> 
              <div className='main_container'>
                <div className='main_box1'>
                  <div className='page_bigbox1'>
                    <div className='page_bigbox1_title'>실시간 인기알바
                      <div className='page_bigbox1_subtitle'>실시간 인기순위, 인기알바
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className = 'realtime_subbox'>
                      
                        <div className='realtime_content'>
                          <div className='box4_title'>카테고리별 <br/> 인기알바</div>
                        </div>
                        <div className='realtime_content'>
                          <div className='realtime_subbox_title'>카테고리별 <br/> 인기알바</div>
                        </div>
                      
                      </div>
                    </div>
                  <Copyright/>
                </div>
              </div>
  )
}

export default Realtime