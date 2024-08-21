import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navBar.css";
import { Icon } from "@iconify/react";
import Dropdown from "./dropdown";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 loginComplete의 값을 확인
    const loginStatus = localStorage.getItem("loginComplete");
    if (loginStatus) {
      setIsLoggedIn(true);
      setUsername(loginStatus); // loginComplete에 저장된 값을 사용자 이름으로 사용
    }
  }, []);

  const handleLogout = () => {
    // 로그아웃 로직: 로컬 스토리지의 모든 항목을 제거하고 상태를 업데이트
    localStorage.clear(); // localStorage에 저장된 모든 항목 삭제
    setIsLoggedIn(false);
    setUsername("");
    // 로그아웃 후 원하는 경로로 이동할 수 있습니다. 예: 홈으로 리디렉션
    navigate("/");
  };

  const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleSearch = () => {
      console.log("검색 텍스트 : ", searchText);
    };
    return (
      <div className="search_bar">
        <input
          className="search_input"
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
        <button onClick={handleSearch} className="search_button">
          <Icon icon="grommet-icons:search" width="30px" height="30px" />
        </button>
      </div>
    );
  };
  // const navigate = useNavigate();

  return (
    <div className="nav_background">
      <div className="nav_top">
        <div className="nav_title">
          <div className="nav_logo"></div>
          <div className="nav_name">
            <div className="nav_title_light">모든알바 모든리뷰</div>
            <div className="nav_title_bold">ALMO</div>
          </div>
          <div className="nav_search">
            <div className="search_bar">
              <SearchBar />
            </div>
          </div>
        </div>

        {isLoggedIn ? (
          <div className="nav_user">
            <span className="nav_welcome">{username}님 안녕하세요</span>
            <button onClick={handleLogout} className="logout_button">
              로그아웃
            </button>
          </div>
        ) : (
          <div className="nav_login">
            <Dropdown />
            <div className="vertical_bar1"></div>
            <Link className="sign_link" to={"/signIn"}>
              로그인
            </Link>
            <div className="vertical_bar1"></div>
            <Link className="sign_link" to={"/signUp"}>
              회원가입
            </Link>
          </div>
        )}
      </div>
      <div className="nav_bottom">
        <div className="menu_space"></div>
        <Link className="nav_menu" to={"/"}>
          홈
        </Link>
        <Link className="nav_menu" to={"/topicBest"}>
          토픽 베스트
        </Link>
        <Link className="nav_menu" to={"/realtime"}>
          실시간 인기 알바
        </Link>
        <Link className="nav_menu" to={"/review"}>
          알바 리뷰
        </Link>
        <Link className="nav_menu" to={"/recruit"}>
          채용 정보
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
