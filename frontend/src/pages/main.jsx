import React from 'react'
import NavBar from '../components/navBar.jsx';
import '../css/main.css';

const main = () => {

  return (
    <div className='main_background'>
        <NavBar/>
        <div className='main_content'>
            <div className='main_container'>
              <div className='main_box1'>
                <div className='box1_content'>
                  <div className='box1_title'>
                    <div>토픽 베스트</div>
                    <div>더보기</div>
                  </div>
                </div>
              </div>
              <div className='main_box2'>
                <div className='box2_content'>
                  <div className='box2_title'>카테고리별 <br/> 인기알바</div>
                </div>
                <div className='box2_content'>
                  <div className='box2_title'>카테고리별 <br/> 인기알바</div>
                </div>
                <div className='box2_content'>
                  <div className='box2_title'>카테고리별 <br/> 인기알바</div>
                </div>
                <div className='box2_content'>
                  <div className='box2_title'>카테고리별 <br/> 인기알바</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default main