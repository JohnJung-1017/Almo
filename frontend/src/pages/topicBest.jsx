import React from "react";
import NavBar from "../components/navBar.jsx";
import Copyright from "../components/copyright.jsx";
import PostList from "./PostList.jsx";
import "../css/topicBest.css";

const TopicBest = () => {
  return (
    <div className="main_content">
      <NavBar />
      <div className="main_content">
        {/* <PostList/> */}
        <div className="tb_container">
          <div className="tb_title">토픽베스트</div>
          <div className="tb_box1">
            <button className="tb_box1_button">토픽 베스트</button>
            <button className="tb_box1_button">토픽 A</button>
            <button className="tb_box1_button">토픽 B</button>
            <button className="tb_box1_button">토픽 C</button>
            <button className="tb_box1_button">토픽 D</button>
            <button className="tb_box1_button">토픽 E</button>
            <button className="tb_box1_button">토픽 F</button>
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
