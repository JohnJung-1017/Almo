import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navBar.css';
import { Icon } from '@iconify/react';
import Dropdown from './dropdown';

function NavBar() {

  const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleSearch = () => {
      console.log('검색 텍스트 : ', searchText);
    };
    return (
      <div className='search_bar'>
        <input
          className='search_input'
          type='text'
          value={searchText}
          onChange={handleInputChange}
          placeholder='검색어를 입력하세요'
        />
        <button onClick={handleSearch} className='search_button'>
          <Icon icon="grommet-icons:search" width="30px" height="30px"  />
        </button>
      </div>
    );
  };
    // const navigate = useNavigate();
     
  return (
    <div className='nav_background'>
        <div className='nav_top'>
            <div className='nav_title'>
              <div className='nav_logo'></div>
              <div className='nav_name'>
                <div className='nav_title_light'>모든알바 모든리뷰</div>
                <div className='nav_title_bold'>ALMO</div>
              </div>
              <div className='nav_search'>
                <div className='search_bar'>
                  <SearchBar/>
                </div>
              </div>
            </div>
            <div className='nav_login'>
              <Dropdown/>
              <div className='vertical_bar'></div>
              <div onClick={null} className='signIn'>로그인</div>
              <div className='vertical_bar'></div>
              <div onClick={null} className='signUp'>회원가입</div>
            </div>
        </div>
        <div className='nav_bottom'>
          <div className='menu_space'></div>
            <Link className='nav_menu' to={'/'}>홈</Link>
            <Link className='nav_menu' to={'/realtime'}>실시간 인기 알바</Link>
            <Link className='nav_menu' to={'/review'}>알바 리뷰</Link>
            <Link className='nav_menu' to={'/recruit'}>채용 정보</Link>
            <Link className='nav_menu' to={'/support'}>고객 지원</Link>
            <div className='upload'>글쓰기</div>
        </div>
    </div>
  )
};

export default NavBar