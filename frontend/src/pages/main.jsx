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
                    <div className='box1_title_bold'>토픽 베스트</div>
                    <div className='box1_title_light'>더보기{">"} </div>
                  </div>
                </div>
              </div>
              <div className='main_box4'>
                <div className='box2_title'>
                  <div className='box_info'>실시간 인기알바</div>
                  <div className='box_info_link'>더보기{">"}</div>
                </div>
                <div className='box4_content_container'>
                <div className='box4_content'>
                  <div className='box4_title'>카테고리별 <br/> 인기알바</div>
                </div>
                <div className='box4_content'>
                  <div className='box4_title'>카테고리별 <br/> 인기알바</div>
                </div>
                <div className='box4_content'>
                  <div className='box4_title'>카테고리별 <br/> 인기알바</div>
                </div>
                <div className='box4_content'>
                  <div className='box4_title'>카테고리별 <br/> 인기알바</div>
                </div>
                </div>
              </div>
              <div className='main_box2'>
                <div className='box2_title'>
                  <div className='box_info'>알바 리뷰</div>
                  <div className='box_info_link'>더보기{">"}</div>
                </div>
                <div className='box2_content_container'>
                  <div className='box2_content'>
                    <div className='box2_content_left'>
                      <h1>알바토크</h1>
                      <h3>경험담/알바썰</h3>
                      <button className='box2_button'>바로가기</button>
                    </div>
                    <div className='box2_content_right'></div>
                  </div>
                  <div className='box2_content'>
                    <div className='box2_content_left'>
                      <h1>알바리뷰</h1>
                      <h3>장단점 리뷰</h3>
                      <button className='box2_button'>바로가기</button>
                    </div>
                    <div className='box2_content_right'></div>
                  </div>
                </div>
              </div>
              <div className='main_box4'>
                <div className='box2_title'>
                  <div className='box_info'>채용 정보</div>
                  <div className='box_info_link'>더보기{">"}</div>
                </div>
                <div className='box4_content_container'>
                <div className='box4_content'>
                  <div className='box4_title'>인기채용</div>
                </div>
                <div className='box4_content'>
                  <div className='box4_title'>채용공고</div>
                </div>
                <div className='box4_content'>
                  <div className='box4_title'>최저임금 안내</div>
                </div>
                <div className='box4_content'>
                  <div className='box4_title'>공지사항</div>
                </div>
                </div>
              </div>
              <div className='main_copyRight'>
                <div className='copyRight_link'>
                  <a href="https://example.com">회사소개</a>
                  <div className='vertical_bar2'></div>
                  <a href="https://example.com">제휴안내</a>
                  <div className='vertical_bar2'></div>
                  <a href="https://example.com">광고안내</a>
                  <div className='vertical_bar2'></div>
                  <a href="https://example.com">이용약관</a>
                  <div className='vertical_bar2'></div>
                  <a href="https://example.com">개인정보처리방침</a>
                  <div className='vertical_bar2'></div>
                  <a href="https://example.com">청소년보호정책</a>
                </div>
                Copyright ⓒ 2024 - 2024 ALMO. All rights reserved.
              </div>
            </div>
        </div>
    </div>
  )
}

export default main