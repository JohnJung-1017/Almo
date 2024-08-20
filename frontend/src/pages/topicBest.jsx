import React, { useState } from "react";
import NavBar from "../components/navBar.jsx";
import Copyright from "../components/copyright.jsx";
import PostList from "./PostList.jsx";
import "../css/topicBest.css";

const TopicBest = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <div className="main_content">
      <NavBar />
      <div className="main_content">
        {/* <PostList/> */}
        <div className="tb_container">
          <div className="tb_title">
            <h1 className="tb_title1">토픽 베스트</h1>
            <h3 className="tb_title2">실시간 토픽 베스트, 인기 카테고리</h3>
          </div>
          <div className="tb_box1">
            {[
              "토픽 베스트",
              "알바 썰",
              "진상 모음",
              "꿀알발 추천",
              "패션/브랜드",
              "중고거래",
              "게임/엔터테이먼트",
              "주식/코인",
              "연애/상담",
            ].map((topic, index) => (
              <button
                key={index}
                className={`tb_box1_button ${
                  activeButtonIndex === index ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {topic}
              </button>
            ))}
          </div>
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
        <Copyright />
      </div>
    </div>
  );
};

export default TopicBest;
