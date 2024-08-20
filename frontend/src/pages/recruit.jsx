import React from "react";
import NavBar from "../components/navBar.jsx";
import Copyright from "../components/copyright.jsx";
import "../css/recruit.css";

const Recruit = () => {
  return (
    <div className="main_background">
      <NavBar />
      <div className="main_content">
        <div className="recruit_container">
          <div className="recruit_title">
            <h1 className="recruit_title1">채용정보</h1>
            <h3 className="recruit_title2">세상 모든 구인,구직!</h3>
          </div>
          <div className="recruit_box1">
            <form id="searchForm">
              <label for="wage">시급:</label>
              <select name="wage" id="wage">
                <option value="">선택하세요</option>
                <option value="8000">8000원 이상</option>
                <option value="10000">10000원 이상</option>
                <option value="12000">12000원 이상</option>
              </select>

              <label for="location">지역:</label>
              <select name="location" id="location">
                <option value="">선택하세요</option>
                <option value="seoul">서울</option>
                <option value="busan">부산</option>
                <option value="daegu">대구</option>
              </select>

              <label for="day">요일:</label>
              <select name="day" id="day">
                <option value="">선택하세요</option>
                <option value="monday">월요일</option>
                <option value="tuesday">화요일</option>
                <option value="wednesday">수요일</option>
              </select>

              <label for="time">시간대:</label>
              <select name="time" id="time">
                <option value="">선택하세요</option>
                <option value="morning">오전</option>
                <option value="afternoon">오후</option>
                <option value="evening">저녁</option>
              </select>

              <label for="category">카테고리:</label>
              <select name="category" id="category">
                <option value="">선택하세요</option>
                <option value="food">음식</option>
                <option value="retail">소매</option>
                <option value="service">서비스</option>
              </select>

              <button type="button" id="searchButton">
                검색
              </button>
            </form>
          </div>
          <div className="recruit_box2">
            <div className="tb_box2">
              <div className="tb_box2_grid">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="tb_box2_grid_item">
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="tb_box2_page">
                <div>여기에 페이지 버튼</div>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Recruit;
